class FortuneCookie  {

    //list of all items to be picked from randomly
    items

    constructor(items) {
        //store the use set of items
        this.items = items;
    }

    //returns a random entry in the array
    pickRandom() {
        return this.items[Math.floor(Math.random() * this.items.length)];
    }

}

class Fortune extends FortuneCookie {

    outputElement

    constructor(element) {
        super(["You will travel to many exotic places in your lifetime", "Adversity is the parent of virtue", "You will conquer obstacles to achieve success", "Now is the time to try something new"]);
        this.outputElement = element;
    }

    shake() {
        let reply = this.pickRandom();
        this.outputElement.innerHTML = reply;
        
    }

    shake2() {
        let reply = this.pickRandom();
        this.outputElement.innerHTML = reply;
        b2.innerHTML = "Please open your cookie";
    }
}

let myFortune = new Fortune(document.getElementById("fortuneResponse"));
myFortune.shake();