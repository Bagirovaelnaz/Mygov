import SearchSection from "./components/home/SearchSection";
import HeyatHadiseleri from "./components/home/HeyatHadiseleri";
import InfoSection from "./components/home/InfoSection";
import NewsSection from "./components/home/NewsSection";
import CommentSection from "./components/home/CommentSection";
// import { redirect } from "next/navigation";
const Homepage = () => {
    // redirect("/az");
  return (
    <>
      <SearchSection />
      <HeyatHadiseleri/>
      <InfoSection/>
      <NewsSection/>
      <CommentSection/>
    </>
  );
};

export default Homepage;
