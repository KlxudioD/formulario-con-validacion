const nombreEntrada = document.getElementById('nombre');
const emailEntrada = document.getElementById('email');;
const contraseñaEntrada = document.getElementById('contraseña');

const errorNombre = document.getElementById('nombreError');
const errorEmail = document.getElementById('emailError');
const errorContraseña = document.getElementById('contraseñaError');

const nombreValido = () => {
    let nombreIngresado = nombreEntrada.value.trim();
    let revisarNombre = /^[A-Za-zÁÉÍÓÚÑáéíóúñ\s'-]{2,40}$/

    if (nombreIngresado === '' || !revisarNombre.test(nombreIngresado)) {
        errorNombre.textContent = "Debes ingresar solo letras";
        nombreEntrada.classList.add('invalido');
        nombreEntrada.classList.remove('valido');
        return false;


    } else {
        errorNombre.textContent = "";
        nombreEntrada.classList.remove('invalido');
        nombreEntrada.classList.add('valido');
        return true;
    }
};

const emailValido = () => {
    let emailIngresado = emailEntrada.value.trim();
    let revisarEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (emailIngresado === '' || !revisarEmail.test(emailIngresado)) {
        errorEmail.textContent = "Debe ingresar un email valido";
        emailEntrada.classList.add('invalido');
        emailEntrada.classList.remove('valido');
        return false

    } else {
        errorEmail.textContent = "";
        emailEntrada.classList.add('valido');
        emailEntrada.classList.remove('invalido');
        return true;
    }
}

const contraseñaValida = () => {
    let pass = contraseñaEntrada.value.trim();

    if (pass.length < 6) {
        errorContraseña.textContent = "La contraseña debe tener al menos 6 caracteres";
        contraseñaEntrada.classList.add('invalido');
        contraseñaEntrada.classList.remove('valido');
        return false;

    } else {
        errorContraseña.textContent = "";
        contraseñaEntrada.classList.add('valido');
        contraseñaEntrada.classList.remove('invalido')
        return true;
    }
};

nombreEntrada.addEventListener('input', nombreValido);
emailEntrada.addEventListener('input', emailValido);
contraseñaEntrada.addEventListener('input', contraseñaValida);

document.querySelector('form').addEventListener('submit', (e) =>{

    e.preventDefault();

    const esValidoNombre = nombreValido();
    const esValidoCorreo = emailValido();
    const esValidoContraseña = contraseñaValida();

    if(esValidoNombre && esValidoCorreo && esValidoContraseña){
        alert("formulario creado con exito....datos enviandose.....")
    }
});