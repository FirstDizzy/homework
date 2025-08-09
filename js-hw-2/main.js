const btn = document.querySelector('.bts-open')
const modal = document.querySelector('.modal')

btn.addEventListener('click', () => {
    modal.classList.add('modal--open')
})

modal.addEventListener('click', (event) => {
    const target = event.target
    if (target && target.classList.contains('modal') || target.classList.contains('modal__bts-close')) {
        modal.classList.remove('modal--open')
    }
})

