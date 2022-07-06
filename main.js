const list = [];

const output = document.querySelector(".header__wrapper--search-output");
const search = document.querySelector(".header__wrapper--search-input");
let position = "24px";

document.getElementById("button_frame").style.left = "24px";
window.addEventListener("DOMContentLoaded", loadList);
search.addEventListener("input", filter);

function loadList() {
    let temp = `<ul class="list-items">`;
    list.forEach((item) => {
        temp += `<li class="list-item"> ${item} </li>`;
    });
    temp += `</ul>`;
    output.innerHTML = temp;
}

function filter(e) {
    let temp = '';
    const result = list.filter(item => item.toLowerCase().includes(e.target.value.toLowerCase()));

    if (result.length > 0) {
        temp = `<ul class="list-items">`;
        result.forEach((item) => {
            temp += `<li class="list-item"> ${item} </li>`;
        });
        temp += `</ul>`;
    } else {
        temp = `<div class="no-item"> No Found </div>`;
    }
    output.innerHTML = temp;
}
function clickEvent() {
    document.getElementById("button_frame").style.left = position;

    if(position==="24px"){
        document.getElementById("button_frame").style.left = "113px";
        position = "113px";
    }
    else{
        document.getElementById("button_frame").style.left = "24px";
        position = "24px";
    }
    console.log("sdkjfgkjsdhf");
}
