// Import data
import signsList from '../../data/signsList.js'

// Select DOM elements
const elSignsHolder = document.querySelector('#signs-holder')
const elQuestionTitle = document.querySelector('#question-title')
const elTime = document.querySelector('#time')

// Question Levels
const easy = 21
const medium = 35
const hard = 56
let questionLevel = easy // Bu vaqtinchali. Select'ning value'sidan olinadi asli

// Random Questions Array - Ishlatilgan savollar
let randomQuestionsArr = []


// Create element on DOMContentLoaded
window.addEventListener('DOMContentLoaded', launch)


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
  randomQuestionsArr = limitedArr
  
  setNextQuestion(randomQuestionsArr)
  // const randomNum = randomNumGenerator(randomQuestionsArr)
  // elQuestionTitle.textContent = randomQuestionsArr[randomNum].question
  
  randomQuestionsArr.forEach(item => {
    const elButton = document.createElement('button')
    const elImg = document.createElement('img')
    elButton.setAttribute('class', 'sign__btn')
    elButton.id = item.id
    elImg.setAttribute('src', `${item.img}`)
    elButton.append(elImg)
    elSignsHolder.append(elButton)
    getBtn(elButton)
    // checkAnswer(randomQuestionsArr, randomNum, elButton)
  })
}

// Check Answer
function checkAnswer(array, index) {
  btn.addEventListener('click', () => {
    // console.log(array, 'btn.addListn-index:'+index)
    // console.log(`array[index].id`+array[index].id, `btn.id:`+btn.id)
    if (array[index].id === btn.id) {
      array.splice(index, 1)
      setNextQuestion(array)
      
      btn.classList.add('correct')
      btn.disabled = true
      setTimeout(() => btn.style = 'opacity: 0.4; cursor: not-allowed;', 2000)// style -> class'ga o'tkazish kk
    } else {
      btn.classList.add('wrong')
      setTimeout(() => btn.classList.remove('wrong'), 2000)
    }
  })
}

// Next Question
function setNextQuestion(array, btn) {// id
  let randomNum = randomNumGenerator(array)
  elQuestionTitle.textContent = array[randomNum].question
  checkAnswer(array, randomNum)
  // console.log(array[randomNum].question, ' Arr RandomNum')

  // btn.addEventListener('click', () => {
  //   console.log(randomNum+' addEventListener randomNum')
  //   randomNum = randomNumGenerator(array)
  //   elQuestionTitle.textContent = array[randomNum].question
  //   checkAnswer(array, randomNum, btn)
  //   console.log(array, randomNum, btn)
  // })
  // console.log(randomNum, 'randomNum')
  // console.log(array.length, 'length')
  // console.log(array, 'index:'+index)
}





// Launcher Function
function launch() {
  const lvl = getQuestionLevel(questionLevel)
  createrElement(signsList, lvl)
}