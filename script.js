`use strict`;

const num = document.querySelectorAll(`.num`);
const arith = document.querySelectorAll(`.arith-a`);
const screen = document.querySelectorAll(`.screen-input`);
const equal = document.querySelector(`.arith-equal`);
const reset = document.querySelector(`.btn-reset`);

screen.forEach(x => x.disabled = true);

[screen_ans, screen_equation] = [...screen];

let equation;
let dotUsed;
let operUsed;

const init = function() {
  equation = "";
  dotUsed = false;
  operUsed = false;
  screen_equation.value = 0;
  screen_ans.value = `Ans`;
};

init();

equal.addEventListener(`click`,function() {
  screen_equation.value = equation;
  try {
    let value = eval(equation);
    screen_ans.value = `Ans = ${value}`;
  }
  catch {
    screen_ans.value = `ERROR`;
  }
  
});

num.forEach( (x) => {
  x.addEventListener(`click`, function() {
    if(x.getAttribute(`value`) != 'C') {
      if((x.getAttribute(`value`) == ".") && dotUsed) return;

      if(x.getAttribute(`value`) == ".") {
        dotUsed = true;
      }
      equation += x.getAttribute(`value`);
      operUsed = false;
    }
    else {
      equation = equation.slice(0,-1);

    }
    screen_equation.value = equation;
  })
});

arith.forEach( (x) => {
  x.addEventListener(`click`, function() {
    dotUsed = false;
    if(!operUsed) {
      equation += x.getAttribute(`value`);
      operUsed = true;
      dotUsed = false;
    }
    else {
      return;
    }
    screen_equation.value = equation;
  })
  
});

reset.addEventListener(`click`, function() {
  init();
});