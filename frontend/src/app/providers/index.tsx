import compose from "compose-function";
import { withRouter } from "./withRouter";
import { withStore } from "./withStore";
import { withStyles } from "./withStyles";
import { withAlerts } from "./withAlerts";

export const withProviders = compose(withRouter, withStore, withStyles, withAlerts);