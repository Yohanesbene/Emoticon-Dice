class Player {
  constructor() {
    this._username = ""
  }

  generateToken() {
    const random = ~~[Math.random() * 10000]
    const token = this.username + random.toString()
    return token
  }

  // setter
  set username(_username) {
    return (this._username = _username)
  }

  // getter
  get username() {
    return this._username
  }

  get register() {
    sessionStorage.setItem("token", this.generateToken())
    registerForm.style.display = "none"
    heroSection.style.display = "none"
    box1.style.display = "none"
    box2.style.display = "none"
    box3.style.display = "none"
    box4.style.display = "none"
    box5.style.display = "none"
    startBeginner.style.display = "none"
    startIntermediate.style.display = "none"
    startHard.style.display = "none"
    logoutForm.style.display = "block"
    startSection.style.display = "block"
    profile.style.display = "block"
    let profileName = document.createElement("h1")
    profileName.textContent = `Welcome ${this.username}`
    profileName.style.fontSize = "50px"

    let question = document.createElement("p")
    question.textContent = "Choose your level below"
    question.style.textAlign = "center"
    question.style.marginTop = "10px"
    question.style.fontSize = "20px"

    profile.appendChild(profileName)
    profile.appendChild(question)

    setTimeout(function () {
      location.href = "#start"
    }, 500)
  }

  get logout() {
    sessionStorage.removeItem("token")
    location.reload()
    heroSection.style.display = "block"
  }
}
