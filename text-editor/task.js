function formStorage() {
    const textArea = document.getElementById('editor');

    textArea.addEventListener('keyup', function() {
        localStorage.setItem('data', textArea.value);
    })

    document.addEventListener('DOMContentLoaded', () => {
        textArea.value = localStorage.getItem('data');
    });

    const btn = document.querySelector(".btn")
    btn.addEventListener('click', () => {
        textArea.value = '';
        localStorage.removeItem('data');
    });
}

formStorage();
