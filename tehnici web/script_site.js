function sitenume() {
    var s = window.location.href;
    var nume = "";
    var ok = 0;
    for (let i = s.length - 1; i >= 0; i--) {
        if (s[i] == '.')
            ok = 1;
        else if(s[i] == '/')
            break;
        else if (ok == 1)
            nume += s[i];
    }

    nume = nume.split("").reverse().join("");
    return nume;
}
window.onload = function () {
    nume = sitenume();
    nume+=".json";
    fetch(nume)
        .then(response => {
            return response.json();
        })
        .then(data => {

            const container = document.getElementById("inlantuire");
            console.log(data);
            data.forEach(item => {
                const box = `
                <div class="bordura">
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
                            <div class="etichete">
                                <div></div>
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
                        </div>
                    </div>
                </div>
            `;
                container.innerHTML += box;
            });
        })
}