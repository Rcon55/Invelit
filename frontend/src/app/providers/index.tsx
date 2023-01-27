import compose from "compose-function";
import { withRouter } from "./withRouter";
import { withStore } from "./withStore";
import { withStyles } from "./withStyles";

export const withProviders = compose(withRouter, withStore, withStyles);