//initializing variables
let piecenum = 0;
let homenum = 0;
let boardspacenum = 0;
let boardspacenum2 = 0;
let boardspacenum3 = 0;
let boardspacenum4 = 0;

//animating page-in
let page = document.getElementsByClassName("page");

    for(let i = 0; i < page.length; i++){
        TweenMax.from(page[i], {duration: 1.5, x: 100 });
    }
    for(let i = 0; i < page.length; i++){
        TweenMax.from(page[i], {duration: 1.5, alpha: 0 });
    }

//picks up card
function card(){
    let cardnum = Math.floor(Math.random() * 10) + 1;
    let cards = [cardnum];
    document.getElementById("newcard").style.backgroundColor = "gray";
    document.getElementById("newcard").style.height = "300px";
    document.getElementById("newcard").style.width = "200px";
    document.getElementById("newcard").innerHTML = [cards];

    //animating card
    let newcardT = document.getElementsByClassName("newcard");

    for(let i = 0; i < newcardT.length; i++){
        TweenLite.from(newcardT[i], {duration: .5 , alpha:0 });
    }

    //moves pieces from start
    //moves 1st piece from start
    document.getElementById("movestart").onclick = function(){
    if (piecenum == 0){
        if (cardnum == 2 || cardnum == 1){
            document.getElementById("redpiece1").onclick = function() {
            var fragment = document.createDocumentFragment();
            fragment.appendChild(document.getElementById('redpiece1'));
            document.getElementById('boardspace24').appendChild(fragment);
            piecenum = 1;
            console.log(piecenum);
            }
        }
    }
    //moves 2nd piece from start
    if (piecenum == 1){
        if (cardnum == 2 || cardnum == 1){
            document.getElementById("redpiece2").onclick = function() {
            var fragment = document.createDocumentFragment();
            fragment.appendChild(document.getElementById('redpiece2'));
            document.getElementById('boardspace24').appendChild(fragment);
            piecenum = 2;
            console.log(piecenum);
            }
        }
    }
    //moves 3rd piece from start
    if (piecenum == 2){
        if (cardnum == 2 || cardnum == 1){
            document.getElementById("redpiece3").onclick = function() {
            var fragment = document.createDocumentFragment();
            fragment.appendChild(document.getElementById('redpiece3'));
            document.getElementById('boardspace24').appendChild(fragment);
            piecenum = 3;
            console.log(piecenum);
            }
        }
    }
    //moves 4th piece from start
    if (piecenum == 3){
        if (cardnum == 2 || cardnum == 1){
            document.getElementById("redpiece4").onclick = function() {
            var fragment = document.createDocumentFragment();
            fragment.appendChild(document.getElementById('redpiece4'));
            document.getElementById('boardspace24').appendChild(fragment);
            piecenum = 4;
            console.log(piecenum);
            }
        }
    }
}
    
    //moving pieces around board
    document.getElementById("movespaces").onclick = function(){
        document.getElementById("redpiece1").onclick = function() {
            var fragment = document.createDocumentFragment();
            fragment.appendChild(document.getElementById('redpiece1'));
            boardspacenum += cardnum;
            if (boardspacenum <= 23){
                document.getElementById('boardspace'+boardspacenum).appendChild(fragment);
            }
            else if(boardspacenum <= 26){
                document.getElementById('boardspacered'+boardspacenum).appendChild(fragment);
            }
            else {
                document.getElementById('boardspacered27').appendChild(fragment);
                homenum = 1;
            }
        }
        document.getElementById("redpiece2").onclick = function() {
            var fragment = document.createDocumentFragment();
            fragment.appendChild(document.getElementById('redpiece2'));
            boardspacenum2 += cardnum;
            if (boardspacenum2 <= 23){
                document.getElementById('boardspace'+boardspacenum2).appendChild(fragment);
            }
            else if(boardspacenum2 <= 26){
                document.getElementById('boardspacered'+boardspacenum2).appendChild(fragment);
            }
            else {
                document.getElementById('boardspacered27').appendChild(fragment);
                homenum = 2;
            }
        }
        document.getElementById("redpiece3").onclick = function() {
            var fragment = document.createDocumentFragment();
            fragment.appendChild(document.getElementById('redpiece3'));
            boardspacenum3 += cardnum;
            if (boardspacenum3 <= 23){
                document.getElementById('boardspace'+boardspacenum3).appendChild(fragment);
            }
            else if(boardspacenum3 <= 26){
                document.getElementById('boardspacered'+boardspacenum3).appendChild(fragment);
            }
            else {
                document.getElementById('boardspacered27').appendChild(fragment);
                homenum = 3;
            }
        }
        document.getElementById("redpiece4").onclick = function() {
            var fragment = document.createDocumentFragment();
            fragment.appendChild(document.getElementById('redpiece4'));
            boardspacenum4 += cardnum;
            if (boardspacenum4 <= 23){
                document.getElementById('boardspace'+boardspacenum4).appendChild(fragment);
            }
            else if(boardspacenum4 <= 26){
                document.getElementById('boardspacered'+boardspacenum4).appendChild(fragment);
            }
            else {
                document.getElementById('boardspacered27').appendChild(fragment);
                homenum = 4;
                document.getElementById("win").innerHTML = "YOU WIN!";
                document.getElementById("win").style.fontSize = "100px";

                let win = document.getElementsByClassName("win");

                for(let i = 0; i < win.length; i++){
                    TweenLite.from(win[i], {duration: .5 , alpha:0 });
                }
            }
        }

}
}


//BLUE SECTION

let piecenumB = 0;
let homenumB = 0;
let boardspacenumB = 6;
let boardspacenumB2 = 6;
let boardspacenumB3 = 6;
let boardspacenumB4 = 6;

//picks up card
function cardB(){
    let cardnum = Math.floor(Math.random() * 10) + 1;
    let cards = [cardnum];
    document.getElementById("newcard").style.backgroundColor = "gray";
    document.getElementById("newcard").style.height = "300px";
    document.getElementById("newcard").style.width = "200px";
    document.getElementById("newcard").innerHTML = [cards];

    //moves pieces from start
    //moves 1st piece from start
    document.getElementById("movestart").onclick = function(){
    if (piecenumB == 0){
        if (cardnum == 2 || cardnum == 1){
            document.getElementById("bluepiece1").onclick = function() {
            var fragment = document.createDocumentFragment();
            fragment.appendChild(document.getElementById('bluepiece1'));
            document.getElementById('boardspace6').appendChild(fragment);
            piecenumB = 1;
            console.log(piecenumB);
            }
        }
    }
    //moves 2nd piece from start
    if (piecenumB == 1){
        if (cardnum == 2 || cardnum == 1){
            document.getElementById("bluepiece2").onclick = function() {
            var fragment = document.createDocumentFragment();
            fragment.appendChild(document.getElementById('bluepiece2'));
            document.getElementById('boardspace6').appendChild(fragment);
            piecenumB = 2;
            console.log(piecenumB);
            }
        }
    }
    //moves 3rd piece from start
    if (piecenumB == 2){
        if (cardnum == 2 || cardnum == 1){
            document.getElementById("bluepiece3").onclick = function() {
            var fragment = document.createDocumentFragment();
            fragment.appendChild(document.getElementById('bluepiece3'));
            document.getElementById('boardspace6').appendChild(fragment);
            piecenumB = 3;
            console.log(piecenumB);
            }
        }
    }
    //moves 4th piece from start
    if (piecenumB == 3){
        if (cardnum == 2 || cardnum == 1){
            document.getElementById("bluepiece4").onclick = function() {
            var fragment = document.createDocumentFragment();
            fragment.appendChild(document.getElementById('bluepiece4'));
            document.getElementById('boardspace6').appendChild(fragment);
            piecenumB = 4;
            console.log(piecenumB);
            }
        }
    }
}
    
    document.getElementById("movespaces").onclick = function(){
        document.getElementById("bluepiece1").onclick = function() {
            var fragment = document.createDocumentFragment();
            fragment.appendChild(document.getElementById('bluepiece1'));
            boardspacenumB += cardnum;
            if (boardspacenumB >= 5){
                document.getElementById('boardspace'+boardspacenumB).appendChild(fragment);
            }
            if (boardspacenumB >= 25){
                boardspacenumB = cardnum;
                document.getElementById('boardspace'+boardspacenumB).appendChild(fragment);
            }
            else if(boardspacenumB >= 26){
                document.getElementById('boardspaceblue'+boardspacenumB).appendChild(fragment);
            }
            else {
                document.getElementById('boardspaceblue').appendChild(fragment);
                homenumB = 1;
            }
        }
        document.getElementById("redpiece2").onclick = function() {
            var fragment = document.createDocumentFragment();
            fragment.appendChild(document.getElementById('redpiece2'));
            boardspacenum2 += cardnum;
            if (boardspacenum2 <= 23){
                document.getElementById('boardspace'+boardspacenum2).appendChild(fragment);
            }
            else if(boardspacenum2 <= 26){
                document.getElementById('boardspacered'+boardspacenum2).appendChild(fragment);
            }
            else {
                document.getElementById('boardspacered27').appendChild(fragment);
                homenum = 2;
            }
        }
        document.getElementById("redpiece3").onclick = function() {
            var fragment = document.createDocumentFragment();
            fragment.appendChild(document.getElementById('redpiece3'));
            boardspacenum3 += cardnum;
            if (boardspacenum3 <= 23){
                document.getElementById('boardspace'+boardspacenum3).appendChild(fragment);
            }
            else if(boardspacenum3 <= 26){
                document.getElementById('boardspacered'+boardspacenum3).appendChild(fragment);
            }
            else {
                document.getElementById('boardspacered27').appendChild(fragment);
                homenum = 3;
            }
        }
        document.getElementById("redpiece4").onclick = function() {
            var fragment = document.createDocumentFragment();
            fragment.appendChild(document.getElementById('redpiece4'));
            boardspacenum4 += cardnum;
            if (boardspacenum4 <= 23){
                document.getElementById('boardspace'+boardspacenum4).appendChild(fragment);
            }
            else if(boardspacenum4 <= 26){
                document.getElementById('boardspacered'+boardspacenum4).appendChild(fragment);
            }
            else {
                document.getElementById('boardspacered27').appendChild(fragment);
                homenum = 4;
                document.getElementById("win").innerHTML = "YOU WIN!";
                document.getElementById("win").style.fontSize = "100px";
            }
        }

}
}