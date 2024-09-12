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

function trapezio() {
    let ladoA = Number(document.getElementById("ladoA").value)
    let ladoB = Number(document.getElementById("ladoB").value)
    let ladoC = Number(document.getElementById("ladoC").value)
    console.log(ladoA)
    console.log(ladoB)
    console.log(ladoC)
    let areadoparalelepípedo = ladoA * ladoB * ladoC
    document.getElementById("areadotrapezio").innerText = areadoparalelepípedo
}