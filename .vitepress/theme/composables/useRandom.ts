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
    if (maxItems <= 0 || shuffledItems.value.length <= maxItems) return

    // Find items not currently displayed
    const availableItems = shuffledItems.value.filter((item) => !randomItems.value.includes(item))
    if (availableItems.length === 0) return

    // Pick a random available item
    const randomAvailableItem = availableItems[Math.floor(Math.random() * availableItems.length)]

    // Pick a random position to replace, avoiding the last changed position if possible
    let randomIndex = Math.floor(Math.random() * maxItems)
    if (randomIndex === lastChangedIndex.value && maxItems > 1) {
      randomIndex = (randomIndex + 1) % maxItems
    }

    // Replace the item at the random position
    lastChangedIndex.value = randomIndex
    randomItems.value[randomIndex] = randomAvailableItem
  }

  return { update, lastChangedIndex, items: randomItems }
}
