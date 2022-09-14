//create a synth and connect it to the main output (your speakers)
let synthApp = {
    synth: new Tone.Synth().toDestination(),
    notes: ["C4", "D4", "E4", "F4"],
    currentNote: 0,
    playSound() {
        this.synth.triggerAttackRelease(this.notes[this.currentNote],"8n");
        this.currentNote ++;

        setTimeout(this.playSound.bind(this), 500);
    }
}

function playSound(){
    synthApp.synth.triggerAttackRelease("C4", "8n");
}