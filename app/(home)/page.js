import LatestResearch from "@/components/latestresearch/LatestResearch";
import { About_Home } from "@/components/layouts/about/About_Home";
import CampusLife from "@/components/layouts/gallery/CampusLife";
import Hero from "@/components/layouts/hero/Hero";
import LatestNews from "@/components/layouts/news/LatestNews";
import SSTUSTats from "@/components/layouts/stats/SSTUSTats";
import MainSilder from "@/components/layouts/hero/MainSilder";

export default function Home() {
  return (
    <>
      <MainSilder />
      <Hero />
      {/* <div className="relative h-screen mb-96">
        <div className="absolute bottom-[-100px] tp-[530px] w-full">
          <MessageFromVC />
        </div>
      </div> */}
      {/* <LatestNotice /> */}
      <About_Home />
      <LatestNews />
      <div
        className="md:flex items-center bg-cover bg-center relative py-10"
        style={{
          backgroundImage: "url('/lrbg99.png')",
          backgroundSize: "fill",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <LatestResearch viewall={true} />
      </div>
      <div
        className="min-h-screen py-16 bg-cover bg-center"
        style={{
          backgroundImage: "url('lrbg2.png')",
        }}
      >
        <SSTUSTats />
      </div>
      <CampusLife />
    </>
  );
}
