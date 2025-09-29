export default {
  mounted(el: unknown, binding?: { modifiers?: Record<string, boolean> }) {
    // Structural types for the operations we need on the element/observer.
    interface ElementLike {
      classList?: { add(...t: string[]): void; remove(...t: string[]): void }
      querySelector?: (sel: string) => unknown
    }

    interface ImgLike {
      addEventListener?: (ev: string, fn: () => void) => void
      removeEventListener?: (ev: string, fn: () => void) => void
      src?: string
      getAttribute?: (n: string) => string | null
    }

    interface IOObserverLike {
      observe: (t: unknown) => void
      unobserve: (t: unknown) => void
    }

    // Constructor signature for IntersectionObserver-like objects.
    type IOConstructor = new (
      cb: (entries: unknown, observer: IOObserverLike) => void,
      opts?: { root: unknown | null; threshold?: number },
    ) => IOObserverLike

    const elNode = el as ElementLike
    const isSelf = !!(binding && binding.modifiers && binding.modifiers.self)

    if (isSelf) elNode.classList?.add('opacity-0')

    const display = () => {
      if (isSelf) {
        elNode.classList?.remove('opacity-0')
        return
      }

      const img = elNode.querySelector ? (elNode.querySelector('img') as ImgLike | null) : null

      if (img) {
        const onLoad = () => {
          // small delay to allow CSS transition
          globalThis.setTimeout(() => {
            try {
              // best-effort: only call remove if classList is present
              ;(img as unknown as { classList?: { remove?: (s: string) => void } }).classList?.remove?.('opacity-0')
            } catch {
              /* ignore */
            }
          }, 200)
          img.removeEventListener?.('load', onLoad)
        }
        img.addEventListener?.('load', onLoad)
        const url = img.getAttribute ? img.getAttribute('data-url') : null
        if (url && !img.src) img.src = url
      } else {
        elNode.classList?.add('opacity-0')
      }
    }

    const handleIntersect = (entries: unknown, observer: IOObserverLike) => {
      // entries is typically an array-like of objects with `isIntersecting`
      const list = entries as { isIntersecting?: boolean }[]
      for (const entry of list) {
        if (entry.isIntersecting) {
          display()
          observer.unobserve(el)
        }
      }
    }

    const createObserver = () => {
      const options = { root: null, threshold: 0 }
      const IO = (globalThis as unknown as { IntersectionObserver?: IOConstructor }).IntersectionObserver
      if (!IO) return display()
      const observer = new IO(handleIntersect, options)
      observer.observe(el)
    }

    // feature detect via globalThis so linters don't complain about unknown globals
    if ((globalThis as unknown as { IntersectionObserver?: IOConstructor }).IntersectionObserver) {
      createObserver()
    } else {
      display()
    }
  },
}
