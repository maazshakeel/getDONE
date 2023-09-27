import { Open_Sans } from "next/font/google";
const open_sans = Open_Sans({ subsets: ["latin"] });

/** App Fonts */
export const fonts = {
  body: open_sans.style.fontFamily,
  heading: open_sans.style.fontFamily,
};
