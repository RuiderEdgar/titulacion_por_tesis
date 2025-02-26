import close from "../../assets/icons/close.svg";
export const requisitosRegistro = () => {
  return `
  <section class='modal' id='requisitosRegistro'>
  <div class='modal_container'>
  <div class='titleContainer'>
    <h1 class='titleDialog'>Requisitos para registro de tema de tesis</h1>
  </div>
    <ol class='information' >
      <li>Registro de Tesis (se permite la inscripción anticipada de un proyecto de investigación con el 80% de créditos totales del plan de estudios al que pertenezca).</li>
      <li id='onSub2RR'>Para proceder a la inscripción de tesis en el Sistema de Captura de Tesis de la Facultad de Derecho, es necesario presentar en original y de manera física <a href="#">la siguiente documentación ante la Secretaría General...</a>
      </li>
    </ol>
    </div>
    <a href="#" class='close_modal' id='close_modal_RR'>
      <img src=${close} class='close_icon' alt="icono x" />
    </a>
  </section>
  `;
};

document.addEventListener("DOMContentLoaded", () => {
  const openModalSub2RR = document.querySelector("#onSub2RR");
  const modalSub2RR = document.querySelector("#RRsub2");
  const closeModalSub2RR = document.querySelector(".close_modalRR");
  const closeModalRR = document.querySelector("#close_modal_RR");

  openModalSub2RR.addEventListener("click", (e) => {
    e.preventDefault();
    modalSub2RR.classList.add("modal_show");
    closeModalRR.classList.add("ocultar");
  });

  closeModalSub2RR.addEventListener("click", (e) => {
    e.preventDefault();
    modalSub2RR.classList.remove("modal_show");
    closeModalRR.classList.remove("ocultar");
  });
});
