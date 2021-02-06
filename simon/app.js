/// Need buttons to light up --> toggle class, but how to time it (needs to toggle back)
///Need to generate random sequence --->
        ///need to assign value to each key to access
        /// need to store previous sequence and append to that
///Need to check player entry against computer entry



$(()  => {

function toggleRed(e) {
    $(e.target).toggleClass('redLit')
     setTimeout(() => {
         $(e.target).toggleClass('redLit')
     }, 400)
}

function toggleBlue(e) {
    $(e.target).toggleClass('blueLit')
    setTimeout(() => {
        $(e.target).toggleClass('blueLit')
    }, 400)
}

function toggleYellow(e) {
    $(e.target).toggleClass('yellowLit')
    setTimeout(() => {
        $(e.target).toggleClass('yellowLit')
    }, 400)
}

function toggleGreen(e) {
    $(e.target).toggleClass('greenLit')
    setTimeout(() => {
        $(e.target).toggleClass('greenLit')
    }, 400)
}

$('.red').on('click', toggleRed)
$('.blue').on('click', toggleBlue)
$('.yellow').on('click', toggleYellow)
$('.green').on('click', toggleGreen)



//  $('.red').on('click', (e) => {
//      $(e.target).toggleClass('redLit')
//      setTimeout(() => {
//          $(e.target).toggleClass('redLit')
//      }, 400)
//  })

//  $('.blue').on('click', (e) => {
//     $(e.target).toggleClass('blueLit')
//     setTimeout(() => {
//         $(e.target).toggleClass('blueLit')
//     }, 400)
// })

// $('.yellow').on('click', (e) => {
//     $(e.target).toggleClass('yellowLit')
//     setTimeout(() => {
//         $(e.target).toggleClass('yellowLit')
//     }, 400)
// })


// $('.green').on('click', (e) => {
//     $(e.target).toggleClass('greenLit')
//     setTimeout(() => {
//         $(e.target).toggleClass('greenLit')
//     }, 400)
// })



})