import Banner from "@/components/Banner";
import Features from "@/components/Features";
import ProductsPreview from "@/components/ProductsPreview";
import Testimonials from "@/components/Testimonials";
import WhyUs from "@/components/WhyUs";
import Image from "next/image";

export default function Home() {
  return (
    <div className="space-y-10">
      <Banner></Banner>
      <ProductsPreview></ProductsPreview>
      <WhyUs></WhyUs>
      <Testimonials></Testimonials>
      <Features></Features>
    </div>
  );
}
