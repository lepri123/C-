/* ===== Зміна теми ===== */
const themeBtn = document.getElementById("themeToggle");
const body = document.body;

themeBtn.addEventListener("click", () => {
    body.classList.toggle("dark-theme");
    body.classList.toggle("light-theme");

    localStorage.setItem("theme", body.className);
});

const savedTheme = localStorage.getItem("theme");
if (savedTheme) {
    body.className = savedTheme;
}

/* ===== Реактивне привітання ===== */
const nameInput = document.getElementById("nameInput");
const greeting = document.getElementById("greeting");

nameInput.addEventListener("input", (event) => {
    const name = event.target.value;
    greeting.textContent = name ? `Вітаємо, ${name}!` : "";
});

/* ===== Додавання коментарів ===== */
const form = document.getElementById("commentForm");
const list = document.getElementById("commentList");

form.addEventListener("submit", (event) => {
    event.preventDefault();

    const name = document.getElementById("commentName").value;
    const text = document.getElementById("commentText").value;

    const comment = document.createElement("div");
    comment.innerHTML = `<strong>${name}:</strong> ${text}`;

    list.appendChild(comment);

    form.reset();
});

/* ===== Завантаження HTML ===== */
document.getElementById("loadHtml").addEventListener("click", async () => {
    const container = document.getElementById("htmlContainer");

    try {
        const response = await fetch("https://web2025-test-data.ikto.net/motivation.html");
        container.innerHTML = await response.text();
    } catch {
        container.textContent = "Не вдалося завантажити дані";
    }
});

/* ===== Завантаження JSON ===== */
document.getElementById("loadJson").addEventListener("click", async () => {
    const container = document.getElementById("jsonContainer");
    container.innerHTML = "";

    try {
        const response = await fetch("https://web2025-test-data.ikto.net/comments.json");
        const data = await response.json();

        data.forEach(item => {
            const div = document.createElement("div");
            div.innerHTML = `<strong>${item.name}</strong>: ${item.comment}`;
            container.appendChild(div);
        });
    } catch {
        container.textContent = "Не вдалося завантажити дані";
    }
});
