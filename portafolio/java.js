document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Evita el envío del formulario

    // Obtiene los valores de los campos
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    // Aquí podrías enviar los datos a un servidor usando fetch o XMLHttpRequest

    // Muestra un mensaje de éxito
    document.getElementById('responseMessage').innerText = '¡Gracias por tu mensaje, ' + name + '! Te responderé pronto.';
    
    // Limpia el formulario
    document.getElementById('contactForm').reset();
});