function sitenume() {
    var s = window.location.href;
    var nume = "";
    var ok = 0;
    for (let i = s.length - 1; i >= 0; i--) {
        if (s[i] == '.')
            ok = 1;
        else if (s[i] == '/')
            break;
        else if (ok == 1)
            nume += s[i];
    }

    nume = nume.split("").reverse().join("");
    return nume;
}
function recomandari(nume) {
    fetch(nume)
        .then(response => {
            return response.json();
        })
        .then(data => {

            const container = document.getElementById("inlantuire");
            console.log(data);
            data.forEach(item => {
                var id = item.id;
                clasa = "";
                v = localStorage.getItem("vector");
                if (v) {
                    var aidi = v.trim().split(" ");
                    if (aidi.includes(id.toString())) {
                        clasa = "heart";
                    }
                }
                const box = `
                <div class="bordura ${item.id}">
                    <div class="box">
                        <div class="imagine">
                            <a href="${item.link}">
                                <img src="${item.imagine}" alt="${item.titlu}" class="src1">
                            </a>
                        </div>
                        <div class="content">
                            <div class="title">
                                <div class="rand1">
                                    <a href="${item.link}" class="text">${item.titlu}</a>
                                </div>
                                <div class="locatie">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" class="icon"
                                        xml:space="preserve" fill="#000000" stroke-width="10">
                                        <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                                        <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
                                        <g id="SVGRepo_iconCarrier">
                                            <g>
                                                <path fill="#F76D57"
                                                    d="M32,52.789l-12-18C18.5,32,16,28.031,16,24c0-8.836,7.164-16,16-16s16,7.164,16,16 c0,4.031-2.055,8-4,10.789L32,52.789z">
                                                </path>
                                                <g>
                                                    <path fill="#394240" d=""></path>
                                                    <circle fill="#394240" cx="32" cy="24" r="8"></circle>
                                                </g>
                                            </g>
                                        </g>
                                    </svg>
                                    <a href="${item.locatieLink}">${item.locatieText}</a>
                                </div>
                            </div>
                            <div class="rest">
                                <div class="descriere">
                                    <p class="text">${item.descriere}</p>
                                </div>
                            </div>
                        </div>
                        <div class="box_program">
                            <div class="text">
                                <p class="program">Program:</p>
                                <br>
                                <div class="zile">
                                    <p>${item.program}</p>
                                </div>
                            </div>
                            <div class="etichete">
                            <div id = "${item.id}" onclick="add(event)" class = "alb ${clasa}">
                                <svg class = "icon" viewBox="0 0 24.00 24.00" 
                                    xmlns="http://www.w3.org/2000/svg" stroke="#000000" stroke-width="2">
                                    <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                                    <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
                                    <g id="SVGRepo_iconCarrier">
                                        <path
                                            d="M8.10627 18.2468C5.29819 16.0833 2 13.5422 2 9.1371C2 4.27416 7.50016 0.825464 12 5.50063L14 7.49928C14.2929 7.79212 14.7678 7.79203 15.0607 7.49908C15.3535 7.20614 15.3534 6.73127 15.0605 6.43843L13.1285 4.50712C17.3685 1.40309 22 4.67465 22 9.1371C22 13.5422 18.7018 16.0833 15.8937 18.2468C15.6019 18.4717 15.3153 18.6925 15.0383 18.9109C14 19.7294 13 20.5 12 20.5C11 20.5 10 19.7294 8.96173 18.9109C8.68471 18.6925 8.39814 18.4717 8.10627 18.2468Z"
                                            ></path>
                                    </g>
                                </svg>
                            </div>
                        </div>
                        </div>
                    </div>
                </div>
            `;
                var v = localStorage.getItem("vector");
                var id = item.id;
                if (v) {
                    var aidi = v.trim().split(" ");
                    if (aidi.includes(id)) {
                        container.innerHTML += box;
                    }
                }
            });
        })
}

function add(event) {
    var id = event.currentTarget.id;
    document.getElementById(id).classList.toggle('heart');
    var v = localStorage.getItem("vector");
    if (v) {
        var aidi = v.trim().split(" ");
        if (aidi.includes(id.toString())) {
            aidi = aidi.filter(item => item !== id.toString());
            document.getElementsByClassName(id)[0].parentNode.removeChild(document.getElementsByClassName(id)[0]);

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
    var nume = "chiartoate.json";
    recomandari(nume);

    var part2 = document.getElementsByClassName("part2")[0];
    document.body.onkeyup = function (event) {
        var t = event.key;
        if (t == "d") {
            part2.style.backgroundColor = "black";
            document.getElementById("selectie").style.color = "white";
            document.getElementById("timer").style.color = "white";
        }
        else if (t == "w")
            part2.style.backgroundColor = "white", document.getElementById("selectie").style.color = "black", document.getElementById("timer").style.color = "black";
        else if (t == "l")
            part2.style.backgroundColor = "lightgoldenrodyellow", document.getElementById("selectie").style.color = "black", document.getElementById("timer").style.color = "black";
        else return;
    }
    var del = document.getElementsByClassName("special")[0];
    del.onclick = function () {
        var unde = document.getElementsByClassName("bordura")[0];
        if (unde)
            unde.parentNode.removeChild(unde);
        else window.open("index.html");

    }

}