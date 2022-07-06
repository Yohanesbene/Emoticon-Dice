const username = document.getElementById("username")
const registerForm = document.getElementById("registerForm")
const logoutForm = document.getElementById("logout")
const heroSection = document.getElementById("hero")
const startSection = document.getElementById("start")
const rewardSection = document.getElementById("reward")
const profile = document.getElementById("profile")
const box1 = document.getElementById("box1")
const box2 = document.getElementById("box2")
const box3 = document.getElementById("box3")
const box4 = document.getElementById("box4")
const box5 = document.getElementById("box5")
const startBeginner = document.getElementById("startBeginner")
const startIntermediate = document.getElementById("startIntermediate")
const startHard = document.getElementById("startHard")
const rewardImage = document.getElementById("imgReward")

const player = new Player()
let default_option = ["😂", "🤣", "😍", "😎", "😊"]
box1.textContent = default_option[0]
box2.textContent = default_option[1]
box3.textContent = default_option[2]
box4.textContent = default_option[3]
box5.textContent = default_option[4]

function dice() {
  let random = []
  for (let i = 0; i < default_option.length; i++) {
    const randomize = default_option[~~(Math.random() * default_option.length)]
    random.push(randomize)
  }
  return random
}

function reward() {
  fetch("https://zoo-animal-api.herokuapp.com/animals/rand")
    .then((x) => x.json())
    .then((result) => {
      // set nama hadiah
      let text = document.createElement("h1")
      text.textContent = result.name

      // set gambar hadiah
      let img = new Image(200, 200)
      img.src = result.image_link

      // set element
      rewardImage.appendChild(img)
      rewardImage.appendChild(text)
    })
}

function winnerBeginner(boxResult) {
  if (boxResult[0] == boxResult[1] && boxResult[0] == boxResult[2]) {
    startSection.style.display = "none"
    rewardSection.style.display = "block"
    reward()
    // location.href = "#reward"
  } else {
    console.log("lose")
  }
}

function winnerIntermediate(boxResult) {
  if (
    boxResult[0] == boxResult[1] &&
    boxResult[0] == boxResult[2] &&
    boxResult[1] == boxResult[3]
  ) {
    startSection.style.display = "none"
    rewardSection.style.display = "block"
    reward()
    // location.href = "#reward"
  } else {
    console.log("lose")
  }
}

function winnerHard(boxResult) {
  if (
    boxResult[0] == boxResult[1] &&
    boxResult[0] == boxResult[2] &&
    boxResult[1] == boxResult[3] &&
    boxResult[1] == boxResult[4]
  ) {
    startSection.style.display = "none"
    rewardSection.style.display = "block"
    reward()
    // location.href = "#reward"
  } else {
    console.log("lose")
  }
}

function beginner() {
  box1.style.display = "block"
  box2.style.display = "block"
  box3.style.display = "block"
  box4.style.display = "none"
  box5.style.display = "none"
  startBeginner.style.display = "block"
  startIntermediate.style.display = "none"
  startHard.style.display = "none"
}

function intermediate() {
  box1.style.display = "block"
  box2.style.display = "block"
  box3.style.display = "block"
  box4.style.display = "block"
  box5.style.display = "none"
  startIntermediate.style.display = "block"
  startBeginner.style.display = "none"
  startHard.style.display = "none"
}

function hard() {
  box1.style.display = "block"
  box2.style.display = "block"
  box3.style.display = "block"
  box4.style.display = "block"
  box5.style.display = "block"
  startIntermediate.style.display = "none"
  startBeginner.style.display = "none"
  startHard.style.display = "block"
}

function beginnerLevelStart() {
  const rolling = setInterval(function () {
    const result = dice()
    box1.textContent = result[0]
    box2.textContent = result[1]
    box3.textContent = result[2]
  }, 100)

  setTimeout(function () {
    clearInterval(rolling)
    const resultDice = [box1.textContent, box2.textContent, box3.textContent]
    winnerBeginner(resultDice)
  }, 3000)
}

function intermediateLevelStart() {
  const rolling = setInterval(function () {
    const result = dice()
    box1.textContent = result[0]
    box2.textContent = result[1]
    box3.textContent = result[2]
    box4.textContent = result[3]
  }, 70)

  setTimeout(function () {
    clearInterval(rolling)
    const resultDice = [
      box1.textContent,
      box2.textContent,
      box3.textContent,
      box4.textContent,
    ]
    winnerIntermediate(resultDice)
  }, 2500)
}

function hardLevelStart() {
  const rolling = setInterval(function () {
    const result = dice()
    box1.textContent = result[0]
    box2.textContent = result[1]
    box3.textContent = result[2]
    box4.textContent = result[3]
    box5.textContent = result[4]
  }, 70)

  setTimeout(function () {
    clearInterval(rolling)
    const resultDice = [
      box1.textContent,
      box2.textContent,
      box3.textContent,
      box4.textContent,
      box5.textContent,
    ]
    winnerHard(resultDice)
  }, 2500)
}

onload = () => {
  const token = sessionStorage.getItem("token")

  if (token && token != null) {
    registerForm.style.display = "none"
    heroSection.style.display = "none"
    logoutForm.style.display = "block"
    startSection.style.display = "block"
    rewardSection.style.display = "none"
  } else {
    profile.style.display = "none"
    registerForm.style.display = "block"
    logoutForm.style.display = "none"
    startSection.style.display = "none"
    rewardSection.style.display = "none"
  }
}

const register = () => {
  if (username.value != "") {
    player.username = username.value
    player.register
  } else {
    console.error("Username harus diinput terlebih dahulu")
  }
}

const logout = () => {
  player.logout
}
