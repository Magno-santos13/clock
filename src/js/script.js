const horas = document.getElementById('horas');
const minutos = document.getElementById('minutos');
const segundos = document.getElementById('segundos');


const displayCurrentTime = function getCurrentTime() {
  const dateToday = new Date();
  const hours = dateToday.getHours();
  const minunts = dateToday.getMinutes();
  const seconds = dateToday.getSeconds();

  horas.textContent = String(hours).padStart(2, "0");
  minutos.textContent = String(minunts).padStart(2, "0");
  segundos.textContent = String(seconds).padStart(2, "0");
}

setInterval(displayCurrentTime, 1000)

/*
  Eu refatorei o código, e criei uma função chamada getCurrentTime()

  get: significa pegar
  current: significa atual
  time: tempo

  Então getCurrentTime() significa pegar o tempo atual, mas no google é traduzido como pegar hora atual,
  então dependo do contexto, o time é algo mais abrangente e no contexto dessa função significa, 
  hora, minuto e segundo, eu também atribuí ela a uma const com o nome de displayCurrentTime que 
  significa exibir hora atual

  Além disso eu mudei os nomes das variáveis exemplo: min para minuts, eu fiz isso
  para deixar bem mais claro o que significa aquela variável, igual a variável seconds,
  que antes era s, já que esse "s" não quer dizer nada, mas seconds já é mais obvio o que quer dizer.
  
  Fora let que troquei para const, uma variável com const nunca terá o seu valor alterado,
  e como você não está fazendo nenhuma reatribuição no código
  como por exemplo:

   const hours = dateToday.getHours();
   hours = 10

  Se você estivesse fazendo isso, aí sim, era melhor usar o let, já que com const
  uma variável não pode ter seu valor alterado, e se eu tentar reatibuir um valor
  a uma variável que é const com certeza terá um erro no código. 
  Mas como não é isso que está acontecendo nesse caso, resolvi trocar o let para const
  
  Em relação ao if que você estava usando antes para formatar os números que fossem menor do que 10,
  o segredo para eu ter tirado elas está na função padStart()

  Ela funciona assim:
  A função padStart() serve para preencher uma string a esquerda com qualquer caractere,
  ela recebe dois argumentos, o primeiro argumento é o comprimento da string, e o segundo 
  é qualquer caractere que será usado para preencher a string.

  O comprimento da string é o comprimento total que você quer que ela tenha, imagina esse caso:
  o valor que tem na variável é 8, mas você não quer seja 8, e sim 08, então o primeiro argumento serve
  para dizer o tamanho de caracteres que a string deve ter, e será contado a partir da string 
  que já tem que é o 8. 
  
  Então o 2 é o comprimento da string padStart(2, "0"), já  segundo argumento
  que é o zero(0) é o caractere que será usado para preencher essa string, e dever ficar entre 
  aspas "" para o JS enter que o dado é uma string, e nesse segundo argumento pode ser qualquer coisa,
  se você colocar "A" significa que será usado o caracter A para prencher a String, então no final
  o resultado seria A8.

  E se o número da variável for maior que 9? Bem nesse caso a função não faz nada, já que
  o primeiro argumento é sobre o comprimento da string, e como o comprimento já é 2, não vai mudar nada.

  Se ainda não entendeu vou explicar de novo, o primeiro argumento diz respeito ao tamanho da string,
  se você colocar 2, 5 e etc, a medida será feita assim: a string 8 já é contada como 1 caractere, então
  seria necessário mais um número para completar 2 que é o valor do argumento, agora se o valor
  da variável for 10, nesse caso 10 já são 2 caracteres, então se você quisesse adicionar um 0 a esquerda
  o primeiro argumento teria que ser 3, assim: padStart(3, "0") nesse caso do numero 10 até 99 seria 
  mostrado como: 010, 055, 099, conseguiu entender?

  E a função String() pra que ela serve?
  Ela serve para converter a hora,minutos e segundos que são um dado do tipo número para um dado do tipo string,
  você se lembra que a função padStart só meche com dados String, então se você não fizer essa
  conversão não irá funcionar.

  Na parte do setInterval(displayCurrentTime, 1000) eu estou passadno o nome da variável e 1000 que representa 
  1 segundo, a função setInterval recebe também 2 argumentos, onde o primeiro é a função que eu quero
  que seja executada, e o segundo argumento é o tempo em milisegundos que eu quero que essa função
  seja executada, 1000 milisegundos representa 1 segundo, então se quiser que uma função seja executada
  por exemplo a cada 4 segundos só escrever 4000 milisegundos.
  
  
  Resumindo, utilizando a função padStart() deu pra reduzir bem as linhas de código, e não sendo mais
  necessário a utilização dos if.
  
  */