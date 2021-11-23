import debounce from "./debounce";

export default function signaling() {
  const containerOpinions = document.querySelector(".container-opinions");
  const wrapperOpinions = document.querySelectorAll(".wrapper-opinions");

  const arrowLeft = document.querySelector(".arrow-left");
  const arrowRight = document.querySelector(".arrow-right");

  const arrowIndication = (distance, fixed, classe, arrow) => {
    if (distance <= fixed) arrow.classList.add(classe);
    else if (distance >= fixed) arrow.classList.remove(classe);
  };

  const handleMove = () => {
    let leftFixed = 200;
    leftFixed -= leftFixed * 2;
    const windowSize = window.innerWidth + 50;

    const endWrapper = wrapperOpinions[wrapperOpinions.length - 1];
    const startWrapper = wrapperOpinions[0];

    const lefDistance = startWrapper.getBoundingClientRect().left;
    const rigthDistance = endWrapper.getBoundingClientRect().right;

    arrowIndication(rigthDistance, windowSize, "off", arrowRight);
    arrowIndication(lefDistance, leftFixed, "on", arrowLeft);
  };

  const init = () => {
    containerOpinions.addEventListener("touchmove", debounce(handleMove, 300));
  };
  return {
    init,
  };
}
