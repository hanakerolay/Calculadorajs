function retagulo() {
    let base = Number(document.getElementById("baseret").value)
    let altura = Number(document.getElementById("alturaret").value)
    let areadoretangulo = base * altura
    document.getElementById("areadoretangulo").innerText = areadoretangulo
}

function triangulo() {
    let base = Number(document.getElementById("basetri").value)
    let altura = Number(document.getElementById("altura").value)
    let areadotriangulo = (base * altura)/2
    document.getElementById("areadotriangulo").innerText = areadotriangulo
}

function losango() {
    let base = Number(document.getElementById("diagonalmaior").value)
    let altura = Number(document.getElementById("diagonalmenor").value)
    let areadodiagonal = (base * altura)/2
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

function areadapirâmide() {
    let ladopira= Number(document.getElementById("ladopira").value)
    let alturapira = Number(document.getElementById("alturapira").value)
    let areadapirâmide = (ladopira**2 * alturapira)/3
    document.getElementById("areadapirâmide").innerText = areadapirâmide
}