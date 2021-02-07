$(()  => {

    const computerArray = [];
    let playerArray = [];
    //// will be applied to loopThroughCA, need to limit sounds duration
    let level = 3005;
    let clickCounter = 0
    let score = 0
    
    function toggleC(call, color, sound){
        $(call).toggleClass(color + 'Lit')
         setTimeout(() => {
             $(call).toggleClass(color + 'Lit')
         }, 400)
         $(sound).get(0).play()
    }
    
    function lightRandomColor() {
        const randomIndex = Math.ceil(Math.random() * 4)
        if(randomIndex === 1){
            toggleC('.red', 'red', '#ding')
            computerArray.push(1)
            console.log("computer Array" + computerArray)
        }else if(randomIndex === 2){
            toggleC('.blue', 'blue', '#bleep')
            computerArray.push(2)
            console.log(computerArray)
        }else if(randomIndex === 3){
            toggleC('.yellow', 'yellow', '#ping')
            computerArray.push(3)
            console.log(computerArray)
        }else if(randomIndex === 4){
            toggleC('.green', 'green', '#beep')
            computerArray.push(4)
            console.log(computerArray)
        }
    }

    function loopThroughComputerArray() {
        let counter = 0;
        const start = setInterval( () =>  {
            if(computerArray[counter] === 1){
                toggleC('.red', 'red', '#ding')
            }else if(computerArray[counter] === 2){
                toggleC('.blue', 'blue', '#bleep')
            }else if(computerArray[counter] === 3){
                toggleC('.yellow', 'yellow', '#ping')
            }else if(computerArray[counter] === 4){
                toggleC('.green', 'green', '#beep')
            }else{
                lightRandomColor();
                setTimeout(() => {clearInterval(start)},100 )
            }
            counter++
        }   
        , 800)
    }
    
    
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
                $('#score').text(score)
                setTimeout(loopThroughComputerArray, 1000)
            }
        }else{
            prompt("You lose!")
        }
    }

    $('.red').on('click', () => toggle(event, 'red', 1))
    $('.blue').on('click', () => toggle(event, 'blue', 2))
    $('.yellow').on('click', () => toggle(event,'yellow', 3))
    $('.green').on('click', () => toggle(event,'green', 4))
    
    $('.red').on('click', () => $('#ding').get(0).play())
    $('.yellow').on('click', () => $('#ping').get(0).play())
    $('.green').on('click', () => $('#beep').get(0).play())
    $('.blue').on('click', () => $('#bleep').get(0).play())


    setTimeout(lightRandomColor, 1000)
     
    })