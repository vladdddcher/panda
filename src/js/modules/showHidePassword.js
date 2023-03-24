
const showHidePassword = () => {
    
    document.querySelectorAll('.group-field-password').forEach( function(passwordWrapper) {
       
        const btn = passwordWrapper.querySelector('.group-field__btn-show-hide');
        const input = passwordWrapper.querySelector('.group-field__input-password');
        
        btn.onclick = function (e) {
            e.preventDefault();
            if (input.getAttribute('type') === 'password') {
                input.setAttribute('type', 'text');
                btn.classList.add('group-field__btn-show-hide--active');
            } else {
                input.setAttribute('type', 'password');
                btn.classList.remove('group-field__btn-show-hide--active');
            }
        }       
    });
    
    
    
};

export default showHidePassword;












