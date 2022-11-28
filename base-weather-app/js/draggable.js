const defaultConfig = {
  open: true,
  debug: true,
  animatable: true,
};

export default function dragabble($element, config = defaultConfig) {
  if (!($element instanceof HTMLElement)) {
    return console.warn(
      `Elemento inválido se esperaba un HTMLElement y se recibió ${$element}`
    );
  }

  let isOpen = true;
  let isDragging = false;
  const elementRect = $element.getBoundingClientRect();
  const ELEMENT_BLOCK_SIZE = elementRect.height;
  const $marker = $element.querySelector("[data-marker]");
  const MARKER_BLOCK_SIZE = $marker.getBoundingClientRect().height;

  const VISIBLE_Y_POSITION = 0;
  const HIDDEN_Y_POSITION = ELEMENT_BLOCK_SIZE - MARKER_BLOCK_SIZE;
  let widgetPosition = VISIBLE_Y_POSITION;
  isOpen ? open() : close();
  let startY = 0;

  $marker.addEventListener("click", handleClick);
  $marker.addEventListener("pointerdown", handlePointerDown);
  $marker.addEventListener("pointerup", handlePointerUp);
  $marker.addEventListener("pointerout", handlePointerOut);
  $marker.addEventListener("pointercancel", handlePointerCancel);
  $marker.addEventListener("pointermove", handlePointerMove);

  function handlePointerUp() {
    logger("Pointer UP");
  }

  function handlePointerOut() {
    logger("Pointer OUT");
  }

  function handlePointerCancel() {
    logger("Pointer Cancel");
  }

  function handlePointerDown(event) {
    logger("Pointer Down");
    startDrag(event);
  }

  function handleClick(event) {
    logger("CLICK");
    toggle();
  }

  function handlePointerMove(event) {
    logger("Pointer MOVE");
    startDrag(event);
  }

  function pageY(event) {
    return event.pageY || event.touches[0].pageY;
  }

  function startDrag(event) {
    isDragging = true;
    startY = pageY(event);
  }

  function toggle() {
    if (!isDragging) {
      if (!isOpen) {
        return open();
      }
      return close();
    }
  }

  function logger(message) {
    if (config.debug) {
      console.info(message);
    }
  }

  function open() {
    logger("Abrir Widget");
    isOpen = true;
    widgetPosition = VISIBLE_Y_POSITION;
    setWidgetPosition(widgetPosition);
  }

  function close() {
    logger("Abrir Widget");
    isOpen = false;
    widgetPosition = HIDDEN_Y_POSITION;
    setWidgetPosition(widgetPosition);
  }

  function setWidgetPosition(value) {
    $element.style.marginBottom = `-${value}px`;
  }

  function drag(event) {
    const cursorY = pageY(event);
    const movementY = cursorY - startY;
    widgetPosition = widgetPosition + movementY;
    logger(movementY);
    startY = cursorY;
    setWidgetPosition(widgetPosition);
  }
}
