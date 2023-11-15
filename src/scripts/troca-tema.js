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

const personContainer = document.getElementById("person-container");
const img1 = document.getElementById("img1");
const img2 = document.getElementById("img2");
const img3 = document.getElementById("img3");
const img4 = document.getElementById("img4");
const img5 = document.getElementById("img5");
const nome1 = document.getElementById("nome1");
const nome2 = document.getElementById("nome2");
const nome3 = document.getElementById("nome3");
const nome4 = document.getElementById("nome4");
const nome5 = document.getElementById("nome5");

const zaunRegion1 = document.getElementById("zaun-region1");
const title4 = document.getElementById("title4");
const poliPiltover = document.getElementById("poli-piltover1");
const poliPiltover2 = document.getElementById("poli-piltover2")
const p3Pilt = document.getElementById("p3-pilty");

const zaunRegion3 = document.getElementById("zaun-region3");
const title5 = document.getElementById("title5");
const imgHex = document.getElementById("img-hextec");
const p4Pilty = document.getElementById("p4-pilty");


zaun.addEventListener("click", () => {
  mudaBgZaun()
  changeText.textContent = "ZAUN"
  
  title1.textContent = "ZAUN"
  piltoverIcon.setAttribute("src", "https://cdn.discordapp.com/attachments/866700822942973972/1174421664566624370/zaun_crest_icon.png?ex=65678868&is=65551368&hm=ccc4db69b0378dedf26fbe0ccaad4ef97ad04deaee0ca00ae5ac3b65fc808ec4&");
  
  p1Pilt.textContent = "Zaun é um grande distrito subterrâneo, aos pés de cânions profundos e vales que cortam Piltover. A pouca luz que chega lá é filtrada pelas fumaças que saem dos emaranhados de canos corroídos e refletem do vidro manchado de sua arquitetura industrial. Zaun e Piltover já foram unidas, mas agora são sociedades simbióticas, mas separadas. Apesar de existir no crepúsculo perpétuo da poluição, Zaun prospera com seu povo vibrante e sua rica cultura. A riqueza de Piltover permitiu que Zaun se desenvolvesse em paralelo; um espelho escuro da cidade acima. Muitas das mercadorias que chegam a Piltover acabam entrando no mercado clandestino de Zaun, e os inventores hextec que consideram que as restrições impostas na cidade acima são muito rígidas descobrem que suas pesquisas perigosas são bem-vindas em Zaun. O desenvolvimento desenfreado de tecnologias voláteis e da indústria imprudente fez com que as extensões de Zaun ficassem poluídas e perigosas. Correntes de derramamento tóxico estagnaram nas partes mais baixas da cidade, mas mesmo aqui as pessoas encontram maneiras de existir e prosperar. Logo abaixo uma breve apresentação dos protagosnistas que vivem nessa cidade";

  zaunRegion.style.backgroundImage = "url('https://cdn.discordapp.com/attachments/866700822942973972/1174422052267098212/zaun.jpg?ex=656788c4&is=655513c4&hm=72d70ce98e3f990813c3bc2c3449ab3e3a9600f3bcf2d001114a57763f54366f&')";


  containerGrid.style.backgroundImage = "url('https://cdn.discordapp.com/attachments/866700822942973972/1174422549304725584/Zaun-02.jpg?ex=6567893b&is=6555143b&hm=65d94e58fd6a0d8d8fbc88293f532690698e46e0dfbc3adf15dc4df108dddeb9&')";


  bg1.style.backgroundImage = "url('https://cdn.discordapp.com/attachments/866700822942973972/1174423140147929200/Arcane_Jinx.jpg?ex=656789c8&is=655514c8&hm=0e681e0d64b61b1423a09f62ca1916344ef776dead4c8b7e5e01b19dddabe3cb&')";
  bg2.style.backgroundImage = "url('https://cdn.discordapp.com/attachments/866700822942973972/1174423140521218088/Arcane_Vi.jpg?ex=656789c8&is=655514c8&hm=defacc7ed0050fe4dc32285e7adf7b6782f4659921e10fbdf0a3ef5a91a8981b&')";
  bg3.style.backgroundImage = "url('https://cdn.discordapp.com/attachments/866700822942973972/1174423141095837736/ekko.jpg?ex=656789c8&is=655514c8&hm=54890d07cb1298e794521c857a04b3c29bc24c331ce3ed29f5d64d1b0df55146&')";
  bg4.style.backgroundImage = "url('https://cdn.discordapp.com/attachments/866700822942973972/1174423141683044452/Vander_Arcane_Wallpaper_-_iXpap.jpg?ex=656789c8&is=655514c8&hm=2c72101eaa8cc3cda766e41283638294c9c63a3430d28caced7e64c9121af3a8&')";
  bg5.style.backgroundImage = "url('https://cdn.discordapp.com/attachments/866700822942973972/1174423246817460277/silco.jpg?ex=656789e1&is=655514e1&hm=61e404a8064af9998f2f27ece17974c13bb864b333fbe01a6188ef72173def04&')";
  bg6.style.backgroundImage = "url('https://cdn.discordapp.com/attachments/866700822942973972/1174423140756103249/arcane-singed.jpg?ex=656789c8&is=655514c8&hm=c9788c1465757145a35df15f697eb6cab89a2d450f714d5eb67035db8902bed1&')";
  bg7.style.backgroundImage = "url('https://cdn.discordapp.com/attachments/866700822942973972/1174423141368479795/Twitch.jpg?ex=656789c8&is=655514c8&hm=a200bf53ca583ee3de995015a636019e97756ff142ebc570ff085d28963d4dfa&')";
  bg8.style.backgroundImage = "url('https://cdn.discordapp.com/attachments/866700822942973972/1174423141980835921/warwick.jpg?ex=656789c8&is=655514c8&hm=c4dbe675eb22561fa3576fd44209db29f2ebde74ab94c7f0302880f54935a66e&')"

  title1Grid.textContent = "JINX";
  title2Grid.textContent = "VI";
  title3Grid.textContent = "EKKO";
  title4Grid.textContent = "VANDER";
  title5Grid.textContent = "SILCO";
  title6Grid.textContent = "SINGED";
  title7Grid.textContent = "TWITCH";
  title8Grid.textContent = "WARWICK";

  
  title2.textContent = "Zaun A SubFeria";
  title3.textContent = "Sobre Zaun"
  p2Pilt.textContent = 'A Vida em Zaun A baixa expectativa de vida dos trabalhadores de Zaun resulta em um grande número de órfãos. Pivetes do Sumidouro podem ser encontrados implorando, roubando ou trabalhando para receber pagamento em lugares onde seu tamanho pequeno é uma vantagem. Quando os canos de Zaun entopem com gosma tóxica, os quimio- -encanadores usam suas hastes corrosivas para desentupi-los. Uma placa protetora para o rosto é essencial, já que as casas de cura já estão lotadas de quimio-encanadores cegos e queimados. Os viginautas, empregados pelos Barões da Química para supervisionar os catadores do Sumidouro que andam em pernas de pau e trabalhadores de fábricas, garantem que esses desafortunados não tentem manter algo valioso para si. Nada é desperdiçado em Zaun e mesmo as terras tóxicas interiores do Sumidouro podem ser vasculhadas por algo a ser recolhido. Esses ambientes tóxicos são hostis demais para um humano desprotegido, então os catadores do Sumidouro trabalham andando pelo esgoto em pernas de pau de metal. Abaixo veja alguns exemplos da vestimenta do povo de Zaun:'

  



  imgSlide1.setAttribute("src","https://cdn.discordapp.com/attachments/866700822942973972/1174425897663737906/zaun-depths.jpg?ex=65678c59&is=65551759&hm=f9ff11666782138043e18f8edbe4c1aab23b2f3ef3c0405e5c3993607f181c60&" );
  imgSlide2.setAttribute("src", "https://cdn.discordapp.com/attachments/866700822942973972/1174425895851790406/Jinx-Piltover-and-Zaun-LoR.jpg?ex=65678c59&is=65551759&hm=b885b1f1d1d82a2362d806ed042a2aaadf5985c67d3436fdd6cbfefdc82278ff&");
  imgSlide3.setAttribute("src","https://cdn.discordapp.com/attachments/866700822942973972/1174425896900366446/zaun.jpg?ex=65678c59&is=65551759&hm=d4ec78b34abba80c5d7614268132f8b6dc09d01e45db4c018ff106c5f3dac7a6&");
  imgSlide4.setAttribute("src", "https://cdn.discordapp.com/attachments/866700822942973972/1174425897277857873/Zaun-02.jpg?ex=65678c59&is=65551759&hm=5ae68e084630148a7b869126015de4320d4196a613cf5eacf5b649f293c78cbc&")
  imgSlide5.setAttribute("src", "https://cdn.discordapp.com/attachments/866700822942973972/1174426017180438558/Fun_Where_They_Run__Creating_Zaun_in_a_CG.jpg?ex=65678c76&is=65551776&hm=774edf5bb62b998e70fee67b75c56babd16f39b3ed74243f787190ca5c526b48&");
  imgSlide6.setAttribute("src", "https://cdn.discordapp.com/attachments/866700822942973972/1174425896543858749/Vi_violet_Arcane_wallpaper__3.jpg?ex=65678c59&is=65551759&hm=46c5876136c31b5e544e353ecbf4e1863568355ffc0de7455a1756caaaf8d888&");
  imgSlide7.setAttribute("src" , "https://cdn.discordapp.com/attachments/866700822942973972/1174425896254439585/Lor-Zaun_and_Piltover_Jayison_Devadas.jpg?ex=65678c59&is=65551759&hm=47ce01a145d154fe990620af48e32ca6ee3a902c6e0c8f9f0cac9a6bb1834270&" );
  
  
  zaunSect.style.backgroundImage = "url('https://cdn.discordapp.com/attachments/866700822942973972/1174426944117416066/arcane-jinx-lol-skin-splash-art-hd-wallpaper-uhdpaper.com-161e.jpg?ex=65678d53&is=65551853&hm=c04e0f47f7e4559f4ac5902447e4152dcd6b46efd4f8f7a01d5ad718946b5b12&')";


  
  personContainer.style.backgroundImage = "url('https://cdn.discordapp.com/attachments/866700822942973972/1174425897663737906/zaun-depths.jpg?ex=65678c59&is=65551759&hm=f9ff11666782138043e18f8edbe4c1aab23b2f3ef3c0405e5c3993607f181c60&')";
  img1.style.backgroundImage = "url('https://cdn.discordapp.com/attachments/866700822942973972/1174427705425547274/zaun_promenade_03.png?ex=65678e08&is=65551908&hm=dcf17a2171d6077af3daad4e27eeb9aaa2ebe818727942c9c76a55b6b92a046c&')";
  img2.style.backgroundImage = "url('https://cdn.discordapp.com/attachments/866700822942973972/1174427705811402802/zaun_promenade_04_1.png?ex=65678e08&is=65551908&hm=562016961f65397c7c2fec23380b0e0c77fd5cb07d5cdb542238002e19f09508&')";
  img3.style.backgroundImage = "url('https://cdn.discordapp.com/attachments/866700822942973972/1174427706209882192/zaun_promenade_05.png?ex=65678e08&is=65551908&hm=9d9771450bc374b077e897d46d389d3e3f2765a59ed6703a327e31ab2fb985b2&')";
  img4.style.backgroundImage = "url('https://cdn.discordapp.com/attachments/866700822942973972/1174427706545405972/zaun_sump_02.png?ex=65678e09&is=65551909&hm=9f0542417e27e60712dbef514d55759a2acacd17f6365fc9d00faaec197b0f61&')";
  img5.style.backgroundImage = "url('https://cdn.discordapp.com/attachments/866700822942973972/1174427706864181400/zaun_sump_03.png?ex=65678e09&is=65551909&hm=a463c3db3b41f86f03470f34882efa4676047c42c1cadbefbdca70882418e66b&')";


  nome1.textContent = "MERCADOR HORTICULTOR";
  nome2.textContent = "PESQUISADOR QUIMTEC";
  nome3.textContent = "RESIDENTE DO CALÇADÃO";
  nome4.textContent = "GAROTO DE ZAUN";
  nome5.textContent = "HOMEM DE ZAUN";


  
  zaunRegion1.style.backgroundImage = "url('https://cdn.discordapp.com/attachments/866700822942973972/1174428547201368154/renata-bsron.jpg?ex=65678ed1&is=655519d1&hm=709b5b883fa337c2752eb7262bb5392869a2260626fa70fdf96c44c13a9e898a&')";

  title4.textContent = "Barões da Quimica"
  poliPiltover.setAttribute("src" , "https://cdn.discordapp.com/attachments/866700822942973972/1174427704582492160/zaun_baron_02.png?ex=65678e08&is=65551908&hm=7326a9f03e8f8e368e350840d40cea885a3d469606f29e437c564be559c8fd1e&");
  poliPiltover2.setAttribute("src" , "https://cdn.discordapp.com/attachments/866700822942973972/1174427705031270451/zaun_baron_04.png?ex=65678e08&is=65551908&hm=98a7be9bb38279fedd3d8772dab1989f3602d5559289447db5cc2197feeccad1&");
  p3Pilt.textContent = "Barões da Química Uma aliança tênue de conveniência existe entre os poderosos Barões da Química de Zaun, indivíduos poderosos que controlam, cada um, uma zona da cidade. São eles e seus brutamontes que impedem que Zaun seja tomada pelo caos. Baronesa Velveteen Lenare Uma baronesa da química com muitos interesses de negócios em Piltover, Lenare lida principalmente com pesquisas em tecnologia golem. Seu corpo destruído estava morrendo, então ela fez com que transplantassem sua cabeça em um substituto movido a hexenergia. Ela visita Piltover regularmente para banhos de fluídos e transfusões de sangue e óleo. Barão Petrok Grime Grime perdeu os seus dois braços em uma explosão em uma de suas refinarias químicas. Apesar, ou talvez por causa disso, seu estoque quimtec tem algumas das misturas mais procuradas."


  zaunRegion3.style.backgroundImage = "url('https://cdn.discordapp.com/attachments/866700822942973972/1174429856616955934/lab-quimtec.jpg?ex=65679009&is=65551b09&hm=8cfce20fb85ee5c16ecd94aa76d1fe9d44219fc73a83d30200160b70285c37a9&')";

  title5.textContent = "Quimtec"
  imgHex.setAttribute("src" , "https://cdn.discordapp.com/attachments/866700822942973972/1174429857246089356/zaun_tools_01.png?ex=65679009&is=65551b09&hm=5e6e494134264a4713c9085d40e9ea4bf3d495a8edcab3510578dded22e40429&");
  p4Pilty.textContent = "'Quimtec' é um termo utilizado na série de animação 'Arcane', que se passa no universo de League of Legends. Os pesquisadores de Zaun recorrem à Quimtec quando não têm acesso aos fundos e meios para criar tecnologias Hextec. Aqui está uma expansão do conceito da Quimtec em  'Arcane': A Quimtec é uma forma alternativa e mais arriscada de alcançar avanços tecnológicos em Zaun. Ela envolve a manipulação de substâncias químicas potentes e instáveis para conferir poder a criações mecânicas, dispositivos e armamentos. Ao contrário da tecnologia Hextec, que se baseia na magia da Energia Hextec, a Quimtec é menos previsível e muito mais perigosa.";

})


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
  
  
  zaunSect.style.backgroundImage = "url('https://cdn.discordapp.com/attachments/1151211352958959826/1174154837361971270/arcane-vi-lol-skin-hd-wallpaper-371d.jpg?ex=65668fe7&is=65541ae7&hm=2144d6195f648f4d39a098bb3f08686a83b0b1fe25b149ac8ffb83b69092289e&')";

  personContainer.style.backgroundImage = "url('https://cdn.discordapp.com/attachments/1151211352958959826/1174141027729281075/piltover-entrancetreasury.jpg?ex=6566830b&is=65540e0b&hm=0e359a0e94cfe6acba6a48d3958c00ba0eb2bbad56d4d0e70ad29bd86916ae9a&')";
  img1.style.backgroundImage = "url('https://cdn.discordapp.com/attachments/1151211352958959826/1174400513207435284/piltover_people_01.png?ex=656774b5&is=6554ffb5&hm=6010c0e2aa487213aa3a5cd371c1d006f147b7dae3bec2baa436dfab7881e87b&')";
  img2.style.backgroundImage = "url('https://cdn.discordapp.com/attachments/1151211352958959826/1174400512544751626/piltover_people_03.png?ex=656774b5&is=6554ffb5&hm=0c848e9f2e4a59c9ba4c7f20f782e948e743e7b177c28acdf3a12cb791727278&')";
  img3.style.backgroundImage = "url('https://cdn.discordapp.com/attachments/1151211352958959826/1174400512850939934/piltover_people_02.png?ex=656774b5&is=6554ffb5&hm=732b35e1809ffd983ce798af770b94d0ac26211ff0baac268f216b6d2691e317&')";
  img4.style.backgroundImage = "url('https://cdn.discordapp.com/attachments/1151211352958959826/1174400512221773845/piltover_people_04.png?ex=656774b5&is=6554ffb5&hm=c6b8ca929c23f9a58a5d8f812f76cda11c83bfec85e47579aa517982fc3c0008&')";
  img5.style.backgroundImage = "url('https://cdn.discordapp.com/attachments/1151211352958959826/1174402865461211236/hogni-j-mohr-5.png?ex=656776e6&is=655501e6&hm=bb383f67716b3d130f4a7b3cebd1015097daef2a76083555705e1d59b412b5f9&')";


  nome1.textContent = "Residentes da Cidade";
  nome2.textContent = "Jae Medarda";
  nome3.textContent = "Vigia";
  nome4.textContent = "Vaido Violante";
  nome5.textContent = "Defensora";


  zaunRegion1.style.backgroundImage = "url('https://cdn.discordapp.com/attachments/1151211352958959826/1174405771224694824/consolho_de_piltover.png?ex=6567799b&is=6555049b&hm=e891ec5a2d5a6f496a6803f32bf4fb23145174127f89edb7a67441f9cc8d28a4&')";

  title4.textContent = "Lei E Ordem"
  poliPiltover.setAttribute("src" , "https://cdn.discordapp.com/attachments/1151211352958959826/1174409367559348297/Jumaralo_Hex_on_Twitter.png?ex=65677cf4&is=655507f4&hm=d5cec55489422ea0f45832e3ab55b9c7b498c8802f9be0dc40b0e1e4d4a38e37&");
  poliPiltover2.setAttribute("src" , "https://cdn.discordapp.com/attachments/1151211352958959826/1174409367278338148/imagem_2023-11-15_150317759.png?ex=65677cf4&is=655507f4&hm=1eaa5468884382f0ccf80fe4c80e76c5a462550bb430aec013083d057eb2cc8a&");
  p3Pilt.textContent = "Os Vigias são homens e mulheres com a tarefa de manter a lei de Piltover. A organização é financiada por impostos comerciais e contribuições “voluntárias” dos clãs mercantis, armando os Vigias com uniformes e equipamentos. Muitas dessas doações tomam a forma de tecnologia hextec única, como armas ou outros dispositivos especializados.Jago, o atual mestre do Clã Medarda, impõe respeito e poder imensos através de Piltover. Com a renda gerada pelas patentes de pistão de seu pai, Jago financia pesquisas que estudam como usar hextec para acelerar os Portões Solares."


  zaunRegion3.style.backgroundImage = "url('https://cdn.discordapp.com/attachments/1151211352958959826/1174412678505168986/Jinx-from-Arcane-shines-like-a-hextech-crystal.jpg?ex=6567800a&is=65550b0a&hm=81e5f1caa6c0aae351d18d4ac0e7a0d0dfad78886c4cfff69f2147a8a58dece9&')";

  title5.textContent = "Hextec"
  imgHex.setAttribute("src" , "https://cdn.discordapp.com/attachments/1151211352958959826/1174414555821129738/russell-harper-russell-harper-hextech-crystal-lp-v0.png?ex=656781c9&is=65550cc9&hm=cf1091ed8615c5edb2eceddeb4603afe68b9cf075993ec3328345269c67489ea&");
  p4Pilty.textContent = "Hextec é a nova fusão emergente de magia e tecnologia, usada para criar artefatos requintados que podem ser utilizados por qualquer um, não apenas por aqueles que possuem uma aptidão para as artes arcanas. Ela aproveita o poder mágico contido em cristais extremamente raros e seu poder é limitado apenas pela imaginação de seus usuários. É capaz de feitos incríveis, desde dar energia a máquinas até criar raios de luz capazes de cortar o aço mais forte. O processo de criação hextec é um segredo guardado a sete chaves e o trabalho de cada artífice usa métodos diferentes. Assim, cada item hextec é um artefato único de beleza rara, uma criação personalizada que provavelmente levou anos para ser montada.";

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
