function _classPrivateFieldLooseBase(receiver, privateKey) { if (!Object.prototype.hasOwnProperty.call(receiver, privateKey)) { throw new TypeError("attempted to use private field on non-instance"); } return receiver; }

var id = 0;

function _classPrivateFieldLooseKey(name) { return "__private_" + id++ + "_" + name; }

import { h } from 'preact';
import SearchInput from "./InputView.js";
import Browser from "../Browser.js";
import LoaderView from "../Loader.js";
import Header from "./Header.js";
import CloseWrapper from '../CloseWrapper.js';
import View from '../View.js';
const packageJson = {
  "version": "3.0.2"
};
/**
 * Class to easily generate generic views for Provider plugins
 */

var _updateFilesAndInputMode = /*#__PURE__*/_classPrivateFieldLooseKey("updateFilesAndInputMode");

export default class SearchProviderView extends View {
  /**
   * @param {object} plugin instance of the plugin
   * @param {object} opts
   */
  constructor(plugin, opts) {
    super(plugin, opts); // set default options

    Object.defineProperty(this, _updateFilesAndInputMode, {
      value: _updateFilesAndInputMode2
    });
    const defaultOptions = {
      viewType: 'grid',
      showTitles: false,
      showFilter: false,
      showBreadcrumbs: false
    }; // merge default options with the ones set by user

    this.opts = { ...defaultOptions,
      ...opts
    }; // Logic

    this.search = this.search.bind(this);
    this.triggerSearchInput = this.triggerSearchInput.bind(this);
    this.addFile = this.addFile.bind(this);
    this.handleScroll = this.handleScroll.bind(this);
    this.donePicking = this.donePicking.bind(this); // Visual

    this.render = this.render.bind(this); // Set default state for the plugin

    this.plugin.setPluginState({
      isInputMode: true,
      files: [],
      folders: [],
      directories: [],
      filterInput: '',
      currentSelection: [],
      searchTerm: null
    });
  } // eslint-disable-next-line class-methods-use-this


  tearDown() {// Nothing.
  }

  clearSelection() {
    this.plugin.setPluginState({
      currentSelection: [],
      isInputMode: true,
      files: [],
      searchTerm: null
    });
  }

  search(query) {
    const {
      searchTerm
    } = this.plugin.getPluginState();

    if (query && query === searchTerm) {
      // no need to search again as this is the same as the previous search
      return undefined;
    }

    return this.sharedHandler.loaderWrapper(this.provider.search(query), res => {
      _classPrivateFieldLooseBase(this, _updateFilesAndInputMode)[_updateFilesAndInputMode](res, []);
    }, this.handleError);
  }

  triggerSearchInput() {
    this.plugin.setPluginState({
      isInputMode: true
    });
  }

  async handleScroll(event) {
    const query = this.nextPageQuery || null;

    if (this.shouldHandleScroll(event) && query) {
      this.isHandlingScroll = true;

      try {
        const {
          files,
          searchTerm
        } = this.plugin.getPluginState();
        const response = await this.provider.search(searchTerm, query);

        _classPrivateFieldLooseBase(this, _updateFilesAndInputMode)[_updateFilesAndInputMode](response, files);
      } catch (error) {
        this.handleError(error);
      } finally {
        this.isHandlingScroll = false;
      }
    }
  }

  donePicking() {
    const {
      currentSelection
    } = this.plugin.getPluginState();
    const promises = currentSelection.map(file => this.addFile(file));
    this.sharedHandler.loaderWrapper(Promise.all(promises), () => {
      this.clearSelection();
    }, () => {});
  }

  render(state, viewOptions) {
    var _this = this;

    if (viewOptions === void 0) {
      viewOptions = {};
    }

    const {
      didFirstRender,
      isInputMode,
      searchTerm
    } = this.plugin.getPluginState();

    if (!didFirstRender) {
      this.preFirstRender();
    }

    const targetViewOptions = { ...this.opts,
      ...viewOptions
    };
    const {
      files,
      folders,
      filterInput,
      loading,
      currentSelection
    } = this.plugin.getPluginState();
    const {
      isChecked,
      toggleCheckbox,
      filterItems
    } = this.sharedHandler;
    const hasInput = filterInput !== '';
    const browserProps = {
      isChecked,
      toggleCheckbox,
      currentSelection,
      files: hasInput ? filterItems(files) : files,
      folders: hasInput ? filterItems(folders) : folders,
      handleScroll: this.handleScroll,
      done: this.donePicking,
      cancel: this.cancelPicking,
      headerComponent: Header({
        search: this.search,
        i18n: this.plugin.uppy.i18n,
        searchTerm
      }),
      title: this.plugin.title,
      viewType: targetViewOptions.viewType,
      showTitles: targetViewOptions.showTitles,
      showFilter: targetViewOptions.showFilter,
      showBreadcrumbs: targetViewOptions.showBreadcrumbs,
      pluginIcon: this.plugin.icon,
      i18n: this.plugin.uppy.i18n,
      uppyFiles: this.plugin.uppy.getFiles(),
      validateRestrictions: function () {
        return _this.plugin.uppy.validateRestrictions(...arguments);
      }
    };

    if (loading) {
      return h(CloseWrapper, {
        onUnmount: this.clearSelection
      }, h(LoaderView, {
        i18n: this.plugin.uppy.i18n
      }));
    }

    if (isInputMode) {
      return h(CloseWrapper, {
        onUnmount: this.clearSelection
      }, h(SearchInput, {
        search: this.search,
        i18n: this.plugin.uppy.i18n
      }));
    }

    return h(CloseWrapper, {
      onUnmount: this.clearSelection
    }, h(Browser, browserProps));
  }

}

function _updateFilesAndInputMode2(res, files) {
  this.nextPageQuery = res.nextPageQuery;
  res.items.forEach(item => {
    files.push(item);
  });
  this.plugin.setPluginState({
    isInputMode: false,
    files,
    searchTerm: res.searchedFor
  });
}

SearchProviderView.VERSION = packageJson.version;