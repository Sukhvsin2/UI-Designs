const listItems = document.querySelectorAll('li')
const photos = document.querySelectorAll('img')

listItems.forEach((item, i) => {
    // item.addEventListener('click', () => {
    //     photos[i].classList = 'intro';
    // })
    item.addEventListener('mouseenter', () => {
        photos[i].classList = 'intro';
    })
    item.addEventListener('mouseleave', () => {
        photos[i].classList.remove('intro');
    })
    item.addEventListener('mousemove', (e) => {
        photos[i].style.left = e.clientX * 0.5 + 'px'
        // photos[i].style.top = e.clientY * 0.5 + 'px'
    })
})