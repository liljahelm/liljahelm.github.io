const button = document.getElementById("tummaTila");

function updateButton() {
    if (document.body.classList.contains("dark-mode")) {
        button.textContent = "☀️ Vaalea tila";
    } else {
        button.textContent = "🌙 Tumma tila";
    }
}

button.addEventListener("click", function() {
    document.body.classList.toggle("dark-mode");

    if (document.body.classList.contains("dark-mode")) {
        localStorage.setItem("darkMode", "on");
    } else {
        localStorage.setItem("darkMode", "off");
    }

    updateButton();
});

if (localStorage.getItem("darkMode") === "on") {
    document.body.classList.add("dark-mode");
}

updateButton();