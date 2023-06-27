import React, { ReactElement } from "react";
import CSS from "csstype";
import "./globals.css";

import { Roboto } from "next/font/google";

import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import { CartContextProvider } from "context/CartContext";
import { AuthContextProvider } from "context/authContext";

const roboto400 = Roboto({
  subsets: ["latin"],
  display: "swap",
  weight: "400",
});

const bodyStyle: CSS.Properties = {
  paddingTop: "85px",
};

export default function RootLayout({ children }: { children: ReactElement }) {
  return (
    <html lang="en">
      <body style={bodyStyle}>
        <AuthContextProvider>
          <Header />
          <CartContextProvider>{children}</CartContextProvider>
          {/* <Footer /> */}
        </AuthContextProvider>
      </body>
    </html>
  );
}
