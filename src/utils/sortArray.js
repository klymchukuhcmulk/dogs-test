export const shuffleArray = (array) => array.sort(() => Math.random() - 0.5)

export const alphabetSortArray = (array) => [...array].sort((a, b) => {
  if (a.key < b.key) { return -1 }
  if (a.key > b.key) { return 1 }
  return 0
})
