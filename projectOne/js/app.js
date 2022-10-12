let pawn1 = {
    color: "red"
}

let cards = []

function card(){
    //picks up card
    let newCard = document.createElementNS("http://www.w3.org/2000/svg", "rect");
    newCard.setAttribute("height",50);
    newCard.setAttribute("width",50);
    newCard.setAttribute("color","black");
}

//move spaces/do what card says