export const requisitosFormales = () => {
  return `
    <section class='modal' id='requisitosFormales'>
    <div class='modal_container'>
    <div class='titleContainer'>
      <h1 class='titleDialog'>Requisitos Formales</h1>
    </div>
      <ol type='a' class='information' >
        <li>La tesis debe ser una investigación original.</li>
        <li>Los trabajos de investigación deben contener un <strong>mínimo de 125 y máximo 160 cuartillas</strong> sin considerar carátula, índice, dedicatorias y bibliografía.
        <li>
          El texto debe escribirse en letra Arial 12, espacio de interlineado 1.5, renglón y medio, margen superior 2.5 cm, izquierdo 3.5 cm, inferior 2.5 cm, derecho 2.5 cm.
        </li>
        <li id='onSubDRF'>El trabajo de investigación final debe contener <a href="#">lo siguiente:</a>
        </li>
        <li>El título de la tesis es definitivo y debe ser corto. </li>
        <li>Las oraciones deben tener sujeto, verbo y complemento. No usar gerundios.</li>
        <li>Se debe de utilizar la misma persona, primera del plural o impersonal.</li>
        <li>Deben coincidir género, número y tiempo verbal.</li>
        <li>Procurar no utilizar muletillas: pues, ya que, es decir, sin embargo, ni abreviaturas.</li>
        <li>La numeración de las notas de pie debe ser arábiga. Si las citas son literales deben entrecomillarse. Si son interpretativas debe ponerse confrontar o véase.: Cfr. O Veáse.</li>
        <li id='onSubKRF'>
          <a href="#">
          No se toman como obra consultada para efectos de la bibliografía obligatoria.
          </a>
        </li>
      </ol>
      </div>
      <a href="#" class='close_modal' id='close_modalRF'>
        <img src="/assets/icons/close.svg" class='close_icon' alt="icono x" />
      </a>
    </section>
  `;
}

//primer submodal
document.addEventListener("DOMContentLoaded", () => {
  const openModalSubDRF = document.querySelector("#onSubDRF");
  const modalSubDRF = document.querySelector("#RFsubD");
  const closeModalSubDRF = document.querySelector(".close_modalDRF");
  const closeModalRF = document.querySelector("#close_modalRF");

  openModalSubDRF.addEventListener("click", (e) => {
    e.preventDefault();
    modalSubDRF.classList.add("modal_show");
    closeModalRF.classList.add("ocultar");
  });

  closeModalSubDRF.addEventListener("click", (e) => {
    e.preventDefault();
    modalSubDRF.classList.remove("modal_show");
    closeModalRF.classList.remove("ocultar");
  });
}); 

//segundo submodal
document.addEventListener("DOMContentLoaded", () => {
  const openModalSubKRF = document.querySelector("#onSubKRF");
  const modalSubKRF = document.querySelector("#RFsubK");
  const closeModalSubKRF = document.querySelector(".close_modalKRF");
  const closeModalRF = document.querySelector("#close_modalRF");

  openModalSubKRF.addEventListener("click", (e) => {
    e.preventDefault();
    modalSubKRF.classList.add("modal_show");
    closeModalRF.classList.add("ocultar");
  });

  closeModalSubKRF.addEventListener("click", (e) => {
    e.preventDefault();
    modalSubKRF.classList.remove("modal_show");
    closeModalRF.classList.remove("ocultar");
  });
});