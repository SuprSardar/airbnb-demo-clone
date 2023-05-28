import { useEffect, useRef } from "react";

import { CN } from "@/utilities";
import { appActions, useAppStore } from "@/context/AppContext";

import S from "./index.module.css";

const RoomsFilters = () => {
  const ref = useRef<HTMLElement | null>(null);
  const { appState, appDispatch } = useAppStore();

  useEffect(() => {
    if (appState.showRoomsFilters) document.body.setAttribute("scroll-lock", "");
    return () => document.body.removeAttribute("scroll-lock");
  }, [appState.showRoomsFilters]);

  return (
    <section
      ref={ref}
      className={CN(S.Filters, appState.showRoomsFilters && S.Active)}
      onClick={() => appDispatch({ type: appActions.changeShowRoomsFilters, payload: false })}
    >
      <aside className={S.Off_Canvas} onClick={(e) => e.stopPropagation()}>
        <div className={S.Main}>
          <div className="flex justify-between">
            <h4 className="text-lg font-semibold">Filters</h4>

            <button className="text-sm text-[#c62f65]">Clear All</button>
          </div>

          <hr />

          <div className="flex flex-col">
            <h4 className="text-lg font-semibold">Price range</h4>
            <p className="text-[#717171]">The average nightly price is $133</p>

            <div className="flex mt-5 gap-3">
              <label className="grow">
                <span className="text-xs block mb-2 text-[#717171]">Min Price</span>

                <input className="input py-3 !rounded-xl" type="text" defaultValue={"$0"} />
              </label>

              <label className="grow">
                <span className="text-xs block mb-2 text-[#717171]">Max Price</span>

                <input className="input py-3 !rounded-xl" type="text" defaultValue={"$500+"} />
              </label>
            </div>
          </div>

          <hr />

          <div className="flex flex-col">
            <h4 className="text-lg font-semibold">Type of place</h4>

            <div className="flex flex-col mt-4 gap-5">
              <label className="flex items-start gap-3">
                <div className="shrink-0">
                  <input className="checkbox mt-0.5" type="checkbox" />
                </div>

                <div className="grow">
                  <h5 className="text-base">Entire Place</h5>
                  <span className="text-[#717171]">A place all to yourself.</span>
                </div>
              </label>

              <label className="flex items-start gap-3">
                <div className="shrink-0">
                  <input className="checkbox mt-0.5" type="checkbox" />
                </div>

                <div className="grow">
                  <h5 className="text-base">Private room</h5>
                  <span className="text-[#717171]">Your own room in a home or a hotel, plus some shared common spaces.</span>
                </div>
              </label>

              <label className="flex items-start gap-3">
                <div className="shrink-0">
                  <input className="checkbox mt-0.5" type="checkbox" />
                </div>

                <div className="grow">
                  <h5 className="text-base">Shared room</h5>
                  <span className="text-[#717171]">A sleeping space and common areas that may be shared with others.</span>
                </div>
              </label>
            </div>
          </div>

          <hr />

          <div className="flex flex-col">
            <h4 className="text-lg font-semibold">Rooms, beds, and baths</h4>

            <div className="flex flex-col mt-4 gap-5">
              <div className="space-y-3">
                <span className="block text-[#717171]">Bedrooms</span>

                <div className="flex gap-2">
                  <div className="flex-1 bg-black dark:bg-white text-white dark:text-black py-2 px-3 text-center border rounded-full cursor-pointer">
                    Any
                  </div>
                  <div className="flex-1 py-2 px-3 text-center border rounded-full cursor-pointer">1</div>
                  <div className="flex-1 py-2 px-3 text-center border rounded-full cursor-pointer">2</div>
                  <div className="flex-1 py-2 px-3 text-center border rounded-full cursor-pointer">3</div>
                  <div className="flex-1 py-2 px-3 text-center border rounded-full cursor-pointer">4</div>
                  <div className="flex-1 py-2 px-3 text-center border rounded-full cursor-pointer">5+</div>
                </div>
              </div>

              <div className="space-y-3">
                <span className="block text-[#717171]">Beds</span>

                <div className="flex gap-2">
                  <div className="flex-1 bg-black dark:bg-white text-white dark:text-black py-2 px-3 text-center border rounded-full cursor-pointer">
                    Any
                  </div>
                  <div className="flex-1 py-2 px-3 text-center border rounded-full cursor-pointer">1</div>
                  <div className="flex-1 py-2 px-3 text-center border rounded-full cursor-pointer">2</div>
                  <div className="flex-1 py-2 px-3 text-center border rounded-full cursor-pointer">3</div>
                  <div className="flex-1 py-2 px-3 text-center border rounded-full cursor-pointer">4</div>
                  <div className="flex-1 py-2 px-3 text-center border rounded-full cursor-pointer">5+</div>
                </div>
              </div>

              <div className="space-y-3">
                <span className="block text-[#717171]">Bathrooms</span>

                <div className="flex gap-2">
                  <div className="flex-1 bg-black dark:bg-white text-white dark:text-black py-2 px-3 text-center border rounded-full cursor-pointer">
                    Any
                  </div>
                  <div className="flex-1 py-2 px-3 text-center border rounded-full cursor-pointer">1</div>
                  <div className="flex-1 py-2 px-3 text-center border rounded-full cursor-pointer">2</div>
                  <div className="flex-1 py-2 px-3 text-center border rounded-full cursor-pointer">3</div>
                  <div className="flex-1 py-2 px-3 text-center border rounded-full cursor-pointer">4</div>
                  <div className="flex-1 py-2 px-3 text-center border rounded-full cursor-pointer">5+</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <footer className={S.Footer}>
          <button className="button rounded-xl w-full py-3.5 bg-[#c62f65] text-white">Show 836 Homes</button>
        </footer>
      </aside>
    </section>
  );
};

export default RoomsFilters;
