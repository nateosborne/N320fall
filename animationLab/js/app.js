let page = document.getElementsByClassName("page");

for(let i = 0; i < page.length; i++){
    TweenLite.from(page[i], {duration: 1.5, alpha:0 });
}

let block1 = document.getElementsByClassName("block1");

block1.addEventListener("mouseover", (event) =>{
    event.target.style.fill = "#000";
})