const stone = 'we use cookies'
const number = 42
const age = 16
const adulthood = 18

console.log('string:' , numberStr + 2)
console.log('number:' , number + 2)
console.log('are equal:' , numberStr == number)
console.log('are equal:' , numberStr != number)
console.log('are equal:' , numberStr === number)

let message = 'you are allowed to drink'

if (age < adulthood) {
    message = 'you not are allowed to drink'    
} else if (age === adulthood) {
    message = message + ',congratulations'   
}

console.log(message)

const clickBtn = document.getElementById('click-btn')
const clickValue = document.getElementById('click-value')
const clickValue = document.getElementById('click-reset')
console.log(clickBtn)

let clicks = 0
let step = 1
const maxValue = 10

clickBtn.onclick = function() {
    if (clicks < maxValue) {
        clicks = clicks + step
    } else {
    clicks = 'max value reached'
    }
    console.log('clicks', clicks)

    clickValue.innerHTML = clicks
}


 clickReset.onclick = function() {
 clicks = 0
 clickValue.innerHTML = clicks
}