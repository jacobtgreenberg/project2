//Create a 7 x 6 grid
//want to differentiate by column// read online better to id each circle/div and target ahead
//want a hover feature so player knows where they are dropping
//populate bottom available hole of column
//alternate color----> function that takes color parameter and alters css.class

$(() => {

for(let i = 1;i <= 7; i++){
    const $column = $('<div>').addClass('column')
    $('#container').append($column)
    for(let j = 1;j <= 6;j++){
        const $circle = $('<div>').addClass('circle')

        $column.on('click', (e)=> {

            for(children of $(e.target)){
                console.log(children, i, j)
            }
        
        })


        $circle.on('click', () => {
            console.log('i is '+ i +' j is ' +j)
        })
        $column.append($circle)
    }

}























})