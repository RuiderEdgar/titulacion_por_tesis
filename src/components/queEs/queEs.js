import '../dialogs.css'
import { sub2 } from './sub2';
export const queEs = () => {
  return `
  <section class='modal' id='queEs'>
    <div class='modal_container'>
      <div class='titleContainer'>
        <h1 class='titleDialog'>¿Qué es?</h1>
      </div>
      <ol class='information' >
        <li>La modalidad de <strong>titulación por tesis</strong> es una de las formas en las que un estudiante puede obtener su título universitario. Consiste en la elaboración y defensa de un trabajo de investigación original sobre un tema específico relacionado con su área de conocimiento.</li>
        <li><strong>Características principales</strong> de la titulación por tesis:
        <ol class='information' type='a'>
            <li><strong>Investigación profunda:</strong> Se elige un tema relevante y se realiza un análisis detallado.</li>
            <li><strong>Metodología científica:</strong> Se siguen pasos específicos como planteamiento del problema, objetivos, hipótesis, marco teórico, metodología, resultados y conclusiones.</li>
            <li><strong>Asesoría:</strong> Se cuenta con un tutor o asesor que guía en el proceso.</li>
            <li><strong>Defensa:</strong> Una vez terminada, se presenta y defiende ante un jurado académico.</li>
        </ol>
        </li>
        <li>Esta modalidad es ideal <strong>si te interesa la investigación</strong> y quieres contribuir al conocimiento en tu área.</li>
      </ol>
    </div>
    <a href="#" class='close_modal'>
      <img src="/assets/icons/close.svg" class='close_icon' alt="icono x" />
    </a>
  </section>
  `;
}