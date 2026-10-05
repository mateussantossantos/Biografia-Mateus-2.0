```javascript
// Mensagem no console
console.log("Biografia de Mateus Santos Pereira carregada!");

// Efeito ao clicar nos links do menu
const links = document.querySelectorAll("nav a");

links.forEach(link => {
    link.addEventListener("click", function () {
        console.log("Navegando para: " + this.textContent);
    });
});

// Mensagem de boas-vindas
window.addEventListener("load", () => {
    console.log("Bem-vindo à história de Mateus Santos Pereira!");
});
```