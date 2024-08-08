const form = document.querySelector('form');

form.addEventListener('submit', (event) => {
    event.preventDefault();
    const formData = new FormData(form);
    const response = submitDataBase(formData);
    alert('Denúncia enviada com sucesso!');
    form.reset();
});

const submitDataBase = (formData) => { formData };