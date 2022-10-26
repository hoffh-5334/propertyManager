import { h, Fragment } from 'preact';

const Breadcrumb = props => {
  const {
    getFolder,
    title,
    isLast
  } = props;
  return h(Fragment, null, h("button", {
    type: "button",
    className: "uppy-u-reset uppy-c-btn",
    onClick: getFolder
  }, title), !isLast ? ' / ' : '');
};

export default (props => {
  const {
    getFolder,
    title,
    breadcrumbsIcon,
    directories
  } = props;
  return h("div", {
    className: "uppy-Provider-breadcrumbs"
  }, h("div", {
    className: "uppy-Provider-breadcrumbsIcon"
  }, breadcrumbsIcon), directories.map((directory, i) => h(Breadcrumb, {
    key: directory.id,
    getFolder: () => getFolder(directory.id),
    title: i === 0 ? title : directory.title,
    isLast: i + 1 === directories.length
  })));
});