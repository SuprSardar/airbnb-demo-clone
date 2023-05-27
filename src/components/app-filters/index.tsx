import { CN } from "@/utilities";
import { appActions, useAppStore } from "@/context/AppContext";

import S from "./index.module.css";
import ViewTile from "@/assets/svgs/view-tile.svg";
import ViewMap from "@/assets/svgs/view-map.svg";
import CarrotDown from "@/assets/svgs/carrot-down.svg";
import Calendar from "@/assets/svgs/calender.svg";
import Minus from "@/assets/svgs/minus.svg";
import Plus from "@/assets/svgs/plus.svg";
import Filter from "@/assets/svgs/filter.svg";

const AppFilters = () => {
  const { appState, appDispatch } = useAppStore();

  return (
    <section className={S.Filters}>
      <div className="flex items-center justify-between h-full w-full">
        <div className={S.Views}>
          <button className={CN(S.View, S.Active)} aria-label="view-tile">
            <img className="h-5 w-5" src={ViewTile} alt="view-tile" />
          </button>

          <button className={S.View} aria-label="view-map">
            <img className="h-5 w-5" src={ViewMap} alt="view-map" />
          </button>
        </div>

        <div className={S.Specifications}>
          <button className={S.Specification} aria-label="location">
            <span className="truncate  min-[1440px]:w-[188px]">Anywhere</span>
            <img className="h-5 w-5" src={CarrotDown} alt="carrot-down" />
          </button>

          <button className={CN(S.Specification, "gap-3")} aria-label="date">
            <img className="h-5 w-5" src={Calendar} alt="carrot-down" />
            <span className="truncate">June 14 - 21</span>
          </button>

          <div className={CN(S.Specification, "gap-4 !px-2")} aria-label="guest">
            <button className="grid place-items-center bg-white h-8 w-8 rounded-lg" aria-label="minus">
              <img className="h-4 w-4" src={Minus} alt="carrot-down" />
            </button>

            <span className="truncate">4 guests</span>

            <button className="grid place-items-center bg-white h-8 w-8 rounded-lg" aria-label="plus">
              <img className="h-4 w-4" src={Plus} alt="carrot-down" />
            </button>
          </div>
        </div>

        <div className={S.More}>
          <button
            className={S.Filter}
            aria-label="apply more filters"
            onClick={() => appDispatch({ type: appActions.changeShowRoomsFilters, payload: !appState.showRoomsFilters })}
          >
            <img className="h-5 w-5" src={Filter} alt="filter" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default AppFilters;
