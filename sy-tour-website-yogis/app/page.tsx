import Navigation from "@/components/navigation";
import Hero from "@/components/hero";
import About from "@/components/about";
import Routes from "@/components/routes";
import Culmination from "@/components/culmination";
import Registration from "@/components/registration";
import TourDetails from "@/components/tour-details";
import FAQ from "@/components/faq";
import Contact from "@/components/contact";
import Footer from "@/components/footer";

export default function Home() {
  return (
    <main>
      <Navigation />
      <Hero />
      <About />
      <Routes />
      <Culmination />
      <Registration />
      <TourDetails />
      <FAQ />
      <Contact />
      <Footer />
    </main>
  );
}
