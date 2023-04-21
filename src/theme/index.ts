import { extendTheme } from "@chakra-ui/react";

// Global style overrides
import styles from "./styles";

// Foundational style overrides
import breakpoints from "./foundations/breakpoints";
import colors from "./foundations/colors";

// Components style overrides
import tabs from "./components/tabs";

const overrides = {
  styles,
  breakpoints,
  colors,
  components: {
    tabs,
  },
  fonts: {
    heading: "'Quicksand', sans-serif",
    body: "'Quicksand', sans-serif",
  },
};

export default extendTheme(overrides);
