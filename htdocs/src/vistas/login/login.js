function escucharClickBotonLogin() {
    const botonLogin = document.getElementById("btn-login")

    botonLogin.addEventListener("click", (_event) => {
        const correoInput = document.querySelector("[name='correo']")
        const passwordInput = document.querySelector("[name='pass']")

        const query = `?correo=${correoInput.value}&password=${passwordInput.value}`

        fetch('http://localhost:8080/gestor/login' + query)
            .then(response => response.json())
            .then(gestor => {
                console.log({ gestor })
                sessionStorage.setItem("miUsuario", JSON.stringify(gestor))
            })
    })
}


escucharClickBotonLogin()