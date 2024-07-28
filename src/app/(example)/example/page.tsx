import Header from "@/components/templates/example/Header";
import About from "@/components/templates/example/About";
import Services from "@/components/templates/example/Services";
import Cta from "@/components/templates/example/Cta";
import MoreInfo from "@/components/templates/example/MoreInfo";
import Contact from "@/components/templates/example/Contact";
import Testimentals from "@/components/templates/example/Testimentals";

export default function Example() {
  const containerPagging = "py-24";

  return (
    <div className="pt-20">
      <Header />
      <About className={containerPagging} />
      <Services className={containerPagging} />
      <Cta />
      <MoreInfo />
      <Testimentals />
      <Contact className={containerPagging} />
    </div>
  );
}