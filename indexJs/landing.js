        const messages = [
            "HI",
            "I am a Web Designer.",
            "I am a UI Designer.",
            "Please enjoy your visit."
        ];
        let idx = 0;
        const landing = document.getElementById('landing-message');

        function showNextMessage() {
            landing.style.opacity = 0;
            setTimeout(() => {
                idx++;
                if (idx < messages.length) {
                    landing.textContent = messages[idx];
                    landing.style.opacity = 1;
                    setTimeout(showNextMessage, 1700);
                } else {
                    // Redirect to your main index page after the last message
                    window.location.href = "home.html";
                }
            }, 700);
        }

        setTimeout(showNextMessage, 1700);
