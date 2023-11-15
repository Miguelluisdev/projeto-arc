const containerHeader = document.getElementById("container23")
const changeText = document.getElementById("change-text")

const zaun = document.getElementById("zaun");
const piltover = document.getElementById("piltover");
const title1 = document.getElementById("title-1");
const piltoverIcon = document.getElementById("piltover-icon");
const zaunRegion = document.getElementById("zaun-region");
const p1Pilt = document.getElementById("p1-pilt");

const containerGrid = document.getElementById("container-grid");
const bg1 = document.getElementById("bg1");
const bg2 = document.getElementById("bg2");
const bg3 = document.getElementById("bg3");
const bg4 = document.getElementById("bg4");
const bg5 = document.getElementById("bg5");
const bg6 = document.getElementById("bg6");
const bg7 = document.getElementById("bg7");
const bg8 = document.getElementById("bg8");

const title1Grid = document.getElementById("title1-grid");
const title2Grid = document.getElementById("titl2-grid");
const title3Grid = document.getElementById("title3-grid");
const title4Grid = document.getElementById("title4-grid");
const title5Grid = document.getElementById("title5-grid");
const title6Grid = document.getElementById("title6-grid");
const title7Grid = document.getElementById("title7-grid");
const title8Grid = document.getElementById("title8-grid");


const title2 = document.getElementById("title2");
const imgSlide1 = document.getElementById("img-slide1");
const imgSlide2 = document.getElementById("img-slide2");
const imgSlide3 = document.getElementById("img-slide3");
const imgSlide4 = document.getElementById("img-slide4");
const imgSlide5 = document.getElementById("img-slide5");
const imgSlide6 = document.getElementById("img-slide6");
const imgSlide7 = document.getElementById("img-slide7");
const title3 = document.getElementById("title3");
const p2Pilt = document.getElementById("p2");
const zaunSect = document.getElementById("zaun-section");

piltover.addEventListener("click", () => {

  mudaBgPiltover()
  changeText.textContent = "PILTOVER"

  title1.textContent = "Piltover"
  piltoverIcon.setAttribute("src", "https://cdn.discordapp.com/attachments/1151211352958959826/1174117479933558875/piltover_crest_icon.png?ex=65666d1d&is=6553f81d&hm=b71e02207064064af9ce6c188c70bf8be1b45933d07167f31773984776030c2f&");
  
  p1Pilt.textContent = "Piltover é uma cidade próspera e progressiva cujo poder e influência estão em crescimento. Ela é o centro cultural de Valoran, onde a arte, o artesanato, o comércio e a inovação andam de mãos dadas. Seu poder não vem de soberania militar, mas através dos motores do comércio e do pensamento de vanguarda. Situada no despenhadeiro acima do distrito de Zaun e de frente para o oceano, frotas de navios passam por seus portões do mar gigantescos, trazendo iguarias do mundo todo. A riqueza que isso gera deu lugar a um aumento sem precedentes no crescimento da cidade. Piltover se reinventou - e continua se reinventando - como uma cidade onde fortunas podem ser feitas e sonhos podem ser realizados. Os crescentes clãs de mercadores investiram no desenvolvimento dos empreendimentos mais incríveis: grandes loucuras artísticas, pesquisa hextec esotérica e monumentos arquitetônicos em seu poder. Como cada vez mais inventores estão se envolvendo com a história de hextec, Piltover se tornou um ímã para os artesãos mais habilidosos do mundo. Abaixo  alguns dos protagonistas de Piltover:";

  zaunRegion.style.backgroundImage = "url('https://cdn.discordapp.com/attachments/1151211352958959826/1174119277511585894/piltover-01-as.jpg?ex=65666ec9&is=6553f9c9&hm=831572e17b829e05d330b8ead41309fc5427946c2fdc717c46ec1b35f3ba6fb6&')";

  containerGrid.style.backgroundImage = "url('https://cdn.discordapp.com/attachments/1151211352958959826/1174141083391885322/piltover-01-as.jpg?ex=65668318&is=65540e18&hm=870aa43d06b9124ff0865ef98f3524258318c102783a8c7db2a4a5d148c3eda4&')";


  bg1.style.backgroundImage = "url('https://cdn.discordapp.com/attachments/1151211352958959826/1174140511964123196/caitlyn.jpg?ex=65668290&is=65540d90&hm=c0a2c5b389b6a2defbcf76e8daf1d6f8ff550642b249009854cf01df7af201fc&')";
  bg2.style.backgroundImage = "url('https://cdn.discordapp.com/attachments/1151211352958959826/1174140512769417247/jayce-pil.jpg?ex=65668290&is=65540d90&hm=094c35fc8804d40ff260b4733d96837c0cd52826ae9ac04ae7605ee941c311d1&')";
  bg3.style.backgroundImage = "url('https://cdn.discordapp.com/attachments/1151211352958959826/1174147717900025868/mel.jpg?ex=65668946&is=65541446&hm=f8eeea712f30557c025464e5cc6689e40048dec7d9ea8510f334870b59c1fb03&')";
  bg4.style.backgroundImage = "url('https://cdn.discordapp.com/attachments/1151211352958959826/1174147332086956032/heimer-arc.jpg?ex=656688ea&is=655413ea&hm=e24f716128f0c908e855b45608412af511b015d3d3993e8ecf54f3612c970127&')";
  bg5.style.backgroundImage = "url('https://cdn.discordapp.com/attachments/1151211352958959826/1174140511699873872/ambessa.jpg?ex=65668290&is=65540d90&hm=452b3e8a2996b76636ce75e9d0172662db7d5a7cec078f4e5f414ff597944fce&')";
  bg6.style.backgroundImage = "url('https://cdn.discordapp.com/attachments/1151211352958959826/1174140327960002711/download_2.jpg?ex=65668264&is=65540d64&hm=7e0c5c73ca9825cc94a4d685721c72f29de38f52171f9ef50045a91e316dda28&')";
  bg7.style.backgroundImage = "url('https://cdn.discordapp.com/attachments/1151211352958959826/1174140340039602328/9_2_PBE_Update__Shurima_Ward_Skins_New_Orianna_Splash_Art_Galactic_Renekton_Texture_Update.jpg?ex=65668267&is=65540d67&hm=589c3ff7e3f517fe45ccf3ec7c2b2c8053aa91bf251c424d72e65e6368e86aa5&')";
  bg8.style.backgroundImage = "url('https://cdn.discordapp.com/attachments/1151211352958959826/1174140789597671527/Seraphine_Wallpaper.jpg?ex=656682d2&is=65540dd2&hm=c55c4cc5d5539af42273de3053bfaec802a6bc52f620e5dc08b65609c4947b4e&')"

  title1Grid.textContent = "Caitlyn";
  title2Grid.textContent = "Jayce";
  title3Grid.textContent = "Mel";
  title4Grid.textContent = "Heimerdinger";
  title5Grid.textContent = "Ambessa";
  title6Grid.textContent = "Camile";
  title7Grid.textContent = "Orianna";
  title8Grid.textContent = "Seraphine";

  title2.textContent = "Piltover A Cidade do Amanhã";
  title3.textContent = "Sobre Piltover"
  p2Pilt.textContent = 'Cada um dos clãs mercantis de Piltover tem suas próprias insígnias para identificar suas casas, oficinas, expedições, galpões, invenções, marcas e locais de negócios. Cada insígnia apresenta muitos significados e interpretações, alguns deles óbvios, outros nem tanto.Dizem que as ruas de Piltover são pavimentadas com ouro, mas, para a decepção de muitos viajantes esperançosos, isso é uma simples metáfora. No entanto, as estruturas e ruas mais esplendorosas da cidade são fundadas pelos clãs mercantis, que exibem sua riqueza sempre que podem.O interior dos prédios de Piltover não são menos ornados do que o exterior, e são comumente maravilhas de engenhosidade tecnológica por si só. As novas estruturas de Piltover são graciosas misturas de mármore polido, treliças de bronze e vidro cintilante que ficam ao lado de construções mais antigas, feitas de pedra lavrada e madeira desgastada. Torres plissadas encrustadas de ouro e prata estendem-se para os céus limpos, com pontes arqueadas atravessando fossos entre os cumes de colinas.'

  



  imgSlide1.setAttribute("src","https://cdn.discordapp.com/attachments/1151211352958959826/1174141027729281075/piltover-entrancetreasury.jpg?ex=6566830b&is=65540e0b&hm=0e359a0e94cfe6acba6a48d3958c00ba0eb2bbad56d4d0e70ad29bd86916ae9a&" );
  imgSlide2.setAttribute("src", "https://cdn.discordapp.com/attachments/1151211352958959826/1174141083391885322/piltover-01-as.jpg?ex=65668318&is=65540e18&hm=870aa43d06b9124ff0865ef98f3524258318c102783a8c7db2a4a5d148c3eda4&");
  imgSlide3.setAttribute("src","https://cdn.discordapp.com/attachments/879808195240005745/1174129566369976421/Visual_Day.png?ex=6566785e&is=6554035e&hm=5b92649c3d2f5e772ac0fda487775cc15e80927967e95fadee897d6ae2f97d04&");
  imgSlide4.setAttribute("src", "https://cdn.discordapp.com/attachments/879808195240005745/1174150679711977564/piltover_culture_01.jpg?ex=65668c08&is=65541708&hm=d37c990456d64ba76b9f3c656984b7cad215a26b51e81ce9bb3df9bdd1d9a2b0&")
  imgSlide5.setAttribute("src", "https://cdn.discordapp.com/attachments/879808195240005745/1174151003621306448/Piltover_Season_1_Episode_4_001.webp?ex=65668c55&is=65541755&hm=f4099b2af93636a04e2819ab291de92dc824847ba290363a73775b650e36bf90&");
  imgSlide6.setAttribute("src", "https://cdn.discordapp.com/attachments/879808195240005745/1174151002971185183/Piltover_Zaun_header.jpg?ex=65668c55&is=65541755&hm=952df4782c2131a03e63b0b72432fb6b316453d9d4cf0740abf46fa32e2bab22&");
  imgSlide7.setAttribute("src" , "https://cdn.discordapp.com/attachments/879808195240005745/1174151003248021504/World-of-RiotX-Arcane-Key-Art-910x547.jpg?ex=65668c55&is=65541755&hm=43fb128796e0c3d7aaaa349b09b879a5b4e0d52455b856d9f09de971976f7d10&" );
  
  
  zaunSect.style.backgroundImage = "url('https://cdn.discordapp.com/attachments/1151211352958959826/1174154837361971270/arcane-vi-lol-skin-hd-wallpaper-371d.jpg?ex=65668fe7&is=65541ae7&hm=2144d6195f648f4d39a098bb3f08686a83b0b1fe25b149ac8ffb83b69092289e&')"


});








function mudaBgPiltover(){
  if (window.matchMedia("(min-width: 744px)").matches) {
      containerHeader.style.backgroundImage = "url('https://cdn.discordapp.com/attachments/879808195240005745/1174129566369976421/Visual_Day.png?ex=6566785e&is=6554035e&hm=5b92649c3d2f5e772ac0fda487775cc15e80927967e95fadee897d6ae2f97d04&')";
      } else {
      containerHeader.style.backgroundImage = "url('https://cdn.discordapp.com/attachments/879808195240005745/1174129566369976421/Visual_Day.png?ex=6566785e&is=6554035e&hm=5b92649c3d2f5e772ac0fda487775cc15e80927967e95fadee897d6ae2f97d04&')";
      }
}

function mudaBgZaun(){
  if (window.matchMedia("(min-width: 744px)").matches) {
      containerHeader.style.backgroundImage = "url('https://cdn.discordapp.com/attachments/1151211352958959826/1174122789159047238/arcane-header.jpg?ex=6566720f&is=6553fd0f&hm=7c22e11799e34f3787da37f663f6c58da543f470406fbb0e180889df7b608348&')";
      } else {
      containerHeader.style.backgroundImage = "url('https://cdn.discordapp.com/attachments/1151211352958959826/1174122789159047238/arcane-header.jpg?ex=6566720f&is=6553fd0f&hm=7c22e11799e34f3787da37f663f6c58da543f470406fbb0e180889df7b608348&')";
      }
}
