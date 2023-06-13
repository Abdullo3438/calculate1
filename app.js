const input11 = document.querySelector(".input1")
const input2 = document.querySelector(".input2")
const input3 = document.querySelector(".input3")
const input4 = document.querySelector(".input4")
const soliq = document.querySelector(".soliq")
let NatijAll = document.querySelector(".Natija")


const myfunction = () => {
    let add1 = Number(input11.value)
    let add2 = input2.value
    let add3 = input3.value
    let add4 = input4.value
    let soliqDaromad = add1 - (add1 * 12) / 100;
    soliq.innerHTML = (add1 * 12) / 100;
    NatijAll.innerHTML = (add1 - (add1 * 12) / 100) - add2 - add3 - add4 ;
}