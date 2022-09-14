class Instrument{
    constructor(loudness, onComplete, family, verb) {
        this.loudness = loudness;
        this.onComplete = onComplete;
        this.family = family;
        this.verb = verb;

    }

    play(duration) {
        setTimeout(this.onComplete, 1000);
        console.log(this.family + this.verb + "at" + this.loudness);
    }
}

class Brass extends Instrument{
    constructor(loudness, onComplete) {
        super(loudness, onComplete, "wood", "A5");
    }
}

class StringIns extends Instrument{
    constructor(loudness, onComplete) {
        super(loudness, onComplete, "string", "A5")
    }
}

class Percussion extends Instrument{
    constructor(loudness, onComplete) {
        super(loudness, onComplete, "percussion", "A5")
    }
}

let myBrasswind = new Brass(playNext);
let aString = new StringIns(playNext);
let oPercussion = new Percussion(playNext);

let i = 0;

let instruments = [myBrasswind, aString, oPercussion];

function playNext(){
    instruments[i].play();
    i++;
}