/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      backgroundColor: {
        blue1: "#e3ffff",
        blue2: "#c9f1fd",
        blue3: "#aee2fc",
        blue4: "#94d4fa",
        blue5: "#79c5f8",
        darkblue: "#0071bb",
        red1: "#ff9c6e",
        red2: "#fe7c55",
        red3: "#fd5c3c",
        red4: "#fc3c23",
        red5: "#fb1c0a",
        grayBg1: "#FFFFFF",
        grayBg2: "#D5D9D9",
      },
      borderColor: {
        blue1: "#e3ffff",
        blue2: "#c9f1fd",
        blue3: "#aee2fc",
        blue4: "#94d4fa",
        blue5: "#79c5f8",
        blue6: "#0092f3",
        red1: "#ff9c6e",
        red2: "#fe7c55",
        red3: "#fd5c3c",
        red4: "#fc3c23",
        red5: "#fb1c0a",
        grayBorder: "#D5D9D9",
        greenBorder: "#067D62",
      },
      ringColor: {
        blue1: "#e3ffff",
        blue2: "#c9f1fd",
        blue3: "#aee2fc",
        blue4: "#94d4fa",
        blue5: "#79c5f8",
        red1: "#ff9c6e",
        red2: "#fe7c55",
        red3: "#fd5c3c",
        red4: "#fc3c23",
        red5: "#fb1c0a",
      },
      textColor: {
        blue1: "#e3ffff",
        blue2: "#c9f1fd",
        blue3: "#aee2fc",
        blue4: "#94d4fa",
        blue5: "#79c5f8",
        red1: "#ff9c6e",
        red2: "#fe7c55",
        red3: "#fd5c3c",
        red4: "#fc3c23",
        red5: "#fb1c0a",
        grayText: "#444444",
        blackText: "#0F1111",
        orangeText: "#C45500",
        blueText: "#007185",
        greenText: "#067D62",
      },
      screens: {
        s: { max: "480px" }, // Pantallas con un ancho máximo de 640px
        m: { min: "481px", max: "960px" }, // Pantallas de 641px a 768px
        l: { min: "961px", max: "1328px" },
      },
    },
  },
  plugins: [],
};

///s: 640px celular
///m: 768px notebook/tablet
//resto pc

//0 a 480 celular
//480 a 960 tablet
//960 a 1328 pc / notebook
//1328 para arriba mi monitor (que en total es de 2100 aprox) x defecto se aplica todas las props q no tengan ni s ni m ni l
