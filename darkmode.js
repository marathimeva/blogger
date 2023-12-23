document.addEventListener('DOMContentLoaded', function () {
    const darkModeEnabled = localStorage.getItem('darkMode') === 'true';
    const body = document.body;

    if (darkModeEnabled) {
        body.classList.add('dark-mode');
    }

    const toggleDarkMode = function () {
        body.classList.toggle('dark-mode');
        localStorage.setItem('darkMode', body.classList.contains('dark-mode'));
    };

    const toggleBtn = document.getElementById('toggle-btn');
    if (toggleBtn) {
        toggleBtn.addEventListener('click', toggleDarkMode);
    }
});
