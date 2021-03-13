let button = document.querySelectorAll("button")
let display = document.querySelector("input")
var ops = ["+", "-", "*", "/", "="]
count = []
function inputValue() {
    display.innerHTML = button.value
}



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
inputValue()
/*
function ops() {
    for (let i = 0; i < button.length; i++)
        button[i].addEventListener('click', (event) => {

        })

}
ops() */