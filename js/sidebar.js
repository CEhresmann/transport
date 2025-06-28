document.addEventListener("DOMContentLoaded", () => {
    const container = document.getElementById("sidebar-container");
    if (container) {
        fetch("../includes/sidebar.html")
            .then((res) => res.text())
            .then((html) => {
                container.innerHTML = html;
            })
            .catch((err) => console.error("Ошибка загрузки sidebar:", err));
    }
});
