
$(() => {

let score=0
let categories = ["fish" , "music" , "miscellaneous", "science", "vacation spots"]
let value = [100 , 200, 300, 400, 500]
let question = [
    ["What is the most popular fish?", "What is flounder?","How can you cook eel?","What is a group of fish called?","Where do fish live?"],
    ["Who is Beethoven?" , "How many sharps are in the key of g?", "Which of the following is a musical genre?", "Which of the following is a string instrument?", "What instrument did John Coltrane play?"],
    ["What is Antartica?" , "Which of the following is a computer coding language?" , "What do people wear on their legs?", "Which of the following can fly?", "What is 80 divided by 5?"]
]
let answers = [

    [ //this is the fish array
        [{name: "Flounder", value: false},{name:"Trout", value: false},{name:"Bass", value:true},{name:"Fluke",value: false}],
        [{name: "A fish" , value: true}, {name: "A reptile", value: false},{name: "It depends" , value: false},{name: "A mammal", value: false}],
        [{name: "You can't" , value: false}, {name: "Sautee", value: true}, {name: "With sand", value:false}, {name: "It is self-cooking", value: false}],
        [{name: "A corporation" , value: false}, {name: "A flock", value: false}, {name: "A herd", value: false}, {name: "A school", value: true}],
        [{name: "The sky", value: false}, {name: "Extraterrestrial", value: false}, {name: "Water", value: true}, {name: "On land", value: false}]
    ],

    [//this is the music array
        [{name: "A composer", value: true},{name:"An architect", value: false},{name:"Fictional", value:false},{name: "A former president", value: false}],
        [{name: "1" , value: false}, {name: "2", value: true},{name: "It depends" , value: false}, {name: "6", value: false}],
        [{name: "Baseball" , value: false}, {name: "Hunting", value: false}, {name: "Cars", value:false}, {name: "Jazz", value: true}],
        [{name: "Tuba", value: false}, {name: "Violin", value: true}, {name: "Drums", value: false},{name: "BMW", value: false}],
        [{name: "Saxophone", value: true}, {name: "Guitar", value: false}, {name: "Bagpipes", value: false},{name: "Cello", value: false}]
    ],

    [//this is the miscellaneous array
        [{name: "A planet", value: false},{name:"An ocean", value: false},{name:"A continent", value:true}, {name:"A cuisine", value: false}],
        [{name: "Javascript" , value: true}, {name: "Chinese", value: false},{name: "Excel" , value: false}, {name: "Laptop", value: false}],
        [{name: "Pants" , value: true}, {name: "Sweatshirts", value: false}, {name: "Hats", value:false}, {name: "gloves", value: false}],
        [{name: "Elephants", value: false}, {name: "Kangaroos", value: false}, {name: "Birds", value: true}, {name: "Lizards", value: false}],
        [{name: "6", value: false}, {name: "16", value: true}, {name: "24", value: false}, {name: "10", value: false}]
    ]


]



function display(i,event,k) {
    $(event.target).empty()
    $('.modal').css('display','block')
    const $div = $('<div>').text(question[k][i]).addClass('question')
    const $ul = $('<ul>').addClass('qList')
    
    for(let j = 0; j < answers[k][i].length; j++){
        const $li = $('<li>').text(answers[k][i][j].name)
        $li.on('click',() => checkAnswer(i,j,k))
        $ul.append($li)
    }
    $('.text_box').append($div)
    $('.text_box').append($ul)

}

let clickOut = false

function checkAnswer(i,j,k) {
    $('.text_box').toggleClass('result')
    setTimeout(() => clickOut = true, 500)
    if(answers[k][i][j].value == true){ 
        $('.text_box').empty()
        $('.text_box').text("Correct!")
        score += value[i]
        $('.score').text(score)
        
    }else{
        $('.text_box').text("I'm sorry the correct answer was")
        score -= value[i]
        $('.score').text(score)
        
    }
}

$('.modal').on('click', closeModal)

function closeModal() {
    if(clickOut == false){
        return
    }
    $('.modal').css('display','none')
    $('.text_box').toggleClass('result')
    $('.text_box').empty()
    clickOut = false
}

for(let k = 0; k < categories.length; k++){
    const $column = $('<div>').addClass('column')
    const $title = $('<div>').text(categories[k]).addClass('square')
    const $ul = $('<ul>')
    $('.container').append($column)
    $column.append($title)
    $column.append($ul)
    
    for(let i = 0; i < value.length; i++){
        const $square = $('<li>').text(value[i]).addClass('square')
        $square.on('click', () => display(i,event,k))
        $($ul).append($square)
        
    }

}






















})