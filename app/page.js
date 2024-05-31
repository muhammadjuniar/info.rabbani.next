"use client"
import MainBanner from "./components/banner/banner";
import Brands from "./components/brands/brands";
import Content from "./components/content/content";
import Footer from "./components/footer/footer";
import Navigation from "./components/navigation/navigation";

export default function Home() {
  return (
    <div>
      <Navigation />
      <MainBanner />
      <Brands />
      <Content />
      <Footer />
    </div>
  );
}
