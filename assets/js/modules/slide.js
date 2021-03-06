import showAndHidden from './hideAndShow';

export default function slide(timerx) {
  const imgSlide = document.querySelectorAll('.img-slide');
  const slideContainer = document.querySelector('.container-slide');
  const btnNext = document.querySelector('.next');
  const btnPrev = document.querySelector('.prev');
  const events = ['click', 'touchstart'];
  const slideArray = [...imgSlide];
  const imgLength = imgSlide.length;

  let btnControl;
  let currentIndex = 0;
  let timerInterval;

  const controlSlide = () => {
    const containerControl = document.createElement('div');
    containerControl.classList.add('control-slide');
    slideArray.forEach((li, index) => {
      containerControl.innerHTML += `<button data-control="${index}" aria-label="control index${index}">
      </button>`;
    });
    slideContainer.append(containerControl);
  };
  controlSlide();

  const controlEvents = (index) => {
    btnControl = slideContainer.querySelectorAll('[data-control]');
    btnControl.forEach((item) => item.classList.remove('on'));
    btnControl[index].classList.add('on');
  };

  const changeSlide = (index = 0) => {
    imgSlide.forEach((item) => item.classList.remove('on'));
    imgSlide[index].classList.add('on');
    currentIndex = index;

    const textShow = showAndHidden('.info-slide');
    textShow.change(index);
    controlEvents(index);
    return index;
  };

  const changeControlSlide = () => {
    btnControl = slideContainer.querySelectorAll('[data-control]');
    btnControl.forEach((link) => {
      link.addEventListener('click', (e) => {
        e.preventDefault();
        const indexSelect = e.target.dataset.control;
        currentIndex = indexSelect;
        changeSlide(indexSelect);
      });
    });
  };
  

  // controlado que realiza a mudança do slide //

  // avanço e retrocesso do slide//
  const startNext = () => {
    ++currentIndex;
    if (currentIndex >= imgLength) {
      currentIndex = 0;
    }
    changeSlide(currentIndex);
  };

  const next = (e) => {
    e.preventDefault();
    startNext();
  };

  const prev = (e) => {
    e.preventDefault();
    --currentIndex;
    if (currentIndex < 0) {
      currentIndex = imgLength - 1;
    }
    changeSlide(currentIndex);
  };

  // troca de slide por tempo //
  const timer = () => {
    timerInterval = setInterval(() => {
      startNext();
      controlEvents(currentIndex);
    }, timerx);
  };

  const slideStop = () => {
    clearInterval(timerInterval);
  };

  const slideReturn = () => timer();

  const btnEvents = () => {
    events.forEach((event) => {
      btnNext.addEventListener(event, next);
      btnPrev.addEventListener(event, prev);
    });
  };

  const enterAndLeaveEvent = () => {
    slideContainer.addEventListener('mouseenter', slideStop);
    slideContainer.addEventListener('mouseleave', slideReturn);
  };
  const init = () => {
    enterAndLeaveEvent();
    btnEvents();
    timer();
    changeControlSlide();
  };

  return {
    init,
    changeSlide,
  };
}
