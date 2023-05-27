import S from "./index.module.css";
import RoomsAside from "../rooms-aside";
import RoomsGrid from "../rooms-grid";
import RoomsFilters from "../rooms-filters";

const Rooms = () => {
  return (
    <section className={S.Rooms}>
      <RoomsAside />
      <RoomsGrid />
      <RoomsFilters />
    </section>
  );
};

export default Rooms;
