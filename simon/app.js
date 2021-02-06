/// Need buttons to light up --> toggle class, but how to time it (needs to toggle back)
///Need to generate random sequence --->
        ///need to assign value to each key to access
        /// need to store previous sequence and append to that
///Need to check player entry against computer entry



$(()  => {

function lightRandomColor() {
    const randomIndex = Math.ceil(Math.random() * 4)
    if(randomIndex === 1){
        toggleRed
    }
}

lightRandomColor()

// function toggleRed(e) {
//     $(e.target).toggleClass('redLit')
//      setTimeout(() => {
//          $(e.target).toggleClass('redLit')
//      }, 400)
// }

function toggleRed() {
    $('.red').toggleClass('redLit')
     setTimeout(() => {
         $('.red').toggleClass('redLit')
     }, 400)
}


function toggleBlue() {
    $('.blue').toggleClass('blueLit')
    setTimeout(() => {
        $('.blue').toggleClass('blueLit')
    }, 400)
}

function toggleYellow(e) {
    $('.yellow').toggleClass('yellowLit')
    setTimeout(() => {
        $('.yellow').toggleClass('yellowLit')
    }, 400)
}

function toggleGreen(e) {
    $('.green').toggleClass('greenLit')
    setTimeout(() => {
        $('.green').toggleClass('greenLit')
    }, 400)
}

$('.red').on('click', toggleRed)
$('.blue').on('click', toggleBlue)
$('.yellow').on('click', toggleYellow)
$('.green').on('click', toggleGreen)






})