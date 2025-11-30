import { IBM_Plex_Sans as IBMPlexSans, Inter, Rubik } from "next/font/google";
import localFont from "next/font/local";

export const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
export const rubik = Rubik({ subsets: ["latin"], variable: "--font-rubik" });
export const ibm = IBMPlexSans({
  subsets: ["latin"],
  variable: "--font-ibm",
  weight: ["400", "500", "600", "700"],
});

export const gtPressuraMono = localFont({
  src: [
    {
      path: "./GTPressuraMonoTrial-Regular.woff2",
      weight: "400",
      style: "normal",
    },
  ],
  variable: "--font-gt-pressura-mono",
});
