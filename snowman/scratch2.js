/// Need word bank
///Need to choose word
/// Need to generate divs populated by letters of word
///Need to display alphabet
///Need to be able to click on each alphabet element
    ////Go through chosen word and see if letter is there
    ////If letter is there

    $(() => {

        const word = /*["s", "w" , "o", "r" , "d"]*/ ["f","i","s","h"]
        const alphabet = ["a", "b", "c", "d", "e", "f", "g","h","i", "j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"]
        
        ///click on target
        ///get targets value, text
        //if text value is in word one change, if not, another
        
        let strikes = 0;
        let lettersCorrect = 0;

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

        function playAgain() {
            const $div = $('<div>').addClass('replay')
            $div.text('Play Again')
            $('body').append($div)
            $div.on('click' , (e) => {
                $('#alpha').empty()
                $('#container').empty()
                $(e.target).remove()
                setAlphabet()
                setWord()
                lettersCorrect = 0;
                strikes = 0;
                $('#chances').text(strikes + " strikes")
            })
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
        
        function setAlphabet() {
        for(letter of alphabet ){
            const $div = $('<div>').text(letter).addClass('omega')
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
        
    setAlphabet()
    setWord()

        
    })