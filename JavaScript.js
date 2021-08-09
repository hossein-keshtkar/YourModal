const btn = document.querySelector('.btn');
const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const closeModal = document.querySelector('.closeModal');
const hiddenRemov = function() {
    modal.classList.remove('hidden');
    overlay.classList.remove('hidden');
};
const hiddenAdd = function() {
    modal.classList.add('hidden');
    overlay.classList.add('hidden');
};
btn.addEventListener('click', hiddenRemov);
closeModal.addEventListener('click', hiddenAdd);
overlay.addEventListener('click', hiddenAdd);