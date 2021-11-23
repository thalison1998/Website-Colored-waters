import showAndHidden from "./hideAndShow";

export default function selectWhatAppears(element) {
  const select = document.querySelectorAll(element);
  const events = ["click", "touchstart"];
  const stars = document.querySelector(".wrapper-stars-info");

  stars.classList.add("on");
  select[0].classList.add("on");

  const init = () => {
    select.forEach((item, index) => {
      events.forEach((event) => {
        item.addEventListener(event, (e) => {
          if (e.cancelable) {
            e.preventDefault();
          }
          const selectStars = showAndHidden(".wrapper-stars-info");
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
