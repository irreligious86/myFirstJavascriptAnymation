let animBtn = document.createElement('button');
    document.body.append(animBtn);
    animBtn.classList.add('animBtn');
    animBtn.innerText = 'Animation';
    console.log(animBtn);

let borderField = document.createElement('div');
    document.body.appendChild(borderField);
    borderField.classList.add('borderField');
    //borderField.innerText = 'Hello!';
    console.log(borderField);

let square = document.createElement('div');
    borderField.append(square);
    square.classList.add('square');

let square2 = document.createElement('div');
    borderField.append(square2);
    square2.classList.add('square2');


let square3 = document.createElement('div');
    borderField.append(square3);
    square3.classList.add('square3');

let square4 = document.createElement('div');
    borderField.append(square4);
    square4.classList.add('square4');


function myAnimation () {
  let posX = 0;
  let posY = 0;
  
  let id = setInterval(frame, 5);

  function frame () {
    if (posY == 555 || posY == 555) {
      clearInterval(id);
    } else {
      posX++;
      posY++;
      square.style.top = posX + 'px';
      square.style.left = posY + 'px';
    }
  }
};

function myAnimation2 () {
  let posX = 550;
  let posY = 550;
  
  let id = setInterval(frame2, 5);

  function frame2 () {
    if (posY == 0 || posY == 0) {
      clearInterval(id);
    } else {
      posX--;
      posY--;
      square2.style.top = posX + 'px';
      square2.style.left = posY + 'px';
    }
  }
};

function myAnimation3 () {
  let posX = 555;
  let posY = 0;
  
  let id = setInterval(frame3, 5);

  function frame3 () {
    if (posX == 0 || posY == 555) {
      clearInterval(id);
    } else {
      posX--;
      posY++;
      square3.style.top = posX + 'px';
      square3.style.left = posY + 'px';
    }
  }
};

function myAnimation4 () {
  let posX = 0;
  let posY = 555;
  
  let id = setInterval(frame4, 5);

  function frame4 () {
    if (posX == 555 || posY == 0) {
      clearInterval(id);
    } else {
      posX++;
      posY--;
      square4.style.top = posX + 'px';
      square4.style.left = posY + 'px';
    }
  }
};


/*
function allAnym () {
  myAnimation;
  myAnimation2;
  myAnimation3;
  myAnimation4;
};
*/

//allAnym();

animBtn.addEventListener('click', myAnimation);
animBtn.addEventListener('click', myAnimation2);
animBtn.addEventListener('click', myAnimation3);
animBtn.addEventListener('click', myAnimation4);