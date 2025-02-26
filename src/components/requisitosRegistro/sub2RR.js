import close from "../../assets/icons/close.svg";
import "../submodals.css";
export const sub2RR = () => {
  return `
  <section class='submodal' id='RRsub2'>
    <div class='submodal_container'>
      <ol class='information' type='a'>
        <li>
          <a class='textWhite' target='_blank' href="https://drive.google.com/file/d/17ZG5yN7lwcCXpnDbepnvBygHGRS_3xdD/view?usp=drive_link">
          <strong>Carta del asesor(a) de tesis dirigida al Titular del Seminario.</strong></a>
        </li>
        <li>
          <a class='textWhite' target='_blank' class='documents textWhite' href="https://drive.google.com/file/d/1le_UlSps6tmSzkvGH_RhKOApGT8_VHgf/view?usp=drive_link"><strong>Carta del tesista dirigida al Titular del Seminario.</strong></a>
        </li>
        <li id='onSubCRR'><a class='textWhite' href="#">
          <strong>Constancia de Estudios e Historial Académico </strong></a>(de fecha no mayor a 6 meses).
        </li>
        <li>
          <a target='_blank' class='documents textWhite' href="https://drive.google.com/file/d/13Jv-hZKfBsoNueF2UIykM8Q0MThJQIRh/view?usp=drive_link"><strong>Protocolo de Investigación</strong></a> (Motivos de Investigación, Hipótesis, Planteamiento del Problema y Proyecto de Capitulado) firmado por: asesor(a), Titular del Seminario y el/la alumno(a) en cada una de las hojas.
        </li>
        <li id='onSubERR'>
          <a class='textWhite' href="#">
            <strong>Hoja de Datos Generales en la que se señale: </strong>
          </a>
        </li>
        <li>
          <strong>Dos fotografías tamaño infantil</strong> (a B/N o a color) con nombre al reverso.
        </li>
        <li>
          <strong>Carta de aceptación del Seminario</strong> en la que se acepta al alumno(a) en el Seminario. (EMITIDA POR EL SEMINARIO).
        </li>
      </ol>
    </div>
    <a href="#" class='close_modalRR' id='close_modal_2RR'>
      <img src=${close} class='close_icon' alt="icono x" />
    </a>
  </section>
  `;
};

//primer submodal
document.addEventListener("DOMContentLoaded", () => {
  const openModalSubCRR = document.querySelector("#onSubCRR");
  const modalSubCRR = document.querySelector("#RRsubC");
  const closeModalSubCRR = document.querySelector(".close_modalCRR");
  const closeModal2RR = document.querySelector("#close_modal_2RR");

  openModalSubCRR.addEventListener("click", (e) => {
    e.preventDefault();
    modalSubCRR.classList.add("modal_show");
    closeModal2RR.classList.add("ocultar");
  });

  closeModalSubCRR.addEventListener("click", (e) => {
    e.preventDefault();
    modalSubCRR.classList.remove("modal_show");
    closeModal2RR.classList.remove("ocultar");
  });
});

//segundo submodal
document.addEventListener("DOMContentLoaded", () => {
  const openModalSubERR = document.querySelector("#onSubERR");
  const modalSubERR = document.querySelector("#RRsubE");
  const closeModalSubERR = document.querySelector(".close_modalERR");
  const closeModal2RR = document.querySelector("#close_modal_2RR");

  openModalSubERR.addEventListener("click", (e) => {
    e.preventDefault();
    modalSubERR.classList.add("modal_show");
    closeModal2RR.classList.add("ocultar");
  });

  closeModalSubERR.addEventListener("click", (e) => {
    e.preventDefault();
    modalSubERR.classList.remove("modal_show");
    closeModal2RR.classList.remove("ocultar");
  });
});
