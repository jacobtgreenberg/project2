/// Need buttons to light up --> toggle class, but how to time it (needs to toggle back)
///Need to generate random sequence --->
        ///need to assign value to each key to access
        /// need to store previous sequence and append to that

///Need to check player entry against computer entry, need to keep count of player entry
/// need level counter to go up by milliseconds

///need to make function that loops through computer array and then calls random function
//// startInterval function would then call THIS function, not random interval

///Need to empty player array but keep computer array
///need to set counter that only loops through computer array as many clicks as the player has done

$(()  => {

const computerArray = [];
let playerArray = [];

const ping = ('#ping')



//// determines when to clear interval on startInterval function, may be obsolete
let level = 3005;

//if clickCounter === computerArray.length player turn over --- need to empty array, if playerArray[clickCounter] === computerArray[clickCounter] gets a point, if != game over
let clickCounter = 0

//keep track of players score
let score = 0

///gets random color to go and start, may be obsolete, may need to house
// function startInterval() {
//     const interval = setInterval(lightRandomColor, 1000 )
//     setTimeout(() => {
//         clearInterval(interval)
//     }, level)
// }

// startInterval()

function loopThroughComputerArray() {
    let counter = 0;
    
    const start = setInterval( () =>  {
        if(computerArray[counter] === 1){
            toggleRedC()
        }else if(computerArray[counter] === 2){
            toggleBlueC()
        }else if(computerArray[counter] === 3){
            toggleYellowC()
        }else if(computerArray[counter] === 4){
            toggleGreenC()
        }else{
            lightRandomColor();
            setTimeout(() => {clearInterval(start)},100 )
        }
        counter++
    }   
    , 1005)
}

// loopThroughComputerArray()

function lightRandomColor() {
    const randomIndex = /*Math.ceil(Math.random() * 4)*/ 1
    if(randomIndex === 1){
        toggleRedC()
        computerArray.push(1)
        console.log("computer Array" + computerArray)
    }else if(randomIndex === 2){
        toggleBlueC()
        computerArray.push(2)
        console.log(computerArray)
    }else if(randomIndex === 3){
        toggleYellowC()
        computerArray.push(3)
        console.log(computerArray)
    }else if(randomIndex === 4){
        toggleGreenC()
        computerArray.push(4)
        console.log(computerArray)
    }
}

setTimeout(lightRandomColor, 1000)

// Issue: When passed into click event is called
// function toggleColor(color) {
//     $('.red').toggleClass(color + 'Lit')
//     setTimeout(() => {
//         $('.red').toggleClass(color + 'Lit')
//     }, 400)
// }

//Can rewrite computer functions into one with parameter
function toggleRedC() {
    $('.red').toggleClass('redLit')
     setTimeout(() => {
         $('.red').toggleClass('redLit')
     }, 400)
     $('#ding').get(0).play()
}



function toggleBlueC() {
    $('.blue').toggleClass('blueLit')
     setTimeout(() => {
         $('.blue').toggleClass('blueLit')
     }, 400)
}

function toggleYellowC() {
    $('.yellow').toggleClass('yellowLit')
     setTimeout(() => {
         $('.yellow').toggleClass('yellowLit')
     }, 400)
}

function toggleGreenC() {
    $('.green').toggleClass('greenLit')
     setTimeout(() => {
         $('.green').toggleClass('greenLit')
     }, 400)
}

$('.red').on('click', () => {
    $('#ding').get(0).play()
})
$('.yellow').on('click', () => {
    $('#ping').get(0).play()
})
$('.green').on('click', () => {
    $('#beep').get(0).play()
})
$('.blue').on('click', () => {
    $('#bleep').get(0).play()
})

function toggleRed() {
    $('.red').toggleClass('redLit')
     setTimeout(() => {
         $('.red').toggleClass('redLit')
     }, 400)
     playerArray.push(1)
     if(computerArray[clickCounter] === playerArray[clickCounter]){
         console.log(playerArray[clickCounter])
         clickCounter++;
         if(clickCounter === computerArray.length){
             prompt("Next level!")
             clickCounter = 0
             playerArray = []
             score = computerArray.length 
             $('#score').text('Score: ' + score)
             loopThroughComputerArray()
         }
     }else{
         prompt("You lose!")
     }
}


function toggleBlue() {
    $('.blue').toggleClass('blueLit')
    setTimeout(() => {
        $('.blue').toggleClass('blueLit')
    }, 400)
    playerArray.push(2)
    //  if(computerArray[clickCounter] === playerArray[clickCounter]){
    //      clickCounter++;
    //      if(clickCounter === computerArray.length){
    //          prompt("Next level!")
    //          clickCounter = 0
    //          playerArray = []
    //          score = computerArray.length 
    //          $('#score').text('Score: ' + score)
    //          loopThroughComputerArray()
    //      }
    //  }else{
    //      prompt("You lose!")
    //  }
}

function toggleYellow() {
    $('.yellow').toggleClass('yellowLit')
    setTimeout(() => {
        $('.yellow').toggleClass('yellowLit')
    }, 400)
    playerArray.push(3)
    //  if(computerArray[clickCounter] === playerArray[clickCounter]){
    //      clickCounter++;
    //      if(clickCounter === computerArray.length){
    //          prompt("Next level!")
    //          clickCounter = 0
    //          playerArray = []
    //          score = computerArray.length
    //          $('#score').text('Score: ' + score)
    //          loopThroughComputerArray()
    //      }
    //  }else{
    //      prompt("You lose!")
    //  }
}

function toggleGreen() {
    $('.green').toggleClass('greenLit')
    setTimeout(() => {
        $('.green').toggleClass('greenLit')
    }, 400)
    playerArray.push(4)
    //  if(computerArray[clickCounter] === playerArray[clickCounter]){
    //      clickCounter++;
    //      if(clickCounter === computerArray.length){
    //          prompt("Next level!")
    //          clickCounter = 0
    //          playerArray = []
    //          score = computerArray.length
    //          $('#score').text('Score: ' + score)
    //          loopThroughComputerArray()
    //      }
    //  }else{
    //      prompt("You lose!")
    //  }
}

$('.red').on('click', toggleRed)
$('.blue').on('click', toggleBlue)
$('.yellow').on('click', toggleYellow)
$('.green').on('click', toggleGreen)






})