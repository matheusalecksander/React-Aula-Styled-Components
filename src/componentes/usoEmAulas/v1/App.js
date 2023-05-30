import "./App.css";

import { ComponenteNome } from "./componentes/ComponenteNome";
import { ComponenteResumoSobreVoce } from "./componentes/ComponenteResumoSobreVoce";
import { ComponenteCompetencia } from "./componentes/ComponenteCompetencia";
import { Button } from "react-bootstrap";


function App() {
  return (
    <div className="App">
      <p>Importando Componentes</p>
      <Button variant="primary">Primary</Button>{' '}
      <hr />

      <ComponenteNome />
      <ComponenteResumoSobreVoce>
        Moro em curitiba, trabalho na aréa de TI, eu sou desenvolvedor frondEnd
      </ComponenteResumoSobreVoce>
      <hr />
      <p>Lista de Competencias</p>

      <ComponenteCompetencia
        nome="HTML"
        descricao="Fazer pagina static para o curso realizado na Harve"
      />

      <ComponenteCompetencia
        nome="CSS"
        descricao="Para complemetar o curso de HTML da Harve"
      />
    </div>
  );
}

export default App;
