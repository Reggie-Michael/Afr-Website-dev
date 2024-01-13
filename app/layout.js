import { Inter } from "next/font/google";
import "@styles/globals.css";
import "@fortawesome/fontawesome-svg-core/styles.css";
import { config } from "@fortawesome/fontawesome-svg-core";
config.autoAddCss = false;

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Afripul Group",
  description: "Afripul Group Website",
  icons: {
    icon: [
      {
        url: "/assets/icon/android-icon-36x36.png",
        sizes: "36x36",
        type: "image/png",
        density: "0.75",
      },
      {
        url: "/assets/icon/android-icon-48x48.png",
        sizes: "48x48",
        type: "image/png",
        density: "1.0",
      },
      {
        url: "/assets/icon/android-icon-72x72.png",
        sizes: "72x72",
        type: "image/png",
        density: "1.5",
      },
      {
        url: "/assets/icon/android-icon-96x96.png",
        sizes: "96x96",
        type: "image/png",
        density: "2.0",
      },
      {
        url: "/assets/icon/android-icon-144x144.png",
        sizes: "144x144",
        type: "image/png",
        density: "3.0",
      },
      {
        url: "/assets/icon/android-icon-192x192.png",
        sizes: "192x192",
        type: "image/png",
        density: "4.0",
      },
      {
        url: new URL(
          "/assets/icon/android-icon-36x36.png",
          "https://example.com"
        ),
      },
      {
        url: "/assets/icon/icon-dark.png",
        media: "(prefers-color-scheme: dark)",
      },
    ],
    shortcut: ["/assets/icon/shortcut-icon.png"],
    apple: [
      { url: "/assets/icon/apple-icon.png" },
      {
        url: "/assets/icon/apple-icon-x3.png",
        sizes: "180x180",
        type: "image/png",
      },
    ],
    other: [
      {
        rel: "apple-touch-icon-precomposed",
        url: "/assets/icon/apple-touch-icon-precomposed.png",
      },
    ],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
