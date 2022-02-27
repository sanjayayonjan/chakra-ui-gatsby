// src/@chakra-ui/gatsby-plugin/theme.js
import {extendTheme} from "@chakra-ui/react";
import {createBreakpoints} from "@chakra-ui/theme-tools";

const breakpoints = createBreakpoints({
  sm: "30em", //480px
  md: "48em", //768px
  lg: "62em", //992px
  xl: "80em", //1280px
  "2xl": "96em", //1536px
});

const theme = {
  breakpoints,

  fonts: {
    body: "Poppins",
    heading: "Poppins",
  },

  colors: {
    // brand: {
    //   900: "#1a365d",
    //   800: "#153e75",
    //   700: "#2a69ac",
    // },
    primary: {
      100: "#afce64",
      200: "#a3c74e",
      300: "#98c038",
      400: "#8cb922", //ThemeColor
      500: "#70941b",
      600: "#628218",
      700: "#546f14",
      800: "#384a0e",
      900: "#1c2507",
    },
    secondary: {
      50: "#dfe1e5",
      100: "#6c788e",
      200: "#3b4b69",
      300: "#233556",
      400: "#0a1e43", //ThemeColor
      500: "#081836",
      600: "#07152f",
      700: "#061228",
      800: "#050f22",
      900: "#040c1b",
    },
    gray: {
      10: "#FFF",
      50: "#F1F1F1",
      100: "#EEE",
      200: "#DDD",
      300: "#C6C6C6",
      400: "#B5B5B5",
      500: "#999",
      600: "#888",
      700: "#777",
      800: "#555",
    },
    red: {
      400: "#E53E3E",
      500: "#C53030",
    },
  },

  sizes: {
    container: {
      sm: "540px",
      md: "768px",
      lg: "991px",
      xl: "1170px",
    },
  },

  // spacing: {
  //   xs: "4px",
  //   s: "8px",
  //   sm: "14px",
  //   m: "16px",
  //   l: "24px",
  //   xl: "32px",
  // },

  space: {
    xs: "4px",
    sm: "8px",
    md: "14px",
    lg: "24px",
    xl: "32px",
    "2xl": "40px",
    "3xl": "72px",
    "4xl": "100px",
    containerPadd: "30px",
    negspcae: "-30px",
  },

  fontSizes: {
    h5: "18px",
    h2: "30px",
    h1: "36px",
    xs: "10px",
    sm: "12px",
    md: "14px",
    md_l: "16px",
    lg: "18px",
    xl: "22px",
  },

  fontWeights: {
    hairline: 100,
    thin: 200,
    light: 300,
    normal: 400,
    medium: 500,
    semibold: 600,
    bold: 700,
    extrabold: 800,
    black: 900,
  },

  lineHeights: {
    normal: "26px",
    h1: "52px",
    h2: "40px",
  },

  shadows: {
    small: "0 0px 4px 0 rgba(0,0,0,.2)",
    default: "0 3px 20px 0 rgba(0,0,0,.11)",
  },

  radii: {
    none: "0",
    default: "3px",
    lg: "16px",
    xl: "30px",
    // sm: '0.125rem',
    // base: '0.25rem',
    // md: '0.375rem',
    // lg: '0.5rem',
    // xl: '0.75rem',
    // '2xl': '1rem',
    // '3xl': '1.5rem',
    // full: '9999px',
  },

  zIndices: {
    hide: -1,
    auto: "auto",
    base: 0,
    docked: 10,
    dropdown: 1000,
    sticky: 1100,
    banner: 1200,
    overlay: 1300,
    modal: 1400,
    popover: 1500,
    skipLink: 1600,
    toast: 1700,
    tooltip: 1800,
  },

  components: {
    Button: {
      baseStyle: {
        fontWeight: "semibold",
        borderRadius: "3px",
      },
      sizes: {
        small: {
          fontSize: "md",
          px: "14px",
          py: "12px",
        },
        default: {
          fontSize: "lg",
          px: "40px",
          py: "14px",
        },
        transparent: {
          fontSize: "md",
        },
      },
      variants: {
        primary: {
          bg: "primary.400",
          color: "white",
          _hover: {
            bg: "primary.500",
          },
        },
        secondary: {
          bg: "secondary.400",
          color: "white",
          _hover: {
            bg: "secondary.500",
          },
        },
        cancel: {
          bg: "gray.200",
          _hover: {
            bg: "gray.300",
          },
        },
        back: {
          bg: "gray.500",
          color: "white",
          _hover: {
            bg: "gray.600",
          },
        },
        danger: {
          bg: "red.400",
          color: "white",
          _hover: {
            bg: "red.500",
          },
        },
      },
    },
  },
};

export default extendTheme(theme);
