// Import data
// import signsList from '../data/signsList.js'

// Import qilinsa ishlamayapti
const signsList = [
  {
    id: 1,
    img: 'http://uzavtoyolbelgi.uz/uploads/store/product/a8caf81b9eeee75855b0131ead902470.gif',
    question: `1.1 Shlagbaumli temir yo'l kesishmasi`,
  },
  {
    id: 2,
    img: 'http://uzavtoyolbelgi.uz/uploads/store/product/e83b727d9af45b28716a71c93d6074d5.gif',
    question: `1.2 Shlagbaumsiz temir yo’l kesishmasi`,
  },
  {
    id: 3,
    img: 'http://uzavtoyolbelgi.uz/uploads/store/product/80b8391df4387c020926f01683b1aab6.png',
    question: `1.3. Diqqat "UZP"`,
  },
  {
    id: 4,
    img: 'http://uzavtoyolbelgi.uz/uploads/store/product/ebe823d34b7af01006e43750e938056d.gif',
    question: `1.3.1 Bir izli temir yo’l`,
  },
  {
    id: 5,
    img: 'http://uzavtoyolbelgi.uz/uploads/store/product/586f5b40660520d788fb029af5b78f84.gif',
    question: `1.3.2 Ko’p izli temir yo’l`,
  },
  {
    id: 6,
    img: 'http://uzavtoyolbelgi.uz/uploads/store/product/546dba3eb922f17c7dedde4c3ad1d9ff.gif',
    question: `1.4.1 Temir yo’l kesishmasining yaqinligi haqida ogohlantirish`,
  },
  {
    id: 7,
    img: 'http://uzavtoyolbelgi.uz/uploads/store/product/bc8f8547be20d4544f6593fa8b608bfe.gif',
    question: `1.4.2 Temir yo’l kesishmasining yaqinligi haqida ogohlantirish`,
  },
  {
    id: 8,
    img: 'http://uzavtoyolbelgi.uz/uploads/store/product/fa415321a4afbf525686dd5e9383d786.gif',
    question: `1.4.3 Temir yo’l kesishmasining yaqinligi haqida ogohlantirish`,
  },
  {
    id: 9,
    img: 'http://uzavtoyolbelgi.uz/uploads/store/product/2b0b7f5fadeff1fa97bd2631773a8c0b.gif',
    question: `1.4.4 Temir yo’l kesishmasining yaqinligi haqida ogohlantirish`,
  },
  {
    id: 10,
    img: 'http://uzavtoyolbelgi.uz/uploads/store/product/834198bb4620263bc12326c160e067c2.gif',
    question: `1.4.5 Temir yo’l kesishmasining yaqinligi haqida ogohlantirish`,
  },
  {
    id: 11,
    img: 'http://uzavtoyolbelgi.uz/uploads/store/product/a40d8b3056ec1c41ab3bc8b63659b5ce.gif',
    question: `1.4.6 Temir yo’l kesishmasining yaqinligi haqida ogohlantirish`,
  },
  {
    id: 12,
    img: 'http://uzavtoyolbelgi.uz/uploads/store/product/f99f4262ec68a79fd72fe2d60938ed5e.gif',
    question: `1.5 Tramvay yo’li bilan kesishuv`,
  },
  {
    id: 13,
    img: 'http://uzavtoyolbelgi.uz/uploads/store/product/f23606dbe3369a1351da77ecbd8b9c01.gif',
    question: `1.6 Teng ahamiyatli yo’llar kesishuvi`,
  },
  {
    id: 14,
    img: 'http://uzavtoyolbelgi.uz/uploads/store/product/c1314181b59e575342e61ed95ff3fcef.gif',
    question: `1.7 Aylanma harakatlanish bilan kesishuv`,
  },
  {
    id: 15,
    img: 'http://uzavtoyolbelgi.uz/uploads/store/product/51f502cbd2f70dfdaa492969bd49e10b.gif',
    question: `1.8 Svetofor tartibga soladi`,
  },
  {
    id: 16,
    img: 'http://uzavtoyolbelgi.uz/uploads/store/product/6744e6eefc43a73926d39931a44efb42.gif',
    question: `1.9 Ko’tarma ko’prik`,
  },
  {
    id: 17,
    img: 'http://uzavtoyolbelgi.uz/uploads/store/product/6fe4a1e22515c6e14dca99afec2b752d.gif',
    question: `1.10 Sohilga chiqish`,
  },
  {
    id: 18,
    img: 'http://uzavtoyolbelgi.uz/uploads/store/product/6a3a8414f98723a65fc87ce1803a7796.png',
    question: `1.11.1 Xavfli burilish`,
  },
  {
    id: 19,
    img: 'http://uzavtoyolbelgi.uz/uploads/store/product/77896ea86da4cc353f60ede6908340cd.png',
    question: `1.11.2 Xavfli burilish`,
  },
  {
    id: 20,
    img: 'http://uzavtoyolbelgi.uz/uploads/store/product/b3320d03b55fcd62b1d9764df1685339.png',
    question: `1.12.1 Xavfli burilishlar`,
  },
  {
    id: 21,
    img: 'http://uzavtoyolbelgi.uz/uploads/store/product/a3e14a14d45d40fe870b9b6079be1c04.png',
    question: `1.12.2 Xavfli burilishlar`,
  },
  // { Rasm ochilmadi
  //   id: 22,
  //   img: 'http://uzavtoyolbelgi.uz/uploads/store/product/2ead5d35f4ec51c131ae15888d40c73e.gif',
  //   question: `1.13 Tik nishablik`,
  // },
  // { Rasm ochilmadi 404
  //   id: 23,
  //   img: 'http://uzavtoyolbelgi.uz/uploads/store/product/d09a1cc559f695559254802cdad793fc.gif',
  //   question: `1.14 Tik balandlik`,
  // },
  {
    id: 24,
    img: 'http://uzavtoyolbelgi.uz/uploads/store/product/d4f511d4f579c77de8cdacf4cfc152bb.gif',
    question: `1.15 Sirpanchiq yo’l`,
  },
  {
    id: 25,
    img: 'http://uzavtoyolbelgi.uz/uploads/store/product/8c8cad81a9c5efcbef38ca8afe375275.gif',
    question: `1.16 Notekis yo’l`,
  },
  {
    id: 26,
    img: 'http://uzavtoyolbelgi.uz/uploads/store/product/d477c601327c81ff1cfc0271fe6fbca4.gif',
    question: `1.17 Tosh otilish xavfi`,
  },
  {
    id: 27,
    img: 'http://uzavtoyolbelgi.uz/uploads/store/product/78cb48b16e831406507b4ec05e432a2f.gif',
    question: `1.18.1 Yo’lning torayishi`,
  },
  {
    id: 28,
    img: 'http://uzavtoyolbelgi.uz/uploads/store/product/c869672cba84d6bcfad97406925e10ea.gif',
    question: `1.18.2 Yo’lning torayishi`,
  },
  {
    id: 29,
    img: 'http://uzavtoyolbelgi.uz/uploads/store/product/984c9999a26162645d2d3fa4566d7e98.gif',
    question: `1.18.3 Yo’lning torayishi`,
  },
  {
    id: 30,
    img: 'http://uzavtoyolbelgi.uz/uploads/store/product/c32aa75e2f2e33c313afe4feb3f86195.gif',
    question: `1.19 Ikki tomonlama harakatlanish`,
  },
  {
    id: 31,
    img: 'http://uzavtoyolbelgi.uz/uploads/store/product/e6fcea8ed20a3f1aebaffa7517c0a1d2.gif',
    question: `1.20 Piyodalar o’tish joyi`,
  },
  {
    id: 32,
    img: 'http://uzavtoyolbelgi.uz/uploads/store/product/c6335fc95c5da31d0e73feda98987326.gif',
    question: `1.21 Bolalar`,
  },
  {
    id: 33,
    img: 'http://uzavtoyolbelgi.uz/uploads/store/product/75db9cf5eb8ecbe1fd0607c2fff944a2.gif',
    question: `1.22 Velosiped yo’lkasi bilan kesishuv`,
  },
  {
    id: 34,
    img: 'http://uzavtoyolbelgi.uz/uploads/store/product/6c2d637625e1da0415e9d33a3cd15533.gif',
    question: `1.23 Ta’mirlash ishlari`,
  },
  {
    id: 35,
    img: 'http://uzavtoyolbelgi.uz/uploads/store/product/d7f21ef20287bed9d36c7d75e1d5b79f.gif',
    question: `1.24 Mol haydab o’tish`,
  },
  {
    id: 36,
    img: 'http://uzavtoyolbelgi.uz/uploads/store/product/63ad8057ae1de8a130ef5ca252add9e4.gif',
    question: `1.25 Yovvoyi hayvonlar`,
  },
  {
    id: 37,
    img: 'http://uzavtoyolbelgi.uz/uploads/store/product/bbb241133dc8470e6648efbaa4b9b8cc.gif',
    question: `1.26 Toshlar tushishi`,
  },
  {
    id: 38,
    img: 'http://uzavtoyolbelgi.uz/uploads/store/product/c2d4d10d4a6f44006ee79bfe5c28a549.gif',
    question: `1.27 Yonlama shamol`,
  },
  {
    id: 39,
    img: 'http://uzavtoyolbelgi.uz/uploads/store/product/27004a8f064cd6a9580e8d1b9a9a3e80.gif',
    question: `1.28 Pastlab uchuvchi samolyotlar`,
  },
  {
    id: 40,
    img: 'http://uzavtoyolbelgi.uz/uploads/store/product/b3279666e83799c66f6b8bcf7350a26c.gif',
    question: `1.29 Tonnel`,
  },
  {
    id: 41,
    img: 'http://uzavtoyolbelgi.uz/uploads/store/product/6e044eb4c65fd2cc1ac86f1add7e7a10.gif',
    question: `1.30 Boshqa xavf-xatar`,
  },
  {
    id: 42,
    img: 'http://uzavtoyolbelgi.uz/uploads/store/product/7f642fdc08febbb9acdabe97010fc33a.png',
    question: `1.31 Sun'iy yo'l notekisliklari`,
  },
  {
    id: 43,
    img: 'http://uzavtoyolbelgi.uz/uploads/store/product/16ef147c04b1efca255291fe74ca61b7.gif',
    question: `1.31.1 Burilishning yo’nalishi`,
  },
  {
    id: 44,
    img: 'http://uzavtoyolbelgi.uz/uploads/store/product/593cd4c651b191ce9babe56e381a97e0.gif',
    question: `1.31.2 Burilishning yo’nalishi`,
  },
  {
    id: 45,
    img: 'http://uzavtoyolbelgi.uz/uploads/store/product/ed52d0c9310caed44750df77497c7413.gif',
    question: `1.31.3 Burilishning yo’nalishi`,
  },
  {
    id: 46,
    img: 'http://uzavtoyolbelgi.uz/uploads/store/product/652fe11a16ae7fd2491b1a7589d28773.gif',
    question: `1.32 Tirbandlik`,
  },
  {
    id: 47,
    img: 'http://uzavtoyolbelgi.uz/uploads/store/product/af19556297023cbecc8f964b11c62bf1.gif',
    question: `2.1. Asosiy yo’l`,
  },
  {
    id: 48,
    img: 'http://uzavtoyolbelgi.uz/uploads/store/product/3c4a19cf6f5cab3089bcf4cf26cf7b75.gif',
    question: `2.2. Asosiy yo’lning oxiri`,
  },
  {
    id: 49,
    img: 'http://uzavtoyolbelgi.uz/uploads/store/product/067ec4c9384f29bf10ce2e57ddae8aaa.png',
    question: `2.3.1. Ikkinchi darajali yo’l bilan kesishuv`,
  },
  {
    id: 50,
    img: 'http://uzavtoyolbelgi.uz/uploads/store/product/b96402005ae7dda06667166c5361217c.png',
    question: `2.3.2 – tutashuv o’ngdan`,
  },
  {
    id: 51,
    img: 'http://uzavtoyolbelgi.uz/uploads/store/product/8150dc2d380518ebe1ec01103b7f75f8.png',
    question: `2.3.3 – tutashuv chapdan`,
  },
  {
    id: 52,
    img: 'http://uzavtoyolbelgi.uz/uploads/store/product/b8f8cfa8ec28abff0208eecf130b1df2.gif',
    question: `2.4 Yo’l bering`,
  },
  {
    id: 53,
    img: 'http://uzavtoyolbelgi.uz/uploads/store/product/0e37af0ce40967f045f243d800743850.gif',
    question: `2.5 To’xtamasdan harakatlanish taqiqlangan`,
  },
  {
    id: 54,
    img: 'http://uzavtoyolbelgi.uz/uploads/store/product/d65a3509fbf588adcdb715f98b4ea5ad.gif',
    question: `2.6 Ro’para harakatlanishning ustunligi`,
  },
  {
    id: 55,
    img: 'http://uzavtoyolbelgi.uz/uploads/store/product/63148eca2345abd5eb1c047ac4b0fb51.gif',
    question: `2.7 Ro’paradagi harakatlanishga nisbatan imtiyoz`,
  },
  // {
  //   id: ,
  //   img: '',
  //   question: ``,
  // },

]


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
// Question random index
const questionRandomIndexArr = []
let questionRandomIndex


// Create element on DOMContentLoaded
window.addEventListener('DOMContentLoaded', launch)


// Random Number Generator
function randomNumGenerator(limit) {
  return Math.random() * limit
}

// Shuffle Array
async function shuffleArray(array) {
  return await array.sort(() => 0.5 - Math.random())
}

// Questions Limit
async function questionsLimit(array, quesLvl) {
  const shuffledArr = await shuffleArray(array)
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
  else { // ELSE holati yozilishining sababi Brauzer'dan select>option'ni o'zgartirib qo'yilishi mumkinligi !!!
    alert('Dasturda xatolik yuzaga keldi. Iltimos dasturni qayta yuklang')
    return location.replace('../complexityPage.html')
  }
}


// Create Element
async function createrElement(signsList, quesLvl) {
  const limitedArr = await questionsLimit(signsList, quesLvl)
  const arrLength = limitedArr.length - 1
  const randomNum = randomNumGenerator(arrLength).toFixed(0)
  questionRandomIndexArr.push(randomNum)

  elQuestionTitle.textContent = await limitedArr[randomNum].question
  checkAnswer(limitedArr, randomNum)

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
async function checkAnswer(array, index) {
  const keraksiz = await elSignsHolder.querySelectorAll('button[data-answer]')// Bu qatordagi kod bo'masa DOM'dagi button'lar bosilmayapti
  const elAnswerBtn = await document.querySelectorAll('button')
  const elAnswerId = array[index].id

  elAnswerBtn.forEach(btn => {
    const elAnswerBtnId = btn.id
    btn.addEventListener('click', () => {
      if (elAnswerId === +elAnswerBtnId) {
        btn.classList.add('correct')
        btn.disabled = true
        setTimeout(() => btn.style = 'opacity: 0.4; cursor: not-allowed;', 3000)
        // Next Question
        setNextQuestion(array, index)
      } else {
        btn.classList.add('wrong')
        setTimeout(() => btn.classList.remove('wrong'), 3000)
      }
    })
  })
}

// Next Question
function setNextQuestion(array, index) {
  const randomNum = randomNumGenerator(array.length).toFixed(0)
  questionRandomIndexArr.forEach(i => {
    if (randomNum !== i) {
      checkAnswer(array, randomNum)
      elQuestionTitle.textContent = array[randomNum]?.question
      // console.log(`array:${array} / randomNum:${randomNum} / ${array[randomNum]}`)
    }
  })
  // console.log(array, index)
  // console.log(questionRandomIndexArr)
}


// Launcher Function
function launch() {
  const lvl = getQuestionLevel(questionLevel)
  createrElement(signsList, lvl)
}
