
    $(() => {


        const wordBank = [
            ["f", "i", "s", "h"],
            ["s","w","o","r","d"],
            ["o","c","t","o","p","u","s"],
            ["v","e","g","e","t","a","b","l","e"],
            ["p","r","o","g","r","a","m","m","e","r"]
        ]

        let word = []
        const alphabet = ["a", "b", "c", "d", "e", "f", "g","h","i", "j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"]
        
        
        let strikes = 0;
        let lettersCorrect = 0;
        let $chosenWord;

        $("#start_game").on('click', (e) => {
            $('p').remove()
            $(e.target).remove()
            setAlphabet()
            pickWord()
            setWord()
        })
        
        function removeWord(){
            console.log(wordBank)
            let wordToRemove = wordBank.indexOf($chosenWord)
            wordBank.splice(wordToRemove, 1)
            console.log(wordBank)
        }

        function pickWord() {
            const $randomIndex = Math.floor(Math.random() * wordBank.length)
            $chosenWord = wordBank[$randomIndex]
           
             for(letter of $chosenWord){
                 word.push(letter)
             }
             
             console.log($chosenWord)
        }

        function setAlphabet() {
            for(letter of alphabet ){
                const $div = $('<div>').text(letter).addClass('omega')
                if($div.text() === 'y' || $div.text() === 'z'){
                    $div.addClass('yz')
                }
                $('#alpha').append($div)
                $div.on('click', checkWord)
            }
        }

        function setWord() {
            for(letter of word){
                const $div = $('<div>').text(letter).addClass('current')
                $('#container').append($div)
            }
        }

        function checkWord(e){
            const $chosen = $(e.target).text()
            if(word.includes($chosen)){
                $(e.target).remove();
                letterCorrect(e)
            }else{
                $(e.target).remove();
                strikes++;
                letterIncorrect()
            }   
        }

        function letterCorrect(e) {
            for(child of $('#container').children()){
                if($(child).text() == $(e.target).text()){
                    $(child).css('color','black')
                    lettersCorrect++
                    if(lettersCorrect == word.length){
                        $('#chances').text("You got the word!")
                        playAgain()
                    }
                }
            }
        }

        function letterIncorrect() {
            if(strikes == 1){
                $('#chances').text(strikes + " strike")
            }else if(strikes == 6){
                $('#chances').text("Ya lose.")
                playAgain()
            }
            else{
                $('#chances').text(strikes + " strikes")
            }
        }


        function playAgain() {
            const $div = $('<div>').addClass('replay')
            $div.text('Play Again')
            $('body').append($div)
            for(child of $('#container').children()){
                $(child).css('color','black')
            }
            $div.on('click' , (e) => {
                $('#alpha').empty()
                $('#container').empty()
                $(e.target).remove()
                word = []
                removeWord()
                setAlphabet()
                pickWord()
                setWord()
                lettersCorrect = 0;
                strikes = 0;
                $('#chances').text(strikes + " strikes")
            })
        }
        
    // setAlphabet()
    // pickWord()
    // setWord()
   

        
    })