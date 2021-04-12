 //show hidden password
 const controlButtons = document.querySelectorAll('.modal-password-show-icon');

 if (controlButtons.length > 0) {
    controlButtons.forEach(controlButton => {
        controlButton.addEventListener("click", (e) => {

            const controlButtonId = e.target.id;

            const input = getInputClass (controlButtonId);
            function getInputClass (controlButtonId) {
                if (controlButtonId === 'control-btn-sign-in') {
                    return document.querySelector('.modal-sign-in__password-input')}
                if (controlButtonId === 'control-btn-sign-up') {
                    return document.querySelector('.modal-sign-up__password-input')}
                if (controlButtonId === 'control-btn-sign-up-confirm') {
                    return document.querySelector('.modal-sign-up__confirm-password-input')}
            };

            function show_hide_password () {
                if (input.getAttribute('type') === 'password') {
                    document.getElementById(controlButtonId).classList.add('view');
                    input.setAttribute('type', 'text');
                } else {
                    document.getElementById(controlButtonId).classList.remove('view');
                    input.setAttribute('type', 'password');
                }
                return false;
            }
            show_hide_password ()
        });
    });
}