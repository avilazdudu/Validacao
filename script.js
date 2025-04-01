const btnValidar = document.getElementById('validar')
const media = 7
btnValidar.addEventListener('click', function() {
    let quantidade = document.getElementById('numero').value;
    let conteudo = "<ul>";
    let notaFinal = "";
    let classe = ""; 
    
    if (quantidade <= 0) {
        alert("Digite um número maior que zero!");
        return;
    }

    for (let contador = 1; contador <= quantidade; contador++){
        let nota = Math.random()*10;
        nota = nota.toFixed(1)
        notaFinal =(nota >= media) ? "Aprovado" : "Reprovado";
        classe = (nota >= media) ? "aprovado" : "reprovado"; 

        conteudo = conteudo+'<li><input type="text" class="aluno" id="aluno'+contador+'"placeholder="Nome do aluno '+contador+'"/> - nota: '+nota+' - <span class="'+classe+'">'+notaFinal+'</span></li>';
        
    }
    conteudo = conteudo+ "</ul>";
    document.getElementById('alunos').innerHTML = conteudo;
});