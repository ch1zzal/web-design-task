document.addEventListener('DOMContentLoaded', () => {
    // 1. Поиск
    document.getElementById('search').addEventListener('input', (e) => {
        const term = e.target.value.toLowerCase();
        document.querySelectorAll('.card').forEach(card => {
            const name = card.getAttribute('data-name').toLowerCase();
            card.style.display = name.includes(term) ? 'block' : 'none';
        });
    });

    // 2. Кнопка корзины
    document.querySelectorAll('.btn').forEach(button => {
        button.addEventListener('click', () => {
            button.classList.toggle('active');
            button.textContent = button.classList.contains('active') ? 'In Cart' : 'Add to Cart';
        });
    });
});
