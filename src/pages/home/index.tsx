import S from "./index.module.css";
import AppHeader from "@/components/app-header";
import AppFilters from "@/components/app-filters";
import Rooms from "@/components/rooms";

const Home = () => {
  return (
    <div className={S.Home}>
      <AppHeader />
      <AppFilters />
      <Rooms />
    </div>
  );
};

export default Home;
