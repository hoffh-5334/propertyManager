function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import { h } from 'preact';
import classNames from 'classnames';
import ItemIcon from "./components/ItemIcon.js";
import GridListItem from "./components/GridLi.js";
import ListItem from "./components/ListLi.js";
export default (props => {
  const {
    author,
    getItemIcon,
    isChecked,
    isDisabled,
    viewType
  } = props;
  const itemIconString = getItemIcon();
  const className = classNames('uppy-ProviderBrowserItem', {
    'uppy-ProviderBrowserItem--selected': isChecked
  }, {
    'uppy-ProviderBrowserItem--disabled': isDisabled
  }, {
    'uppy-ProviderBrowserItem--noPreview': itemIconString === 'video'
  });
  const itemIconEl = h(ItemIcon, {
    itemIconString: itemIconString
  });

  switch (viewType) {
    case 'grid':
      return h(GridListItem // eslint-disable-next-line react/jsx-props-no-spreading
      , _extends({}, props, {
        className: className,
        itemIconEl: itemIconEl
      }));

    case 'list':
      return (// eslint-disable-next-line react/jsx-props-no-spreading
        h(ListItem, _extends({}, props, {
          className: className,
          itemIconEl: itemIconEl
        }))
      );

    case 'unsplash':
      return (// eslint-disable-next-line react/jsx-props-no-spreading
        h(GridListItem, _extends({}, props, {
          className: className,
          itemIconEl: itemIconEl
        }), h("a", {
          href: `${author.url}?utm_source=Companion&utm_medium=referral`,
          target: "_blank",
          rel: "noopener noreferrer",
          className: "uppy-ProviderBrowserItem-author"
        }, author.name))
      );

    default:
      throw new Error(`There is no such type ${viewType}`);
  }
});