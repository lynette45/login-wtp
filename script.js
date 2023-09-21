const pageBox = document.querySelector('.page-box');
const btnNext = document.querySelector('.btn-next');
const btnBack = document.querySelector('.btn-back');
/* tampilkan pw*/
const checkboxPass = document.querySelector('.checkbox-pass');
const passwordInput = document.querySelector('.password');
/* tampilan titile after click*/
const loginTitle = document.querySelector('.loginTitle-text');
/* ganti p => user input # pecah donk @gmail.com nya*/
const userEmail = document.querySelector('.user-email');
const emailInput = document.querySelector('.email');

btnNext.onclick = (e) => {
    e.preventDefault();
    pageBox.classList.add('active-pass');
    /* sett*/
    setTimeout(() => passwordInput.focus(), 500);
    /* ganti text next*/
    loginTitle.innerHTML = 'Wellcome';
    /* ganti ke user p nya*/
    userEmail.innerHTML = emailInput.value;
};

btnBack.onclick = (e) => {
    e.preventDefault();
    pageBox.classList.remove('active-pass');
       /* ganti text back */
       loginTitle.innerHTML = 'Login';
           /* ganti  kembali ke user p nya*/
    userEmail.innerHTML = 'come here! login to try myApps';
    emailInput.focus();
};
/*klik muncul pw*/
checkboxPass.onclick = () => {
    if(checkboxPass.checked){
        passwordInput.type = 'text';
    }
    else {
            passwordInput.type = 'password';
        }
};
/* */