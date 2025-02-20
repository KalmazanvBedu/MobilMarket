const boton_formulario_login = document.getElementById("boton-formulario-login");

boton_formulario_login.addEventListener("click", () => {

    const user_input = document.getElementById("user-input");

    const user = user_input.value;

    const password_input = document.getElementById("password-input");

    const password = password_input.value;

    const alerta_usuario = document.getElementById("alerta-usuario-incorrecto");

    const alerta_password = document.getElementById("alerta-password-incorrecto");

    fetch("https://kalmazanvbedu.github.io/MobilMarket/json/datos_usuarios.json", { mode: "no-cors" }) // desactivar CORS porque la ruta no contiene http(s)
    .then((res) => res.json())
    .then((data) => {
        for(let i = 0; i < data.length; i++) {
            
            if(user == data[i].user_email) {
                alerta_usuario.setAttribute("hidden",true);
                console.log("Usuario encontrado");

                if(password == data[i].user_password) {
                    alerta_password.setAttribute("hidden",true);
                    console.log("Password correcto");

                    const contenedor_formulario_inicio_sesion = document.getElementById("contenedor-formulario-inicio-sesion");

                    contenedor_formulario_inicio_sesion.setAttribute("class", "contenedor-formulario-inicio-sesion formulario-oculto");

                    const icono_usuario = document.getElementById("icono-usuario");

                    icono_usuario.setAttribute("class", "fa-solid fa-face-smile")

                    const nombre_usuario = document.getElementById("nombre-usuario");

                    nombre_usuario.innerText = data[i].user_name;

                    const texto_login = document.getElementById("texto-login");

                    texto_login.innerText = "Log out"

                    user_id = parseInt(data[i].user_id);

                    localStorage.setItem("user_id",user_id);

                    localStorage.setItem("login_state", "active");

                    localStorage.setItem("user_name", data[i].user_name);

                    dataLayer.push({
                        'event': 'user_log_in',
                        'user_id': user_id
                    });

                    location.reload();

                } else {
                    alerta_password.removeAttribute("hidden");
                    console.log("Password incorrecto");
                    
                }

                break;

            } else {
                alerta_usuario.removeAttribute("hidden");
                console.log("Usuario no encontrado");
            }

        }
    });

})

