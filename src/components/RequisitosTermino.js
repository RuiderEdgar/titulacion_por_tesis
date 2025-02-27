import close from "../assets/icons/close.svg";
export const RequisitosTermino = () => {
  return `
  <section class='modal' id='requisitosTermino'>
    <div class='modal_container'>
      <div class='titleContainer'>
        <h1 class='titleDialog'>Requisitos para el término de la Tesis</h1>
      </div>
      <ol type='a' class='information' >
        <li>
          <a target='_blank' class='documents' href="https://drive.google.com/file/d/10enlU9cSPKFxQl8gvdopHqe1sG3qe6q3/view?usp=drive_link"><strong>Protesta Universitaria de Integridad y Honestidad Académica y Profesional</strong></a>
        </li>
        <li>
          <strong>Carta del asesor(a) de tesis dirigida al Titular del Seminario</strong> donde señale que bajo su revisión exhaustiva la tesis cumple con los requisitos.
        </li>
        <li>
        Acudir a una plática donde serán señalados los requisitos de impresión de tesis con la finalidad de <strong>otorgar la carta de terminación </strong> emitida por el seminario
        </li>
        <li>
          <strong>Versión final de la tesis en PDF</strong>, enviar al correo del seminario seminariodederechoambiental@derecho.unam.mx <strong><br /> CON LA FINALIDAD DE REALIZAR EL ANÁLISIS DE COINCIDENCIAS.</strong>
        </li>
      </ol>
      </div>
      <a href="#" class='close_modal'>
        <img src=${close} class='close_icon' alt="icono x" />
      </a>
  </section>
  `;
};
