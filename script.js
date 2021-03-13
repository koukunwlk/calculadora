let numButtons = document.querySelectorAll(".num");
let ops1 = document.querySelectorAll(".ops1");
let display = document.querySelector("input");
var ops = ["+", "-", "*", "/", "="];
let count = [];
let op = "";
function inputValue() {
  for (let i = 0; i < numButtons.length; i++) {
    numButtons[i].addEventListener("click", (event) => {
      display.value = display.value + event.currentTarget.value;
    });
  }
}
function clearAll() {
  document.getElementById("c").addEventListener("click", (event) => {
    display.value = "";
    count = []
  });
}
clearAll();

function calculate() {
  let total = 0;
  for (let i = 0; i < ops1.length; i++) {
    ops1[i].addEventListener("click", (event) => {
      console.log(event.currentTarget.value);
      op = event.currentTarget.value;
      count.push(Number(display.value));
      display.value = "";

      if(count.length  == 2) {
      console.log("entrou no if");
        
        switch (op) {
          case "+":
            total = count.reduce((a, b) => a + b);
            console.log(total);
            count = []
            display.value = total;
            break;
          case "-":
            total = count.reduce((a, b) => a - b);
            count = [];
            display.value = total;
            break;
          case "/":
            total = count.reduce((a, b) => a / b);
            count = [];
            display.value = total;
            break;
          case "*":
            total = count.reduce((a, b) => a * b);
            count = [];
            display.value = total;
            break;
        
        }
      }
    });
  }
}
calculate();
/* for (let i = 0; i < button.length; i++)
        button[i].addEventListener('click', (event) => {
            if (ops.indexOf(event.currentTarget.value) < 0) {
                display.value = display.value + event.currentTarget.value
            } else {
                if(ops.indexOf(event.currentTarget.value) >= 0) {
                    console.log(`clicou no ${ops[ops.indexOf(event.currentTarget.value)]}`)
                    count.push(Number(display.value,))
                    display.value = ""
                }
                
            }

        })
        console.log(count)
 */
inputValue();
/*
function ops() {
    for (let i = 0; i < button.length; i++)
        button[i].addEventListener('click', (event) => {

        })

}
ops() */
