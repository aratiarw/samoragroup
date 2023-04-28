/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./app/**/*.{js,ts,jsx,tsx}",
        "./pages/**/*.{js,ts,jsx,tsx}",
        "./components/**/*.{js,ts,jsx,tsx}",

        // Or if using `src` directory:
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            fontFamily: {
                gilroy: ["var(--font-gilroy)"],
            },
            colors: {
                primary: "#000371",
                secondary: "#F3CD2D",
                grey: "#EDEFEE",
            },
            backgroundImage: {
                sugar: "url('/background/sugar.jpg')",
                commitment: "url('/background/commitment.jpg')",
                bg2: "url('/background/bg-2.png')",
                sustainibilty: "url('/background/sustain.jpg')",
                whistle: "url('/background/whistle.png')",
                life: "url('/background/life.jpg')",
                mesin: "url('/background/foto.jpg')",
            },
        },
    },
    plugins: [],
};
