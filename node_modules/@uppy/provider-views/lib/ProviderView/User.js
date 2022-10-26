import { h } from 'preact';
export default (_ref => {
  let {
    i18n,
    logout,
    username
  } = _ref;
  return [h("span", {
    className: "uppy-ProviderBrowser-user",
    key: "username"
  }, username), h("button", {
    type: "button",
    onClick: logout,
    className: "uppy-u-reset uppy-c-btn uppy-ProviderBrowser-userLogout",
    key: "logout"
  }, i18n('logOut'))];
});