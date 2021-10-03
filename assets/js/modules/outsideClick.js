
export default function outsideClick(element, events, callback){
    const html = document.documentElement;

    const outside = (e) => {
      if (!element.contains(e.target)) {
        callback();
        events.forEach((event) => {
          html.removeEventListener(event, outside);
        });
      }
    };
    events.forEach((event) => {
      html.addEventListener(event, outside);
    });
  };
