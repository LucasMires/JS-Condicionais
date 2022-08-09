
//---- DOM ----\\
let button = document.querySelector(".button")
let paragraph = document.querySelector(".paragraph")
//---- DOM ----\\

// Iniciando Evento \\
button.addEventListener("click", resultadoFinal)

function resultadoFinal() {
    let nome = prompt("Entre com o nome do aluno(a)")
    let materia1 = prompt("Digite a Matéria")
    let nota1 = parseFloat(prompt("Qual a nota?"))
    let presenca1 = parseInt(prompt("Qual a presença?"))

    if (nota1 >= 8 && presenca1 >=6) {
        
        let result = alert(`A nota do(a) ${nome} é de ${nota1} e sua presença de ${presenca1}: Aluno provado!`)
        paragraph.innerText = `A nota do(a) ${nome}  é de ${nota1} e sua presença de ${presenca1}: Aluno provado!`

        if (paragraph.classList.contains("textEffectReprovado")) {
            paragraph.classList.remove("textEffectReprovado")
            paragraph.classList.add("textEffectAprovado")
        
        } else {
            paragraph.classList.add("textEffectAprovado")
        }
    
    } else {

        let result = alert(`A nota do(a) ${nome} é de ${nota1} e sua presença de ${presenca1}: Aluno reprovado!`)
        paragraph.innerText = `A nota do(a) ${nome} é de ${nota1} e sua presença de ${presenca1}: Aluno reprovado!`

        if (paragraph.classList.contains("textEffectAprovado")) {
            paragraph.classList.remove("textEffectAprovado")
            paragraph.classList.add("textEffectReprovado")
        
        } else {
            paragraph.classList.add("textEffectReprovado")
        }
    }
}
// Finalizando Evento \\