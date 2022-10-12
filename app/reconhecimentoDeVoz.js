const elementoChute = document.getElementById('chute');

const SpeechRecognition = window.SpeechRecognition || webkitSpeechRecognition;

const recognition = new SpeechRecognition();
recognition.lang = 'pt-br'
recognition.start()

recognition.addEventListner('result', onSpeak);

function onSpeak(e) {
    chute = e.resolts[0][0].transcript
    exibeChuteNaTela(chute);
    verificaSeOChutePossuiUmValorValido(chute);
}

function exibeChuteNaTela(chute) {
    elementoChute.innerHTML= `
        <div>Você disse</div>
        <span class="box">${chute}<span>
    `
}

recognition.addEventListner('end', () => recognition.start());
