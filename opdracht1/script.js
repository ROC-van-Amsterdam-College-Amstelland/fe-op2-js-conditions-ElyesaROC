// A) maak 2 verschillende variabelen met twee willekeurige integers (zelf kiezen)

// jouw code hierondeer-->> 
var getal1 = 1;
var getal2 = 2;

// B) toon beide getallen op het scherm met document.getElementById('<jouw_gekozen_id>').innerHTML

// jouw code hieronder-->>
document.getElementById("getal1").innerHTML = getal1;
document.getElementById("getal2").innerHTML = getal2;

// C) Vraag de gebruiker om een INPUT waarde door prompt() te gebruiken. 
// Gebruik de prompt()-waarde om een variabelen te 'vullen'

// jouw code hieronder-->>
var getal1 = prompt("input")
var getal2 = prompt("input")


// D) Vergelijk de twee getallen met elkaar door gebruik te maken van conditions  if()

// jouw code hieronder-->>
if (getal1 < getal2) {
    document.getElementById("main").style.backgroundColor = "yellow";
}

