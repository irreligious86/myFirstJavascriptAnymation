'use strict';


// создать массив с обьектами - пользователями
let gamers = [
    {name: 'vasia', gameTime: 1000},
    {name: 'petia', gameTime: 2600},
    {name: 'kolia', gameTime: 3200},
    {name: 'mojsha', gameTime: 1200}
];

// добавить пользователя в массив
function addUser (name, gameTime) {
    
    return gamers;
};

// создать DOM-обьект - поле содержащее гистограмму
let barGraph = document.createElement('canvas');
barGraph.classList.add('bar-graph');
document.body.append(barGraph);

// создать гистаграмму отдельно взятого пользователя
// let ctx = barGraph.getContext('2d');
// ctx.fillStyle = 'cyan' ;
// ctx.fillRect(50, 50, 200, 15);

// создать гистаграмму отдельно взятого пользователя
function createGraph (name, gameTime) {
    let ctx = barGraph.getContext('2d');
    ctx.fillStyle = 'blue' ;
    ctx.fillRect(50, 50, gameTime, 15);
    ctx.font = '12px Tahoma' ;
    ctx.textBaseline = 'hanging';
    ctx.fillText(name + ': ' + gameTime, 50, 42);

    return ctx;
};

createGraph('mojsha', 180);





