const scrollTop = () => {
    const scrollButton = document.querySelector('.up');
    const top = document.querySelector('.top-slider');
    scrollButton.style.display = 'none';
    const scrollTo = (element) => {
    window.scroll({
        left: 0,
        top: element.offsetTop,
        behavior: 'smooth',
    });
    };

    scrollButton.addEventListener('click', () => {
        scrollTo(top);
        
    });
    window.addEventListener('scroll', () => {
        if(window.pageYOffset > 150) {
            scrollButton.style.display = 'block';
        } else {
            scrollButton.style.display = 'none';
        }
    });
};
export default scrollTop;