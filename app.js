let favBtn = document.querySelectorAll(".sng-fav");
let libFav = document.querySelector(".sng-like");
let allRmvBtns = document.getElementsByClassName("remove-btn");
let searchBtns = document.querySelectorAll(".search-page-btn");
let homeBtns = document.querySelectorAll(".home-page-btn");

Array.from(allRmvBtns).forEach((item) => {
    item.addEventListener("click",function() {
        item.parentElement.classList.add("invi");
    })
});

for(searchBtn of searchBtns){
    searchBtn.addEventListener("click", function() {
        this.href = "search.html";
    });
}

for(homeBtn of homeBtns){
    homeBtn.addEventListener("click", function() {
        this.href = "index.html";
    });
}

libFav.addEventListener("click", () => {
    if(libFav.style.color == ""){
        libFav.classList.add("fa-solid");
        libFav.classList.remove("fa-regular");
        libFav.style.color = "#1ed760";
    }else{
        libFav.style.color = "";
        libFav.classList.remove("fa-solid");
        libFav.classList.add("fa-regular");
    }
});

for(let ele of favBtn){
    ele.addEventListener("click", changeColor);
}

function changeColor() {
    if(this.style.color == ""){
        this.classList.add("fa-solid");
        this.classList.remove("fa-regular");
        this.style.color = "#1ed760";
    }else{
        this.style.color = "";
        this.classList.remove("fa-solid");
        this.classList.add("fa-regular");
    }
}
