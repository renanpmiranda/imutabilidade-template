import Carro from "./Carro";
import { Button, EstilizacaoDaGaragem } from "./styledGaragem";
import { useState } from "react";

function Garagem(props) {

  const [automovel, setAutomovel] = useState({cor:"vermelho", ano: 2002, flex:"sim"})
  const [automovel1, setAutomovel1] = useState({cor:"vermelho", ano: 2002, flex:"sim"})
  const [automovel2, setAutomovel2] = useState({cor:"vermelho", ano: 2002, flex:"sim"})
  const [automovel3, setAutomovel3] = useState({cor:"vermelho", ano: 2002, flex:"sim"})

  const mudaNomeGaragem = () => {
    props.setNome("Ammal")
  }

  const trocaCarro = () => {
    const novoCarro = {
      ...automovel,
      ano: 2022,
    }
    setAutomovel(novoCarro)
  }

  const trocaCarro1 = () => {
    const novoCarro = {
      ...automovel1,
      cor: "laranja",
      ano: 2009
    }
    setAutomovel1(novoCarro)
  }

  const trocaCarro2 = () => {
    const novoCarro = {
      ...automovel2,
      cor: "preto",
      ano: 1962,
      flex: "não"
    }
    setAutomovel2(novoCarro)
  }

  const trocaCarro3 = () => {
    const novoCarro = {
      ...automovel3,
      cor: "bege",
      ano: 1929,
      flex: "não"
    }
    setAutomovel3(novoCarro)
  }
  
  return (
    <EstilizacaoDaGaragem>
      <h1>Garagem da {props.nome}</h1>
      <Button onClick={props.mensagemAprentacao}>Mensagem</Button>
      <br/>
      <button onClick={mudaNomeGaragem}>Muda Nome</button>
      <Carro
        adicionadoPor={props.nome}
        cor={automovel.cor}
        ano={automovel.ano}
        flex={automovel.flex}
        trocaCarro = {trocaCarro}
      />
      <Carro
        adicionadoPor={props.nome}
        cor={automovel1.cor}
        ano={automovel1.ano}
        flex={automovel1.flex}
        trocaCarro = {trocaCarro1}
      />
      <Carro
        adicionadoPor={props.nome}
        cor={automovel2.cor}
        ano={automovel2.ano}
        flex={automovel2.flex}
        trocaCarro = {trocaCarro2}
      />
      <Carro 
        adicionadoPor={props.nome}
        cor={automovel3.cor}
        ano={automovel3.ano}
        flex={automovel3.flex} 
        trocaCarro = {trocaCarro3}
      />
    </EstilizacaoDaGaragem>
  );
}

export default Garagem;
