import Topbar from "@/components/templates/IT/TopBar/TopBar";
import Navbar from "@/components/templates/IT/Navbar/Navbar";
import Header from "@/components/templates/IT/Header/Header";
import InfoUnderHeader from "@/components/templates/IT/InfoUnderHeader/InfoUnderHeader";
import About from "@/components/templates/IT/About/About";
import Services from "@/components/templates/IT/Services/Services";
import TrustedCompanies from "@/components/templates/IT/TrustedCompanies/TrustedCompanies";
import Experts from "@/components/templates/IT/Experts/Experts";
import CtaContact from "@/components/templates/IT/CtaContact/CtaContact";
import LatestNews from "@/components/templates/IT/LatestNews/LatestNews";
import Footer from "@/components/templates/IT/Footer/Footer";

export default function Home() {
  return (
    <main>

      <Topbar />
      <Navbar />
      <Header />
      <InfoUnderHeader />
      <About />
      <Services />
      <TrustedCompanies />
      <Experts />
      <CtaContact />
      <LatestNews />
      <Footer />
      
    </main>
  );
}
