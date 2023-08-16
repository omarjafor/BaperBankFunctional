document.getElementById('btn-submit').addEventListener('click', function(){
    const user_email = document.getElementById('user-email');
    const email = user_email.value;

    const user_pass = document.getElementById('user-pass');
    const password = user_pass.value;

    if(email == 'omarjaforchy@gmail.com' && password == '105610'){
        window.location.href = "bank.html";
    }else{
        alert('Invalid User! Wrong email or password');
    }
})