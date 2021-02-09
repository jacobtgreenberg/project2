
///if you hardcode the divs you have to give each one a unique id



$(() => {

let score=0
let categories = ["fish" , "music" , "miscellaneous"]
let value = [100 , 200, 300]
let question = [
    ["what is your favorite fish", "what is flounder","how do you cook eel"],
    ["who is beethoven" , "how many sharps in the key of g", "what is music"],
    ["where is antartica" , "describe computer programming" , "what is your favorite vegetable"]
]
let answers = [

    [ //this is the fish categories array
    [{name: "flounder", value: false},{name:"trout", value: false},{name:"bass", value:true}],
    [{name: "good" , value: true}, {name: "a reptile", value: false},{name: "it depends" , value: false}],
    [{name: "sautee" , value: false}, {name: "fire", value: true}, {name: "don't", value:false}]
    ],

    [//this is the music array
        [{name: "a composer", value: true},{name:"an architect", value: false},{name:"fictional", value:false}],
        [{name: "1" , value: true}, {name: "2", value: false},{name: "it depends" , value: false}],
        [{name: "a great passtime" , value: false}, {name: "fire", value: true}, {name: "an anomaly", value:false}]
    ],

    [//this is the miscellaneous array
        [{name: "mars", value: false},{name:"africa", value: false},{name:"the south pole", value:true}],
    [{name: "good" , value: true}, {name: "bad", value: false},{name: "it depends" , value: false}],
    [{name: "brocooli" , value: true}, {name: "lamb", value: false}, {name: "none", value:false}]
    ]


]



function display(i,event,k) {
    $(event.target).empty()
    const $div = $('<div>').text(question[k][i])
    const $ul = $('<ul>')
    $div.append($ul)
    for(let j = 0; j < answers[k][i].length; j++){
        const $li = $('<li>').text(answers[k][i][j].name)
        $li.on('click',() => checkAnswer(i,j,k))
        $ul.append($li)
    }
    $('.modal').append($div)
}

function checkAnswer(i,j,k) {
    if(answers[k][i][j].value == true){
        $('.modal').empty()
        $('.modal').text("Correct!")
        score += value[i]
        $('.score').text(score)
    }else{
        $('.modal').text("I'm sorry the correct answer was")
        score -= value[i]
        $('.score').text(score)
    }
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