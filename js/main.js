// Import data
// import siteLanguages from '../data/language.js'
import signsList from '../../data/signsList.js'

// Select DOM elements
const elSignsHolder = document.querySelector('#signs-holder')
const elQuestionTitle = document.querySelector('#question-title')
const elTime = document.querySelector('#time')

// Question Levels
const easy = 21
const medium = 35
const hard = 56
let questionLevel = easy

// Random Questions Array
let randomQuestionsArr = []



// Random Number Generator
function randomNumGenerator(limit) {
  return (Math.random() * (limit.length-1)).toFixed(0)
}

// Shuffle Array
function shuffleArray(array) {
  return array.sort(() => 0.5 - Math.random())
}

// Questions Limit
function questionsLimit(array, quesLvl) {
  const shuffledArr = shuffleArray(array)
  return shuffledArr.slice(0, quesLvl)
}

// Question Level
function getQuestionLevel(lvl) {
  if (lvl === easy)
    return easy
  else if (lvl === medium)
    return medium
  else if (lvl === hard)
    return hard
  else {
    alert('Dasturda xatolik yuzaga keldi. Iltimos dasturni qayta yuklang')
    return location.replace('../complexityPage.html')
  }
}

// Create Element
function createrElement(signsList, quesLvl) {
  const limitedArr = questionsLimit(signsList, quesLvl)

  const randomNum = randomNumGenerator(limitedArr)
  elQuestionTitle.textContent = limitedArr[randomNum].question

  limitedArr.forEach(item => {
    const elButton = document.createElement('button')
    const elImg = document.createElement('img')
    elButton.setAttribute('class', 'sign__btn')
    elButton.id = item.id
    elImg.setAttribute('src', `${item.img}`)
    elButton.append(elImg)
    elSignsHolder.append(elButton)
  })
}


// Check Answer
function checkAnswer(array, index) {

}


// Launcher Function
function launch() {
  const lvl = getQuestionLevel(questionLevel)
  createrElement(signsList, lvl)
}

// Create element on DOMContentLoaded
window.addEventListener('DOMContentLoaded', launch)