import close from "../../assets/icons/close.svg";
import "../submodals.css";
export const subCRR = () => {
  return `
  <section class='subsubmodal' id='RRsubC'>
    <div class='subsubmodal_container'>
      <ol type='i'class='information'>
        <li>
          Tramitados mediante el sistema de trámites en línea en el siguiente enlace <a target='_blank' href="https://www.derecho.unam.mx/escolares/tramites-linea.php">https://www.derecho.unam.mx/escolares/tramites-linea.php</a>
          en un horario de 9:00 a 18:00 horas si es egresado del sistema escolarizado.
        </li>
        <li>
          En caso de ser egresado de la <strong>División de Universidad Abierta</strong> en el enlace <a target='_blank' href="https://www.derecho.unam.mx/oferta-educativa/licenciatura/sua/escolares-sua.php   ">https://www.derecho.unam.mx/oferta-educativa/licenciatura/sua/escolares-sua.php</a>
          en un horario de 9:00 a 18:00 horas si es egresado del sistema escolarizado.
        </li>
        <li>
          <strong>Educación a Distancia</strong> en el enlace 
          <a target='_blank' href="https://docs.google.com/forms/d/e/1FAIpQLSfnfUlBuSP3oBlJkhbpAfwiVpITCMU7EZNnOPF2k9JvKAd6Gw/closedform     ">https://docs.google.com/forms/d/e/1FAIpQLSfnfUlBuSP3oBlJkhbpAfwiVpITCMU7EZNnOPF2k9JvKAd6Gw/closedform</a> <br /> de la sección escolar de la SUAyED ambos en un horario de 9:00 a 14:00 horas. Sí continúas inscrito o inscrita deberás presentar la tira de materias validada y descargada del Sistema Integral de Administración Escolar (SIAE).
          en un horario de 9:00 a 18:00 horas si es egresado del sistema escolarizado.
        </li>
      </ol>
    </div>
    <a href="#" class='close_modalCRR'>
      <img src=${close} class='close_icon' alt="icono x" />
    </a>
  </section>
  `;
};
