function isMobile() {
    if (sessionStorage.desktop)
        return false;
    else if (localStorage.mobile)
        return true;
    var mobile = ['iphone', 'ipad', 'android', 'blackberry', 'nokia', 'opera mini', 'windows mobile', 'windows phone', 'iemobile'];
    for (var i in mobile)
        if (navigator.userAgent.toLowerCase().indexOf(mobile[i].toLowerCase()) > 0)
            return true;
    return false;
}

const $form = document.querySelector('#form');
const buttonSubmit = document.querySelector('#submit');
const urlDesktop = 'https://web.whatsapp.com/';
const urlMobile = 'whatsapp://';
const phone = '5571992032468';

let tiposDeContato = '';

$form.addEventListener('submit', (event) => {
    let checkboxes = document.querySelector(".checkboxes")

    for(let i = 0; i < checkboxes.length; i++) {
        if(checkboxes[i].checked) {
            tiposDeContato = ''+ checkboxes[i].value
        } 
    }
    
    setTimeout(() => {
        let nome = document.querySelector('#nome').value
        let email = document.querySelector('#email').value
        let tel = document.querySelector('#tel').value
        let cidade = document.querySelector('#cidade').value
        let mensagem = document.querySelector('#mensagem').value
        let pro = document.querySelector('#pro').value
        let academico = document.querySelector('#academico').value
        
        
           let message = 'send?phone=' + phone + '&text=*_Olá, vim pelo seu portifólio!_*%0A%0A*Meu nome é:*%0A' + nome + '%0A*Esse é o meu e-mail*%0A' + email + '%0A*Meu número de telefone é esse:*%0A' + tel + '%0A*Eu falo da cidade de:*%0A' + cidade + '%0A*Quero um contato:*%0A' + tiposDeContato + '%0A*Meu Comentário:*%0A' + mensagem +  ''
        if (isMobile()) {
            window.open(urlMobile + message)
        } else {
            window.open(urlDesktop + message)
        }
    }
    );
    event.preventDefault()
}
);

