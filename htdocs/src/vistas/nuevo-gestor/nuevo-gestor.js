function escucharClickBoton(){
const botonGuardar = document.querySelector("#btn-guardar-gestor")

botonGuardar.addEventListener("click",(_event)=> {
    console.log("Click!")
    const usuarioInput = document.querySelector("[name='usuario']")
    const correoInput = document.querySelector("[name='correo']")
    const passwordInput = document.querySelector("[name='password']")
    
    const nuevoGestor={
        usuario: usuarioInput.Value,
        correo: correoInput.Value,
        password: passwordInput.Value,

    }

    console.log({ nuevoGestor })

    const opcionesPost = {
        method: "POST",
        body: JSON.stringify(nuevoGestor),
        headers: { "Content-type": "application/json" }
    }

    fetch('http://localhost:8080/gestor', opcionesPost)
            .then(response => response.json())
            .then(gestorGuardado => {
                console.log({ gestorGuardado })
                // vaciamos los inputs con .reset()
                usuarioInput.value = ""
                correoInput.value = ""
                passwordInput.value = ""
                // recargamos la lista de gestores
                obtenerGestores()
            })

})
}
escucharClickBoton()