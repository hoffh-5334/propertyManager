import { h } from 'preact';
import classNames from 'classnames';
import ignoreEvent from '../utils/ignoreEvent.js';

function PickerPanelContent(_ref) {
  let {
    activePickerPanel,
    className,
    hideAllPanels,
    i18n,
    state,
    uppy
  } = _ref;
  return h("div", {
    className: classNames('uppy-DashboardContent-panel', className),
    role: "tabpanel",
    "data-uppy-panelType": "PickerPanel",
    id: `uppy-DashboardContent-panel--${activePickerPanel.id}`,
    onDragOver: ignoreEvent,
    onDragLeave: ignoreEvent,
    onDrop: ignoreEvent,
    onPaste: ignoreEvent
  }, h("div", {
    className: "uppy-DashboardContent-bar"
  }, h("div", {
    className: "uppy-DashboardContent-title",
    role: "heading",
    "aria-level": "1"
  }, i18n('importFrom', {
    name: activePickerPanel.name
  })), h("button", {
    className: "uppy-DashboardContent-back",
    type: "button",
    onClick: hideAllPanels
  }, i18n('cancel'))), h("div", {
    className: "uppy-DashboardContent-panelBody"
  }, uppy.getPlugin(activePickerPanel.id).render(state)));
}

export default PickerPanelContent;