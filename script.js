// System Clock Functionality
        function updateClock() {
            const now = new Date();
            let hours = now.getHours();
            let minutes = now.getMinutes();
            hours = hours < 10 ? '0' + hours : hours;
            minutes = minutes < 10 ? '0' + minutes : minutes;
            
            // Format Strings
            const timeString = `${hours}:${minutes}`;
            const dateStringOptions = { weekday: 'long', month: 'long', day: 'numeric' };
            const sysDateString = now.toLocaleDateString('en-GB', {day: '2-digit', month: '2-digit', year: '2-digit'});

            // Display update
            document.getElementById('lock-clock').textContent = timeString;
            document.getElementById('lock-date').textContent = now.toLocaleDateString('en-US', dateStringOptions);
            document.getElementById('tb-time').textContent = timeString;
            document.getElementById('tb-date').textContent = sysDateString;
        }
        setInterval(updateClock, 1000);
        updateClock();

        // Lock Screen mechanics
        function unlockOS() {
            document.getElementById('lock-screen').classList.add('unlocked');
        }

        // Window Handler functions
        function openWindow(winId) {
            // Bring active app window forward
            document.querySelectorAll('.os-window').forEach(win => {
                win.classList.remove('active');
            });
            const selectedWindow = document.getElementById(winId);
            selectedWindow.classList.add('active');
        }

        function closeWindow(winId) {
            document.getElementById(winId).classList.remove('active');
        }