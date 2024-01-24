document.addEventListener('DOMContentLoaded',function() {
    //Seleccionar los elementos de la interfaz
    const inputEmail = document.querySelector('#email');
    const inputAsunto = document.querySelector('#asunto');
    const inputMensaje = document.querySelector('#mensaje');
    const formulario = document.querySelector('#formulario');
    //Agregar eventlistener 

    inputEmail.addEventListener('blur', validar);
      inputAsunto.addEventListener('blur', validar);
      inputMensaje.addEventListener('blur', validar);

      function validar(e){
            if(e.target.value.trim() === ''){
                console.log("Esta vacio");
                mostrarAlerta(`El campo ${e.target.id} es obligatorio`,e.target.parentElement);
            }else{
                console.log("Si hay algo...")
            }
      }

      function mostrarAlerta(mensaje,padre) {
        const error = document.createElement('P');
        error.textContent = mensaje;
        error.classList.add('bg-red-600','text-white','p-2','text-center')
        //Inyectar error formulario
        padre.appendChild(error,padre)
      }
});