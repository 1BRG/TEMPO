function verificaCuvant(text, cuvant) {
    return text.includes(cuvant) ? 1 : 0;
}
function verificaText(v, text) {
    var ok = 0;
    for(let i = 0; i < v.length; i ++)
        ok = ok | verificaCuvant(text, v[i]);
    return ok;
}
function deschide(site){
    window.open(site)
    return;
}
window.onload = function () {
    var form = document.getElementById("formular");
    var cultural = ["cultural", "muzeu", "galerie", "arta", "statuie", "biserica", "arhitectura", "istorie", "teatru", "literatura", "expozitie"];
    var natura = ["copaci", "natura", "parc", "rau", "flori", "fauna", "ecologie", "aer"]
    var sport = ["fotbal", "tenis", "alergat", "bicicleta", "fitness", "yoga", "inot"]
    var evenimente = ["concert", "festival", "petrecere", "gală", "workshop", "conferință", "spectacol", "stand-up"];
    var familie = ["copii", "părinți", "acasă", "masă", "bunici", "vacanță", "căldură", "relaxant", "sigur"];
    form.onsubmit = function (event) {
        var v = document.getElementById("redirect").value;
        var ok = 0
        if(v.length == 0){
            alert("Formularul este gol!"); return;}
        ok = verificaText(cultural, v);
        
        if(ok == 1){
        deschide("cultural.html");
        return;
        }

        ok = verificaText(natura, v);
        if(ok == 1){
        deschide("natura.html");
        return;
        }

        ok = verificaText(sport, v);
        if(ok == 1){
        deschide("sport.html");
        return;
        }

        ok = verificaText(evenimente, v);
        if(ok == 1){
        deschide("evenimente.html");
        return;
        }

        ok = verificaText(familie, v);
        if(ok == 1){
        deschide("familie.html");
        return;
        }
        
        deschide("eroare.html");
        return;
    }
}