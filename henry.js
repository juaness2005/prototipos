// elementos
const container = document.getElementById("container");
const messageBox = document.getElementById("message");
const popup = document.querySelector(".popup");

let lastClicked = null;
let popupFechado = false;
let coracoesClicados = 0;

// 💌 suas mensagens
const mensagens = [
  "Eu escolhi passar pelo ciclone com você",
  "As vezes me pergunto se vou estragar as coisas entre nós, mas eu poderia literalmente morrer caso isso acontecesse",
  "Você meio que é o meu sonho americano",
  "Nós já ficamos juntos na minha cabeça, se é de mentira, então porque parece um juramento ao que nós dois nos submetemos?",
  "E se o jeito que você me abraçar for o que é sagrado?",
  "Eles não sabem, mas você tomou conta dos meus pensamentos (acho que nem você sabe)",
  "Eu escolho eu e você, religiosamente",
  "Vou te mostrar o paraíso se você for um anjo, só meu",
  "Por um tempo achei que era melhor estar seguro do que apaixonado, no entanto te conheci e a minha segurança falhou",
  "Tem uma placa em meu coração e ela diz que ele está reservado a você",
  "Essa cidade é falso, mas você é a coisa real",
  "Eu posso ser a vida que você tanto deseja",
  "Eu odeio isso daqui, então vou para um lugar em minha mente onde estamos juntos",
  "E se os meus olhos se voltassem para cima e encontrassem os seus mais uma vez?",
  "Por favor, tenho estado de joelhos, mude a profecia. Não quero dinheiro, só alguem que queira a minha companhia",
  "Não sou doador, mas te daria o meu coração caso você precisasse",
  "Garfos, facas, pratos, porcelanas, jogos americanos, luminárias, quando conheci você, tudo ficou mais bonito",
  "Tá tão fácil de encaixar os teus cénarios na minha rotina",
  "Faz parte da minha rotina te querer",
  "Eu estarei com 87 e você com 89 e ainda sim eu olharei para você assim como olho para as estrelas que brilham no céu",
  "Você me deixa louco na metade do tempo e na outra metade eu apenas estou tentando deixar você saber o que eu sinto é verdadeiro",
  "Tudo que eu penso em como posso fazer você pensar em mim e em tudo o que poderiamos ser",
  "Você é a unica coisa que me faz continuar fazendo pedidos para as estrelas",
  "Isso é uma história de amor, apenas diga sim",
  "O seu lugar é comigo, como não percebe isso",
  "O seu sorriso poderia iluminar a cidade inteira",
  "A sua voz é a melhor coisa que eu já ouvi",
  "Eu gosto do fato que você é tudo o que eu sempre quis",
  "Você é o pedido que eu peço as estrelas cadentes, para todos os horarios iguais, para quando o rélogio bate às 4:47, você é o que ue mais quero no mundo"
];

document.getElementById("fechar").addEventListener("click", () => {
  popup.classList.add("hidden");

  setTimeout(() => {
    popup.style.display = "none";
    popupFechado = true; 
  }, 300);
});

mensagens.forEach((texto) => {
  const heart = document.createElement("div");
  heart.classList.add("coracao");
  heart.textContent = "❤️";

  heart.style.top = (Math.random() * 90 + 5) + "%";
  heart.style.left = (Math.random() * 90 + 5) + "%";

heart.addEventListener("click", () => {
  if (!popupFechado) return;

  if (heart.classList.contains("hidden")) return;

  if (lastClicked) {
    lastClicked.classList.add("hidden");
  }

  messageBox.textContent = texto;
  messageBox.classList.add("show");

  lastClicked = heart;

  coracoesClicados++;

  if (coracoesClicados === mensagens.length) {
    setTimeout(() => {
      document.getElementById("popupFinal").classList.remove("hidden");
    }, 500);
  }
});

  container.appendChild(heart);
});