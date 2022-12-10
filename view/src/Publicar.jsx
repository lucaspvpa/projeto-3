import { useState } from "react";

function Publicar() {
    const token = localStorage.getItem("token");
    const [titulo, setTitulo] = useState("");
    const [texto, setTexto] = useState("");
    const [erro, setErro] = useState("");
    const [arquivo, setArquivo] = useState();
    const [previa, setPrevia] = useState("");
    const [inputArquivo, setInputArquivo] = useState("");
    return (
        <div className="Publicar">
            <h1>Publicar</h1>
            <div className="form-Publicar">
                <input className="form-Publicar-input" type="text" placeholder="Título" value={titulo} onChange={(e) => { setTitulo(e.target.value) }} />
                <input className="form-Publicar-input" type="text" placeholder="Texto" value={texto} onChange={(e) => { setTexto(e.target.value) }} />
                <input type="file" accept="image/*, video/*" value={inputArquivo} onChange={(e) => {
                    if (e.target.files[0].size > 4718592) {
                        setErro('Limite de tamanho de arquivo de no máximo: 4.5MB.')
                        setInputArquivo("");
                        setArquivo();
                        setPrevia("");
                        return;
                    }
                    setInputArquivo(e.target.value)
                    setArquivo(e.target.files[0]);
                    setPrevia(URL.createObjectURL(e.target.files[0]));
                }} />
                {arquivo ? arquivo.type.startsWith("image") ? <img src={previa} alt="Prévia" /> : <video src={previa} alt="Prévia" controls /> : <img src="/placeholder.png" alt="Prévia" />}
                <button type="button" onClick={() => {
                    if (titulo.length < 3) {
                        setErro("O titulo deve ter no mínimo 3 caracteres");
                        return;
                    }
                    else if (texto.length < 3) {
                        setErro("O texto deve ter no mínimo 3 caracteres");
                        return;
                    } else if (!arquivo) {
                        setErro("Insira um arquivo válido");
                        return;
                    }
                    const formData = new FormData();
                    formData.append('titulo', titulo);
                    formData.append('texto', texto);
                    formData.append('arquivo', arquivo);
                    fetch("/publicacao", {
                        method: "POST",
                        headers: {
                            "Authorization": `Bearer ${token}`
                        },
                        body: formData
                    }).then(response => {
                        const status = response.status
                        response.json().then(res => {
                            if (status === 200 && !res.erro) {
                                setTitulo("");
                                setTexto("");
                                setInputArquivo("");
                                setArquivo();
                                setPrevia("");
                                setErro("Enviado com sucesso");
                            } else {
                                setErro(res.erro);
                            }
                        })
                    })
                }}>Publicar</button>
                {erro !== "" && <p>{erro}</p>}
            </div>
        </div>
    )
}
export default Publicar;