import { ref } from 'vue'

export interface UseRandomProps<Data = unknown> {
  initItems: Data[]
  maxItems: number
}

export function useRandomItems<Data = unknown>({ initItems, maxItems }: UseRandomProps<Data>) {
  const randomItems = ref<Data[]>([])
  const shuffledItems = ref<Data[]>([])
  const lastChangedIndex = ref<number>(-1)

  shuffledItems.value = initItems
  randomItems.value = initItems.sort(() => 0.5 - Math.random()).slice(0, maxItems)

  function update() {
    if (maxItems <= 0) return
    if (shuffledItems.value.length <= maxItems) return

    shuffledItems.value = shuffledItems.value.sort(() => 0.5 - Math.random())
    let shuffledIndex = -1
    for (let i = 0; i < shuffledItems.value.length; i++) {
      if (randomItems.value.includes(shuffledItems.value[i])) continue
      shuffledIndex = i
      break
    }
    if (shuffledIndex === -1) return

    let randomIndex = Math.floor(Math.random() * maxItems)
    if (randomIndex === lastChangedIndex.value) randomIndex += 1
    if (randomIndex >= maxItems) randomIndex = 0

    lastChangedIndex.value = randomIndex
    randomItems.value[randomIndex] = shuffledItems.value[shuffledIndex]
  }

  return { update, lastChangedIndex, items: randomItems }
}
