import showAndHidden from "./hideAndShow";

export default function selectWhatAppears(element) {
  const select = document.querySelectorAll(element);
  const events = ["click", "touchstart"];
  const stars = document.querySelector('.info-stars');
  stars.classList.add('on');
  


  const init = () => {
    select.forEach((item, index) => {
      events.forEach((event) => {
        item.addEventListener(event, (e) => {
          e.preventDefault();

          const selectStars = showAndHidden(".info-stars");
          selectStars.change(index);

          const selectIcone = showAndHidden(element);
          selectIcone.change(index);
        });
      });
    });
  };

  return {
    init,
  };
}
