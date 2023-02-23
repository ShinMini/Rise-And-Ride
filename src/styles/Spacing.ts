const Spacing = {
  // icon sizes styles
  icon: {
    xxs: 16,
    xs: 22,
    sm: 26,
    md: 28,
    lg: 30,
    xl: 32,
    xxl: 34,
    el: 36,
    xel: 40,
  },
  // fonts sizes styles
  font: {
    xxs: 8,
    xs: 12,
    sm: 16,
    md: 20,
    lg: 24,
    xl: 28,
    xxl: 32,
    el: 36,
    xel: 40,
  },
  // box view styles
  box: {
    xxs: 24,
    xs: 48,
    sm: 72,
    m: 96,
    md: 120,
    lg: 144,
    xl: 168,
    xxl: 192,
    el: 216,
    xel: 240,
  },
  // navigation styles
  navbar: {
    // header navigation bar
    header:{
      height: 100,
      padding: {
        top: 62,
        right: 25,
        bottom: 0,
        left: 28,
      },
      border: {
        bottom: 3,
      },
      spacing: {
        width: 0,
        height: 165,
      },
      animated: {
        height: 257,
      }
    },
    // bottom navigation bar
    bottom: {
      width: '100%',
      border: {radius: '20px'},
      padding: {top: '25px', bottom: '30px'}
    }
  }
}

export default Spacing
