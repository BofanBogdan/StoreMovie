import "./style.scss";
import HeroBanner from "./heroBanner/HeroBanner";
import Trending from "./trending/trending";
import Popular from "./popular/Popular";
import TopRated from "./topRated/TopRated";
import Coming from "./coming this week/Coming";
const Home = () => {
  return (
    <div className="homePage">
      <HeroBanner />

      <Trending />
      <Popular />
      <TopRated />
      <Coming />
      <div style={{ height: 20 }}></div>
    </div>
  );
};

export default Home;
