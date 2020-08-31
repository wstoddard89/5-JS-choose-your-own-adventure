// alert("welcome to micky ds")
// const burgerChoice = prompt("single or quadruple stack burger")
// let isDead = false
// if (burgerChoice === "quadruple") {
//   alert("you died")
//   isDead = true
// } else {
//   alert("you live to see another day!")
// }

// if (isDead === false) {
//   alert("step 2")
// }

alert("Try to make it to work on time!")
const runningLate = prompt("You reach a fork in the road. Go left or right?")
let isLate = false
if (runningLate === "right") {
  alert("You chose wrong. Bumper to bumper traffic!")
  isLate = true
} else if (isLate == false) {
  alert("Smooth sailing!")
}

let newChoice
if (isLate === false) {
  newChoice = prompt(
    "Your phone rings. It's your friend. Do you answer or let it go?"
  )
}
if (newChoice === "answer") {
  alert(
    "You looked down and didn't notice a cop behind you. He's pulling you over and you're screwed."
  )
  isLate = true
} else {
  alert("You noticed a cop behind you and ignored the call.")
}

let lastChoice
if (isLate === false) {
  lastChoice = prompt(
    "You're almost there, but you're still half asleep. Get coffee or go tired?"
  )
}
if (lastChoice === "go tired") {
  alert(
    "You parked with enough time! But, after parking you shut your eyes for what felt like a blink, and fell asleep. You're fired."
  )
  isLate = true
} else {
  alert(
    "There was no line for the coffee. You got lucky, got your coffee and made it to work with a few minutes to spare. Good job!"
  )
}
