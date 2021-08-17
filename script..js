document.getElementById('submit-confirm').addEventListener('click', function(){
    const userEmail = document.getElementById('email');
    const yourEmail = userEmail.value;

    const userPassword = document.getElementById('password');
    const yourPassword = userPassword.value;

    if(yourEmail == 'sontan@baap.com' && yourPassword == 'secret'){
        window.location.href = 'banking.html';
    }
})

