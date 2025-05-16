        function toggleDropdown() {
            const dropdown = document.getElementById('mainDropdown');
            const btn = document.getElementById('menuButton');
            dropdown.classList.toggle('show');
            btn.setAttribute('aria-expanded', dropdown.classList.contains('show'));
        }
        // Optional: Close dropdown when clicking outside
        window.onclick = function(event) {
            if (!event.target.matches('.dropbtn')) {
                const dropdown = document.getElementById('mainDropdown');
                const btn = document.getElementById('menuButton');
                if (dropdown.classList.contains('show')) {
                    dropdown.classList.remove('show');
                    btn.setAttribute('aria-expanded', 'false');
                }
            }
        }
