import clickOut from "./clickOut";
export default function dropdownMenu(listDrop) {
  const dropMenu = document.querySelectorAll(listDrop);
  let events = ["click", "touchstart"];

  const activeDropDown = (e) => {
    if(e.cancelable) e.preventDefault()
    
    const element = e.currentTarget;
    element.classList.add("on");

    clickOut(element, events, () => {
      element.classList.remove("on");
    });
  };

  const init = () => {
    if (!!dropMenu) {
      dropMenu.forEach((item) => {
        events.forEach((event) => {
          item.addEventListener(event, activeDropDown);
        });
      });
    }
  };
  return Object.freeze({
    init,
  })
}
