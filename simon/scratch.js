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
        , 800)
    }
    
    // loopThroughComputerArray()
    
    function lightRandomColor() {
        const randomIndex = Math.ceil(Math.random() * 4)
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
         $('#bleep').get(0).play()
    }
    
    function toggleYellowC() {
        $('.yellow').toggleClass('yellowLit')
         setTimeout(() => {
             $('.yellow').toggleClass('yellowLit')
         }, 400)
         $('#ping').get(0).play()
    }
    
    function toggleGreenC() {
        $('.green').toggleClass('greenLit')
         setTimeout(() => {
             $('.green').toggleClass('greenLit')
         }, 400)
         $('#beep').get(0).play()
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



    function toggle (event, color, number) {
        $(event.target).toggleClass(color + 'Lit')
        setTimeout(() => {
            $(event.target).toggleClass(color + 'Lit')
        }, 400)
        playerArray.push(number)
        if(computerArray[clickCounter] === playerArray[clickCounter]){
            console.log(playerArray[clickCounter])
            clickCounter++;
            if(clickCounter === computerArray.length){
               //  prompt("Next level!")
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
                //  prompt("Next level!")
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
         if(computerArray[clickCounter] === playerArray[clickCounter]){
             clickCounter++;
             if(clickCounter === computerArray.length){
                //  prompt("Next level!")
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
    
    function toggleYellow() {
        $('.yellow').toggleClass('yellowLit')
        setTimeout(() => {
            $('.yellow').toggleClass('yellowLit')
        }, 400)
        playerArray.push(3)
         if(computerArray[clickCounter] === playerArray[clickCounter]){
             clickCounter++;
             if(clickCounter === computerArray.length){
                //  prompt("Next level!")
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
    
    function toggleGreen() {
        $('.green').toggleClass('greenLit')
        setTimeout(() => {
            $('.green').toggleClass('greenLit')
        }, 400)
        playerArray.push(4)
         if(computerArray[clickCounter] === playerArray[clickCounter]){
             clickCounter++;
             if(clickCounter === computerArray.length){
                //  prompt("Next level!")
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
    
    $('.red').on('click', () => {toggle(event, 'red', 1)})
    $('.blue').on('click', () => {toggle(event, 'blue', 2) })
    $('.yellow').on('click', () => {toggle(event,'yellow', 3)})
    $('.green').on('click', () => {toggle(event,'green'), 4})
    
    
    
    
    
    
    })