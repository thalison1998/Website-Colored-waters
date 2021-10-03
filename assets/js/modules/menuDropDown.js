import outsideClick from "./outsideClick.js";
export default function menuDropDown() {
  const dropDownMenus = document.querySelectorAll("[data-dropdown]");
  const listDrop = document.querySelectorAll(".dropdown-menu");
  const events = ["click", "touchstart"];

  const handleClick = (e) => {
    const element = e.currentTarget;
    element.classList.toggle("on");
    outsideClick(element, events, () => {
      element.classList.remove("on");
    });
  };

  const listZoneEnter = () => {removeOrAddHandleclick(false)};

  const listZoneLeave = () => removeOrAddHandleclick(true);

  listDrop.forEach((item) => {
    item.addEventListener("mouseenter", listZoneEnter);
    item.addEventListener("mouseleave", listZoneLeave);
  });

  const removeOrAddHandleclick = (change) => {
    dropDownMenus.forEach((item) => {
      if (change) {
        events.forEach((event) => {
          item.addEventListener(event, handleClick);
        });
      } else {
        events.forEach((event) => {
          item.removeEventListener(event, handleClick);
        });
      }
    });
  };
  removeOrAddHandleclick(true);
}
