import { Features } from "@/components/sections/Features";
import { Footer } from "@/components/layout/Footer";
import { Hero } from "@/components/sections/Hero";
import { PopularServices } from "@/components/sections/PopularServices";
import { Testimonials } from "@/components/sections/Testimonials";

function App() {
  return (
    <div className="min-h-screen">
      <Hero />
      <PopularServices />
      <Features />
      <Testimonials />
      <Footer />
    </div>
  );
}

export default App;