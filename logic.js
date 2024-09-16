document.addEventListener('DOMContentLoaded', function () {
    // Joy - para tumalon
    const passwordInput = document.getElementById('password');
    
    passwordInput.addEventListener('input', function (e) {
        // Trigger Joy's jump animation
        const joy = document.querySelector('.joy');
        joy.classList.add('jump');
        setTimeout(() => {
            joy.classList.remove('jump');
        }, 500);

        // Sadness sighs if password length is less than 3
        const sadness = document.querySelector('.sadness');
        if (e.target.value.length < 3) {
            sadness.classList.add('sigh');
        } else {
            sadness.classList.remove('sigh');
        }
    });

    // Fear shakes when submit button is hovered over
    document.getElementById('submit-btn').addEventListener('mouseover', function () {
        const fear = document.querySelector('.fear');
        fear.classList.add('shake');

        setTimeout(() => {
            fear.classList.remove('shake');
        }, 500);
    });
});
