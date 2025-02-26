import close from "../../assets/icons/close.svg";
import "../submodals.css";
export const sub2 = () => {
  return `
  <section class='submodal' id='QEsub2'>
    <div class='submodal_container'>
        <ol class='information' type='a'>
          <li><strong>Investigación profunda:</strong> Se elige un tema relevante y se realiza un análisis detallado.</li>
          <li><strong>Metodología científica:</strong> Se siguen pasos específicos como planteamiento del problema, objetivos, hipótesis, marco teórico, metodología, resultados y conclusiones.</li>
          <li><strong>Asesoría:</strong> Se cuenta con un tutor o asesor que guía en el proceso.</li>
          <li><strong>Defensa:</strong> Una vez terminada, se presenta y defiende ante un jurado académico.</li>
        </ol>
    </div>
    <a href="#" class='close_modalQE'>
      <img src=${close} class='close_icon' alt="icono x" />
    </a>
  </section>
  `;
};
