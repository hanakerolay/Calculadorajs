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
    let raio = document.getElementById("raio").value
    const pi = 3.14
    let calcAreaesfera = pi * raio**2 *1.3 
    document.getElementById("calcAreaesfera").innerText = calcAreaesfera
}

function calcAreaCilindro() {
    let raio = document.getElementById("raio").value
    const pi = 3.14
    let calcAreaCilindro = pi * raio**2 *altura
    document.getElementById("calcAreaCilindro").innerText = calcAreaCilindro
}

function calcAreaCone() {
    let raio = document.getElementById("raio").value
    const pi = 3.14
    let calcAreaCone = pi * raio**2 *altura
    document.getElementById("calcAreaCone").innerText = calcAreaCone
}

function piramide() {
    let ladopiram= Number(document.getElementById("ladopiram").value)
    let alturapira = Number(document.getElementById("alturapira").value)
    let areadapiramide = (ladopiram**2 * alturapira)/3
    document.getElementById("areadapiramide").innerText = areadapiramide
}

function segungrau() {
    let a = Number(document.getElementById("a").value)
    let b = Number(document.getElementById("b").value)
    let c = Number(document.getElementById("c").value)
    console.log(a)
    console.log(b)
    console.log(c)
    let segungrau = a**2 - b + c
    document.getElementById("segungrau").innerText = segungrau
}