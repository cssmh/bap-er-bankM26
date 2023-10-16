document.getElementById('btn-submit').addEventListener('click', function(){
    const emailField = document.getElementById('user-email').value;
    const email = emailField;
    
    
    const passwordField = document.getElementById('user-password').value;
    const password = passwordField;
    if(email === 'baba@gmail.com' && password === 'baba'){
        window.location.href = 'bank.html';
    }
    else{
        alert('Wrong Email password dico!! Eta tomar baap er account na');
    }
})