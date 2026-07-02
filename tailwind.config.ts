import type { Config } from "tailwindcss";
const config: Config = { content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}", "./lib/**/*.{ts,tsx}"], theme: { extend: { colors: { kapruka: { purple: "#351064", plum: "#4b1687", ink: "#191326", yellow: "#ffd400", saffron: "#ffb703", green: "#2fb344", rose: "#f04f7a" } }, boxShadow: { glow: "0 22px 80px rgba(53,16,100,.22)" } } }, plugins: [] };
export default config;
