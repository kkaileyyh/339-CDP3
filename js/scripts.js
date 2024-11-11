function updateAthleteCounts() {
    const menCountElem = document.getElementById('menCount');
    const womenCountElem = document.getElementById('womenCount');
    const totalAthletesElem = document.getElementById('totalAthletes');

    if (menCountElem && womenCountElem && totalAthletesElem) {
        const menCount = 42;  // Replace with actual count
        const womenCount = 30;
        const totalAthletes = menCount + womenCount;

        menCountElem.textContent = menCount;
        womenCountElem.textContent = womenCount;
        totalAthletesElem.textContent = totalAthletes;
    }
}

function toggleNavigation() {
    const nav = document.getElementById("sliding-nav");
    if (nav) {
        nav.classList.toggle("active");
    }
}

window.onload = function() {
    updateAthleteCounts();

    const navToggle = document.getElementById("nav-toggle");
    if (navToggle) {
        navToggle.addEventListener("click", toggleNavigation);
    }
};

// Dark mode
document.addEventListener('DOMContentLoaded', function() {
    const body = document.body;
    const modeToggle = document.getElementById('modeToggle');

    // Function to set the theme
    function setTheme(isDark) {
        if (isDark) {
            body.classList.add('dark-mode');
            modeToggle.innerHTML = '<i class="fa-solid fa-sun"></i>';
            localStorage.setItem('theme', 'dark');
        } else {
            body.classList.remove('dark-mode');
            modeToggle.innerHTML = '<i class="fa-solid fa-moon"></i>';
            localStorage.setItem('theme', 'light');
        }
    }

    // Check for saved theme preference or default to light mode
    const savedTheme = localStorage.getItem('theme');
    setTheme(savedTheme === 'dark');

    // Toggle theme when button is clicked
    modeToggle.addEventListener('click', () => {
        const isDark = body.classList.contains('dark-mode');
        setTheme(!isDark);
    });
});