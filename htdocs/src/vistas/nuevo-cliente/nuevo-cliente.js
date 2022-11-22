function escucharClickBoton(){
    const botonGuardar = document.querySelector("#btn-guardar-cliente")
    
    botonGuardar.addEventListener("click",(_event)=> {
        console.log("Click!")
        const usuarioInput = document.querySelector("[name='usuario']")
        const correoInput = document.querySelector("[name='correo']")
        const passwordInput = document.querySelector("[name='pass']")
        const saldoInput = document.querySelector("[name='saldo']")
 
        
        const nuevoCliente={
            usuario: usuarioInput.Value,
            correo: correoInput.Value,
            password: passwordInput.Value,
            saldo: saldoInput.Value,
        }
    
    
        const opcionesPost = {
            method: "POST",
            body: JSON.stringify(nuevoCliente),
            headers: { "Content-type": "application/json" }
        }
    
        fetch('http://localhost:8080/cliente', opcionesPost)
                .then(response => response.json())
                .then(clienteGuardado => {
                    console.log({ clienteGuardado })
                    // vaciamos los inputs con .reset()
                    usuarioInput.value = ""
                    correoInput.value = ""
                    passwordInput.value = ""
                    saldoInput.value = ""

                    // recargamos la lista de clientes
                    obtenerCientes()
                })
    
    })
    }
    escucharClickBoton()