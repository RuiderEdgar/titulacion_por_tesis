import close from "../../assets/icons/close.svg";
export const subKRF = () => {
  return `
  <section class='submodal' id='RFsubK'>
    <div class='submodal_container'>
      <ol type='i' class='information'>
            <li>Al detectar un error en una cita textual, se debe poner en seguida: (sic).</li>
            <li>La nota textual debe contener los siguientes datos: Autor, Título, Número de edición, Editorial, Lugar de publicación, Tomo o Volumen, Año, Página.</li>
            <li>En caso de que una obra no se señale la edición, debe anotarse S.N.E. (Sin Número de Edición),  y si lo que se omite  es la editorial se pondrá S.E. (Sin Editorial).</li>
            <li>Cuando una obra se cita en forma consecutiva en la misma página, se anotará: <strong>Ibídem</strong>, Pág. #.</li>
            <li>Si la cita es en la misma cuartilla, consecutiva, de igual página de la obra se utilizará. <strong>Ídem.</strong></li>
            <li>Ibídem e Ídem solo se utilizarán si la cita está en la misma de la tesis, si la cita es discontinua se anotará el autor, Op. Cit. Pág. #.</li>
            <li>Las citas hemerográficas señalarán: Nombre del autor, Título del artículo, nombre de la revista o periódico, Editorial, Lugar de publicación, Año, Volumen, Número, Fecha y Página.</li>
            <li>En caso de que sean <strong>varios autores</strong> de una obra, se citará a pie de página solo al primero, seguido de: et. al. o y otros. En la bibliografía general señalar mínimo 3.</li>
            <li>En caso de <strong>Convenciones o Tratados Internacionales</strong>, debe especificarse la institución celebrante, nombre completo del documento, fecha de adopción, Diario Oficial de la publicación. La consulta debe ser directa. </li>
            <li>No se admiten como fuente de consulta páginas Web <u><strong>excepto instituciones  serias.</strong></u> </li>
            <li><strong>La legislación nacional</strong> debe consultarse directa, por excepción se admite en sitios Web confiables, por ejemplo: Instituto de Investigaciones Jurídicas.</li>
            <li><strong>La bibliografía obligatoria es de 30 libros.</strong></li>
          </ol>
    </div>
    <a href="#" class='close_modalKRF'>
      <img src=${close} class='close_icon' alt="icono x" />
    </a>
  </section>
  `;
};
