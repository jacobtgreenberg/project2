$(()  => {

    let computerArray = [];
    let playerArray = [];
    //// will be applied to loopThroughCA, need to limit sounds duration
    let level = 3005;
    let clickCounter = 0
    let score = 0
    let start;
    let playerUnclick = false;
    
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
        }else if(randomIndex === 2){
            toggleC('.blue', 'blue', '#bleep')
            computerArray.push(2)
        }else if(randomIndex === 3){
            toggleC('.yellow', 'yellow', '#ping')
            computerArray.push(3)
        }else if(randomIndex === 4){
            toggleC('.green', 'green', '#beep')
            computerArray.push(4)
        }
    }

    function loopThroughComputerArray() {
        let counter = 0;
        playerUnclick = true;
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
                playerUnclick = false;
                clearInterval(start);
                
            }
            counter++
        }   
        , 800)
    }
    
    
    function toggle (event, color, number, sound) {
        if(playerUnclick == true){
            return
        }
        $(event.target).toggleClass(color + 'Lit')
        setTimeout(() => {
            $(event.target).toggleClass(color + 'Lit')
        }, 400)
        playerArray.push(number)
        if(computerArray[clickCounter] === playerArray[clickCounter]){
            $(sound).get(0).play();
            clickCounter++;
            if(clickCounter === computerArray.length){     
                clickCounter = 0
                playerArray = []
                score = computerArray.length 
                $('#score').text(score)
                setTimeout(loopThroughComputerArray, 900)
            }
        }else{
            $('#wrong').get(0).play()
            computerArray = []
            playerArray = []
            clickCounter = 0
            $('#score').empty()
            if(score > $('#hi_score').text()){
                $('#hi_score').text(score)
            }
            setTimeout(lightRandomColor, 1300)
            setTimeout(repeatIntro, 1300)
        }
        
    }

  

    $('.red').on('click', () => toggle(event, 'red', 1, '#ding'))
    $('.blue').on('click', () => toggle(event, 'blue', 2, '#bleep'))
    $('.yellow').on('click', () => toggle(event,'yellow', 3, '#ping'))
    $('.green').on('click', () => toggle(event,'green', 4, '#beep'))

    $('.red').on('click', stopRepeat)
    $('.blue').on('click', stopRepeat)
    $('.yellow').on('click', stopRepeat)
    $('.green').on('click', stopRepeat)


    setTimeout(lightRandomColor, 1000)
    setTimeout(repeatIntro, 1000)

   

    function repeatIntro() {
        start = setInterval( () =>  {
            console.log('bleep')
            if(computerArray[0] === 1){
                toggleC('.red', 'red', '#ding')
            }else if(computerArray[0] === 2){
                toggleC('.blue', 'blue', '#bleep')
            }else if(computerArray[0] === 3){
                toggleC('.yellow', 'yellow', '#ping')
            }else if(computerArray[0] === 4){
                toggleC('.green', 'green', '#beep')
            }
        }   
        , 4000)
    }

    function stopRepeat() {
        clearInterval(start)
    }
     
    })