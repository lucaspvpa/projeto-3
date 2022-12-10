(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{13:function(e,t,c){},15:function(e,t,c){"use strict";c.r(t);var s=c(1),a=c.n(s),n=c(4),i=c.n(n),r=(c(13),c(2)),l=c(0);var o=function(){var e=localStorage.getItem("token"),t=Object(s.useState)(""),c=Object(r.a)(t,2),a=c[0],n=c[1],i=Object(s.useState)(""),o=Object(r.a)(i,2),j=o[0],h=o[1],d=Object(s.useState)([]),b=Object(r.a)(d,2),u=b[0],O=b[1];return Object(l.jsxs)("div",{className:"busca",children:[Object(l.jsxs)("div",{className:"opcoes",children:[Object(l.jsx)("p",{children:"Busque por uma publica\xe7\xe3o"})," "]}),Object(l.jsx)("br",{}),Object(l.jsxs)("div",{className:"campos-busca",children:[Object(l.jsx)("input",{placeholder:"Busque por um t\xedtulo ou descri\xe7\xe3o",type:"text",value:a,onChange:function(e){return n(e.target.value)}}),Object(l.jsx)("button",{type:"button",onClick:function(){a.length<3?h("Digite pelo menos 3 caracteres"):fetch("/publicacao/".concat(a),{method:"GET",headers:{"Content-Type":"application/json",Authorization:"Bearer ".concat(e)}}).then((function(e){return e.json()})).then((function(e){e.erro?h(e.erro):0!==e.length?(h(""),O(e)):h("Nenhum resultado encontrado")}))},children:"Buscar"})]}),""!==j&&Object(l.jsx)("p",{className:"erro-busca",children:j}),u.map((function(e,t){return Object(l.jsxs)("div",{className:"resultado-busca",children:[Object(l.jsx)("p",{className:"titulo-busca",children:e.titulo}),Object(l.jsx)("p",{className:"texto-busca",children:e.texto})]})}))]})};var j=function(){var e=localStorage.getItem("token"),t=Object(s.useState)(""),c=Object(r.a)(t,2),a=c[0],n=c[1],i=Object(s.useState)(""),o=Object(r.a)(i,2),j=o[0],h=o[1],d=Object(s.useState)(""),b=Object(r.a)(d,2),u=b[0],O=b[1],m=Object(s.useState)(),v=Object(r.a)(m,2),x=v[0],p=v[1],g=Object(s.useState)(""),f=Object(r.a)(g,2),C=f[0],N=f[1],S=Object(s.useState)(""),M=Object(r.a)(S,2),y=M[0],w=M[1];return Object(l.jsxs)("div",{className:"Publicar",children:[Object(l.jsx)("h1",{children:"Publicar"}),Object(l.jsxs)("div",{className:"form-Publicar",children:[Object(l.jsx)("input",{className:"form-Publicar-input",type:"text",placeholder:"T\xedtulo",value:a,onChange:function(e){n(e.target.value)}}),Object(l.jsx)("input",{className:"form-Publicar-input",type:"text",placeholder:"Texto",value:j,onChange:function(e){h(e.target.value)}}),Object(l.jsx)("input",{type:"file",accept:"image/*, video/*",value:y,onChange:function(e){e.target.files[0].size>4718592?O("Limite de tamanho de arquivo de no m\xe1ximo: 4.5MB."):(w(e.target.value),p(e.target.files[0]),N(URL.createObjectURL(e.target.files[0])))}}),x?x.type.startsWith("image")?Object(l.jsx)("img",{src:C,alt:"Pr\xe9via"}):Object(l.jsx)("video",{src:C,alt:"Pr\xe9via",controls:!0}):Object(l.jsx)("img",{src:"/placeholder.png",alt:"Pr\xe9via"}),Object(l.jsx)("button",{type:"button",onClick:function(){if(a.length<3)O("O titulo deve ter no m\xednimo 3 caracteres");else if(j.length<3)O("O texto deve ter no m\xednimo 3 caracteres");else if(x){var t=new FormData;t.append("titulo",a),t.append("texto",j),t.append("arquivo",x),fetch("/publicacao",{method:"POST",headers:{Authorization:"Bearer ".concat(e)},body:t}).then((function(e){var t=e.status;e.json().then((function(e){200!==t&&e.erro?O(e.erro):(n(""),h(""),w(""),p(),N(""),O("Enviado com sucesso"))}))}))}else O("Insira um arquivo v\xe1lido")},children:"Publicar"}),""!==u&&Object(l.jsx)("p",{children:u})]})]})};var h=function(e){var t=Object(s.useState)(""),c=Object(r.a)(t,2),a=c[0],n=c[1],i=Object(s.useState)(""),o=Object(r.a)(i,2),j=o[0],h=o[1],d=Object(s.useState)(!1),b=Object(r.a)(d,2),u=b[0],O=b[1],m=Object(s.useState)(""),v=Object(r.a)(m,2),x=v[0],p=v[1],g=Object(s.useState)(!1),f=Object(r.a)(g,2),C=f[0],N=f[1],S=Object(s.useState)(""),M=Object(r.a)(S,2),y=M[0],w=M[1],k=Object(s.useState)(!1),z=Object(r.a)(k,2),B=z[0],E=z[1],V=Object(s.useState)(!1),_=Object(r.a)(V,2),P=_[0],L=_[1];return B?Object(l.jsx)("div",{className:"container",children:Object(l.jsxs)("div",{className:"register-screen",children:[Object(l.jsxs)("div",{children:[Object(l.jsx)("h1",{children:"Registrar"}),Object(l.jsx)("button",{onClick:function(){return e.setLoginScreenOn(!1)},children:"X"})]}),Object(l.jsxs)("div",{className:"form",children:[Object(l.jsx)("input",{type:"text",placeholder:"Nome de usu\xe1rio",value:a,onChange:function(e){return n(e.target.value)}}),Object(l.jsx)("input",{type:"email",placeholder:"Email",value:j,onChange:function(e){O(e.target.reportValidity()),h(e.target.value)}}),Object(l.jsx)("input",{type:"password",placeholder:"Senha",value:x,onChange:function(e){return p(e.target.value)}}),Object(l.jsxs)("div",{className:"checkbox-admin",children:[Object(l.jsx)("input",{type:"checkbox",value:"admin",onChange:function(e){N(e.target.checked)}}),Object(l.jsx)("span",{children:" Administrador"})]}),""!==y&&Object(l.jsx)("p",{children:y}),Object(l.jsx)("button",{type:"button",onClick:function(){a.length<3?w("Nome de usu\xe1rio deve ter no m\xednimo 3 caracteres"):j.length<3?w("Email deve ter no m\xednimo 3 caracteres"):u?x.length<3?w("Senha deve ter no m\xednimo 3 caracteres"):fetch("/usuario/cadastrar",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({email:j,senha:x,nome:a,tipo:C?"admin":"usuario"})}).then((function(e){return e.json()})).then((function(e){e.erro?w(e.erro):(h(""),p(""),n(""),N(!1),w(""),L(!0),E(!1))})):w("Email inv\xe1lido")},children:"Registrar"})]})]})}):Object(l.jsx)("div",{className:"container",children:Object(l.jsxs)("div",{className:"login-screen",children:[Object(l.jsxs)("div",{children:[Object(l.jsx)("h1",{children:"Entrar"}),Object(l.jsx)("button",{onClick:function(){return e.setLoginScreenOn(!1)},children:"X"})]}),P&&Object(l.jsx)("h4",{children:"Usu\xe1rio cadastrado com sucesso!"}),Object(l.jsxs)("div",{className:"form",children:[Object(l.jsx)("input",{type:"email",placeholder:"Email",value:j,onChange:function(e){return h(e.target.value)}}),Object(l.jsx)("input",{type:"password",placeholder:"Senha",value:x,onChange:function(e){return p(e.target.value)}}),""!==y&&Object(l.jsx)("p",{children:y}),Object(l.jsx)("div",{className:"space-between"}),Object(l.jsx)("button",{type:"button",onClick:function(){j.length<3?w("Email deve ter no m\xednimo 3 caracteres"):x.length<3?w("Senha deve ter no m\xednimo 3 caracteres"):fetch("/usuario/logar",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({email:j,senha:x})}).then((function(e){return e.json()})).then((function(t){t.auth?(localStorage.setItem("token",t.token),e.setLoginScreenOn(!1),e.setIsLogged(!0)):t.erro&&w(t.erro)}))},children:"Entrar"}),Object(l.jsx)("button",{type:"button",onClick:function(){E(!0)},children:"Registre-se"})]})]})})};var d=function(){var e=localStorage.getItem("token"),t=Object(s.useState)({}),c=Object(r.a)(t,2),a=c[0],n=c[1],i=Object(s.useState)(!!e),d=Object(r.a)(i,2),b=d[0],u=d[1],O=Object(s.useState)(!1),m=Object(r.a)(O,2),v=m[0],x=m[1],p=Object(s.useState)(!1),g=Object(r.a)(p,2),f=g[0],C=g[1];return Object(s.useEffect)((function(){e&&fetch("/usuario",{method:"GET",headers:{"Content-Type":"application/json",Authorization:"Bearer ".concat(e)}}).then((function(e){return e.json()})).then((function(e){return n(e)}))}),[e]),b?Object(l.jsxs)(l.Fragment,{children:[Object(l.jsxs)("header",{children:[Object(l.jsxs)("div",{className:"Div_he1",children:[Object(l.jsx)("img",{src:"https://sdfestaticassets-us-east-1.sciencedirectassets.com/shared-assets/24/images/elsevier-non-solus-new-grey.svg",alt:""}),Object(l.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",version:"1.1",height:"15",viewBox:"0 0 190 23",role:"img",className:"gh-wordmark u-margin-s-left","aria-labelledby":"gh-wm-science-direct",focusable:"false","aria-hidden":"true",children:[Object(l.jsx)("title",{id:"gh-wm-science-direct",children:"ScienceDirect"}),Object(l.jsxs)("g",{children:[Object(l.jsx)("path",{fill:"#EB6500",d:"M3.81 6.9c0-1.48 0.86-3.04 3.7-3.04 1.42 0 3.1 0.43 4.65 1.32l0.13-2.64c-1.42-0.63-2.97-0.96-4.78-0.96 -4.62 0-6.6 2.44-6.6 5.45 0 5.61 8.78 6.14 8.78 9.93 0 1.48-1.15 3.04-3.86 3.04 -1.72 0-3.4-0.56-4.72-1.39l-0.36 2.64c1.55 0.76 3.57 1.06 5.15 1.06 4.26 0 6.7-2.48 6.7-5.51C12.59 11.49 3.81 10.76 3.81 6.9M20.27 9.01c0.23-0.13 0.69-0.26 1.72-0.26 1.72 0 2.41 0.3 2.41 1.58h2.38c0-0.36 0-0.79-0.03-1.09 -0.23-1.98-2.15-2.67-4.88-2.67 -3 0-6.7 2.31-6.7 7.76 0 5.22 2.77 7.99 6.63 7.99 1.68 0 3.47-0.36 4.95-1.39l-0.2-2.31c-0.99 0.82-2.84 1.52-4.06 1.52 -2.14 0-4.55-1.71-4.55-5.91C17.93 10.2 20.01 9.18 20.27 9.01"}),Object(l.jsx)("rect",{x:"29.42",y:"6.97",fill:"#EB6500",width:"2.54",height:"14.95"}),Object(l.jsx)("path",{fill:"#EB6500",d:"M30.67 0.7c-0.92 0-1.65 0.92-1.65 1.81 0 0.93 0.76 1.85 1.65 1.85 0.89 0 1.68-0.96 1.68-1.88C32.35 1.55 31.56 0.7 30.67 0.7M48.06 14.13c0-5.18-1.42-7.56-6.01-7.56 -3.86 0-6.67 2.77-6.67 7.92 0 4.92 2.97 7.82 6.73 7.82 2.81 0 4.36-0.63 5.68-1.42l-0.2-2.31c-0.89 0.79-2.94 1.55-4.69 1.55 -3.14 0-4.88-1.95-4.88-5.51v-0.49H48.06M39.91 9.18c0.17-0.17 1.29-0.46 1.98-0.46 2.48 0 3.76 0.53 3.86 3.43h-7.46C38.56 10.27 39.71 9.37 39.91 9.18zM58.82 6.57c-2.24 0-3.63 1.12-4.85 2.61l-0.4-2.21h-2.34l0.13 1.19c0.1 0.76 0.13 1.78 0.13 2.97v10.79h2.54V11.88c0.69-0.96 2.15-2.48 2.48-2.64 0.23-0.13 1.29-0.4 2.08-0.4 2.28 0 2.48 1.15 2.54 3.43 0.03 1.19 0.03 3.17 0.03 3.17 0.03 3-0.1 6.47-0.1 6.47h2.54c0 0 0.07-4.49 0.07-6.96 0-1.48 0.03-2.97-0.1-4.46C63.31 7.43 61.49 6.57 58.82 6.57M72.12 9.01c0.23-0.13 0.69-0.26 1.72-0.26 1.72 0 2.41 0.3 2.41 1.58h2.38c0-0.36 0-0.79-0.03-1.09 -0.23-1.98-2.15-2.67-4.88-2.67 -3 0-6.7 2.31-6.7 7.76 0 5.22 2.77 7.99 6.63 7.99 1.68 0 3.47-0.36 4.95-1.39l-0.2-2.31c-0.99 0.82-2.84 1.52-4.06 1.52 -2.15 0-4.55-1.71-4.55-5.91C69.77 10.2 71.85 9.18 72.12 9.01M92.74 14.13c0-5.18-1.42-7.56-6.01-7.56 -3.86 0-6.67 2.77-6.67 7.92 0 4.92 2.97 7.82 6.73 7.82 2.81 0 4.36-0.63 5.68-1.42l-0.2-2.31c-0.89 0.79-2.94 1.55-4.69 1.55 -3.14 0-4.88-1.95-4.88-5.51v-0.49H92.74M84.59 9.18c0.17-0.17 1.29-0.46 1.98-0.46 2.48 0 3.76 0.53 3.86 3.43h-7.46C83.24 10.27 84.39 9.37 84.59 9.18zM103.9 1.98h-7.13v19.93h6.83c7.26 0 9.77-5.68 9.77-10.03C113.37 7.33 110.93 1.98 103.9 1.98M103.14 19.8h-3.76V4.1h4.09c5.38 0 6.96 4.39 6.96 7.79C110.43 16.87 108.19 19.8 103.14 19.8zM118.38 0.7c-0.92 0-1.65 0.92-1.65 1.81 0 0.93 0.76 1.85 1.65 1.85 0.89 0 1.69-0.96 1.69-1.88C120.07 1.55 119.28 0.7 118.38 0.7"}),Object(l.jsx)("rect",{x:"117.13",y:"6.97",fill:"#EB6500",width:"2.54",height:"14.95"}),Object(l.jsx)("path",{fill:"#EB6500",d:"M130.2 6.6c-1.62 0-2.87 1.45-3.4 2.74l-0.43-2.37h-2.34l0.13 1.19c0.1 0.76 0.13 1.75 0.13 2.9v10.86h2.54v-9.51c0.53-1.29 1.72-3.7 3.17-3.7 0.96 0 1.06 0.99 1.06 1.22l2.08-0.6V9.18c0-0.03-0.03-0.17-0.06-0.4C132.8 7.36 131.91 6.6 130.2 6.6M145.87 14.13c0-5.18-1.42-7.56-6.01-7.56 -3.86 0-6.67 2.77-6.67 7.92 0 4.92 2.97 7.82 6.73 7.82 2.81 0 4.36-0.63 5.68-1.42l-0.2-2.31c-0.89 0.79-2.94 1.55-4.69 1.55 -3.14 0-4.89-1.95-4.89-5.51v-0.49H145.87M137.72 9.18c0.17-0.17 1.29-0.46 1.98-0.46 2.48 0 3.76 0.53 3.86 3.43h-7.46C136.37 10.27 137.52 9.37 137.72 9.18zM153.23 9.01c0.23-0.13 0.69-0.26 1.72-0.26 1.72 0 2.41 0.3 2.41 1.58h2.38c0-0.36 0-0.79-0.03-1.09 -0.23-1.98-2.14-2.67-4.88-2.67 -3 0-6.7 2.31-6.7 7.76 0 5.22 2.77 7.99 6.63 7.99 1.69 0 3.47-0.36 4.95-1.39l-0.2-2.31c-0.99 0.82-2.84 1.52-4.06 1.52 -2.15 0-4.55-1.71-4.55-5.91C150.89 10.2 152.97 9.18 153.23 9.01M170 19.44c-0.92 0.36-1.72 0.69-2.51 0.69 -1.16 0-1.58-0.66-1.58-2.34V8.95h3.93V6.97h-3.93V2.97h-2.48v3.99h-2.71v1.98h2.71v9.67c0 2.64 1.39 3.73 3.33 3.73 1.15 0 2.54-0.39 3.43-0.79L170 19.44M173.68 5.96c-1.09 0-2-0.87-2-1.97 0-1.1 0.91-1.97 2-1.97s1.98 0.88 1.98 1.98C175.66 5.09 174.77 5.96 173.68 5.96zM173.67 2.46c-0.85 0-1.54 0.67-1.54 1.52 0 0.85 0.69 1.54 1.54 1.54 0.85 0 1.54-0.69 1.54-1.54C175.21 3.13 174.52 2.46 173.67 2.46zM174.17 5.05c-0.09-0.09-0.17-0.19-0.25-0.3l-0.41-0.56h-0.16v0.87h-0.39V2.92c0.22-0.01 0.47-0.03 0.66-0.03 0.41 0 0.82 0.16 0.82 0.64 0 0.29-0.21 0.55-0.49 0.63 0.23 0.32 0.45 0.62 0.73 0.91H174.17zM173.56 3.22l-0.22 0.01v0.63h0.22c0.26 0 0.43-0.05 0.43-0.34C174 3.28 173.83 3.21 173.56 3.22z"})]})]})]}),Object(l.jsxs)("div",{className:"user",children:[Object(l.jsx)("img",{src:"./placeholder-perfil.jpg",alt:"Foto"}),Object(l.jsx)("p",{children:a.nome}),"admin"===a.tipo&&Object(l.jsx)("button",{onClick:function(){C(!f)},children:f?"Buscar":"Publicar"}),Object(l.jsx)("button",{onClick:function(){u(!1),localStorage.removeItem("token")},children:"Sair"})]}),Object(l.jsxs)("div",{className:"side-menu",children:[Object(l.jsx)("div",{className:"bar"}),Object(l.jsx)("div",{className:"bar"}),Object(l.jsx)("div",{className:"bar"})]})]}),f?Object(l.jsx)(j,{}):Object(l.jsx)(o,{})]}):Object(l.jsxs)("div",{className:"App",children:[Object(l.jsxs)("header",{children:[Object(l.jsxs)("div",{className:"Div_he1",children:[Object(l.jsx)("img",{src:"https://sdfestaticassets-us-east-1.sciencedirectassets.com/shared-assets/24/images/elsevier-non-solus-new-grey.svg",alt:""}),Object(l.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",version:"1.1",height:"15",viewBox:"0 0 190 23",role:"img",className:"gh-wordmark u-margin-s-left","aria-labelledby":"gh-wm-science-direct",focusable:"false","aria-hidden":"true",children:[Object(l.jsx)("title",{id:"gh-wm-science-direct",children:"ScienceDirect"}),Object(l.jsxs)("g",{children:[Object(l.jsx)("path",{fill:"#EB6500",d:"M3.81 6.9c0-1.48 0.86-3.04 3.7-3.04 1.42 0 3.1 0.43 4.65 1.32l0.13-2.64c-1.42-0.63-2.97-0.96-4.78-0.96 -4.62 0-6.6 2.44-6.6 5.45 0 5.61 8.78 6.14 8.78 9.93 0 1.48-1.15 3.04-3.86 3.04 -1.72 0-3.4-0.56-4.72-1.39l-0.36 2.64c1.55 0.76 3.57 1.06 5.15 1.06 4.26 0 6.7-2.48 6.7-5.51C12.59 11.49 3.81 10.76 3.81 6.9M20.27 9.01c0.23-0.13 0.69-0.26 1.72-0.26 1.72 0 2.41 0.3 2.41 1.58h2.38c0-0.36 0-0.79-0.03-1.09 -0.23-1.98-2.15-2.67-4.88-2.67 -3 0-6.7 2.31-6.7 7.76 0 5.22 2.77 7.99 6.63 7.99 1.68 0 3.47-0.36 4.95-1.39l-0.2-2.31c-0.99 0.82-2.84 1.52-4.06 1.52 -2.14 0-4.55-1.71-4.55-5.91C17.93 10.2 20.01 9.18 20.27 9.01"}),Object(l.jsx)("rect",{x:"29.42",y:"6.97",fill:"#EB6500",width:"2.54",height:"14.95"}),Object(l.jsx)("path",{fill:"#EB6500",d:"M30.67 0.7c-0.92 0-1.65 0.92-1.65 1.81 0 0.93 0.76 1.85 1.65 1.85 0.89 0 1.68-0.96 1.68-1.88C32.35 1.55 31.56 0.7 30.67 0.7M48.06 14.13c0-5.18-1.42-7.56-6.01-7.56 -3.86 0-6.67 2.77-6.67 7.92 0 4.92 2.97 7.82 6.73 7.82 2.81 0 4.36-0.63 5.68-1.42l-0.2-2.31c-0.89 0.79-2.94 1.55-4.69 1.55 -3.14 0-4.88-1.95-4.88-5.51v-0.49H48.06M39.91 9.18c0.17-0.17 1.29-0.46 1.98-0.46 2.48 0 3.76 0.53 3.86 3.43h-7.46C38.56 10.27 39.71 9.37 39.91 9.18zM58.82 6.57c-2.24 0-3.63 1.12-4.85 2.61l-0.4-2.21h-2.34l0.13 1.19c0.1 0.76 0.13 1.78 0.13 2.97v10.79h2.54V11.88c0.69-0.96 2.15-2.48 2.48-2.64 0.23-0.13 1.29-0.4 2.08-0.4 2.28 0 2.48 1.15 2.54 3.43 0.03 1.19 0.03 3.17 0.03 3.17 0.03 3-0.1 6.47-0.1 6.47h2.54c0 0 0.07-4.49 0.07-6.96 0-1.48 0.03-2.97-0.1-4.46C63.31 7.43 61.49 6.57 58.82 6.57M72.12 9.01c0.23-0.13 0.69-0.26 1.72-0.26 1.72 0 2.41 0.3 2.41 1.58h2.38c0-0.36 0-0.79-0.03-1.09 -0.23-1.98-2.15-2.67-4.88-2.67 -3 0-6.7 2.31-6.7 7.76 0 5.22 2.77 7.99 6.63 7.99 1.68 0 3.47-0.36 4.95-1.39l-0.2-2.31c-0.99 0.82-2.84 1.52-4.06 1.52 -2.15 0-4.55-1.71-4.55-5.91C69.77 10.2 71.85 9.18 72.12 9.01M92.74 14.13c0-5.18-1.42-7.56-6.01-7.56 -3.86 0-6.67 2.77-6.67 7.92 0 4.92 2.97 7.82 6.73 7.82 2.81 0 4.36-0.63 5.68-1.42l-0.2-2.31c-0.89 0.79-2.94 1.55-4.69 1.55 -3.14 0-4.88-1.95-4.88-5.51v-0.49H92.74M84.59 9.18c0.17-0.17 1.29-0.46 1.98-0.46 2.48 0 3.76 0.53 3.86 3.43h-7.46C83.24 10.27 84.39 9.37 84.59 9.18zM103.9 1.98h-7.13v19.93h6.83c7.26 0 9.77-5.68 9.77-10.03C113.37 7.33 110.93 1.98 103.9 1.98M103.14 19.8h-3.76V4.1h4.09c5.38 0 6.96 4.39 6.96 7.79C110.43 16.87 108.19 19.8 103.14 19.8zM118.38 0.7c-0.92 0-1.65 0.92-1.65 1.81 0 0.93 0.76 1.85 1.65 1.85 0.89 0 1.69-0.96 1.69-1.88C120.07 1.55 119.28 0.7 118.38 0.7"}),Object(l.jsx)("rect",{x:"117.13",y:"6.97",fill:"#EB6500",width:"2.54",height:"14.95"}),Object(l.jsx)("path",{fill:"#EB6500",d:"M130.2 6.6c-1.62 0-2.87 1.45-3.4 2.74l-0.43-2.37h-2.34l0.13 1.19c0.1 0.76 0.13 1.75 0.13 2.9v10.86h2.54v-9.51c0.53-1.29 1.72-3.7 3.17-3.7 0.96 0 1.06 0.99 1.06 1.22l2.08-0.6V9.18c0-0.03-0.03-0.17-0.06-0.4C132.8 7.36 131.91 6.6 130.2 6.6M145.87 14.13c0-5.18-1.42-7.56-6.01-7.56 -3.86 0-6.67 2.77-6.67 7.92 0 4.92 2.97 7.82 6.73 7.82 2.81 0 4.36-0.63 5.68-1.42l-0.2-2.31c-0.89 0.79-2.94 1.55-4.69 1.55 -3.14 0-4.89-1.95-4.89-5.51v-0.49H145.87M137.72 9.18c0.17-0.17 1.29-0.46 1.98-0.46 2.48 0 3.76 0.53 3.86 3.43h-7.46C136.37 10.27 137.52 9.37 137.72 9.18zM153.23 9.01c0.23-0.13 0.69-0.26 1.72-0.26 1.72 0 2.41 0.3 2.41 1.58h2.38c0-0.36 0-0.79-0.03-1.09 -0.23-1.98-2.14-2.67-4.88-2.67 -3 0-6.7 2.31-6.7 7.76 0 5.22 2.77 7.99 6.63 7.99 1.69 0 3.47-0.36 4.95-1.39l-0.2-2.31c-0.99 0.82-2.84 1.52-4.06 1.52 -2.15 0-4.55-1.71-4.55-5.91C150.89 10.2 152.97 9.18 153.23 9.01M170 19.44c-0.92 0.36-1.72 0.69-2.51 0.69 -1.16 0-1.58-0.66-1.58-2.34V8.95h3.93V6.97h-3.93V2.97h-2.48v3.99h-2.71v1.98h2.71v9.67c0 2.64 1.39 3.73 3.33 3.73 1.15 0 2.54-0.39 3.43-0.79L170 19.44M173.68 5.96c-1.09 0-2-0.87-2-1.97 0-1.1 0.91-1.97 2-1.97s1.98 0.88 1.98 1.98C175.66 5.09 174.77 5.96 173.68 5.96zM173.67 2.46c-0.85 0-1.54 0.67-1.54 1.52 0 0.85 0.69 1.54 1.54 1.54 0.85 0 1.54-0.69 1.54-1.54C175.21 3.13 174.52 2.46 173.67 2.46zM174.17 5.05c-0.09-0.09-0.17-0.19-0.25-0.3l-0.41-0.56h-0.16v0.87h-0.39V2.92c0.22-0.01 0.47-0.03 0.66-0.03 0.41 0 0.82 0.16 0.82 0.64 0 0.29-0.21 0.55-0.49 0.63 0.23 0.32 0.45 0.62 0.73 0.91H174.17zM173.56 3.22l-0.22 0.01v0.63h0.22c0.26 0 0.43-0.05 0.43-0.34C174 3.28 173.83 3.21 173.56 3.22z"})]})]})]}),Object(l.jsxs)("div",{className:"Div_he6",children:[Object(l.jsx)("div",{className:"Div_he2",children:Object(l.jsx)("div",{className:"Div_he3",children:Object(l.jsx)("ul",{className:"Ul_he1",children:Object(l.jsxs)("li",{className:"Li_he1",children:[Object(l.jsx)("a",{href:"https://www.sciencedirect.com/browse/journals-and-books",className:"A_he1",children:Object(l.jsx)("span",{className:"Span",children:"Journals & Books"})}),Object(l.jsx)("div",{className:"Underscore"})]})})})}),Object(l.jsx)("div",{className:"Div_he4",children:Object(l.jsx)("svg",{className:"SVG_he1",role:"img",focusable:"false",viewBox:"0 0 114 128","aria-hidden":"true",width:"21.375",height:"24","aria-label":"Help",children:Object(l.jsx)("path",{d:"m57 8c-14.7 0-28.5 5.72-38.9 16.1-10.38 10.4-16.1 24.22-16.1 38.9 0 30.32 24.68 55 55 55 14.68 0 28.5-5.72 38.88-16.1 10.4-10.4 16.12-24.2 16.12-38.9 0-30.32-24.68-55-55-55zm0 1e1c24.82 0 45 20.18 45 45 0 12.02-4.68 23.32-13.18 31.82s-19.8 13.18-31.82 13.18c-24.82 0-45-20.18-45-45 0-12.02 4.68-23.32 13.18-31.82s19.8-13.18 31.82-13.18zm-0.14 14c-11.55 0.26-16.86 8.43-16.86 18v2h1e1v-2c0-4.22 2.22-9.66 8-9.24 5.5 0.4 6.32 5.14 5.78 8.14-1.1 6.16-11.78 9.5-11.78 20.5v6.6h1e1v-5.56c0-8.16 11.22-11.52 12-21.7 0.74-9.86-5.56-16.52-16-16.74-0.39-0.01-0.76-0.01-1.14 0zm-4.86 5e1v1e1h1e1v-1e1h-1e1z"})})}),Object(l.jsxs)("div",{className:"Div_he5",children:[Object(l.jsx)("a",{href:"/",className:"A_he2",children:Object(l.jsx)("span",{className:"Span_he2",children:"Corporate sign in"})}),Object(l.jsx)("div",{onClick:function(){x(!0)},className:"A_he3",children:Object(l.jsx)("span",{className:"Span_he2",children:"Sign in / register"})})]})]}),Object(l.jsxs)("div",{className:"side-menu",children:[Object(l.jsx)("div",{className:"bar"}),Object(l.jsx)("div",{className:"bar"}),Object(l.jsx)("div",{className:"bar"})]})]}),v&&Object(l.jsx)(h,{setLoginScreenOn:x,setIsLogged:u})]})};i.a.createRoot(document.getElementById("root")).render(Object(l.jsx)(a.a.StrictMode,{children:Object(l.jsx)(d,{})}))}},[[15,1,2]]]);
//# sourceMappingURL=main.6ab81cb3.chunk.js.map