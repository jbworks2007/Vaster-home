import "bootstrap/dist/css/bootstrap.min.css";
import "@/assets/scss/comman.scss";
import "@/assets/scss/custom.scss";
import "@/assets/scss/custom2.scss";
import { Roboto } from "next/font/google";

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["100", "300", "400", "500", "700", "900"],
});

export const metadata = {
  title: "Vaster-HiFi",
  description: "Crafted by Askgalore",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={roboto.className}>{children}</body>
    </html>
  );
}


