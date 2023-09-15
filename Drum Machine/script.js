document.addEventListener('DOMContentLoaded', function() {
    const display = document.getElementById('display');
    const drumPads = document.querySelectorAll('.drum-pad');

    drumPads.forEach(drumPad => {
        drumPad.addEventListener('click', function() {
            const audio = this.querySelector('audio');
            audio.currentTime = 0;
            audio.play();
            display.innerText = audio.id;
        });

        document.addEventListener('keydown', function(event) {
            if (event.key.toUpperCase() === drumPad.id) {
                const audio = drumPad.querySelector('audio');
                audio.currentTime = 0;
                audio.play();
                display.innerText = audio.id;
            }
        });
    });
});
