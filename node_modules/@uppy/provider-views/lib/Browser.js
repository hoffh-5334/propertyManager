import { h } from 'preact';
import classNames from 'classnames';
import remoteFileObjToLocal from '@uppy/utils/lib/remoteFileObjToLocal';
import Filter from "./Filter.js";
import FooterActions from "./FooterActions.js";
import Item from "./Item/index.js";
const VIRTUAL_SHARED_DIR = 'shared-with-me';

function Browser(props) {
  const {
    currentSelection,
    folders,
    files,
    uppyFiles,
    viewType,
    headerComponent,
    showBreadcrumbs,
    isChecked,
    toggleCheckbox,
    recordShiftKeyPress,
    handleScroll,
    showTitles,
    i18n,
    validateRestrictions,
    showFilter,
    filterQuery,
    filterInput,
    getNextFolder,
    cancel,
    done,
    columns
  } = props;
  const selected = currentSelection.length;
  return h("div", {
    className: classNames('uppy-ProviderBrowser', `uppy-ProviderBrowser-viewType--${viewType}`)
  }, h("div", {
    className: "uppy-ProviderBrowser-header"
  }, h("div", {
    className: classNames('uppy-ProviderBrowser-headerBar', !showBreadcrumbs && 'uppy-ProviderBrowser-headerBar--simple')
  }, headerComponent)), showFilter && h(Filter, {
    i18n: i18n,
    filterQuery: filterQuery,
    filterInput: filterInput
  }), (() => {
    if (!folders.length && !files.length) {
      return h("div", {
        className: "uppy-Provider-empty"
      }, i18n('noFilesFound'));
    }

    return h("div", {
      className: "uppy-ProviderBrowser-body"
    }, h("ul", {
      className: "uppy-ProviderBrowser-list",
      onScroll: handleScroll,
      role: "listbox" // making <ul> not focusable for firefox
      ,
      tabIndex: "-1"
    }, folders.map(folder => {
      var _isChecked;

      return Item({
        columns,
        showTitles,
        viewType,
        i18n,
        id: folder.id,
        title: folder.name,
        getItemIcon: () => folder.icon,
        isChecked: isChecked(folder),
        toggleCheckbox: event => toggleCheckbox(event, folder),
        recordShiftKeyPress,
        type: 'folder',
        isDisabled: (_isChecked = isChecked(folder)) == null ? void 0 : _isChecked.loading,
        isCheckboxDisabled: folder.id === VIRTUAL_SHARED_DIR,
        handleFolderClick: () => getNextFolder(folder)
      });
    }), files.map(file => {
      const restrictionError = validateRestrictions(remoteFileObjToLocal(file), [...uppyFiles, ...currentSelection]);
      return Item({
        id: file.id,
        title: file.name,
        author: file.author,
        getItemIcon: () => file.icon,
        isChecked: isChecked(file),
        toggleCheckbox: event => toggleCheckbox(event, file),
        recordShiftKeyPress,
        columns,
        showTitles,
        viewType,
        i18n,
        type: 'file',
        isDisabled: restrictionError && !isChecked(file),
        restrictionError
      });
    })));
  })(), selected > 0 && h(FooterActions, {
    selected: selected,
    done: done,
    cancel: cancel,
    i18n: i18n
  }));
}

export default Browser;