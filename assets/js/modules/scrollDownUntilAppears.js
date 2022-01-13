import debounce from "./debounce";
export default function scrollDownUntilAppears(elementSection) {
  const allSections = document.querySelectorAll(elementSection);
  const windowMetade = window.innerHeight * 0.7;
  allSections[0].classList.add("on");
  const distance = [...allSections];

  const takeTheDistance = () => {
    const elementDistance = distance.map((section) => {
      const offSet = section.offsetTop;
      return {
        element: section,
        offset: Math.floor(offSet - windowMetade),
      };
    });

    return elementDistance;
  };

  const checkDistance = () => {
    const elementDistance = takeTheDistance();
    elementDistance.forEach((item) => {
      if (window.pageYOffset > item.offset) {
        item.element.classList.add('on');
      } else if (item.element.classList.contains('on')) {
        item.element.classList.remove('on');
      }
    });
  };
  const init = () => {
    if (allSections) {
      const awaitTemp = debounce(checkDistance, 150);
      window.addEventListener('scroll', awaitTemp);
    }
  };

  return {
    init,
  };
}
