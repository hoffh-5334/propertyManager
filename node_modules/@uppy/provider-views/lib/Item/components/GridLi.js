import { h } from 'preact';

function GridListItem(props) {
  const {
    className,
    isDisabled,
    restrictionError,
    isChecked,
    title,
    itemIconEl,
    showTitles,
    toggleCheckbox,
    recordShiftKeyPress,
    id,
    children
  } = props;
  return h("li", {
    className: className,
    title: isDisabled ? restrictionError == null ? void 0 : restrictionError.message : null
  }, h("input", {
    type: "checkbox",
    className: `uppy-u-reset uppy-ProviderBrowserItem-checkbox ${isChecked ? 'uppy-ProviderBrowserItem-checkbox--is-checked' : ''} uppy-ProviderBrowserItem-checkbox--grid`,
    onChange: toggleCheckbox,
    onKeyDown: recordShiftKeyPress,
    name: "listitem",
    id: id,
    checked: isChecked,
    disabled: isDisabled,
    "data-uppy-super-focusable": true
  }), h("label", {
    htmlFor: id,
    "aria-label": title,
    className: "uppy-u-reset uppy-ProviderBrowserItem-inner"
  }, h("span", {
    className: "uppy-ProviderBrowserItem-inner-relative"
  }, itemIconEl, showTitles && title, children)));
}

export default GridListItem;