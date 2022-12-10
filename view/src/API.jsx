import { useState, useEffect } from "react";

function API() {
    const token = localStorage.getItem("token");
    const [busca, setBusca] = useState("");
    const [erro, setErro] = useState("");
    const [resultados, setResultados] = useState([]);
    const [publicacao, setPublicacao] = useState([]);
    useEffect(() => {
        resultados.forEach(resultado => {
            fetch(`/arquivo/${resultado.arquivo}`, {
                method: "GET",
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": `Bearer ${token}`
                }
            }).then(response => response.blob()).then(data => {
                setPublicacao(p => [...p, { publicacao: resultado, blob: URL.createObjectURL(data), type: data.type }]);
                // [...publicacao, { publicacao: resultado, blob: URL.createObjectURL(data), type: data.type }])
            })
        })
    }, [resultados, token])
    function buttonHandler() {
        setPublicacao([]);
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
                    setResultados(data.result);
                    if (data.token) {
                        localStorage.setItem("token", data.token);
                    }
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
            <div className="resultados">
                {publicacao?.length > 0 ? publicacao?.map((i, index) => {
                    return (
                        <div className="resultado-busca" key={index}>
                            <p className="titulo-busca">{i.publicacao.titulo}</p>
                            <p className="texto-busca">{i.publicacao.texto}</p>
                            {i.type.includes("image") ? <img src={i.blob} alt="Imagem" /> :
                                i.type.includes("video") ? <video src={i.blob} controls></video> : <></>}

                        </div>
                    )
                }) : null}
            </div>

        </div >
    )
}
export default API;