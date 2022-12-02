import { useEffect, useState } from "react";
import API from "./API";
import LoginScreen from "./LoginScreen";

function App() {
	const token = localStorage.getItem("token");
	const [user, setUser] = useState({});
	const [isLogged, setIsLogged] = useState(token ? true : false);
	const [loginScreenOn, setLoginScreenOn] = useState(false);
	useEffect(() => {
		if (token) {
			fetch(`https://reqres.in/api/users/${token.replace('QpwL5tke4Pnpja7X', '')}`,
				{
					method: "GET",
					headers: { "Content-Type": "application/json" },
				}).then(res => res.json()).then(info => setUser(info.data))
		}
	}, [token]);
	return !isLogged ? (
		<div className="App">
			<header>
				<div className="Div_he1">
					<img src="https://sdfestaticassets-us-east-1.sciencedirectassets.com/shared-assets/24/images/elsevier-non-solus-new-grey.svg"
						alt="" />
					<svg xmlns="http://www.w3.org/2000/svg" version="1.1" height="15" viewBox="0 0 190 23" role="img"
						className="gh-wordmark u-margin-s-left" aria-labelledby="gh-wm-science-direct" focusable="false"
						aria-hidden="true">
						<title id="gh-wm-science-direct">ScienceDirect</title>
						<g>
							<path fill="#EB6500"
								d="M3.81 6.9c0-1.48 0.86-3.04 3.7-3.04 1.42 0 3.1 0.43 4.65 1.32l0.13-2.64c-1.42-0.63-2.97-0.96-4.78-0.96 -4.62 0-6.6 2.44-6.6 5.45 0 5.61 8.78 6.14 8.78 9.93 0 1.48-1.15 3.04-3.86 3.04 -1.72 0-3.4-0.56-4.72-1.39l-0.36 2.64c1.55 0.76 3.57 1.06 5.15 1.06 4.26 0 6.7-2.48 6.7-5.51C12.59 11.49 3.81 10.76 3.81 6.9M20.27 9.01c0.23-0.13 0.69-0.26 1.72-0.26 1.72 0 2.41 0.3 2.41 1.58h2.38c0-0.36 0-0.79-0.03-1.09 -0.23-1.98-2.15-2.67-4.88-2.67 -3 0-6.7 2.31-6.7 7.76 0 5.22 2.77 7.99 6.63 7.99 1.68 0 3.47-0.36 4.95-1.39l-0.2-2.31c-0.99 0.82-2.84 1.52-4.06 1.52 -2.14 0-4.55-1.71-4.55-5.91C17.93 10.2 20.01 9.18 20.27 9.01">
							</path>
							<rect x="29.42" y="6.97" fill="#EB6500" width="2.54" height="14.95"></rect>
							<path fill="#EB6500"
								d="M30.67 0.7c-0.92 0-1.65 0.92-1.65 1.81 0 0.93 0.76 1.85 1.65 1.85 0.89 0 1.68-0.96 1.68-1.88C32.35 1.55 31.56 0.7 30.67 0.7M48.06 14.13c0-5.18-1.42-7.56-6.01-7.56 -3.86 0-6.67 2.77-6.67 7.92 0 4.92 2.97 7.82 6.73 7.82 2.81 0 4.36-0.63 5.68-1.42l-0.2-2.31c-0.89 0.79-2.94 1.55-4.69 1.55 -3.14 0-4.88-1.95-4.88-5.51v-0.49H48.06M39.91 9.18c0.17-0.17 1.29-0.46 1.98-0.46 2.48 0 3.76 0.53 3.86 3.43h-7.46C38.56 10.27 39.71 9.37 39.91 9.18zM58.82 6.57c-2.24 0-3.63 1.12-4.85 2.61l-0.4-2.21h-2.34l0.13 1.19c0.1 0.76 0.13 1.78 0.13 2.97v10.79h2.54V11.88c0.69-0.96 2.15-2.48 2.48-2.64 0.23-0.13 1.29-0.4 2.08-0.4 2.28 0 2.48 1.15 2.54 3.43 0.03 1.19 0.03 3.17 0.03 3.17 0.03 3-0.1 6.47-0.1 6.47h2.54c0 0 0.07-4.49 0.07-6.96 0-1.48 0.03-2.97-0.1-4.46C63.31 7.43 61.49 6.57 58.82 6.57M72.12 9.01c0.23-0.13 0.69-0.26 1.72-0.26 1.72 0 2.41 0.3 2.41 1.58h2.38c0-0.36 0-0.79-0.03-1.09 -0.23-1.98-2.15-2.67-4.88-2.67 -3 0-6.7 2.31-6.7 7.76 0 5.22 2.77 7.99 6.63 7.99 1.68 0 3.47-0.36 4.95-1.39l-0.2-2.31c-0.99 0.82-2.84 1.52-4.06 1.52 -2.15 0-4.55-1.71-4.55-5.91C69.77 10.2 71.85 9.18 72.12 9.01M92.74 14.13c0-5.18-1.42-7.56-6.01-7.56 -3.86 0-6.67 2.77-6.67 7.92 0 4.92 2.97 7.82 6.73 7.82 2.81 0 4.36-0.63 5.68-1.42l-0.2-2.31c-0.89 0.79-2.94 1.55-4.69 1.55 -3.14 0-4.88-1.95-4.88-5.51v-0.49H92.74M84.59 9.18c0.17-0.17 1.29-0.46 1.98-0.46 2.48 0 3.76 0.53 3.86 3.43h-7.46C83.24 10.27 84.39 9.37 84.59 9.18zM103.9 1.98h-7.13v19.93h6.83c7.26 0 9.77-5.68 9.77-10.03C113.37 7.33 110.93 1.98 103.9 1.98M103.14 19.8h-3.76V4.1h4.09c5.38 0 6.96 4.39 6.96 7.79C110.43 16.87 108.19 19.8 103.14 19.8zM118.38 0.7c-0.92 0-1.65 0.92-1.65 1.81 0 0.93 0.76 1.85 1.65 1.85 0.89 0 1.69-0.96 1.69-1.88C120.07 1.55 119.28 0.7 118.38 0.7">
							</path>
							<rect x="117.13" y="6.97" fill="#EB6500" width="2.54" height="14.95"></rect>
							<path fill="#EB6500"
								d="M130.2 6.6c-1.62 0-2.87 1.45-3.4 2.74l-0.43-2.37h-2.34l0.13 1.19c0.1 0.76 0.13 1.75 0.13 2.9v10.86h2.54v-9.51c0.53-1.29 1.72-3.7 3.17-3.7 0.96 0 1.06 0.99 1.06 1.22l2.08-0.6V9.18c0-0.03-0.03-0.17-0.06-0.4C132.8 7.36 131.91 6.6 130.2 6.6M145.87 14.13c0-5.18-1.42-7.56-6.01-7.56 -3.86 0-6.67 2.77-6.67 7.92 0 4.92 2.97 7.82 6.73 7.82 2.81 0 4.36-0.63 5.68-1.42l-0.2-2.31c-0.89 0.79-2.94 1.55-4.69 1.55 -3.14 0-4.89-1.95-4.89-5.51v-0.49H145.87M137.72 9.18c0.17-0.17 1.29-0.46 1.98-0.46 2.48 0 3.76 0.53 3.86 3.43h-7.46C136.37 10.27 137.52 9.37 137.72 9.18zM153.23 9.01c0.23-0.13 0.69-0.26 1.72-0.26 1.72 0 2.41 0.3 2.41 1.58h2.38c0-0.36 0-0.79-0.03-1.09 -0.23-1.98-2.14-2.67-4.88-2.67 -3 0-6.7 2.31-6.7 7.76 0 5.22 2.77 7.99 6.63 7.99 1.69 0 3.47-0.36 4.95-1.39l-0.2-2.31c-0.99 0.82-2.84 1.52-4.06 1.52 -2.15 0-4.55-1.71-4.55-5.91C150.89 10.2 152.97 9.18 153.23 9.01M170 19.44c-0.92 0.36-1.72 0.69-2.51 0.69 -1.16 0-1.58-0.66-1.58-2.34V8.95h3.93V6.97h-3.93V2.97h-2.48v3.99h-2.71v1.98h2.71v9.67c0 2.64 1.39 3.73 3.33 3.73 1.15 0 2.54-0.39 3.43-0.79L170 19.44M173.68 5.96c-1.09 0-2-0.87-2-1.97 0-1.1 0.91-1.97 2-1.97s1.98 0.88 1.98 1.98C175.66 5.09 174.77 5.96 173.68 5.96zM173.67 2.46c-0.85 0-1.54 0.67-1.54 1.52 0 0.85 0.69 1.54 1.54 1.54 0.85 0 1.54-0.69 1.54-1.54C175.21 3.13 174.52 2.46 173.67 2.46zM174.17 5.05c-0.09-0.09-0.17-0.19-0.25-0.3l-0.41-0.56h-0.16v0.87h-0.39V2.92c0.22-0.01 0.47-0.03 0.66-0.03 0.41 0 0.82 0.16 0.82 0.64 0 0.29-0.21 0.55-0.49 0.63 0.23 0.32 0.45 0.62 0.73 0.91H174.17zM173.56 3.22l-0.22 0.01v0.63h0.22c0.26 0 0.43-0.05 0.43-0.34C174 3.28 173.83 3.21 173.56 3.22z">
							</path>
						</g>
					</svg>
				</div>
				<div className="Div_he6">
					<div className="Div_he2">
						<div className="Div_he3">
							<ul className='Ul_he1'>
								<li className="Li_he1">
									<a href="https://www.sciencedirect.com/browse/journals-and-books" className="A_he1">
										<span className="Span">Journals & Books</span>
									</a>
									<div className="Underscore">
									</div>
								</li>
							</ul>
						</div>
					</div>
					<div className="Div_he4">
						<svg className='SVG_he1' role="img" focusable="false" viewBox="0 0 114 128" aria-hidden="true"
							width="21.375" height="24" aria-label="Help">
							<path
								d="m57 8c-14.7 0-28.5 5.72-38.9 16.1-10.38 10.4-16.1 24.22-16.1 38.9 0 30.32 24.68 55 55 55 14.68 0 28.5-5.72 38.88-16.1 10.4-10.4 16.12-24.2 16.12-38.9 0-30.32-24.68-55-55-55zm0 1e1c24.82 0 45 20.18 45 45 0 12.02-4.68 23.32-13.18 31.82s-19.8 13.18-31.82 13.18c-24.82 0-45-20.18-45-45 0-12.02 4.68-23.32 13.18-31.82s19.8-13.18 31.82-13.18zm-0.14 14c-11.55 0.26-16.86 8.43-16.86 18v2h1e1v-2c0-4.22 2.22-9.66 8-9.24 5.5 0.4 6.32 5.14 5.78 8.14-1.1 6.16-11.78 9.5-11.78 20.5v6.6h1e1v-5.56c0-8.16 11.22-11.52 12-21.7 0.74-9.86-5.56-16.52-16-16.74-0.39-0.01-0.76-0.01-1.14 0zm-4.86 5e1v1e1h1e1v-1e1h-1e1z">
							</path>
						</svg>
					</div>
					<div className="Div_he5">
						<a href="/"
							className="A_he2">
							<span className="Span_he2">
								Corporate sign in
							</span>
						</a>
						<div onClick={() => { setLoginScreenOn(true) }} className="A_he3">
							<span className="Span_he2">
								Sign in / register
							</span>
						</div>
					</div>
				</div>
				<div className="side-menu">
					<div className="bar"></div>
					<div className="bar"></div>
					<div className="bar"></div>
				</div>
			</header>
			{loginScreenOn && <LoginScreen setLoginScreenOn={setLoginScreenOn} setIsLogged={setIsLogged} />}
		</div>
	) : (<>
		<header>
			<div className="Div_he1">
				<img src="https://sdfestaticassets-us-east-1.sciencedirectassets.com/shared-assets/24/images/elsevier-non-solus-new-grey.svg"
					alt="" />
				<svg xmlns="http://www.w3.org/2000/svg" version="1.1" height="15" viewBox="0 0 190 23" role="img"
					className="gh-wordmark u-margin-s-left" aria-labelledby="gh-wm-science-direct" focusable="false"
					aria-hidden="true">
					<title id="gh-wm-science-direct">ScienceDirect</title>
					<g>
						<path fill="#EB6500"
							d="M3.81 6.9c0-1.48 0.86-3.04 3.7-3.04 1.42 0 3.1 0.43 4.65 1.32l0.13-2.64c-1.42-0.63-2.97-0.96-4.78-0.96 -4.62 0-6.6 2.44-6.6 5.45 0 5.61 8.78 6.14 8.78 9.93 0 1.48-1.15 3.04-3.86 3.04 -1.72 0-3.4-0.56-4.72-1.39l-0.36 2.64c1.55 0.76 3.57 1.06 5.15 1.06 4.26 0 6.7-2.48 6.7-5.51C12.59 11.49 3.81 10.76 3.81 6.9M20.27 9.01c0.23-0.13 0.69-0.26 1.72-0.26 1.72 0 2.41 0.3 2.41 1.58h2.38c0-0.36 0-0.79-0.03-1.09 -0.23-1.98-2.15-2.67-4.88-2.67 -3 0-6.7 2.31-6.7 7.76 0 5.22 2.77 7.99 6.63 7.99 1.68 0 3.47-0.36 4.95-1.39l-0.2-2.31c-0.99 0.82-2.84 1.52-4.06 1.52 -2.14 0-4.55-1.71-4.55-5.91C17.93 10.2 20.01 9.18 20.27 9.01">
						</path>
						<rect x="29.42" y="6.97" fill="#EB6500" width="2.54" height="14.95"></rect>
						<path fill="#EB6500"
							d="M30.67 0.7c-0.92 0-1.65 0.92-1.65 1.81 0 0.93 0.76 1.85 1.65 1.85 0.89 0 1.68-0.96 1.68-1.88C32.35 1.55 31.56 0.7 30.67 0.7M48.06 14.13c0-5.18-1.42-7.56-6.01-7.56 -3.86 0-6.67 2.77-6.67 7.92 0 4.92 2.97 7.82 6.73 7.82 2.81 0 4.36-0.63 5.68-1.42l-0.2-2.31c-0.89 0.79-2.94 1.55-4.69 1.55 -3.14 0-4.88-1.95-4.88-5.51v-0.49H48.06M39.91 9.18c0.17-0.17 1.29-0.46 1.98-0.46 2.48 0 3.76 0.53 3.86 3.43h-7.46C38.56 10.27 39.71 9.37 39.91 9.18zM58.82 6.57c-2.24 0-3.63 1.12-4.85 2.61l-0.4-2.21h-2.34l0.13 1.19c0.1 0.76 0.13 1.78 0.13 2.97v10.79h2.54V11.88c0.69-0.96 2.15-2.48 2.48-2.64 0.23-0.13 1.29-0.4 2.08-0.4 2.28 0 2.48 1.15 2.54 3.43 0.03 1.19 0.03 3.17 0.03 3.17 0.03 3-0.1 6.47-0.1 6.47h2.54c0 0 0.07-4.49 0.07-6.96 0-1.48 0.03-2.97-0.1-4.46C63.31 7.43 61.49 6.57 58.82 6.57M72.12 9.01c0.23-0.13 0.69-0.26 1.72-0.26 1.72 0 2.41 0.3 2.41 1.58h2.38c0-0.36 0-0.79-0.03-1.09 -0.23-1.98-2.15-2.67-4.88-2.67 -3 0-6.7 2.31-6.7 7.76 0 5.22 2.77 7.99 6.63 7.99 1.68 0 3.47-0.36 4.95-1.39l-0.2-2.31c-0.99 0.82-2.84 1.52-4.06 1.52 -2.15 0-4.55-1.71-4.55-5.91C69.77 10.2 71.85 9.18 72.12 9.01M92.74 14.13c0-5.18-1.42-7.56-6.01-7.56 -3.86 0-6.67 2.77-6.67 7.92 0 4.92 2.97 7.82 6.73 7.82 2.81 0 4.36-0.63 5.68-1.42l-0.2-2.31c-0.89 0.79-2.94 1.55-4.69 1.55 -3.14 0-4.88-1.95-4.88-5.51v-0.49H92.74M84.59 9.18c0.17-0.17 1.29-0.46 1.98-0.46 2.48 0 3.76 0.53 3.86 3.43h-7.46C83.24 10.27 84.39 9.37 84.59 9.18zM103.9 1.98h-7.13v19.93h6.83c7.26 0 9.77-5.68 9.77-10.03C113.37 7.33 110.93 1.98 103.9 1.98M103.14 19.8h-3.76V4.1h4.09c5.38 0 6.96 4.39 6.96 7.79C110.43 16.87 108.19 19.8 103.14 19.8zM118.38 0.7c-0.92 0-1.65 0.92-1.65 1.81 0 0.93 0.76 1.85 1.65 1.85 0.89 0 1.69-0.96 1.69-1.88C120.07 1.55 119.28 0.7 118.38 0.7">
						</path>
						<rect x="117.13" y="6.97" fill="#EB6500" width="2.54" height="14.95"></rect>
						<path fill="#EB6500"
							d="M130.2 6.6c-1.62 0-2.87 1.45-3.4 2.74l-0.43-2.37h-2.34l0.13 1.19c0.1 0.76 0.13 1.75 0.13 2.9v10.86h2.54v-9.51c0.53-1.29 1.72-3.7 3.17-3.7 0.96 0 1.06 0.99 1.06 1.22l2.08-0.6V9.18c0-0.03-0.03-0.17-0.06-0.4C132.8 7.36 131.91 6.6 130.2 6.6M145.87 14.13c0-5.18-1.42-7.56-6.01-7.56 -3.86 0-6.67 2.77-6.67 7.92 0 4.92 2.97 7.82 6.73 7.82 2.81 0 4.36-0.63 5.68-1.42l-0.2-2.31c-0.89 0.79-2.94 1.55-4.69 1.55 -3.14 0-4.89-1.95-4.89-5.51v-0.49H145.87M137.72 9.18c0.17-0.17 1.29-0.46 1.98-0.46 2.48 0 3.76 0.53 3.86 3.43h-7.46C136.37 10.27 137.52 9.37 137.72 9.18zM153.23 9.01c0.23-0.13 0.69-0.26 1.72-0.26 1.72 0 2.41 0.3 2.41 1.58h2.38c0-0.36 0-0.79-0.03-1.09 -0.23-1.98-2.14-2.67-4.88-2.67 -3 0-6.7 2.31-6.7 7.76 0 5.22 2.77 7.99 6.63 7.99 1.69 0 3.47-0.36 4.95-1.39l-0.2-2.31c-0.99 0.82-2.84 1.52-4.06 1.52 -2.15 0-4.55-1.71-4.55-5.91C150.89 10.2 152.97 9.18 153.23 9.01M170 19.44c-0.92 0.36-1.72 0.69-2.51 0.69 -1.16 0-1.58-0.66-1.58-2.34V8.95h3.93V6.97h-3.93V2.97h-2.48v3.99h-2.71v1.98h2.71v9.67c0 2.64 1.39 3.73 3.33 3.73 1.15 0 2.54-0.39 3.43-0.79L170 19.44M173.68 5.96c-1.09 0-2-0.87-2-1.97 0-1.1 0.91-1.97 2-1.97s1.98 0.88 1.98 1.98C175.66 5.09 174.77 5.96 173.68 5.96zM173.67 2.46c-0.85 0-1.54 0.67-1.54 1.52 0 0.85 0.69 1.54 1.54 1.54 0.85 0 1.54-0.69 1.54-1.54C175.21 3.13 174.52 2.46 173.67 2.46zM174.17 5.05c-0.09-0.09-0.17-0.19-0.25-0.3l-0.41-0.56h-0.16v0.87h-0.39V2.92c0.22-0.01 0.47-0.03 0.66-0.03 0.41 0 0.82 0.16 0.82 0.64 0 0.29-0.21 0.55-0.49 0.63 0.23 0.32 0.45 0.62 0.73 0.91H174.17zM173.56 3.22l-0.22 0.01v0.63h0.22c0.26 0 0.43-0.05 0.43-0.34C174 3.28 173.83 3.21 173.56 3.22z">
						</path>
					</g>
				</svg>
			</div>
			<div className="user">
				<img src={user.avatar} alt="Foto" />
				<p>{user.first_name} {user.last_name}</p>
				<button onClick={() => {
					setIsLogged(false);
					localStorage.removeItem("token");
				}}>Sair</button>
			</div>
			<div className="side-menu">
				<div className="bar"></div>
				<div className="bar"></div>
				<div className="bar"></div>
			</div>
		</header>
		<API />
	</>);
}

export default App;