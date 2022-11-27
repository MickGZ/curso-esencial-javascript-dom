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

  function logger(message) {
    if (config.debug) {
      console.info(message);
    }
  }
}
