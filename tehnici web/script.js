
function toate(nume) {
    fetch(nume)
        .then(response => {
            return response.json();
        })
        .then(data => {

            const container = document.getElementById("poate_iti_place");
            console.log(data);
            data.forEach(locatie => {
                const box = `
                <li class = "box">
                    <div>
                        <div class="caseta">
                            <div>
                                <a href="${locatie.link}" class="linc">
                                    <img class="imagine" alt="imagine" src="${locatie.imagine}">
                                </a>
                            </div>
                            <div class="about">
                                <h3 class="titlu"><a href="${locatie.link}" class="linc">${locatie.titlu}</a></h3>
                                <div class="locatie">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" class="icon"
                                        xml:space="preserve" fill="#000000" stroke-width="10">
                                        <g stroke-width="0"></g>
                                        <g stroke-linecap="round" stroke-linejoin="round"></g>
                                        <g>
                                            <g>
                                                <path fill="#F76D57" d="M32,52.789l-12-18C18.5,32,16,28.031,16,24c0-8.836,7.164-16,16-16s16,7.164,16,16 c0,4.031-2.055,8-4,10.789L32,52.789z"></path>
                                                <g>
                                                    <path fill="#394240" d="M32,0C18.746,0,8,10.746,8,24c0,5.219,1.711,10.008,4.555,13.93c0.051,0.094,0.059,0.199,0.117,0.289 l16,24C29.414,63.332,30.664,64,32,64s2.586-0.668,3.328-1.781l16-24c0.059-0.09,0.066-0.195,0.117-0.289 C54.289,34.008,56,29.219,56,24C56,10.746,45.254,0,32,0z M44,34.789l-12,18l-12-18C18.5,32,16,28.031,16,24 c0-8.836,7.164-16,16-16s16,7.164,16,16C48,28.031,45.945,32,44,34.789z">
                                                    </path>
                                                    <circle fill="#394240" cx="32" cy="24" r="8"></circle>
                                                </g>
                                            </g>
                                        </g>
                                    </svg>
                                    <a class="linc1" href="${locatie.locatieLink}">${locatie.locatieText}</a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <li>
            `;
                container.innerHTML += box;
            });
        })
}
function verificaCuvant(text, cuvant) {
    return text.includes(cuvant) ? 1 : 0;
}
function verificaText(v, text) {
    var ok = 0;
    for (let i = 0; i < v.length; i++)
        ok = ok | verificaCuvant(text, v[i]);
    return ok;
}
function deschide(site) {
    window.open(site)
    return;
}
function culoare() {
    var v = '0123456789ABCDEF';
    let nume = '#';
    for (let i = 0; i < 6; i++) {
        nume += v[Math.floor(Math.random() * 16)];
    }
    return nume;
}
function add(event) {
    var id = event.currentTarget.id;
    var v = localStorage.getItem("vector");
    document.getElementById(id).classList.toggle('heart');
    if (v) {
        var aidi = v.trim().split(" ");
        if (aidi.includes(id.toString())) {
            aidi = aidi.filter(item => item !== id.toString());
        }
        else {
            aidi.push(id.toString());
        }
        v = aidi.join(" ");
        localStorage.setItem("vector", v);
    }
    else {
        v = id.toString();
        localStorage.setItem("vector", v);
    }


}
window.onload = function () {
    var form = document.getElementById("formular");
    var cultural = ["cultural", "muzeu", "galerie", "arta", "statuie", "biserica", "arhitectura", "istorie", "teatru", "literatura", "expozitie"];
    var natura = ["copaci", "natura", "parc", "rau", "flori", "fauna", "ecologie", "aer"]
    var sport = ["sala", "forta", "fotbal", "tenis", "alergat", "bicicleta", "fitness", "yoga", "inot", "sport"]
    var evenimente = ["concert", "festival", "petrecere", "gală", "workshop", "conferință", "spectacol", "stand-up", "muzica", "muzical", "eveniment"];
    var familie = ["copii", "părinți", "acasă", "masă", "bunici", "vacanță", "căldură", "relaxant", "sigur"];
    form.onsubmit = function (event) {
        var v = document.getElementById("redirect").value;
        var ok = 0
        if (v.length == 0) {
            alert("Formularul este gol!"); return;
        }
        ok = verificaText(cultural, v);

        if (ok == 1) {
            deschide("cultural.html");
            return;
        }

        ok = verificaText(natura, v);
        if (ok == 1) {
            deschide("natura.html");
            return;
        }

        ok = verificaText(sport, v);
        if (ok == 1) {
            deschide("sport.html");
            return;
        }

        ok = verificaText(evenimente, v);
        if (ok == 1) {
            deschide("evenimente.html");
            return;
        }

        ok = verificaText(familie, v);
        if (ok == 1) {
            deschide("familie.html");
            return;
        }

        deschide("eroare.html");
        return;
    }
    nume = "toate.json";
    toate(nume);
    var special = document.getElementsByClassName("special")[0];
    special.onclick = function () {
        document.getElementById("popup").style.display = "flex";
        var da = document.getElementById("da");
        var nu = document.getElementById("nu");
        da.onclick = function () {
            var color = culoare();
            document.getElementsByClassName("head1")[0].style.backgroundColor = color;
            document.getElementsByClassName("text_search")[0].style.backgroundColor = color;

            document.getElementById("popup").style.display = "none";
            return;
        }
        nu.onclick = function () {
            document.getElementById("popup").style.display = "none";
            return;
        }
    }
    // document.getElementsByClassName("p2")[0].classList.remove("part2");
    document.body.onkeydown = function (event) {
        const tag = event.target.tagName.toLowerCase();

        if (tag === 'input')
            return;
        var t = event;
        var t = event.key;
        if (t == "s") {
            document.getElementsByClassName("p2")[0].classList.toggle('negru');
        }
        else return;
    }
    var v = localStorage.getItem("vector");
    var id = "8";
    if (v) {
        var aidi = v.trim().split(" ");
        if (aidi.includes(id)) {
            document.getElementById("8").classList.toggle("heart");
        }
    }
}