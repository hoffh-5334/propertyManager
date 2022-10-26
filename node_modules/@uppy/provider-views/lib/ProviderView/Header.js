import User from "./User.js";
import Breadcrumbs from "../Breadcrumbs.js";
export default (props => {
  const components = [];

  if (props.showBreadcrumbs) {
    components.push(Breadcrumbs({
      getFolder: props.getFolder,
      directories: props.directories,
      breadcrumbsIcon: props.pluginIcon && props.pluginIcon(),
      title: props.title
    }));
  }

  components.push(User({
    logout: props.logout,
    username: props.username,
    i18n: props.i18n
  }));
  return components;
});