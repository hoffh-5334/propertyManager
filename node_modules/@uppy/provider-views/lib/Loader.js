import { h } from 'preact';
export default (_ref => {
  let {
    i18n
  } = _ref;
  return h("div", {
    className: "uppy-Provider-loading"
  }, h("span", null, i18n('loading')));
});