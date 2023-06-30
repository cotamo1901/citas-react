

const Paciente = () => {
  return (
    <div className="m-3 bg-white shadow-md px-5 py-10 rounded-xl ">
    <p className="font-bold mb-3 text-gray-700 uppercase">
      Nombre: <span className="font-normal normal-case">Hook</span>
    </p>
    <p className="font-bold mb-3 text-gray-700 uppercase">
      propietario: <span className="font-normal normal-case">John</span>
    </p>
    <p className="font-bold mb-3 text-gray-700 uppercase">
      Email: <span className="font-normal normal-case">mail@mail.com</span>
    </p>
    <p className="font-bold mb-3 text-gray-700 uppercase">
      Fecha Alta:{" "}
      <span className="font-normal normal-case">10 Diciembre 2023</span>
    </p>
    <p className="font-bold mb-3 text-gray-700 uppercase">
      Sintomas:{" "}
      <span className="font-normal normal-case">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minus
        error cum voluptates odit quibusdam accusantium ad quae repellendus
        at laudantium! Hic, eius omnis nulla quis accusantium deserunt
        dolorem cumque sed?
      </span>
    </p>
  </div>
  )
}

export default Paciente