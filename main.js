'use strict';

// создать массив с обьектами - пользователями
let gamers = [
    {name: 'vasia', gameTime: 1000},
    {name: 'petia', gameTime: 2600},
    {name: 'kolia', gameTime: 3200},
    {name: 'mojsha', gameTime: 1200}
];

// добавить пользователя в массив
function addUser (n, t) {
    gamers.push({
        name: n,
        gameTime: t
    });
};

// создать DOM-обьект - поле содержащее гистограмму
const barGraph = document.createElement('canvas');
barGraph.classList.add('bar-graph');
document.body.append(barGraph);

// опциональная функция для сортировки по возрастанию 
gamers.sort((l, r) => r.gameTime - l.gameTime);

// создать гистаграмму отдельно взятого пользователя
let a = 1;
function createGraph (item, index) {
    gamers.forEach( function(gamers) { a < gamers.gameTime ? a = gamers.gameTime : a } );
    const name = item.name;
    const gameTime = item.gameTime;
    const ctx = barGraph.getContext('2d');
    const ctxHeight = 15;
    const ctxX = 50;
    const ctxY = -10 + 20 * (1 + index);
    const totalLenght = 200;
    ctx.fillStyle = 'rgba(100, 250, 100, 0.3)';  // total
    ctx.fillRect(ctxX, ctxY, totalLenght, ctxHeight);  // total
    ctx.fillStyle = 'rgba(0, 0, 40, 0.1)'; // shadow
    ctx.fillRect(ctxX + 3 , ctxY + 3 , totalLenght, ctxHeight); // shadow
    ctx.fillStyle = 'rgba(0, 250, 0, 0.7)' ;  // current
    ctx.fillRect(ctxX, ctxY, (gameTime * totalLenght * 0.9 / (a) ) , ctxHeight);  // current
    ctx.fillStyle = 'rgba(155, 40, 60, 1)' ; // text
    ctx.font = '14px monospace' ;  // text
    ctx.textBaseline = 'hanging';  // text
    ctx.fillText(name + ': ' + gameTime, ctxX + 2, ctxY + 2 );  // text
    return ctx;
};

addUser('admin', 4500);
addUser('superuser', 800);
addUser('iskander', 5000);
gamers.forEach(createGraph);




