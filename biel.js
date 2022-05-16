
let fname = prompt("Qual seu nome?");

var pontos = 0
let q1 = document.querySelector('#q1')
let q2 = document.querySelector('#q2')
let q3 = document.querySelector('#q3')
let q4 = document.querySelector('#q4')
let q5 = document.querySelector('#q5')
let q6 = document.querySelector('#q6')
let q7 = document.querySelector('#q7')
let q8 = document.querySelector('#q8')
let q9 = document.querySelector('#q9')
let q10 = document.querySelector('#q10')

let botao = document.querySelector('#enviar')
botao.addEventListener('click', enviar)

function enviar(){
    if (q1.value == "opção 1") {
        pontos++
    }
    if (q2.value == "opção 1") {
       pontos++
    }    
    if (q3.value == "opção 3") {
        pontos++
    }
    if (q4.value == "opção 1") {
        pontos++
    }
    if (q5.value == "opção 3") {
        pontos++
    }
    if (q6.value == "opção 2") {
        pontos++
    }
    if (q7.value == "opção 1") {
        pontos++
    }
    if (q8.value == "opção 2") {
        pontos++
    }
    if (q9.value == "opção 1") {
        pontos++
    }
    if (q10.value == "opção 1") {
        pontos++
    }
    pontuacao.textContent = String(fname+", você tirou "+pontos+" pontos!");

    pontos=0
}
