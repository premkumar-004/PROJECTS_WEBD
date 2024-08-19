let zero = document.querySelector(".zero");
let one = document.querySelector(".one");
let two = document.querySelector(".two");
let three = document.querySelector(".three");
let four = document.querySelector(".four");
let five = document.querySelector(".five");
let six = document.querySelector(".six");
let seven = document.querySelector(".seven");
let eight = document.querySelector(".eight");
let nine = document.querySelector(".nine");
let dot = document.querySelector(".dot");
let add = document.querySelector(".add");
let sub = document.querySelector(".sub");
let divide = document.querySelector(".divide");
let mul = document.querySelector(".mul");
let equal = document.querySelector(".equal");
let cancel = document.querySelector(".cancel");

let btns = document.querySelectorAll(".btn");
let para = document.querySelector(".para");
let text = "";

btns.forEach(btn => {
    btn.addEventListener("click", () => {
        text = btn.innerText;
        para.innerText = para.innerText + text;
    })
})
cancel.addEventListener("click", () => {
    para.innerText = "";
})
