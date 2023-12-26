const slides = Array.from(document.querySelectorAll('.slide') as NodeListOf<HTMLElement>);

slides.forEach((slide: HTMLElement, indx: number) => {
  slide.style.transform = `translateX(${indx * 100}%)`;
});

const nextSlide = document.querySelector('.btn-next') as HTMLElement;

let curSlide = 0;
let maxSlide = (slides.length - 1) as number;

nextSlide.addEventListener("click", function () {
  if (curSlide === maxSlide) {
    curSlide = 0;
  } else {
    curSlide++;
  }

  slides.forEach((slide: HTMLElement, indx: number) => {
    slide.style.transform = `translateX(${100 * (indx - curSlide)}%)`;
  });
});

const prevSlide = document.querySelector('.btn-prev') as HTMLElement;

prevSlide.addEventListener("click", function () {
  if (curSlide === 0) {
    curSlide = maxSlide;
  } else {
    curSlide--;
  }

  slides.forEach((slide: HTMLElement, indx: number) => {
    slide.style.transform = `translateX(${100 * (indx - curSlide)}%)`;
  });
});