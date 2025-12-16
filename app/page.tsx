import SearchSection from "./components/home/SearchSection";
import HeyatHadiseleri from "./components/home/HeyatHadiseleri";
import InfoSection  from "./components/home/InfoSection"
import NewsSection from "./components/home/NewsSection";
const homepage = () => {
  return (
    <div>
      <SearchSection />
      <HeyatHadiseleri/>
      <InfoSection/>
      <NewsSection/>
    </div>
  );
};

export default homepage;
