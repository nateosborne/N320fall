let piecenum = 0;
let boardspacenum = 0;
let boardspacenum2 = 0;
let boardspacenum3 = 0;
let boardspacenum4 = 0;

//picks up card
function card(){
    let cardnum = Math.floor(Math.random() * 10) + 1;
    let cards = [cardnum];
    document.getElementById("newcard").style.backgroundColor = "gray";
    document.getElementById("newcard").style.height = "300px";
    document.getElementById("newcard").style.width = "200px";
    document.getElementById("newcard").innerHTML = [cards];

    //moves pieces from start
    //moves 1st piece from start
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
    
    if (cardnum != 1 && cardnum != 2){
        document.getElementById("redpiece1").onclick = function() {
            var fragment = document.createDocumentFragment();
            fragment.appendChild(document.getElementById('redpiece1'));
            boardspacenum += cardnum;
            document.getElementById('boardspace'+boardspacenum).appendChild(fragment);
        }
        document.getElementById("redpiece2").onclick = function() {
            var fragment = document.createDocumentFragment();
            fragment.appendChild(document.getElementById('redpiece2'));
            boardspacenum2 += cardnum;
            document.getElementById('boardspace'+boardspacenum2).appendChild(fragment);
        }
        document.getElementById("redpiece3").onclick = function() {
            var fragment = document.createDocumentFragment();
            fragment.appendChild(document.getElementById('redpiece3'));
            boardspacenum3 += cardnum;
            document.getElementById('boardspace'+boardspacenum3).appendChild(fragment);
        }
        document.getElementById("redpiece4").onclick = function() {
            var fragment = document.createDocumentFragment();
            fragment.appendChild(document.getElementById('redpiece4'));
            boardspacenum4 += cardnum;
            document.getElementById('boardspace'+boardspacenum4).appendChild(fragment);
        }

        if (boardspacenum > 23){

        }
    }
    
    // var svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");

    // var rect = document.createElementNS("http://www.w3.org/2000/svg", 'rect');
    // rect.setAttribute('width',100);
    // rect.setAttribute('height',200);
    // rect.setAttribute('fill','gray');
    // svg.appendChild(rect);
    // document.body.appendChild(svg);
}

