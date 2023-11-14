const containerHeader = document.getElementById("container23")
const changeText = document.getElementById("change-text")
const zaun = document.getElementById("zaun");
const piltover = document.getElementById("piltover");
const title1 = document.getElementById("title-1");
const piltoverIcon = document.getElementById("piltover-icon");
const zaunRegion = document.getElementById("zaun-region");
const p1Pilt = document.getElementById("p1-pilt");







piltover.addEventListener("click", () => {

  mudaBgPiltover()
  changeText.textContent = "PILTOVER"

  title1.textContent = "Piltover"
  piltoverIcon.setAttribute("src", "https://cdn.discordapp.com/attachments/1151211352958959826/1174117479933558875/piltover_crest_icon.png?ex=65666d1d&is=6553f81d&hm=b71e02207064064af9ce6c188c70bf8be1b45933d07167f31773984776030c2f&");
  
  p1Pilt.textContent = "Piltover é uma cidade próspera e progressiva cujo poder e influência estão em crescimento. Ela é o centro cultural de Valoran, onde a arte, o artesanato, o comércio e a inovação andam de mãos dadas. Seu poder não vem de soberania militar, mas através dos motores do comércio e do pensamento de vanguarda. Situada no despenhadeiro acima do distrito de Zaun e de frente para o oceano, frotas de navios passam por seus portões do mar gigantescos, trazendo iguarias do mundo todo. A riqueza que isso gera deu lugar a um aumento sem precedentes no crescimento da cidade. Piltover se reinventou - e continua se reinventando - como uma cidade onde fortunas podem ser feitas e sonhos podem ser realizados. Os crescentes clãs de mercadores investiram no desenvolvimento dos empreendimentos mais incríveis: grandes loucuras artísticas, pesquisa hextec esotérica e monumentos arquitetônicos em seu poder. Como cada vez mais inventores estão se envolvendo com a história de hextec, Piltover se tornou um ímã para os artesãos mais habilidosos do mundo. Abaixo  alguns dos protagonistas de Piltover:";

  zaunRegion.style.backgroundImage = "url('https://cdn.discordapp.com/attachments/1151211352958959826/1174119277511585894/piltover-01-as.jpg?ex=65666ec9&is=6553f9c9&hm=831572e17b829e05d330b8ead41309fc5427946c2fdc717c46ec1b35f3ba6fb6&')"

  
  
});

function mudaBgPiltover(){
  if (window.matchMedia("(min-width: 744px)").matches) {
      containerHeader.style.backgroundImage = "url('https://cdn.discordapp.com/attachments/915428575509872640/1174124597260582934/arcane-intro-piltover-bknov93of349me0p.jpg?ex=656673be&is=6553febe&hm=84ad29a786e9a25e790cca59663975a03010ca1e5ed7239f56c9270401cf84b2&')";
      } else {
      containerHeader.style.backgroundImage = "url('https://cdn.discordapp.com/attachments/915428575509872640/1174124597260582934/arcane-intro-piltover-bknov93of349me0p.jpg?ex=656673be&is=6553febe&hm=84ad29a786e9a25e790cca59663975a03010ca1e5ed7239f56c9270401cf84b2&')";
      }
}

function mudaBgZaun(){
  if (window.matchMedia("(min-width: 744px)").matches) {
      containerHeader.style.backgroundImage = "url('https://cdn.discordapp.com/attachments/1151211352958959826/1174122789159047238/arcane-header.jpg?ex=6566720f&is=6553fd0f&hm=7c22e11799e34f3787da37f663f6c58da543f470406fbb0e180889df7b608348&')";
      } else {
      containerHeader.style.backgroundImage = "url('https://cdn.discordapp.com/attachments/1151211352958959826/1174122789159047238/arcane-header.jpg?ex=6566720f&is=6553fd0f&hm=7c22e11799e34f3787da37f663f6c58da543f470406fbb0e180889df7b608348&')";
      }
}
