import { personagem , JinxPlay} from "./personagens.js";

// game

const sortear = document.getElementById('sortear');
const firstScreen = document.getElementById("firstScreen");
const secondScreen = document.getElementById("secondScreen");
const telaAposta = document.getElementById("telaAposta");
const thirdScreen = document.getElementById("thirdScreen");
let oponente = document.getElementById("oponente");
let profileOponent = document.getElementById("imagemOponente");
let profileOponent2 = document.getElementById("imagemOponente2");
let nomeOponent = document.getElementById("nomeOponente");
let nomeOponentRes = document.getElementById("nomeOponenteRes");
const jinxed = document.getElementById("jinx");
const apostaRandom = document.getElementById("apostaRandom");
const apostaDefault = document.getElementById("apostaDefault");
let forcaOponente = document.getElementById("forcaOponente");
let agilidadeOponente = document.getElementById("agilidadeOponente")
let resistenciaOponente = document.getElementById("resistenciaOponente")
let forcaJinx = document.getElementById("forcaJinx")
let agilidadeJinx = document.getElementById("agilidadeJinx")
let resjinx = document.getElementById("ResJinx")
const resultado = document.getElementById("resultado")
const restart = document.getElementById("restart")


sortear.addEventListener("click", async () => {
  
  firstScreen.style.display = "none";
  secondScreen.style.display = "flex";

  const personaRandom = Math.floor(Math.random() * personagem.length)
  const oponentRandom = personagem[personaRandom] 
 
  setTimeout(() => {
    secondScreen.style.display = "none"
    telaAposta.style.display = "flex"

    profileOponent.setAttribute("src", oponentRandom.profile)
    nomeOponent.textContent = oponentRandom.nome

 apostaDefault.addEventListener("click",async () => {


  await comparacao(JinxPlay, oponentRandom)
  telaAposta.style.display = "none"
  thirdScreen.style.display = "flex"

    forcaOponente.innerText = oponentRandom.forca;
    agilidadeOponente.innerText = oponentRandom.agilidade;
    resistenciaOponente.innerText = oponentRandom.resistencia;
    nomeOponentRes.innerText = oponentRandom.nome;
    profileOponent2.setAttribute("src", oponentRandom.profile);

    forcaJinx.innerText = JinxPlay.forca
    agilidadeJinx.innerText = JinxPlay.agilidade
    resjinx.innerText = JinxPlay.resistencia

  });
  
   apostaRandom.addEventListener("click", async () => {


   await  comparacao(JinxPlay, oponentRandom)

        telaAposta.style.display = "none"
        thirdScreen.style.display = "flex"
        
        forcaOponente.innerText = oponentRandom.forca;
        agilidadeOponente.innerText = oponentRandom.agilidade;
        resistenciaOponente.innerText = oponentRandom.resistencia;
        nomeOponentRes.innerText = oponentRandom.nome;
        profileOponent2.setAttribute("src", oponentRandom.profile);
  
        forcaJinx.innerText = JinxPlay.forca
        agilidadeJinx.innerText = JinxPlay.agilidade
        resjinx.innerText = JinxPlay.resistencia
      });
  

    }, 3000);
})


async function comparacao(personagemApostado, personagem2) {
  return new Promise(resolve => {
    let score1 = 0;
    let score2 = 0;

    if (personagemApostado.forca > personagem2.forca) {
      score1++;
      console.log("+1 forca");
    } else if (personagem2.forca > personagemApostado.forca) {
      score2++;
    }

    if (personagemApostado.agilidade > personagem2.agilidade) {
      score1++;
      console.log("+1 agi");
    } else if (personagem2.agilidade < personagemApostado.agilidade) {
      score2++;
    }

    if (personagemApostado.resistencia > personagem2.resistencia) {
      score1++;
      console.log("+1 res");
    } else if (personagem2.resistencia < personagemApostado.resistencia) {
      score2++;
    }

    if (score1 > score2) {
      resultado.innerHTML = "Você Ganhou!!!!!!";
    } else{
      resultado.innerHTML = "Você Perdeu!!!!!!";
    }

    resolve();
  });
}

restart.addEventListener("click", ( ) => {
  thirdScreen.style.display = "none"
  firstScreen.style.display = "flex"
})



// scroll top
const scrollToTopButton = document.querySelector('.scrollTop');
const rootElement = document.documentElement;


function scrollToTop() {
  rootElement.scrollTo({
    top: 0,
    behavior: 'smooth',
  });
}


window.addEventListener('scroll', () => {
  if (rootElement.scrollTop > 100) {

    scrollToTopButton.classList.add('show');
  } else {
  
    scrollToTopButton.classList.remove('show');
  }
});


scrollToTopButton.addEventListener('click', scrollToTop);



// slider 
const slider = document.querySelector('.slider');
let count = 0;

function slideImage() {
    count++;
    if (count > 4) {
        count = 0;
    }
    const offset = -count * 50;
    slider.style.transform = `translateX(${offset}%)`;
}

setInterval(slideImage, 5000); 


// painel
const paineis = document.querySelectorAll('.painel');

paineis.forEach((painel) => {
    painel.addEventListener('click', () => {
        removeActiveClasses()
        painel.classList.add('active')
    })
})

function removeActiveClasses(){
    paineis.forEach(painel => {
        painel.classList.remove('active')
    })
}



