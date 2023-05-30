document.querySelector('form').addEventListener('submit', function(event) {
    event.preventDefault(); // Evita que el formulario se envíe por defecto
    var email = document.getElementById('email').value;
    var mensaje = document.getElementById('mensaje').value;
    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        // muestra el mensaje de error de email y lo oculta después de 3 segundos
        var errorEmail = document.getElementById('error-email');
        errorEmail.style.display = 'block';
        setTimeout(function() {
            errorEmail.style.display = 'none';
        }, 3000);
        return;
    }
    if (!email || !mensaje) {
        // muestra el mensaje de error de campos vacíos y lo oculta después de 3 segundos
        var errorCamposVacios = document.getElementById('error');
        errorCamposVacios.style.display = 'block';
        setTimeout(function() {
            errorCamposVacios.style.display = 'none';
        }, 3000);
        return;
    }
    var templateParams = {
        email: email,
        mensaje: mensaje
    };
    emailjs.send('service_d1qiaj7', 'template_p30fgpc', templateParams)
        .then(function(response) {
            // muestra el mensaje de enviado y lo oculta después de 3 segundos
            var enviado = document.getElementById('enviado');
            enviado.style.display = 'block';
            setTimeout(function() {
            enviado.style.display = 'none';
            }, 3000);
        
            console.log('SUCCESS!', response.status, response.text);
        }, function(error) {
            // muestra el mensaje de error y lo oculta después de 3 segundos
            var error = document.getElementById('error');
            error.style.display = 'block';
            setTimeout(function() {
            error.style.display = 'none';
            }, 3000);
        
            console.log('FAILED...', error);
    });
});
