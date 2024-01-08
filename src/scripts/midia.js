// não deu muito certo

const personagens = [
  {
    nome: "Jinx",
    historia: "História: Jinx, anteriormente conhecida como Powder, é uma criminosa e terrorista de Zaun. Ela é a irmã mais nova de Vi e é uma das principais antagonistas da série Arcane.Jinx nasceu em Zaun e cresceu nas ruas. Ela é uma criança frágil e insegura, e ela se apega a sua irmã Vi, que é forte e protetora. Quando Jinx tinha 17 anos, ela participou de um assalto a um laboratório de Piltover. O assalto deu errado, e Jinx acidentalmente causou a explosão de um prédio, matando Vander e seus amigos, incluindo Claggor e Mylo.Vi culpou Jinx pela morte de Vander, e as duas irmãs se separaram. Jinx ficou louca pela culpa e pela perda, e ela se tornou uma criminosa e terrorista, assumindo o nome de Jinx.Jinx é uma personagem complexa e trágica. Ela é uma vítima das circunstâncias, mas também é responsável por suas ações. Ela é uma força destrutiva em Arcane, e sua história é uma advertência sobre os perigos da violência e da falta de amor.",
    imagem: "https://cdn.discordapp.com/attachments/1151211352958959826/1193762839970730015/jinx8888.png?ex=65ade548&is=659b7048&hm=75371f4aed530733e92246a96a571f11b63cf63a8906d6321e432f065107cc6e&"
   
    },
  {
    nome: "Jayce",
    historia: "História: Jayce é um inventor e um dos fundadores da Hextech. Ele é uma das principais protagonistas da série Arcane e um amigo de infância de Viktor.Jayce nasceu em Piltover e cresceu em uma família rica e influente. Ele é um jovem inteligente e ambicioso, e ele é apaixonado por tecnologia.Jayce é um dos primeiros a descobrir os segredos da Hextech, uma nova tecnologia que combina magia e ciência. Ele usa a Hextech para criar armas e armaduras poderosas, e ele se torna um herói popular em Piltover.Jayce é uma personagem complexa e ambiciosa. Ele é um visionário e um líder, mas ele também é arrogante e imprudente. Ele está determinado a fazer a diferença no mundo, mas ele às vezes pode ser cego para as consequências de suas ações.",
    imagem: "https://cdn.discordapp.com/attachments/1151211352958959826/1193762839173808148/jayce.png?ex=65ade547&is=659b7047&hm=c01265bb05ff723b85cdcb87a2ed71d0ca7b7af4315fcbccad28c5ade5dd9289&"
   
  },
  
  {
    nome: "Ekko",
    historia: "História: Ekko é um inventor e um membro da gangue Zaun. Ele é uma das principais protagonistas da série Arcane e um amigo de infância de Jinx e Powder.Ekko nasceu em Zaun e cresceu nas ruas. Ele é um jovem inteligente e criativo, e ele usa sua inteligência para sobreviver na perigosa cidade de Zaun.Ekko é um inventor genial, e ele criou um dispositivo que lhe permite viajar no tempo. Ele usa esse dispositivo para salvar seus amigos e proteger Zaun.Ekko é uma personagem forte e corajosa. Ele é um defensor dos oprimidos, e ele está determinado a fazer a diferença no mundo.",
    imagem: "https://cdn.discordapp.com/attachments/1151211352958959826/1193762604649283616/ekko_png.png?ex=65ade50f&is=659b700f&hm=4a3445cfb19876f2da6f27d37deaca91c4a004d59aef84f15169b913578a6e18&"
  },

  {
    nome: "Singed",
    historia: "Singed nasceu em Piltover e estudou na Universidade de Piltover. Ele era um jovem brilhante, mas também era um homem de mente aberta. Ele acreditava que a ciência deveria ser usada para ajudar as pessoas, não para controlá-las.Singed começou a trabalhar em uma nova tecnologia chamada Hextech, que combinava magia e ciência. Ele acreditava que a Hextech poderia ser usada para curar doenças e criar novas formas de vida.No entanto, os experimentos de Singed deram errado, e ele acabou se transformando em um monstro. Ele perdeu a sanidade e se tornou um cientista louco. Singed começou a trabalhar para Silco, um líder criminoso de Zaun. Ele usou seus experimentos para criar armas e drogas poderosas. Ele também usou seus experimentos para criar novos seres vivos, como Warwick, o Lobo Demônio.Singed é uma personagem complexa e trágica. Ele é um homem de grande inteligência e potencial, mas ele foi corrompido pelo poder e pela ambição.",
    imagem: "https://cdn.discordapp.com/attachments/1151211352958959826/1194040404140621854/arcane-singed.png?ex=65aee7c8&is=659c72c8&hm=11d2a2a23a6d2dd22da3927e0b88e16e4c1b5f5caad019fb8b2747e94e36afb6&"
  },
  {
    nome: "Vander",
    historia: "História: Vander é um líder de gangue de Zaun. Ele é um dos principais protagonistas da série Arcane e o pai adotivo de Vi e Jinx.Vander nasceu em Zaun e cresceu nas ruas. Ele é um homem forte e justo, e ele está determinado a proteger os inocentes de Zaun.Vander é o líder da gangue Firelights, uma gangue de Zaun que luta por justiça e igualdade. Ele acredita que Zaun pode ser um lugar melhor, e ele está determinado a fazer a diferença.Vander é uma personagem inspiradora. Ele é um símbolo de esperança e resistência para os oprimidos de Zaun.",
  imagem: "https://cdn.discordapp.com/attachments/1151211352958959826/1194040702510837790/Vander_Arcane_Wallpaper_-_iXpap.png?ex=65aee80f&is=659c730f&hm=e69a29eb4628dbd1be3b18d5d54d729b0538ab6c4572ed22a87f82f19a4d3316&"
  },
  {
    nome: "Silco",
    historia: "História: Silco é um líder criminoso de Zaun. Ele é um dos principais antagonistas da série Arcane e o inimigo de Vander. Silco nasceu em Zaun e cresceu nas ruas. Ele é um homem ambicioso e cruel, e ele está determinado a elevar Zaun ao nível de Piltover.Silco é o líder da gangue Chem-Barons, uma gangue de Zaun que controla o comércio de Shimmer. Ele acredita que Shimmer é a chave para o futuro de Zaun, e ele está disposto a fazer qualquer coisa para promovê-la.Silco é uma personagem complexa e fascinante. Ele é um vilão carismático, mas também é um homem com uma história trágica.",
    imagem: "https://cdn.discordapp.com/attachments/1151211352958959826/1194040351242059939/silco.png?ex=65aee7bb&is=659c72bb&hm=bf5283abade1cc153b12c96f9bd91fd625a3ac46f1eda53dc85006bfacd0dea7&"
  },
  {
    nome: "Heimmerdinger",
    historia: "História: Heimerdinger é um cientista de Piltover. Ele é um dos principais protagonistas da série Arcane e um mentor de Jayce.Heimerdinger é um homem sábio e experiente, e ele é um defensor da paz e da ciência. Ele acredita que a ciência deve ser usada para o bem, não para o mal.Heimerdinger é um membro do Conselho de Piltover, e ele é um defensor da integração de Zaun com Piltover. Ele acredita que as duas cidades podem prosperar juntas, mas ele enfrenta resistência de outros membros do Conselho.Heimerdinger é uma personagem inspiradora. Ele é um símbolo de esperança e progresso para Piltover e Zaun",
    imagem: "https://cdn.discordapp.com/attachments/1151211352958959826/1194040891644584066/heimer.png?ex=65aee83c&is=659c733c&hm=e64889d6a3cbace19a05a091e495d56c566deeaadf7a5091df9b46b16ecf7031&"
  },
  {
    nome: "Caitlyn",
    historia: "História: Caitlyn é uma policial de Piltover. Ela é uma das principais protagonistas da série Arcane e uma parceira de Vi.Caitlyn nasceu em Piltover e cresceu em uma família rica e influente. Ela é uma jovem inteligente e ambiciosa, e ela está determinada a trazer justiça para Piltover.Caitlyn é uma caçadora de recompensas, e ela está determinada a capturar Jinx, a criminosa que matou seus pais. Ela se une a Vi, e as duas formam uma parceria improvável.Caitlyn é uma personagem forte e determinada. Ela é uma defensora da justiça e da ordem, e ela está determinada a fazer a diferença no mundo.",
    imagem: "https://cdn.discordapp.com/attachments/1151211352958959826/1194040404962717747/caitlyn.png?ex=65aee7c8&is=659c72c8&hm=b7ac39472a755dc04bba8df13a02a7f1d0685ed87d83cbc3ca1161d92ecc5980&"
  }, 
  {
    nome: "viktor",
    historia: "Viktor é um personagem em League of Legends conhecido como o Heraldo da Máquina. Ele é um cientista e inventor de Piltover, uma cidade-estado tecnologicamente avançada. Viktor acredita que a evolução humana pode ser alcançada através da fusão entre humanos e máquinas. Ele é associado à facção de Piltover, que é centrada em inovação e progresso tecnológico.Sua história na Liga dos Campeões envolve a criação do Glorioso Evolucionador, uma poderosa invenção que ele usa para aprimorar a si mesmo. No entanto, seus métodos radicais e visão utópica da evolução causam controvérsias em Piltover. Ele se torna uma figura isolada, muitas vezes visto como um cientista louco.",
    imagem: "https://cdn.discordapp.com/attachments/1151211352958959826/1194040350646472956/viktor.png?ex=65aee7bb&is=659c72bb&hm=4dd21ae79b26c6a946cc886e4a53abdee0e0c9e6785c72961667caba1b003c2e&"
  },
  {
    nome: "Twitch",
    historia: "História: Twitch é um ratinho mutante que vive em Zaun. Ele é um dos principais antagonistas da série Arcane e um membro da gangue Chem-Barons.Twitch é um ser selvagem e violento. Ele é um produto do ambiente tóxico de Zaun, e ele é impulsionado pela fome e pela sobrevivência.Twitch é um inimigo perigoso. Ele é rápido e ágil, e ele pode usar sua toxina para envenenar seus inimigos.",
    imagem: "https://cdn.discordapp.com/attachments/1151211352958959826/1194040403503100015/twitch.png?ex=65aee7c8&is=659c72c8&hm=f5b8422cc90ef6be99e8a39426ce0e367d45c5df953910a0e00f2ceb7519cd67&"
  },
  {
    nome: "Warwick",
    historia: "História: Warwick é um lobo demônio que vive em Zaun. Ele é um dos principais antagonistas da série Arcane e um produto dos experimentos de Singed.Warwick era um homem chamado Cain, que foi transformado em um monstro por Singed. Ele perdeu a sanidade e se tornou um assassino brutal.Warwick é um inimigo formidável. Ele é forte e rápido, e ele pode usar suas garras e dentes para rasgar seus inimigos.",
    imagem: "https://cdn.discordapp.com/attachments/1151211352958959826/1194041260110004255/davf7en-04f721f6-47e1-426e-847b-a9fa38e7ea08.png?ex=65aee894&is=659c7394&hm=d9531f6816cd4e78023b318f715ce5254c96dea5c9709f40356dd827760b90c3&"
  },
  {
    nome: "Mel",
    historia: "História: Mel Medarda é uma diplomata de Noxus que vem a Piltover em busca de uma aliança. Ela é uma das principais protagonistas da série Arcane e uma aliada de Jayce.Mel é uma mulher inteligente e ambiciosa. Ela é uma diplomata experiente, e ela está determinada a promover os interesses de Noxus.Mel é uma personagem complexa e fascinante. Ela é uma mulher de dois mundos, e ela está tentando encontrar seu lugar em um mundo dividido.",
    imagem: "https://cdn.discordapp.com/attachments/1151211352958959826/1194040403880583339/mel.png?ex=65aee7c8&is=659c72c8&hm=d5890d16fb58897b86bf5b7afe8773943ae73dcecac494c114e13317acd489b6&"
  },
  {
    nome: "Seraphine",
    historia: "História: Seraphine é uma cantora e compositora que vive em Piltover. Ela é uma das principais protagonistas da série Arcane e uma aliada de Vi e Caitlyn.Seraphine é uma jovem talentosa com uma voz angelical. Ela usa sua música para unir as pessoas de Piltover e Zaun.Seraphine é uma personagem inspiradora. Ela é um símbolo de esperança e paz para um mundo dividido",
    imagem: "https://cdn.discordapp.com/attachments/1151211352958959826/1194040350155755551/Seraphine_0.png?ex=65aee7bb&is=659c72bb&hm=95ce18220a456f5538775208b6918b28f12dcd3fdf5158af25f61ace403de802&"
  },
  {
    nome: "Ambessa",
    historia: "História: Ambessa Medarda é a mãe de Mel. Ela é a governante de Noxus e uma das principais antagonistas da série Arcane.Ambessa é uma mulher forte e determinada. Ela está determinada a promover os interesses de Noxus, mesmo que isso signifique usar a força.Ambessa é uma personagem complexa e fascinante. Ela é uma mulher de poder, mas também é uma mãe amorosa.",
    imagem: "https://cdn.discordapp.com/attachments/1151211352958959826/1194040405268897812/ambessa.png?ex=65aee7c8&is=659c72c8&hm=7163ca81e933bcb20bc33d99b48e866588a00ddc6476d8508f18826536128032&"
  },
  {
    nome: "Orianna",
    historia: "História: Orianna é uma jovem mulher que vive em Piltover. Ela é uma das principais protagonistas da série Arcane e uma amiga de Jayce.Orianna era uma jovem normal até que ela foi ferida em um acidente. Ela foi salva por Jayce, que a substituiu por próteses hextech.Orianna é uma jovem forte e determinada. Ela está determinada a viver sua vida ao máximo, mesmo que isso signifique enfrentar desafios.",
    imagem: "https://cdn.discordapp.com/attachments/1151211352958959826/1194040349455290478/Orianna_0_1.png?ex=65aee7bb&is=659c72bb&hm=0ee2284490b3ec15bb5402f4fd652012d3f66c4532c75db5118ed29357e4d279&"
  }, 
  {
    nome: "Camile",
    historia: "História: Camille é uma mulher misteriosa que vive em Piltover. Ela é uma das principais antagonistas da série Arcane e uma aliada de Jayce.Camile é uma mulher rica e poderosa. Ela é uma assassina profissional que trabalha para o Conselho de Piltover.Camile é uma personagem complexa e fascinante. Ela é uma mulher de muitos segredos, e ela está determinada a proteger seus interesses. Estas são apenas algumas das histórias dos personagens de Arcane. A série é rica em personagens complexos e interessantes, e ela explora temas como família, perda, redenção e a luta por justiça e igualdade.",
    imagem: "https://cdn.discordapp.com/attachments/1151211352958959826/1194040349778247821/League_Infobox_Camille.png?ex=65aee7bb&is=659c72bb&hm=38c328c5f8e21276f648b92f99ad9b5508b1782613a4f66882ce5f44f61c3737&"
  }
];

const btnChange = document.getElementById("changePerson");
const personName = document.getElementById("personName");
const personHistory = document.getElementById("personHistory");
const personImg = document.getElementById("personImg");

const getRandomPerson = () => {
  return new Promise((resolve) => {
    const indiceAleatorio = Math.floor(Math.random() * personagens.length);
    const personaAtual = personagens[indiceAleatorio];
    resolve(personaAtual);
  });
};

btnChange.addEventListener("click", async () => {
  try {
    const personaAtual = await getRandomPerson();

    personName.innerText = personaAtual.nome;
    personImg.setAttribute("src", personaAtual.imagem);
    personHistory.innerText = personaAtual.historia;
  } catch (error) {
    console.error("Error getting random person:", error);
  }
});

const initializePersona = async () => {
  await btnChange.click();
};

initializePersona();
