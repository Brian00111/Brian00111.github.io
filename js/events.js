/*
  event.on(type, selector, handler)
  event.off(type, selector, handler)
*/

const events = {};

const shouldTrigger = (target, selector) => {
  return target.closest(selector);
};

const run = (e) => {
  const { target, type } = e;
  const handlers = events[type];
  handlers.forEach((h) => {
    const { selector, handler } = h;
    if (shouldTrigger(target, selector)) {
      handler(e);
    }
  });
};

const on = (type, selector, handler) => {
  const useCapture = ["blur", "focus"].includes(type);
  if (events[type] == null) {
    events[type] = [];
    document.addEventListener(type, run, useCapture);
  }

  events[type].push({
    selector,
    handler
  });
};

const off = (type, selector, handler) => {
  const handlers = events[type];
  events[type] = handlers
    ? handlers.filter((h) => {
        return h.selector !== selector && h.handler !== handler;
      })
    : [];

  if (events[type].length === 0) {
    events[type] = null;
    document.removeEventListener(type, run);
  }
};

export { on, off };