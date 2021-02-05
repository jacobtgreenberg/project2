//Create a 7 x 6 grid
//want to differentiate by column
//want a hover feature so player knows where they are dropping
//populate bottom available hole of column
//alternate color----> function that takes color parameter and alters css.class

$(() => {

for(let i = 1;i <= 6; i++){
    const $row = $('<div>').addClass('row')
    $('body').append($row)
    for(let j = 1;j <= 7;j++){
        const $circle = $('<div>').addClass('circle')
        $row.append($circle)
    }

}























})