import React, { useState } from 'react';
import { RotasContext } from './context/RotasContext';
import ModoDeJogo from './pages/modo-de-jogo';
import ModoEuNunca from './pages/eu-nunca';
import ModoDesafios from './pages/desafios';
import ModoPersonalizado from './pages/personalizado';
import SelecaoPersonalizado from './pages/selecao-personalizado';
import CriacaoPersonalizado from './pages/criacao-personalizado';
import './App.css';

function App() {
  // Definindo os componentes
  const componentes = {
    ModoDeJogo: <ModoDeJogo />,
    ModoEuNunca: <ModoEuNunca />,
    ModoDesafios: <ModoDesafios />,
    ModoPersonalizado: <ModoPersonalizado />,
    SelecaoPersonalizado: <SelecaoPersonalizado />,
    CriacaoPersonalizado: <CriacaoPersonalizado />
  };

  // Estado para controlar qual layout/renderizar
  const [renderLayout, setRenderLayout] = useState('ModoDeJogo');

  // Lista de perguntas e desafios
  const listaPerguntas = [
    "Eu nunca viajei para fora do país.",
    "Eu nunca fiz uma maratona de série em um dia.",
    "Eu nunca fui ao cinema sozinho(a).",
    "Eu nunca mandei mensagem para a pessoa errada.",
    "Eu nunca dormi no sofá de alguém.",
    "Eu nunca caí em público.",
    "Eu nunca cozinhei para outra pessoa.",
    "Eu nunca cantei em um karaokê.",
    "Eu nunca esqueci o aniversário de um amigo.",
    "Eu nunca usei filtro engraçado em uma foto.",
    "Eu nunca fui a um parque de diversões.",
    "Eu nunca comi algo estranho sem perceber.",
    "Eu nunca queimei comida cozinhando.",
    "Eu nunca fiz uma amizade online.",
    "Eu nunca perdi o ônibus ou o metrô.",
    "Eu nunca fui a uma festa surpresa.",
    "Eu nunca tentei aprender uma nova língua.",
    "Eu nunca fiquei acordado(a) a noite toda.",
    "Eu nunca dancei no meio da rua.",
    "Eu nunca cantei no chuveiro.",
    "Eu nunca paguei por um show de música.",
    "Eu nunca saí para comprar algo e voltei com outra coisa.",
    "Eu nunca desisti de um livro pela metade.",
    "Eu nunca fiz dieta.",
    "Eu nunca joguei videogame por mais de 5 horas seguidas.",
    "Eu nunca comprei algo só porque estava em promoção.",
    "Eu nunca fiquei preso(a) em um elevador.",
    "Eu nunca disse " + '"te amo"' + " sem querer.",
    "Eu nunca me perdi em uma cidade.",
    "Eu nunca fiz uma prova sem estudar.",
    "Eu nunca fiquei nervoso(a) em uma apresentação.",
    "Eu nunca pulei de um trampolim.",
    "Eu nunca assisti a um filme de terror sozinho(a).",
    "Eu nunca joguei bingo.",
    "Eu nunca tirei uma foto com um famoso.",
    "Eu nunca tive um déjà vu estranho.",
    "Eu nunca participei de uma corrida.",
    "Eu nunca guardei algo por anos sem usar.",
    "Eu nunca quis mudar o meu nome.",
    "Eu nunca acampei.",
    "Eu nunca fiquei em um hotel de luxo.",
    "Eu nunca comi sobremesa antes do jantar.",
    "Eu nunca quebrei um osso.",
    "Eu nunca quis ser famoso(a).",
    "Eu nunca chorei assistindo a um filme.",
    "Eu nunca mudei de opinião sobre algo importante.",
    "Eu nunca tive um animal de estimação.",
    "Eu nunca tirei uma soneca no meio do dia.",
    "Eu nunca fui à praia de madrugada.",
    "Eu nunca falei dormindo.",
    "Eu nunca passei trote para alguém.",
    "Eu nunca tentei resolver um cubo mágico.",
    "Eu nunca usei roupas de outra pessoa.",
    "Eu nunca fiquei acordado(a) até o amanhecer.",
    "Eu nunca fui assaltado(a).",
    "Eu nunca fiz um curso que não terminei.",
    "Eu nunca enviei uma mensagem para um ex.",
    "Eu nunca desisti de aprender um instrumento.",
    "Eu nunca cantei uma música errada em público.",
    "Eu nunca fui a uma exposição de arte.",
    "Eu nunca tive um diário.",
    "Eu nunca fui confundido(a) com outra pessoa.",
    "Eu nunca comi comida estragada sem saber.",
    "Eu nunca me perdi em um shopping.",
    "Eu nunca usei meias diferentes sem perceber.",
    "Eu nunca quebrei algo em uma loja.",
    "Eu nunca comi comida que caiu no chão.",
    "Eu nunca quis largar tudo e viajar pelo mundo.",
    "Eu nunca fui a um show ao ar livre.",
    "Eu nunca me arrependi de uma compra impulsiva.",
    "Eu nunca assisti a uma série inteira em um fim de semana.",
    "Eu nunca falei com sotaque só para me divertir.",
    "Eu nunca passei vergonha em um restaurante.",
    "Eu nunca deixei a bateria do celular acabar na rua.",
    "Eu nunca fiz compras no supermercado com fome.",
    "Eu nunca viajei sem planejar.",
    "Eu nunca tirei uma foto só para postar.",
    "Eu nunca fui a um evento esportivo.",
    "Eu nunca troquei o nome de alguém sem querer.",
    "Eu nunca comprei um livro e nunca li.",
    "Eu nunca fui acampar na natureza.",
    "Eu nunca fiz algo radical (tipo pular de paraquedas).",
    "Eu nunca assisti à mesma série mais de uma vez.",
    "Eu nunca pesquisei sobre mim no Google.",
    "Eu nunca dormi em transporte público.",
    "Eu nunca esqueci onde estacionei o carro.",
    "Eu nunca perdi um voo.",
    "Eu nunca brinquei de esconde-esconde como adulto.",
    "Eu nunca entrei em um prédio errado.",
    "Eu nunca subi em uma árvore.",
    "Eu nunca fui a uma festa de gala.",
    "Eu nunca usei a roupa do lado avesso sem perceber.",
    "Eu nunca contei uma história exagerada.",
    "Eu nunca fui a uma festa à fantasia.",
    "Eu nunca fui a um evento de cosplay.",
    "Eu nunca tive um animal de estimação exótico.",
    "Eu nunca fingi conhecer alguém para evitar constrangimento.",
    "Eu nunca passei vergonha em uma chamada de vídeo.",
    "Eu nunca fiz uma aula de dança.",
    "Eu nunca toquei uma campainha e saí correndo."
  ];

  const listaDesafios = [
    "Pule de um pé só girando e cantando Xuxa",
    "Diga o alfabeto de trás para frente sem errar.",
    "Faça uma dança improvisada por 30 segundos.",
    "Fique em pé como uma estátua por uma rodada.",
    "Imite um animal e os outros devem adivinhar qual.",
    "Cante " + '"Parabéns pra você"' + " em uma voz engraçada por uma rodada.",
    "Diga uma palavra ao contrário três vezes seguidas.",
    "Dance como se fosse um robô por uma rodada.",
    "Faça 10 polichinelos enquanto fala " + '"Eu sou o mestre do fitness!"',
    "Fique 1 rodada falando em um sotaque engraçado (italiano, francês, etc.).",
    "Simule uma entrevista com você mesmo(a) como se fosse um famoso.",
    "Coloque uma colher no nariz e mantenha por uma rodada.",
    "Encontre o objeto mais estranho da sala e faça uma pose com ele.",
    "Cante uma música de infância de forma dramática.",
    "Finja que está tomando um banho de chuva, se molhe com água (brincadeira!).",
    "Pule como um sapo por uma rodada.",
    "Diga " + '" Eu sou o rei/rainha da balada!"' + " e faça uma pose de poder por uma rodada.",
    "Fique em uma posição de yoga por uma rodada sem mover.",
    "Finja que é um robô e ande por uma rodada.",
    "Faça 20 segundos de qualquer tipo de dança freestyle.",
    "Fale como um personagem famoso por uma rodada (ex: Darth Vader, Homer Simpson).",
    "Simule um desfile de moda com sua melhor pose.",
    "Imitar o som de um animal por duas rodadas.",
    "Diga " + '" Eu sou um espírito livre!"' + "e faça uma dança maluca.",
    "Encontre algo na sala e faça uma poesia sobre o objeto.",
    "Finja que você está em um programa de culinária e mostre como fazer algo absurdo.",
    "Cante a música Baby Shark com a voz mais grave que você conseguir por uma rodada.",
    "Finja que você é uma criança fazendo birra por uma rodada.",
    "Imite a dança de algum famoso(a) por uma rodada.",
    "Faça a sua melhor imitação de um apresentador de TV por uma rodada.",
    "Fale em código por uma rodada (algo sem sentido).",
    "Crie um comercial improvisado de um produto inventado por você.",
    "Diga " + '"Me chame de LORD!"' + " e faça uma pose de poder por uma rodada.",
    "Faça uma gargalhada exagerada por uma rodada.",
    "Finja que está em um filme de ação por uma rodada.",
    "Dance "+ '"Macarena"' + " de forma exagerada por uma rodada.",
    "Finja que é um DJ tocando a música mais animada do mundo por uma rodada.",
    "Faça um discurso motivacional como se fosse um coach de vida.",
    "Finja que você é um pintor e explique sua obra de arte (sem sentido).",
    "Fique 1 rodada tocando um instrumento invisível.",
    "Faça uma paródia de uma música popular.",
    "Finja que você está sendo entrevistado(a) sobre sua vida como astronauta.",
    "Finja que você é um mestre da meditação e ensine os outros a relaxarem.",
    "Fique 1 rodada fazendo uma expressão facial de surpresa.",
    "Imitar alguém da roda por uma rodada.",
    "Faça uma apresentação de mágica, mesmo sem truques, por uma rodada.",
    "Diga uma frase com a boca cheia de água.",
    "Finja que é um cantor(a) famoso(a) fazendo um show por uma rodada.",
    "Crie uma história de terror enquanto caminha de um lado para o outro.",
    "Faça uma dança do É o Tchan.",
    "Imitar alguém falando de forma engraçada por uma rodada.",
    "Pegue um objeto e comece a falar sobre ele como se fosse um expert.",
    "Faça uma imitação de um personagem animado.",
    "Diga um trava-língua super rápido e sem errar.",
    "Faça a coreografia de Gangnam Style",
    "Faça uma piada e finja que ela foi muito engraçada.",
    "Faça o Moonwalk",
    "Pule como se fosse um canguru por uma rodada.",
    "Imitar o som de um telefone tocando com a boca por uma rodada.",
    "Faça uma dança de salão improvisada com um parceiro imaginário por uma rodada.",
    "Finja que é um pirata e diga" + '"Arghh!"' + "com um sotaque por três rodadas.",
    "Fique fazendo poses de yoga por uma rodada.",
    "Finja que é uma pessoa super famosa recebendo um prêmio.",
    "Imitar um apresentador de rádio durante 1 rodada.",
    "Dance como um zumbi.",
    "Finja que está em um reality show e faça uma confissão emocionante.",
    "Imitar a risada de um personagem animado.",
    "Finja que está com muito frio e tente esquentar o jogador a sua esquerda.",
    "Crie um novo movimento de dança e mostre aos outros.",
    "Faça uma imitação de um animal marinho.",
    "Fique por 1 rodada fazendo uma cara de confuso(a) para tudo que os outrs jogadores falarem.",
    "Crie um novo gesto de saudação e mostre para todos.",
    "Crie uma história louca envolvendo todos os outros participantes.",
    "Fique em uma posição de super-homem por uma rodada.",
    "Faça 20 segundos de dança estilo Twerking com o jagador da sua escolha.",
    "Aja como se estivesse em uma luta de boxe por 1 rodada.",
    "Cante Let It Go do Frozen em um estilo de ópera.",
    "Ensine os outros jogadores a meditar.",
    "Diga o nome de todos os planetas do sistema solar enquanto gira.",
    "O jogador à sua esquerda tem que imitar você por 1 rodada.",
    "Converse com o jogador a sua direita com um idioma inventado por vocês",
    "O jogador à sua direita deve dizer algo engraçado sobre você.",
    "Você foi polpado. Até a próxima rodada!",
    "Finja que é o animal de estimação do jogador a sua esquerda.",
    "Invente um grito de guerra. Os outros jogadores devem imitar.",
    "O jogador a sua direita deve criar um desafio para você.",
    "O jogador a sua esquerda deve escolher uma pessoa aleatória da sua lista de contados e mandar um " + '"Oi, sumido(a)!"',
    "Junte todos os jogadores e façam uma dança improvisada.",
    "Dê um objeto a outro jogador e ele deve usá-lo de maneira criativa e engraçada por 1 rodada.",
    "Escolha dois jogadores para ficarem em sincronia e fazerem os mesmos movimentos ou ações juntos por 1 rodada.",
    "Forme dupla. Os dois devem ficar na mesma posição de yoga por 1 rodada",
    "Escolha um jogador ditar palavras. Você deve fazer rimas com as palavras que ele disser.",
    "Fique em silêncio por uma rodada.",
    "Cumpra o desafio do jogador a sua esquerda junto a ele.",
    "Simule uma cena de despedida dramática com outro jogador.",
    "Brinque de Pega-Pega com outro jogador.",
    "Responda com um grito sempre que falarem com você por 2 rodadas.",
    "Escolha nomes aleatórios para você e os jogadores. Usem os novos nomes até o fim do jogo.",
    "Você não pode rir durante 2 rodadas.",
    "Todos os jogadores devem cumprir o proxímo desafio."
  ];

  // Estados atuais
  const [pergunta, setPergunta] = useState('');
  const [desafio, setDesafio] = useState('');
  const [nomeJogo, setNomeJogo] = useState('');
  const [enunciadoCriado, setEnunciadoCriado] = useState('')
  const [listaTemporaria, setListaTemporaria] = useState([])
  const [jogoAtual, setJogoAtual] = useState(null);
  const [enunciadoAtual, setEnunciadoAtual] = useState('')
  const [avisoVisivel, setAvisoVisivel] = useState(false)

  const [animacao, setAnimacao] = useState(false)

  class CriadorDeJogo {
      //     (nomeJogo)
      constructor(nome) {
          this.nome= nome, 
          this.enunciados= []
      }
  }
 
  const listaJogosCriados = {}
  localStorage.setItem("Jogos Criados", JSON.stringify(listaJogosCriados))
  const JogosSalvos = JSON.parse(localStorage.getItem('listaJogosCriados')) || {}


  return (
    <>
      <RotasContext.Provider 
      value = {{componentes,
                renderLayout, setRenderLayout,
                pergunta, setPergunta,
                desafio, setDesafio,
                nomeJogo, setNomeJogo,
                enunciadoCriado, setEnunciadoCriado,
                listaTemporaria, setListaTemporaria,
                jogoAtual, setJogoAtual,
                enunciadoAtual, setEnunciadoAtual,
                avisoVisivel, setAvisoVisivel,
                animacao, setAnimacao,
                CriadorDeJogo,
                listaPerguntas,listaDesafios, JogosSalvos, 
        }}
          >
          {componentes[renderLayout]}
      </RotasContext.Provider>
      
    </>
  )
}

export default App
