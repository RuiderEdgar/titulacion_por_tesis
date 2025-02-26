import close from "../../assets/icons/close.svg";
export const subERR = () => {
  return `
  <section class='subsubmodal' id='RRsubE'>
    <div class='subsubmodal_container'>
      <ol type='i' class='information'>
          <li>Dirección: Calle, número, Mz. o Lt., Colonia, C.P., Alcaldía,</li>
          <li>Teléfono de casa y móvil.</li>
          <li>Nombre del tesista.</li>
          <li>Nombre de la tesis.</li>
          <li>Número de cuenta.</li>
          <li>Nombre del asesor de tesis.</li>
          <li>Fecha de Nacimiento.</li>
          <li>Lugar de Nacimiento.</li>
      </ol>
    </div>
    <a href="#" class='close_modalERR'>
      <img src=${close} class='close_icon' alt="icono x" />
    </a>
  </section>
  `;
};
