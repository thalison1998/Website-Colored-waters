export default function showAndHiddenText(element) {
  const elementSelect = element || '.info-slide';
  const text = document.querySelectorAll(elementSelect);

  const textChange = (index) => {
    text.forEach((texts) => {
      texts.classList.remove("on");
    });
    text[index].classList.add("on");
  };
  return {
    textChange,
  };
}
