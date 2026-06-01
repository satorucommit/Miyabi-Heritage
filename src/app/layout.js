import { Inter, Noto_Serif_JP, Outfit } from "next/font/google";
import "./globals.css";
import { TransitionWrapper } from "@/components/TransitionWrapper";
import { CustomCursor } from "@/components/CustomCursor";

const inter = Inter({ subsets: ["latin"], variable: '--font-primary' });
const notoSerifJP = Noto_Serif_JP({ weight: ['400', '700'], subsets: ["latin"], variable: '--font-kanji' });
const outfit = Outfit({ subsets: ["latin"], variable: '--font-display' });

export const metadata = {
  title: "Miyabi Heritage",
  description: "Preserving the elegance of traditional Japan. Explore the profound aesthetics, ancient disciplines, and unyielding spirit of traditional Japanese culture.",
  keywords: "Japan, Japanese Culture, Heritage, Zen, Architecture, Tea Ceremony, Kyoto",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${notoSerifJP.variable} ${outfit.variable}`}>
        <CustomCursor />
        <TransitionWrapper>
          {children}
        </TransitionWrapper>
      </body>
    </html>
  );
}
