import Header from "./components/Header";
import { useState, useEffect } from "react";
import { Formulario } from "./components/Formulario";

import ListadoPacientes from "./components/ListadoPacientes";

function App() {
  const [pacientes, setPacientes] = useState([]);
  const [paciente, setPaciente] = useState({});

  // useEffect(() => {
  //   const obtenerLS = () => {
  //     const pacientesLS = JSON.parse(localStorage.getItem('pacientes')) ?? [];
  //     setPacientes(pacientesLS);
      
  //   };
  //   obtenerLS();
  //   console.log(3)
  // }, []);
  

  // useEffect(() => {
  //   localStorage.setItem('pacientes', JSON.stringify(pacientes));
  // }, [pacientes]);



  useEffect(() => {
    const pacientesLocal = JSON.parse(localStorage.getItem('pacientes'));
    pacientesLocal?.length > 0 && setPacientes(pacientesLocal);
  }, []);
 
  useEffect(() => {
    localStorage.setItem('pacientes', JSON.stringify(pacientes));
  }, [pacientes]);

  const eliminarPaciente = (id) => {
    const pacientesActualizados = pacientes.filter(
      (paciente) => paciente.id !== id
    );
    setPacientes(pacientesActualizados);

  };

  return (
    <div className="container mx-auto mt-20">
      <Header />

      <div className="mt-12 md:flex">
        <Formulario
          pacientes={pacientes}
          paciente={paciente}
          setPaciente={setPaciente}
          setPacientes={setPacientes}
        />
        <ListadoPacientes
          pacientes={pacientes}
          setPaciente={setPaciente}
          eliminarPaciente={eliminarPaciente}
        />
      </div>
    </div>
  );
}

export default App;
