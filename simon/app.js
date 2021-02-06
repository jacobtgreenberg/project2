/// Need buttons to light up --> toggle class, but how to time it (needs to toggle back)
///Need to generate random sequence --->
        ///need to assign value to each key to access
        /// need to store previous sequence and append to that
///Need to check player entry against computer entry



// $(()  => {


//     setInterval(()=> {

//         lightRandomColor()
        
        
//         }, 1000 )



function lightRandomColor() {
    const randomIndex = Math.ceil(Math.random() * 4)
    if(randomIndex === 1){
        toggleRed()
    }else if(randomIndex === 2){
        toggleBlue()
    }else if(randomIndex === 3){
        toggleYellow()
    }else if(randomIndex === 4)[
        toggleGreen()
    ]
}

// lightRandomColor() 


// When passed into click event is called
// function toggleColor(color) {
//     $('.red').toggleClass(color + 'Lit')
//     setTimeout(() => {
//         $('.red').toggleClass(color + 'Lit')
//     }, 400)
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

function toggleYellow() {
    $('.yellow').toggleClass('yellowLit')
    setTimeout(() => {
        $('.yellow').toggleClass('yellowLit')
    }, 400)
}

function toggleGreen() {
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