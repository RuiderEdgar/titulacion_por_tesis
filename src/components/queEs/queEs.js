import close from '../../assets/icons/close.svg'
import '../dialogs.css'
export const queEs = () => {
  return `
  <section class='modal' id='queEs'>
    <div class='modal_container'>
      <div class='titleContainer'>
        <h1 class='titleDialog'>¿Qué es?</h1>
      </div>
      <ol class='information' >
        <li>La modalidad de <strong>titulación por tesis</strong> es una de las formas en las que un estudiante puede obtener su título universitario. Consiste en la elaboración y defensa de un trabajo de investigación original sobre un tema específico relacionado con su área de conocimiento.</li>
        <li id='onSub2'><a href="#"><strong>Características principales</strong> de la titulación por tesis...</a>
        </li>
        <li>Esta modalidad es ideal <strong>si te interesa la investigación</strong> y quieres contribuir al conocimiento en tu área.</li>
      </ol>
    </div>
    <a href="#" class='close_modal' id='close_modal_QE'>
      <img src=${close} class='close_icon' alt="icono x" />
    </a>
  </section>
  `;
}

document.addEventListener("DOMContentLoaded", () => {
  const openModalSub2 = document.querySelector("#onSub2");
  const modalSub2 = document.querySelector("#QEsub2");
  const closeModalSub2 = document.querySelector(".close_modalQE");
  const closeModalQE = document.querySelector("#close_modal_QE");
  
  openModalSub2.addEventListener("click", (e) => {
    e.preventDefault();
    modalSub2.classList.add("modal_show");
    closeModalQE.classList.add("ocultar");  
  });

  closeModalSub2.addEventListener("click", (e) => {
    e.preventDefault();
    modalSub2.classList.remove("modal_show");
    closeModalQE.classList.remove("ocultar"); 
  });
});
