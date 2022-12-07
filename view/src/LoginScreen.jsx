import { useState } from "react";

function LoginScreen(props) {
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [validityEmail, setValidityEmail] = useState(false);
    const [password, setPassword] = useState("");
    const [userType, setUserType] = useState(false);
    const [error, setError] = useState("");
    const [register, setRegister] = useState(false);
    const [successRegister, setSuccessRegister] = useState(false);
    return (
        !register ? <div className="container">
            <div className="login-screen">
                <div>
                    <h1>Entrar</h1>
                    <button onClick={() => props.setLoginScreenOn(false)}>X</button>
                </div>
                {successRegister && <h4>Usuário cadastrado com sucesso!</h4>}
                <div className="form">
                    <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
                    <input type="password" placeholder="Senha" value={password} onChange={(e) => setPassword(e.target.value)} />
                    {error !== "" && <p>{error}</p>}
                    <div className="space-between"></div>
                    <button type="button" onClick={() => {
                        if (email.length < 3) {
                            setError("Email deve ter no mínimo 3 caracteres");
                            return;
                        }
                        if (password.length < 3) {
                            setError("Senha deve ter no mínimo 3 caracteres");
                            return;
                        }
                        fetch("/usuario/logar", {
                            method: "POST",
                            headers: { "Content-Type": "application/json" },
                            body: JSON.stringify({ email, senha: password })
                        }).then(response => response.json()).then(data => {
                            if (data.auth) {
                                localStorage.setItem("token", data.token);
                                props.setLoginScreenOn(false)
                                props.setIsLogged(true)
                            } else {
                                if (data.erro) setError(data.erro)
                            }
                        })
                    }}>Entrar</button>
                    <button type="button" onClick={() => {
                        setRegister(true)
                    }}>Registre-se</button>
                </div>
            </div>
        </div> : <div className="container">
            <div className="register-screen">
                <div>
                    <h1>Registrar</h1>
                    <button onClick={() => props.setLoginScreenOn(false)}>X</button>
                </div>
                <div className="form">
                    <input type="text" placeholder="Nome de usuário" value={username} onChange={(e) => setUsername(e.target.value)} />
                    <input type="email" placeholder="Email" value={email} onChange={(e) => {
                        setValidityEmail(e.target.reportValidity())
                        setEmail(e.target.value)
                    }} />
                    <input type="password" placeholder="Senha" value={password} onChange={(e) => setPassword(e.target.value)} />
                    <div className="checkbox-admin">
                        <input type="checkbox" value='admin' onChange={e => { setUserType(e.target.checked) }} />
                        <span> Administrador</span>
                    </div>
                    {error !== "" && <p>{error}</p>}
                    <button type="button" onClick={() => {
                        if (username.length < 3) {
                            setError("Nome de usuário deve ter no mínimo 3 caracteres");
                            return;
                        }
                        if (email.length < 3) {
                            setError("Email deve ter no mínimo 3 caracteres");
                            return;
                        }
                        if (!validityEmail) {
                            setError("Email inválido");
                            return;
                        }
                        if (password.length < 3) {
                            setError("Senha deve ter no mínimo 3 caracteres");
                            return;
                        }
                        fetch("/usuario/cadastrar", {
                            method: "POST",
                            headers: { "Content-Type": "application/json" },
                            body: JSON.stringify({ email, senha: password, nome: username, tipo: userType ? 'admin' : 'usuario' })
                        }).then(response => response.json()).then(res => {
                            if (res.erro) {
                                setError(res.erro)
                            } else {
                                setEmail("")
                                setPassword("")
                                setUsername("")
                                setUserType(false)
                                setError("")
                                setSuccessRegister(true)
                                setRegister(false)
                            }
                        })
                    }}>Registrar</button>
                </div>
            </div>
        </div>
    );
}

export default LoginScreen;
