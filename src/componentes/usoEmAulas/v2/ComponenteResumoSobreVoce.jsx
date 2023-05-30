import { useEffect } from "react";

function ComponenteResumoSobreVoce(props) {

  useEffect(()=>{

    alert('Olá, Esse é o resumo sobre mim :)')

  },[])
  // Observação: o [] esta vazio, para gerar evento ao criar o componente

  return (
    <div>
      <div>Resumo</div>
      <p>{props.children}</p>
    </div>
  );
}

export { ComponenteResumoSobreVoce };
