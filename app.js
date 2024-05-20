let favBtn = document.querySelectorAll(".sng-fav");
for(let ele of favBtn){
    ele.addEventListener("click",changeColor);
}

function changeColor() {
    this.classList.add("fa-solid");
    this.classList.remove("fa-regular");
    this.style.color = "#1ed760";
    this.addEventListener("click",resetColor);
}

function resetColor()
{
    this.style.color = "white";
    this.classList.remove("fa-solid");
    this.classList.add("fa-regular");
    this.addEventListener("click",changeColor);
}

let addbtn = document.querySelector(".sng-like");
addbtn.addEventListener("click", changeColor);

let back = document.querySelector(".background");
