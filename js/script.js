function retangulo() {
    let base = Number(document.getElementById("baseret").value);
    let altura = Number(document.getElementById("alturaret").value);
    
    // Loop while para garantir que os valores sejam válidos
    while (base <= 0 || altura <= 0) {
        alert("Valores inválidos! A base e a altura devem ser maiores que zero.");
        
        // Solicita novos valores
        base = Number(prompt("Digite um valor válido para a base:"));
        altura = Number(prompt("Digite um valor válido para a altura:"));
        
        // Atualiza os campos de entrada
        document.getElementById("baseret").value = base;
        document.getElementById("alturaret").value = altura;
    }

    // Calcula a área do retângulo
    let areadoretangulo = base * altura;
    document.getElementById("areadoretangulo").innerText = "O valor da área do retângulo é: " + areadoretangulo;
}


function triangulo() {
    let basetria = Number(document.getElementById("basetria").value)
    let alturatria = Number(document.getElementById("alturatria").value)
    let areadotriangulo = (basetria * alturatria)/2
    document.getElementById("areadotriangulo").innerText = "O valor do triangulo é: " + areadotriangulo
}

function losango() {
    let diagonalmaior = Number(document.getElementById("diagonalmaior").value)
    let diagonalmenor = Number(document.getElementById("diagonalmenor").value)
    let areadodiagonal = (diagonalmaior * diagonalmenor)/2
    document.getElementById("areadodiagonal").innerText = "O valor do losango é: " + areadodiagonal
}

function trapezio() {
    let basemaior = Number(document.getElementById("basemaior").value)
    let basemenor = Number(document.getElementById("basemenor").value)
    let alturatrap = Number(document.getElementById("alturatrap").value)
    console.log(basemaior)
    console.log(basemenor)
    console.log(alturatrap)
    let areadotrapezio = ((basemaior + basemenor)*alturatrap)/2
    document.getElementById("areadotrapezio").innerText = "O valor do trapezio é: " + areadotrapezio
}

function cubo() {
    let base = Number(document.getElementById("basecubo").value)
    let areadocubo = base *3
    document.getElementById("areadocubo").innerText = "O valor do cubo é: " + areadocubo
}

function paralelepípedo() {
    let ladoA = Number(document.getElementById("ladoA").value)
    let ladoB = Number(document.getElementById("ladoB").value)
    let ladoC = Number(document.getElementById("ladoC").value)
    console.log(ladoA)
    console.log(ladoB)
    console.log(ladoC)
    let areadoparalelepípedo = ladoA * ladoB * ladoC
    document.getElementById("areadoparalelepípedo").innerText = "O valor do paralelepípedo é: " + areadoparalelepípedo
}

function calcAreaesfera() {
    let raio = Number(document.getElementById("esfera").value)
    const pi = 3.14;
    let Areaesfera = 4 * pi * (raio ** 2)
    document.getElementById("calcAreaesfera").innerText = "A área da esfera é: " + Areaesfera
}

function calcAreaCilindro() {
    let raio = Number(document.getElementById("raioCilin").value)
    let alturaCilin = Number(document.getElementById("alturaCilin").value)
    const pi = 3.14;
    let calcVolumeCilindro = pi * raio ** 2 * alturaCilin
    document.getElementById("AreaCilin").innerText = "O volume do cilindro é: " + calcVolumeCilindro
}

function calcAreaCone() {
    let raiocon = Number(document.getElementById("raiocon").value)
    let alturacon = Number(document.getElementById("alturacon").value)
    const pi = 3.14;
    let calcAreaCone = pi * raiocon ** 2 * alturacon * 0.33
    document.getElementById("AreaCone").innerText = "O volume do Cone é: " + calcAreaCone
}

function piramide() {
    let ladoPiram = Number(document.getElementById("ladopiram").value);
    let alturaPira = Number(document.getElementById("alturapira").value);
    let volumePiramide = (ladoPiram ** 2 * alturaPira) / 3;
    document.getElementById("areapiramide").innerText = "O volume da pirâmide é: " + volumePiramide
}

