function appreciation(m) {
    let appreciation;
    switch (true) {
        case (m < 6):
            appreciation = "Très Faible";
            break;
        case (m >= 6 && m < 10):
            appreciation = "Faible";
            break;
        case (m >= 10 && m < 13):
            appreciation = "Moyen";
            break;
        case (m >= 13 && m < 16):
            appreciation = "Bien";
            break;
        case (m >= 16 && m < 19):
            appreciation = "Très Bien";
            break;
        case (mm >= 19):
            appreciation = "Excellent";
            break;
        default:
            appreciation = "None";
            break;
    }
    return appreciation;
}

function calculer() {
    let note1 = document.getElementById("note1").value;
    let note2 = document.getElementById("note2").value;
    let note3 = document.getElementById("note3").value;

    if (isNaN(note1) || isNaN(note2) || isNaN(note3)) {
        alert("Une des trois notes saisies n'est pas correcte !");
    }
    else {
        note1 = Number(note1);
        note2 = Number(note2);
        note3 = Number(note3);
        let moyenne = (note1 + note2 + note3) / 3;
        document.getElementById("moyenne").innerHTML = moyenne.toFixed(2);
        document.getElementById("appreciation").innerHTML = appreciation(moyenne);
        document.getElementById("resultat").style.visibility = "visible";
    }
}