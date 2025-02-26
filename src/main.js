import { queEs, RequisitosTermino, requisitosFormales, requisitosRegistro } from './components/index';
import { sub2 } from './components/queEs/sub2';
import { sub2RR, subCRR, subERR } from './components/requisitosRegistro/index';
import { subDRF, subKRF } from './components/requisitosFormales';
import EdificioDerecho from "./assets/images/FotoPrincipal.jpg";
import EdificioDerechoBlur from "./assets/images/Foto_Blur.jpg";
import Logos from "./assets/logos/Logos.svg";
import Libros from "./assets/icons/Libros.svg";
import './style.css'


document.querySelector("#app").innerHTML = `
  <main id='main'>
    <img class="logoUnam" src=${Logos} alt="logo unam" />
    <h1 class="title">TITULACIÓN POR TESIS</h1>
    <h2 class="subtitle">SEMINARIO DE DERECHO AMBIENTAL</h2>
    <div alt='contenedor imagen edificio derecho' class='image_container'>
      <img src=${EdificioDerecho} alt="facultad de derecho" />
    </div>
    <div alt='contenedor imagen edificio derecho detras' class='imageSecond_container'>
      <img src=${EdificioDerechoBlur} alt="facultad de derecho detras" />
    </div>
    <button class='btn-qe' id='onQueEs'>¿QUÉ ES?</button>
    ${queEs()}
    ${sub2()}
    
    <button class='btn-rr' id='onRR'>REQUISITO PARA REGISTRO DE TEMA DE TESIS</button>
    ${requisitosRegistro()}
    ${sub2RR()}
    ${subCRR()}
    ${subERR()}
    <button class='btn-rf' id='onRF'>REQUISITOS FORMALES</button>
    ${requisitosFormales()}
    ${subDRF()}
    ${subKRF()}
    <button class='btn-rt' id='onRT'>REQUISITO PARA EL TÉRMINO DE LA TESIS</button>
    ${RequisitosTermino()}
    <img class='books_image' src=${Libros} alt="imagen libros" />
  </main>
`;

//primer modal
const openModalQE = document.querySelector("#onQueEs");
const modalQE = document.querySelector("#queEs");
const closeModals = document.querySelectorAll(".close_modal");

//cerrar todos los modals
closeModals.forEach((closeModal) => {
  closeModal.addEventListener("click", (e) => {
    e.preventDefault();
    modalQE.classList.remove("modal_show");
    modalRR.classList.remove("modal_show");
    modalRF.classList.remove("modal_show");
    modalRT.classList.remove("modal_show");
  });
})

//primer modal
openModalQE.addEventListener("click", (e) => {
  e.preventDefault();
  modalQE.classList.add("modal_show");
});

//segundo modal
const openModalRR = document.querySelector("#onRR");
const modalRR = document.querySelector("#requisitosRegistro");

openModalRR.addEventListener("click", (e) => {
  e.preventDefault();
  modalRR.classList.add("modal_show");
});

//Tercer modal
const openModalRF = document.querySelector("#onRF");
const modalRF = document.querySelector("#requisitosFormales");

openModalRF.addEventListener("click", (e) => {
  e.preventDefault();
  modalRF.classList.add("modal_show");
});

//Tercer modal
const openModalRT = document.querySelector("#onRT");
const modalRT = document.querySelector("#requisitosTermino");

openModalRT.addEventListener("click", (e) => {
  e.preventDefault();
  modalRT.classList.add("modal_show");
});
