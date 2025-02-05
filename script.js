/* script.js */
document.addEventListener("DOMContentLoaded", function () {
    document.querySelectorAll(".cta").forEach(button => {
        button.addEventListener("click", function () {
            window.location.href = "signup.html";
        });
    });
});
