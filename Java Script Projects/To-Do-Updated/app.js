let btn = document.querySelector(".addTask");
let ul = document.querySelector("ul");
let input = document.querySelector("input");
btn.addEventListener("click", function () {
    if (input.value.trim() === "") {
        return;
    }

    let item = document.createElement('li');
    item.innerText = input.value;

    let delBtn = document.createElement("button");
    delBtn.innerText = "delete";
    delBtn.classList.add("delete");

    item.appendChild(delBtn);

    ul.appendChild(item);
    input.value = "";
})
ul.addEventListener("click", function (event) {
    if (event.target.nodeName == "BUTTON") {
        let ListItem = event.target.parentElement;
        ListItem.remove();
    }
})
// let deleteButton = document.querySelectorAll(".delete");
// for (delBtns of deleteButton) {
//     delBtns.addEventListener("click", function () {
//         let parent = this.parentElement;
//         parent.remove();
//     })
// }