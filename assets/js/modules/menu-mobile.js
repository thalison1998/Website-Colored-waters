import clickOut from "./clickOut";
export default function menuMobile(btn, menu) {
  const btnMobile = document.querySelector(btn);
  const menuMob = document.querySelector(menu);
  const classSelect = "on";

  const events = ["click", "touchstart"];

  const activeMenuMobile = (e) => {
    if (e.cancelable) e.preventDefault();

    btnMobile.classList.add(classSelect);
    menuMob.classList.add(classSelect);

    clickOut(menuMob, events, () => {
      btnMobile.classList.remove(classSelect);
      menuMob.classList.remove(classSelect);
    });
  };

  const init = () => {
    if (!!events && !!btnMobile) {
      events.forEach((event) => {
        btnMobile.addEventListener(event, activeMenuMobile);
      });
    }
  };

  return {
    init,
  };
}
