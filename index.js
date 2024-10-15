let mainConEle = document.getElementById("mainCon");

let redBtnEle = document.getElementById("red");
let orgBtnEle = document.getElementById("org");
let ylwBtnEle = document.getElementById("ylw");
let skyBtnEle = document.getElementById("sky");

let colorId = document.getElementById("bgColor");

function redbtn()
{
    mainConEle.style.backgroundColor = "#B62645";
    colorId.textContent = "#B62645";
    colorId.style.color = "#B62645";
}

function orgbtn()
{
    mainConEle.style.backgroundColor = "#FE9900";
    colorId.textContent = "#FE9900";
    colorId.style.color = "#FE9900";
}

function ylwbtn()
{
    mainConEle.style.backgroundColor = "#BFD641";
    colorId.textContent = "#BFD641";
    colorId.style.color = "#BFD641";
}

function skybtn()
{
    mainConEle.style.backgroundColor = "#5DE2E7";
    colorId.textContent = "#5DE2E7";
    colorId.style.color = "#5DE2E7";
}