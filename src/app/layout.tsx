import { Inter, Geist } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";

const geist = Geist({subsets:['latin'],variable:'--font-sans'});

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={cn("font-sans", geist.variable)}>
      <head>
        <title>Fayash Portfolio</title>
        <link
          rel="icon"
          type="image/png"
          href="https://cdn.discordapp.com/attachments/1261256249929105481/1299390580064911410/Screenshot_2024-10-25_at_21.54.26.png?ex=671d0747&is=671bb5c7&hm=988c4349a25b4a1df91f1db18cba38ce265cebc203be392932fa8aecc7125064&"
        />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
