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
        <li>El trabajo de investigación final debe contener lo siguiente:
          <ol class='blockquote' type='1'>
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
        </li>
        <li>El título de la tesis es definitivo y debe ser corto. </li>
        <li>Las oraciones deben tener sujeto, verbo y complemento. No usar gerundios.</li>
        <li>Se debe de utilizar la misma persona, primera del plural o impersonal.</li>
        <li>Deben coincidir género, número y tiempo verbal.</li>
        <li>Procurar no utilizar muletillas: pues, ya que, es decir, sin embargo, ni abreviaturas.</li>
        <li>La numeración de las notas de pie debe ser arábiga. Si las citas son literales deben entrecomillarse. Si son interpretativas debe ponerse confrontar o véase.: Cfr. O Veáse.</li>
        <li>
          No se toman como obra consultada para efectos de la bibliografía obligatoria.
          <ol type='i' class='blockquote'>
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
        </li>
      </ol>
      </div>
      <a href="#" class='close_modal'>
        <img src="/assets/icons/close.svg" class='close_icon' alt="icono x" />
      </a>
    </section>
  `;
}
