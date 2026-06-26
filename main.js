const numeroSenha = document.querySelector('.parametro-senha__texto');
let tamanhoSenha = 12;
numeroSenha.textContent = tamanhoSenha;
const letrasMaiusculas ='ABCDEFGHIJKLMNOPQRSTUVWXYZ';
const letrasMinusculas ='abcdefghijklmnopqrstuvwxyz'; 
const numeros = '0123456789';
const simbolos = '!@#$%¨&*()_+';
const botoes = document.querySelectorAll('.parametro-senha__botao');
const campoSenha = document.querySelector('#campo-senha');
const chekcbox = document.querySelectorAll('.checkbox');
const forcaSenha = document.querySelector('.forca');     

botoes[0].onclick = diminuiTamanho
botoes[1].onclick = aumentaTamanho
function diminuiTamanho(){
    if(tamanhoSenha > 1){
        //tamanhoSenha = tamanhoSenha - 1; 
        tamanhoSenha--;
    }
    numeroSenha.textContent = tamanhoSenha;
    gerarSenha();
}
function aumentaTamanho(){
    if(tamanhoSenha < 20){
        //tamanhoSenha = tamanhoSenha + 1; 
        tamanhoSenha++;
    }
    numeroSenha.textContent = tamanhoSenha;
    gerarSenha();
}


for (let i = 0; i < chekcbox.length; i++){
    chekcbox[i].onclick = gerarSenha;
}      

gerarSenha();

function gerarSenha(){
    let alfabeto = '';
    if (chekcbox[0].checked){
        alfabeto = alfabeto + letrasMaiusculas;
    }
    if (chekcbox[1].checked){
        alfabeto = alfabeto + letrasMinusculas;
    }
    if (chekcbox[2].checked){
        alfabeto = alfabeto + numeros;
    }
    if (chekcbox[3].checked){
        alfabeto = alfabeto + simbolos;
    }
    console.log(alfabeto);
let senha = '';
    for(let i = 0; i < tamanhoSenha; i++){
        let numeroAleatorio = Math.random()*alfabeto.length;
        numeroAleatorio = Math.floor(numeroAleatorio);
        senha = senha + alfabeto[numeroAleatorio];
    }
    campoSenha.value = senha;
    classificarSenha(alfabeto.length); 

} 

function classificarSenha(tamanhoAlfabeto){
    let entropia = tamanhoSenha * Math.log2(tamanhoAlfabeto);
    console.log(entropia);
    forcaSenha.classList.remove('fraca' , 'media' , 'forte');
    if (entropia > 57){
        forcaSenha.classList.add('forte');
    } else if(entropia > 35 && entropia < 57){  
        forcaSenha.classList.add('media');
    }else if (entropia < 35){
        forcaSenha.classList.add ('fraca');
    }
    const valorEntropia = document.querySelector('.entropia');
valorEntropia.textContent = "Um computador pode levar até " + Math.floor(2**entropia/(100e6*60*60*24)) + " dias para descobrir esta senha.";
}