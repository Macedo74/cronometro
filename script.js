// 1. Variáveis para guardar a matemática do tempo
let horas = 0;
let minutos = 0;
let segundos = 0;
let milisegundos = 0;

let cronometro; // Caixa vazia que vai guardar o nosso relógio funcionando

// 2. Variáveis para achar os textos no HTML (usando o "CPF" de cada um, o ID)
const txtHoras = document.getElementById('horas');
const txtMinutos = document.getElementById('minutos');
const txtSegundos = document.getElementById('segundos');
const txtMilisegundos = document.getElementById('milisegundos');

function rodarCronometro() {
    milisegundos++; // O "++" significa: some +1 toda vez que essa linha rodar

    if (milisegundos === 100) {
        milisegundos = 0; // Reseta o milissegundo
        segundos++;       // E joga +1 nos segundos
    }
    if (segundos === 60) {
        segundos = 0;
        minutos++;        // 60 segundos = +1 minuto
    }
    if (minutos === 60) {
        minutos = 0;
        horas++;          // 60 minutos = +1 hora
    }

    // Depois de fazer a conta, atualiza a tela do usuário
    txtHoras.innerText = formatarTempo(horas);
    txtMinutos.innerText = formatarTempo(minutos);
    txtSegundos.innerText = formatarTempo(segundos);
    txtMilisegundos.innerText = formatarTempo(milisegundos);
}

function formatarTempo(tempo) {
    // Se o tempo for menor que 10, coloca um "0" na frente. Se não, deixa como tá.
    return tempo < 10 ? `0${tempo}` : tempo;
}

// Executado quando clica em Iniciar
function iniciar() {
    clearInterval(cronometro); // Segurança: limpa qualquer cronômetro que já esteja rodando antes de começar outro
    
    // O setInterval faz a função "rodarCronometro" repetir a cada 10 milissegundos
    cronometro = setInterval(rodarCronometro, 10); 
}

// Executado quando clica em Pausar
function pausar() {
    clearInterval(cronometro); // Manda o setInterval parar de repetir
}

// Executado quando clica em Zerar
function zerar() {
    clearInterval(cronometro); // Para o relógio
    
    // Zera todas as variáveis na memória
    horas = 0;
    minutos = 0;
    segundos = 0;
    milisegundos = 0;
    
    // Força a tela a voltar a exibir 00
    txtHoras.innerText = '00';
    txtMinutos.innerText = '00';
    txtSegundos.innerText = '00';
    txtMilisegundos.innerText = '00';
}