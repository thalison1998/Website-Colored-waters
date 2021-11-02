export default function showAndHidden(element) {
  const text = document.querySelectorAll(element);

  const change = (index) => {
    text.forEach((texts) => {
      texts.classList.remove("on");
    });
    text[index].classList.add("on");
  };
  return {
    change,
  };
}
