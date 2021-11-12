let idade = document.getElementsByName('maior');

let btn = document.querySelector('#btn');

btn.addEventListener('click', cadastrar);

function cadastrar(event) {
  event.preventDefault();

  let condTxt = 'Leu e aceitou';
  // trata radio de maioridade
  let idd;
  for (let maior of idade) {
    if (maior.checked) {
      idd = maior.value;
      break;
    }
  }

  // trata checkbox de aceite de termos de uso
  let cond = document.getElementById('termos');
  //cond.checked ? (condTxt = 'Leu e aceitou') : (condTxt = 'Não aceitou');

  const nome = document.querySelector('#name');
  const email = document.querySelector('#email');
  const nascimento = document.querySelector('#nascimento');
  const imagem = document.querySelector('#image');

  function validar() {
    let formOk = false; // inicia uma variável como false

    const maior = document.querySelectorAll(
      'input[name="maior"]:checked'
    ).length;

    // valida os campos interrompendo o script
    if (nome.value == '') {
      alert('Preenche o nome ai carai');
      return;
    }
    if (email.value == '') {
      alert('Preencha o email também pow');
      return;
    }
    if (nascimento.value == '') {
      alert('Nanii?? não quer ganhar presentes?');
      return;
    }

    if (imagem.value == '') {
      alert('Tem que pôr uma imagem aí!');
      return;
    }
    if (maior == 0) {
      alert('Marque Sim para maior de idade ou Não para menor.');
      return;
    }
    if (cond.checked === false) {
      alert('Aceite os termos');
      return;
    }

    // se não der erro, o script continua até setar a variável como true
    formOk = true;

    // retorna essa variável, que se não houver erro, ou seja, o script não foi interrompido, essa é retornada como true; caso haja erro, ou seja, o script foi interrompido, ela retorna false
    return formOk;
  }

  // valida se a função retornou false, se sim, interrompe o script
  if (!validar()) return;

  // se não retornou false, continua o script a partir daqui...

  // trata imagem
  const imgField = document.querySelector('#image').value;
  const imgElem = document.querySelector('.imagem');
  imgElem.setAttribute('src', imgField);

  // popula a tela com os dados inseridos pelo usuário
  document.querySelector('p').innerText = `Nome: ${nome.value}
    E-mail: ${email.value}
    Data de Nascimento: ${nascimento.value}
    Maior: ${idd}`;
  //Termos de uso: ${cond}`;
}
