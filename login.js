document.getElementById('btn-submit').addEventListener('click', function(){
    const emailField = document.getElementById('user-email').value;
    const email = emailField;
    
    
    const passwordField = document.getElementById('user-password').value;
    const password = passwordField;
    if(email === 'sontan@gmail.com' && password === 'sontan'){
        window.location.href = 'bank.html';
    }
    else{
        alert('Thik moto de');
    }
})