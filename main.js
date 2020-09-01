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

// alert("Try to make it to work on time!")
// const runningLate = prompt("You reach a fork in the road. Go left or right?")
// let isLate = false
// if (runningLate === "right") {
//   alert("You chose wrong. Bumper to bumper traffic!")
//   let isLate = true
//   if (isLate === true) {
//     console.log('not going to run')
//   }
// } else {
//   alert("Smooth sailing!")
// }

// let newChoice
// if (isLate === false) {
//   newChoice = prompt(
//     "Your phone rings. It's your friend. Do you answer or let it go?"
//   )
// }
// if (newChoice === "answer") {
//   alert(
//     "You looked down and didn't notice a cop behind you. He's pulling you over and you're screwed."
//   )
//   isLate = true
//   console.log('not going to run')
// } else {
//   alert("You noticed a cop behind you and ignored the call.")
// }

// let lastChoice
// if (isLate === false) {
//   lastChoice = prompt(
//     "You're almost there, but you're still half asleep. Get coffee or go tired?"
//   )
 alert("Try to make it to work on time!")
 const runningLate = prompt("Skip breakfast?")
 let yourLate = false
 if (runningLate === "no") {
    alert("What were you thinking?")
    console.log
    yourLate = true
 } else {
   alert("Smart choice!")
 }

 if (yourLate == false) {
   alert("what route to take")
   const routeChoice = prompt("Do you take the freeway or surface streets?")
   if (routeChoice === "freeway") {
     alert("You chose wrong. Theres a pile up. You are screwed.")
     yourLate = true
   } else {
     alert("Good choice. There is no traffic and youre almost there.")
   }
 }

 if (yourLate == false) {
  alert("Youre still half asleep!")
  const routeChoice = prompt("Stop for coffee?")
  if (routeChoice === "no") {
    alert("You parked with a few minutes to spare. You close your eyes for what feels like a blink, and fall asleep in the car. Youre fired.")
    yourLate = true
  } else {
    alert("You got lucky. no line at the coffee shop, and you made it just in time, ready to go for the day. You made it!")
  }
}
