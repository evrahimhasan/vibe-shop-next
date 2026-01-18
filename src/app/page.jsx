import Banner from "@/components/Banner";
import Testimonials from "@/components/Testimonials";
import WhyUs from "@/components/WhyUs";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <Banner></Banner>
      <WhyUs></WhyUs>
      <Testimonials></Testimonials>
    </div>
  );
}
