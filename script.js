// Ensure the DOM content is fully loaded before adding event listeners
document.addEventListener('DOMContentLoaded', function () {
    // Joy - Jumps when typing into the password field
    document.getElementById('password').addEventListener('input', function () {
        const joy = document.querySelector('.joy');
        joy.classList.add('jump');

        // Remove the class after the animation
        setTimeout(() => {
            joy.classList.remove('jump');
        }, 500);
    });

    // Sadness - Sigh if input length is less than 3
    document.getElementById('password').addEventListener('input', function (e) {
        const sadness = document.querySelector('.sadness');
        if (e.target.value.length < 3) {
            sadness.classList.add('sigh');
        } else {
            sadness.classList.remove('sigh');
        }
    });

    // Anger - Turn red if the password is weak
    document.getElementById('submit-btn').addEventListener('click', function () {
        const passwordValue = document.getElementById('password').value;
        const anger = document.querySelector('.anger');
        const disgust = document.querySelector('.disgust');

        // Check password strength (in this case, length)
        if (passwordValue.length < 5) {
            anger.classList.add('red');
            disgust.classList.add('eyeroll');

            setTimeout(() => {
                anger.classList.remove('red');
                disgust.classList.remove('eyeroll');
            }, 1000);
        }
    });

    // Fear - Shake when hovering over submit button
    document.getElementById('submit-btn').addEventListener('mouseover', function () {
        const fear = document.querySelector('.fear');
        fear.classList.add('shake');

        setTimeout(() => {
            fear.classList.remove('shake');
        }, 500);
    });
});
