import colors from './colors';

export const theme = {
  common: {
    boxShadow: '0 2px 5px rgba(0, 0, 0, 0.26)'
  },
  background: {
    main: colors.blue
  },
  button: {
    background: colors.lightBlue,
    color: colors.white,
    disabledBackground: colors.disabledBlue,
    disabledColor: colors.disabledWhite
  },
  navbar: {
    active: colors.lightBlue,
    hover: colors.lightBlue,
    background: colors.darkBlue,
    link: colors.white,
    icon: colors.white
  },
  form: {
    background: colors.darkBlue
  },
  modal: {
    background: colors.darkBlue,
    backdrop: 'rgba(0, 0, 0, 0.6)'
  },
  formField: {
    background: colors.white,
    border: colors.white,
    color: colors.white,
    focusBackground: colors.lightBlue,
    focusBorder: colors.lightBlue,
    focusColor: colors.lightBlue,
    errorBackground: colors.white,
    errorBorder: colors.red,
    errorColor: colors.red
  },
  typography: {
    defaultBoxModel: {
      margin: '0 0 2rem 0',
      letterSpacing: '0.5px',
      textAlign: 'left'
    },
    hero: {
      mainColor: colors.white,
      highlightColor: colors.lightBlue,
      fontSizes: {
        mobile: '3rem',
        desktop: '3.5rem'
      }
    },
    subhero: {
      mainColor: colors.white,
      highlightColor: colors.lightBlue,
      fontSizes: {
        mobile: '2.4rem',
        desktop: '2.8rem'
      }
    },
    title: {
      mainColor: colors.white,
      highlightColor: colors.lightBlue,
      fontSizes: {
        mobile: '2rem',
        desktop: '2.5rem'
      }
    },
    subtitle: {
      mainColor: colors.white,
      highlightColor: colors.lightBlue,
      fontSizes: {
        mobile: '1.8rem',
        desktop: '2rem'
      }
    },
    paragraph: {
      mainColor: colors.white,
      highlightColor: colors.lightBlue,
      fontSizes: {
        mobile: '1.4rem',
        desktop: '1.6rem'
      }
    },
    label: {
      mainColor: colors.white,
      highlightColor: colors.lightBlue,
      fontSizes: {
        mobile: '1.2rem',
        desktop: '1.4rem'
      }
    }
  }
};
