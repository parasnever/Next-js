import FeaturedCourses from "@/components/FeaturedCourses";
import HeroSection from "@/components/HeroSection";
import MusicSchoolTestimonialCards from "@/components/TestimonialCards";
import WhyChooseUs from "@/components/WhyChooseUs";


export default function Home() {
  return (
 <main className="min-h-screen bg-black/[0.96] antialiased bg-grid-white/[0.02]">
   
   <HeroSection />
   <FeaturedCourses />
   <WhyChooseUs />
   <MusicSchoolTestimonialCards />
 </main>
  );
}
