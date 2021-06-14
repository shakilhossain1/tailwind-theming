function withOpacity(variableName) {
  return ({ opacityValue }) =>
    opacityValue !== undefined
      ? `rgba(${variableName}, ${opacityValue})`
      : `rgba(${variableName})`;
}

module.exports = {
  purge: ["./*.html", "./src/**/*.{js,jsx,ts,tsx,vue}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      textColor: {
        skin: {
          base: "var(--color-text-base)",
          muted: "var(--color-text-muted)",
          inverted: "var(--color-text-inverted)",
        },
      },
      backgroundColor: {
        skin: {
          fill: "var(--color-fill)",
          "button-accent": "var(--color-button-accent)",
          "button-accent-hover": "var(--color-button-accent-hover)",
          "button-muted": withOpacity('var(--color-button-muted)')
        },
      },
      gradientColorStops: {
        skin: {
          hue: "var(--color-fill)",
        },
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
