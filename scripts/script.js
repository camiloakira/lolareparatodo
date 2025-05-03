// scripts/script.js
document.querySelector('form').addEventListener('submit', function(event) {
    event.preventDefault(); // Evita que la página se recargue
    alert('¡Gracias por contactarnos! Nos comunicaremos pronto.');
});

document.querySelectorAll('.faq-button').forEach(button => {
    button.addEventListener('click', () => {
        let answer = button.nextElementSibling;

        if (answer.style.display === 'block') {
            answer.style.display = 'none';
        } else {
            answer.style.display = 'block';
        }
    });
});

    

});


