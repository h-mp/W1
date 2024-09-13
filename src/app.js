const readLine = require('node:readline')

const scanner = readLine.createInterface({
  input: process.stdin,
  output: process.stdout
})

scanner.question('Write a word ', word => {
  let userInput = ''
  const wordBackwards = []
  let vowelSum = 0
  userInput = word
  let indexMathRandom = Math.random() * userInput.length()

  for (let i = 0; i < userInput.length; i++) {
    const currentLetter = userInput.charAt(i)

    if (currentLetter === 'a' || currentLetter === 'e' || currentLetter === 'o' || currentLetter === 'u' || currentLetter === 'i' || currentLetter === 'y') {
      vowelSum++
    }

    wordBackwards.unshift(currentLetter)
  }

  const modifiedWord = wordBackwards.join('')

  

  console.log('The word backwards is: ' + modifiedWord)
  console.log('Sum of vowels in the word: ' + vowelSum)
  scanner.close()
})
