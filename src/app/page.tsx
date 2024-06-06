import FeaturedCourses from "@/components/FeaturedCourses";
import HeroSection from "@/components/HeroSection";
import Instrutor from "@/components/Instrutor";
import MusicSchoolTestimonialCards from "@/components/TestimonialCards";
import UpcomingWebinar from "@/components/UpcomingWebinar";
import WhyChooseUs from "@/components/WhyChooseUs";


export default function Home() {
  return (
 <main className="min-h-screen bg-black/[0.96] antialiased bg-grid-white/[0.02]">
   
   <HeroSection />
   <FeaturedCourses />
   <WhyChooseUs />
   <MusicSchoolTestimonialCards />
   <UpcomingWebinar />
   <Instrutor />
 </main>
  );
}
