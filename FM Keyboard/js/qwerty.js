//This is a web test

var patch;

$.get('patches/mypatch.pd', function(patchStr){
    patch = Pd.loadPatch(patchStr)
    Pd.start()
});

function setup(){
}

function draw(){
    console.log(Pd);
    console.log(mouseX);
    Pd.send('variable', [mouseX]);
    Pd.send('carr', [mouseY]);
}









/*
function keyPressed(){
    console.log("You pressed the " + key + " key");
    var note = 0;

    switch(key){
        case "q":
            note = 72;
            col = 170;
            break;
        case "2":
            note = 73;
            col = 180;
            break;
        case "w":
            note = 74;
            col = 190;
            break;   
        case "3":
            note = 75;
            col = 200;
            break; 
        case "e":
            note = 76;
            col = 210;
            break;
        case "r":
            note = 77;
            col = 220;
            break;
        case "5":
            note = 78;
            col = 230;
            break;
        case "t":
            note = 79;
            col = 240;
            break;
        case "6":
            note = 80;
            col = 250;
            break;
        case "y":
            note = 81;
            col = 260;
            break;
        case "7":
            note = 82;
            col = 270;
            break;
        case "u":
            note = 83;
            col = 280;
            break;
        case "i":
            note = 84;
            col = 290;
            break; 
        case "9":
            note = 85;
            col = 300;
            break;
        case "o":
            note = 86;
            col = 310;
            break;
        case "0":
            note = 87;
            col = 320;
            break;
        case "p":
            note = 88;
            col = 330;
            break;
        case "z":
            note = 60;
            col = 50;
            break;
        case "s":
            note = 61;
            col = 60;
            break;
        case "x":
            note = 62;
            col = 70;
            break;
        case "d":
            note = 63;
            col = 80;
            break;
        case "c":
            note = 64;
            col = 90;
            break;
        case "v":
            note = 65;
            col = 100;
            break;
        case "g":
            note = 66;
            col = 110;
            break;
        case "b":
            note = 67;
            col = 120;
            break;
        case "h":
            note = 68;
            col = 130;
            break;
        case "n":
            note = 69;
            col = 140;
            break;
        case "j":
            note = 70;
            col = 150;
            break;
        case "m":
            note = 71;
            col = 160;
            break;
        case ",":
            note = 72;
            col = 170;
            break;
        case "l":
            note = 73;
            col = 180;
            break;
        case ".":
            note = 74;
            col = 190;
            break;
        case "ñ":
            note = 75;
            col = 200;
            break;
        case "-":
            note = 76;
            col = 210;
            break;
        default:
            console.log("Try another key");
            col = 0;
    }
    osc.freq(midiToFreq(note));
    

    //KeyPressed is the trigger to this
    env.triggerAttack();  
}

//KeyReleased is the trigger  for this
function keyReleased(){
    env.triggerRelease();
    col = 0;
}*/

//Everytime the slider's value is changing, all this is happening.
/*function volumeChange(value){
    console.log(attackLevel);
    attackLevel = value;
    env.mult(attackLevel);

}
*/
