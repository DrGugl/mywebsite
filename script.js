document.addEventListener('DOMContentLoaded', () => {
    const toggleButton = document.getElementById('toggle-dark-mode');
    const darkMode = localStorage.getItem('dark-mode');

    if (darkMode === 'enabled') {
        document.body.classList.add('dark-mode');
        toggleButton.textContent = '☀️';
    }

    toggleButton.addEventListener('click', () => {
        document.body.classList.toggle('dark-mode');
        if (document.body.classList.contains('dark-mode')) {
            localStorage.setItem('dark-mode', 'enabled');
            toggleButton.textContent = '☀️';
        } else {
            localStorage.setItem('dark-mode', 'disabled');
            toggleButton.textContent = '🌙';
        }
    });
});
