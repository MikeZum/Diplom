const topSlider = () => {
  const sliderItems = document.querySelectorAll('.item');
  const textSlider = document.querySelectorAll('.table');
  const dots = document.querySelectorAll('.dot');

  
  let slideIndex = 0,
      interval,
      slide = sliderItems[slideIndex];
  for(let i = 0; i < textSlider.length; i++) {
      textSlider[i].style.visibility = 'visible';
      textSlider[i].style.opacity = '1'; 
  }
  
  
  const nextSlide = () => {
      slide.style.display = 'block';
  };

  const prevSlide = () => {
      slide.style.display = 'none';
        
  };

  const autoPlay = () => {
      prevSlide();
      slideIndex++;
      if (slideIndex >= sliderItems.length) {
          slideIndex = 0;
      }
      slide = sliderItems[slideIndex];
      nextSlide();
  };
  
  const runSlider = (time = 3000) => {
      interval = setInterval(autoPlay, time);
  };
  runSlider();

};
export default topSlider;