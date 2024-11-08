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

// Function to toggle between dark and light mode
function toggleMode() {
    const body = document.body;
    const button = document.getElementById('modeToggle');
    const currentMode = body.classList.contains('dark-mode') ? 'dark' : 'light';
  
    // Toggle color scheme (light/dark)
    if (currentMode === 'light') {
      body.classList.remove('light-mode');
      body.classList.add('dark-mode');
      button.innerHTML = '<i class="fa-solid fa-sun"></i>';  // Change moon to sun
      localStorage.setItem('theme', 'dark');
    } else {
      body.classList.remove('dark-mode');
      body.classList.add('light-mode');
      button.innerHTML = '<i class="fa-solid fa-moon"></i>';  // Change sun to moon
      localStorage.setItem('theme', 'light');
    }
}
  
// Add event listener to the button to toggle the mode
document.getElementById('modeToggle').addEventListener('click', toggleMode);

// Function to apply the saved theme when the page loads
function applySavedTheme() {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
        document.body.classList.remove('light-mode', 'dark-mode');
        document.body.classList.add(savedTheme);
        const button = document.getElementById('modeToggle');
        button.innerHTML = savedTheme === 'dark' 
            ? '<i class="fa-solid fa-sun"></i>' 
            : '<i class="fa-solid fa-moon"></i>';
    } else {
        // Default to light mode if no theme is saved
        document.body.classList.add('light-mode');
    }
}

// Call the function to apply the saved theme when the page loads
document.addEventListener('DOMContentLoaded', applySavedTheme);

// const themeToggle = document.getElementById("modeToggle");
// const body = document.body;

// themeToggle.addEventListener("click", function() {
//     body.classList.toggle("dark-mode");

//     if (body.classList.contains("dark-mode")){
//         localStorage.setItem("theme", "dark");
//     }else{
//         localStorage.setItem("theme", "light");
//     }
// });