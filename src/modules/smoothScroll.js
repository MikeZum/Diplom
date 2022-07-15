const smoothScroll = () => {
    const links = document.querySelectorAll('.top-menu > ul > li > a');
    
    for(let i = 0; i < links.length; i++) {

        links[i].addEventListener('click', (event) => {
            event.preventDefault();
            let target = event.target;
            const blockID = target.getAttribute('href');
            document.querySelector(blockID).scrollIntoView({
                behavior: "smooth",
                block: "start",
                });
        });
    }
};
export default smoothScroll;