import close from "../../assets/icons/close.svg";
export const subDRF = () => {
  return `
  <section class='submodal' id='RFsubD'>
    <div class='submodal_container'>
      <ol class='information' type='1'>
        <li>Carátula.</li>
        <li>Índice. Utilizar números arábigos.</li>
        <li>Introducción.</li>
        <li>Capitulado, mínimo cuatro capítulos. Incluir:
          <ol type='a' class='subblockquote'>
            <li>Aspectos teórico-conceptuales</li>
            <li>Marco jurídico: Legislación Nacional-Internacional.</li>
          </ol>
        </li>
        <li><strong>Conclusiones, breves, concretas, independientes. (Cada una con un máximo de 5 renglones).</strong></li>
        <li>Propuesta.</li>
        <li>Bibliografía.</li>
      </ol>
    </div>
    <a href="#" class='close_modalDRF'>
      <img src=${close} class='close_icon' alt="icono x" />
    </a>
  </section>
  `;
};
