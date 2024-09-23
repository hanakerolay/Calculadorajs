function retagulo() {
    let base = Number(document.getElementById("baseret").value)
    let altura = Number(document.getElementById("alturaret").value)
    let areadoretangulo = base * altura
    document.getElementById("areadoretangulo").innerText = areadoretangulo
}

function triangulo() {
    let basetria = Number(document.getElementById("basetria").value)
    let alturatria = Number(document.getElementById("alturatria").value)
    let areadotriangulo = (basetria * alturatria)/2
    document.getElementById("areadotriangulo").innerText = areadotriangulo
}

function losango() {
    let diagonalmaior = Number(document.getElementById("diagonalmaior").value)
    let diagonalmenor = Number(document.getElementById("diagonalmenor").value)
    let areadodiagonal = (diagonalmaior * diagonalmenor)/2
    document.getElementById("areadodiagonal").innerText = areadodiagonal
}

function trapezio() {
    let basemaior = Number(document.getElementById("basemaior").value)
    let basemenor = Number(document.getElementById("basemenor").value)
    let alturatrap = Number(document.getElementById("alturatrap").value)
    console.log(basemaior)
    console.log(basemenor)
    console.log(alturatrap)
    let areadotrapezio = ((basemaior + basemenor)*alturatrap)/2
    document.getElementById("areadotrapezio").innerText = areadotrapezio
}

function cubo() {
    let base = Number(document.getElementById("basecubo").value)
    let areadocubo = base *3
    document.getElementById("areadocubo").innerText = areadocubo
}

function paralelepípedo() {
    let ladoA = Number(document.getElementById("ladoA").value)
    let ladoB = Number(document.getElementById("ladoB").value)
    let ladoC = Number(document.getElementById("ladoC").value)
    console.log(ladoA)
    console.log(ladoB)
    console.log(ladoC)
    let areadoparalelepípedo = ladoA * ladoB * ladoC
    document.getElementById("areadoparalelepípedo").innerText = areadoparalelepípedo
}

function calcAreaesfera() {
    let raio = Number(document.getElementById("esfera").value)
    const pi = 3.14;
    let Areaesfera = 4 * pi * (raio ** 2)
    document.getElementById("calcAreaesfera").innerText = "A área da esfera é: " + Areaesfera.toFixed(2)
}

function calcAreaCilindro() {
    let raio = Number(document.getElementById("raioCilin").value)
    let alturaCilin = Number(document.getElementById("alturaCilin").value)
    const pi = 3.14;
    let calcVolumeCilindro = pi * raio ** 2 * alturaCilin
    document.getElementById("AreaCilin").innerText = `O volume do cilindro é: ${calcVolumeCilindro.toFixed(2)}`
}

function calcAreaCone() {
    let raiocon = Number(document.getElementById("raiocon").value)
    let alturacon = Number(document.getElementById("alturacon").value)
    const pi = 3.14;
    let calcAreaCone = pi * raiocon ** 2 * alturacon * 0.33
    document.getElementById("AreaCone").innerText = `O volume do Cone é: ${calcAreaCone.toFixed(2)}`
}

function piramide() {
    let ladoPiram = Number(document.getElementById("ladopiram").value);
    let alturaPira = Number(document.getElementById("alturapira").value);
    let volumePiramide = (ladoPiram ** 2 * alturaPira) / 3;
    document.getElementById("areapiramide").innerText = `O volume da pirâmide é: ${volumePiramide.toFixed(2)}`;
}

function segundograu() {
    let valorA = Number(document.getElementById("A1").value);
    let valorB = Number(document.getElementById("B1").value);
    let valorC = Number(document.getElementById("C1").value);

    let delta = (valorB ** 2) - (4 * valorA * valorC);
    if (delta < 0) {
        document.getElementById("segundograu").innerText = "A equação não possui raízes reais.";
    } else {
        let x1 = (-valorB + Math.sqrt(delta)) / (2 * valorA);
        let x2 = (-valorB - Math.sqrt(delta)) / (2 * valorA);
        document.getElementById("segundograu").innerText = "x1 = " + x1 + " -- " + "x2 = " + x2;
    }
}




function calcular() {
    let catetoOposto = Number(document.getElementById('catetoOposto').value);
    let catetoAdjacente =Number(document.getElementById('catetoAdjacente').value);

    // Calcular a hipotenusa usando o Teorema de Pitágoras
    let hipotenusa = Math.sqrt(Math.pow(catetoOposto, 2) + Math.pow(catetoAdjacente, 2));

    // Calcular seno, cosseno e tangente
    let seno = catetoOposto / hipotenusa;
    let cosseno = catetoAdjacente / hipotenusa;
    let tangente = catetoOposto / catetoAdjacente;

    // resultados
    document.getElementById('resultado').innerHTML = `
        <p><strong>Hipotenusa:</strong> ${hipotenusa.toFixed(2)}</p>
        <p><strong>Seno:</strong> ${seno.toFixed(2)}</p>
        <p><strong>Cosseno:</strong> ${cosseno.toFixed(2)}</p>
        <p><strong>Tangente:</strong> ${tangente.toFixed(2)}</p>
    `;
}