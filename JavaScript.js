const btn = document.querySelector('.btn');
const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const closeModal = document.querySelector('.closeModal');

const hiddenRemove = function() {
    modal.classList.remove('hidden');
    overlay.classList.remove('hidden');
};
const hiddenAdd = function() {
    modal.classList.add('hidden');
    overlay.classList.add('hidden');
};
btn.addEventListener('click', hiddenRemove);
closeModal.addEventListener('click', hiddenAdd);
overlay.addEventListener('click', hiddenAdd);
document.addEventListener('keydown', function (keyboard) {
    if (keyboard.key === 'Escape' && !modal.classList.contains('hidden')) {
        hiddenAdd();
    }
});