import Image from "next/image";
import HeroSection from "../components/HeroSection";
import FeaturedCourses from "../components/FeaturedCourses";
import WhyChooseUs from "@/components/WhyChooseUs";
import MusicSchoolTestimonials from "@/components/TestimonialCards";

export default function Home() {
  return (
    <main>
      <HeroSection />
      <FeaturedCourses />
      <WhyChooseUs />
      <MusicSchoolTestimonials />
      <h1 >
      </h1>
    </main>

  );
}
