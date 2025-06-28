document.addEventListener("DOMContentLoaded", () => {
    const sidebarContainer = document.getElementById("sidebar-container");

    if (sidebarContainer) {
        fetch("../../includes/sidebar.html")
            .then((res) => res.text())
            .then((data) => {
                sidebarContainer.innerHTML = data;
            })
            .catch((err) => {
                console.error("Ошибка загрузки sidebar.html", err);
            });
    }
});
