import "./globals.css";
import Header from "@/app/components/template/header";
import Footer from "@/app/components/template/Footer";
import Main from "./components/layout/Main";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ja">
      <body>
        <Header />
        <Main>{children}</Main>
        <Footer />
      </body>
    </html>
  );
}
