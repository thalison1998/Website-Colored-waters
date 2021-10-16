export default function clickOut(element, events, callback) {
  const attEventAdd = 'data-on';
  const html = document.documentElement;

  const checkOutside = (e) => {
    if (!element.contains(e.target)) {
      element.removeAttribute(attEventAdd);

      callback();

      events.forEach((event) => {
        html.removeEventListener(event, checkOutside);
      });
    }
  };

  if (!element.hasAttribute(attEventAdd)) {
    element.setAttribute(attEventAdd, '');
    events.forEach((event) => {
      setTimeout(() => html.addEventListener(event, checkOutside));
    });
  }
}
