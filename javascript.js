//Navbar
const menu = document.querySelector(".menu");
const menuBtn = document.querySelector(".menu-btn");

//Add click event

menuBtn.addEventListener("click", () => {
  //Toggle menu open class
  menu.classList.toggle("menu-open");
});

//Stats Counter
const stats = document.querySelector(".stats");
const counters = document.querySelectorAll(".counter");

let bol = false;

/* Obter "deslocamento" da seção de estatísticas
do "topo da página" para "altura do elemento" de estatísticas

*/
const sectionOffSet = stats.offsetTop + stats.offsetHeight;

/*
Inicia o contador quando a página
é rolado para a seção de estatísticas
*/
window.addEventListener("scroll", () => {
  /*
obter o "deslocamento da página do topo" + a "altura 
da tela inteira"
 */
  const pageOffset = window.innerHeight + scrollY;
  /*
Execute a função updateCount se a página estiver
rolado além da seção de estatísticas e executado apenas uma vez
*/
  if (pageOffset > sectionOffSet && bol === false) {
    counters.forEach((counter) => {
      function updateCount() {
        /*
    Defina a variável e sobrescreva-a a cada
  tempo com "+" taquigrafia
   */
        const target = +counter.getAttribute("data-target");
        const speed = +counter.getAttribute("data-speed");
        const count = +counter.innerText;
        /*Verifique se o alvo foi atingido*/
        if (count < target) {
          counter.innerText = count + 1;
          setTimeout(updateCount, speed);
        } else {
          counter.innerText = target;
        }
      }

      updateCount();
      /*
     Execute a função apenas quebrando
     uma das condições na instrução if
    */

      bol = true;
      /*
     Isso impede que a função updateCount seja executada toda vez
     você passa por esta seção
    */
    });
  }
});
