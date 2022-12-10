import { useState } from "react";

function API() {
    const placeholder = "/placeholder.png";
    const token = localStorage.getItem("token");
    const [busca, setBusca] = useState("");
    const [erro, setErro] = useState("");
    const [resultados, setResultados] = useState([]);
    function buttonHandler() {
        if (busca.length < 3) {
            setErro("Digite pelo menos 3 caracteres");
            return
        }
        fetch(`/publicacao/${busca}`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${token}`
            }
        }).then(response => response.json()).then(data => {
            if (data.erro) {
                setErro(data.erro);
                return;
            } else {
                if (data.length === 0) {
                    setErro("Nenhum resultado encontrado");
                    return;
                } else {
                    setErro("");
                    setResultados(data);
                }
            }
        })
    }
    return (
        <div className="busca">
            <div className="opcoes"><p>Busque por uma publicação</p> </div>
            <br></br>
            <div className="campos-busca">
                <input placeholder="Busque por um título ou descrição" type="text" value={busca}
                    onChange={(e) => setBusca(e.target.value)} />
                <button type="button" onClick={() => buttonHandler()}>Buscar</button>
            </div>
            {erro !== "" && <p className="erro-busca">{erro}</p>}
            {resultados.map((resultado, index) => {
                return (
                    <div className="resultado-busca">
                        <p className="titulo-busca">{resultado.titulo}</p>
                        <p className="texto-busca">{resultado.texto}</p>
                    </div>
                )
            })}
            {/* <div className="imagem-container">
                <img className="imagem-busca" src={imagemURL || placeholder} alt="Imagem" />
            </div> */}
        </div >
    )
}
export default API;