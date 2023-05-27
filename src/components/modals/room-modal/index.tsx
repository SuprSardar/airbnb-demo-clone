import S from "./index.module.css";

import Info from "@/assets/svgs/info.svg";
import Star from "@/assets/svgs/star.svg";
import Badge from "@/assets/svgs/badge.svg";
import Heart from "@/assets/svgs/heart.svg";
import Diamond from "@/assets/svgs/diamond.svg";
import Calender from "@/assets/svgs/calender.svg";
import CarrotDown from "@/assets/svgs/carrot-down.svg";
import Guests from "@/assets/svgs/guests.svg";
import Bedrooms from "@/assets/svgs/bedrooms.svg";
import Beds from "@/assets/svgs/beds.svg";
import Baths from "@/assets/svgs/baths.svg";
import Workspace from "@/assets/svgs/workspace.svg";
import Checkin from "@/assets/svgs/checkin.svg";
import Cancellation from "@/assets/svgs/cancellation.svg";
import User_1 from "@/assets/images/user_1.webp";

type Props = {
  room: {
    Title: string;
    Address: string;
    Price: string;
    Duration: string;
    Rating: string;
    Image: string;
  };
};

const RoomModal = ({ room }: Props) => {
  return (
    <section className={S.Modal}>
      <section className={S.Gallery}>
        <div className={S.MainImage}>
          <img src={room.Image} alt="main image" />

          <div className="absolute bottom-4 left-4">
            <button className="button bg-white rounded-xl">View All Photos</button>
          </div>
        </div>

        <div className="flex flex-col gap-4 h-full grow">
          <img className="grow h-0" src={room.Image} alt="" />
          <img className="grow h-0" src={room.Image} alt="" />
        </div>
      </section>

      <section className={S.Main}>
        <div className={S.Details}>
          <div className="space-y-8">
            <div className="space-y-3">
              <button className="button border px-3 py-2 flex gap-2 rounded-xl">
                <img className="h-5 w-5" src={Badge} alt="" />
                <span>Superhost</span>
              </button>

              <div className="flex gap-2">
                <h2 className="mr-auto text-3xl font-medium">Whitefish Estate</h2>

                <button className="grid place-items-center h-9 w-9 bg-[#1111110a] rounded-full">
                  <img className="h-4 w-4" src={Heart} alt="like" />
                </button>
                <button className="grid place-items-center h-9 w-9 bg-[#1111110a] rounded-full">
                  <img className="h-4 w-4" src={Heart} alt="like" />
                </button>
              </div>

              <address className="text-[#717171] not-italic text-base">Whitefish, Montana, United States</address>
            </div>

            <div className="flex gap-10">
              <div className="flex gap-3 items-center">
                <img className="h-5 w-5" src={Guests} alt="" />
                <span>16+ guests</span>
              </div>
              <div className="flex gap-3 items-center">
                <img className="h-5 w-5" src={Bedrooms} alt="" />
                <span>8 bedrooms</span>
              </div>
              <div className="flex gap-3 items-center">
                <img className="h-5 w-5" src={Beds} alt="" />
                <span>8 beds</span>
              </div>
              <div className="flex gap-3 items-center">
                <img className="h-5 w-5" src={Baths} alt="" />
                <span>8 baths</span>
              </div>
            </div>
          </div>

          <hr />

          <div className="flex gap-8">
            <div className="flex-1 space-y-4">
              <img className="h-14 w-14" src={Workspace} alt="" />

              <div className="space-y-2">
                <h5 className="text-base font-medium">Dedicated workspace</h5>
                <p className="text-[#717171]">A private room with wifi that's well-suited for working.</p>
              </div>
            </div>

            <div className="flex-1 space-y-4">
              <img className="h-14 w-14" src={Checkin} alt="" />

              <div className="space-y-2">
                <h5 className="text-base font-medium">Self check-in</h5>
                <p className="text-[#717171]">Check yourself in with the keypad.</p>
              </div>
            </div>

            <div className="flex-1 space-y-4">
              <img className="h-14 w-14" src={Cancellation} alt="" />

              <div className="space-y-2">
                <h5 className="text-base font-medium">Free cancellation before Jul 25</h5>
                <p className="text-[#717171]">A private room with wifi that's well-suited for working.</p>
              </div>
            </div>
          </div>

          <hr />

          <div className="space-y-8">
            <div className="space-y-2">
              <h4 className="text-lg font-semibold">About this space</h4>
              <p className="text-[#717171]">
                Enjoy a quiet getaway in this charming cottage renovated, designed, and owned by Chip and Joanna Gaines. Originally the
                carriage house for Hillcrest Estate, this home includes one bedroom, one bath, an office nook and a private back patio. This
                makes it the perfect getaway for a party of two, or if you're stopping through town and need a restful place to retreat.
              </p>
            </div>

            <div className="space-y-2">
              <h4 className="text-base font-semibold">The space</h4>
              <p className="text-[#717171]">
                An open living, dining, and kitchen area provide ample room in this cozy cottage. French double doors lead you out to the
                back patio to enjoy your own private outdoor space. A dedicated, covered parking spot for your use. The parking lot is
                shared with Hillcrest Estate guests.
              </p>
            </div>

            <button className="font-semibold text-[#c62f65]">Read more</button>
          </div>

          <hr />

          <div className="space-y-8">
            <h4 className="text-lg font-semibold">What this place offers</h4>

            <div className="grid grid-cols-3 gap-8">
              <div className="flex gap-3 items-center">
                <img className="h-5 w-5" src={Guests} alt="" />
                <span>Kitchen</span>
              </div>
              <div className="flex gap-3 items-center">
                <img className="h-5 w-5" src={Guests} alt="" />
                <span>Private patio or balcony</span>
              </div>
              <div className="flex gap-3 items-center">
                <img className="h-5 w-5" src={Guests} alt="" />
                <span>Centrail air conditioning</span>
              </div>
              <div className="flex gap-3 items-center">
                <img className="h-5 w-5" src={Bedrooms} alt="" />
                <span>Dedicated workspaces</span>
              </div>
              <div className="flex gap-3 items-center">
                <img className="h-5 w-5" src={Bedrooms} alt="" />
                <span>Wifi</span>
              </div>
              <div className="flex gap-3 items-center">
                <img className="h-5 w-5" src={Beds} alt="" />
                <span>Heating</span>
              </div>
              <div className="flex gap-3 items-center">
                <img className="h-5 w-5" src={Beds} alt="" />
                <span>55” 4k TV</span>
              </div>
              <div className="flex gap-3 items-center">
                <img className="h-5 w-5" src={Beds} alt="" />
                <span>1 parking space</span>
              </div>
              <div className="flex gap-3 items-center">
                <img className="h-5 w-5" src={Bedrooms} alt="" />
                <span>Security cameras</span>
              </div>
              <div className="flex gap-3 items-center">
                <img className="h-5 w-5" src={Baths} alt="" />
                <span>Free dryer - in unit</span>
              </div>
              <div className="flex gap-3 items-center">
                <img className="h-5 w-5" src={Baths} alt="" />
                <span>Free washer - in unit</span>
              </div>
              <div className="flex gap-3 items-center">
                <img className="h-5 w-5" src={Baths} alt="" />
                <span>Ceiling fans</span>
              </div>
            </div>

            <button className="font-semibold text-[#c62f65]">View more</button>
          </div>

          <hr />

          <div className="space-y-8">
            <div className="flex">
              <h4 className="text-lg font-semibold mr-auto">Reviews</h4>

              <div className="flex items-center gap-2">
                <img className="h-4 w-4" src={Star} alt="" />

                <span>5.0</span>

                <span>—</span>

                <span>124 reviews</span>
              </div>
            </div>

            <div className="space-y-4">
              <div className="border p-6 rounded-3xl space-y-6">
                <div className="flex justify-between">
                  <span className="shrink-0 max-[1440px]:w-[160px]">Cleanliness</span>

                  <div className="flex items-center gap-2 max-[1440px]:grow">
                    <div className="h-2 min-[1440px]:w-[380px] w-full bg-[#1111111a] rounded-full">
                      <div className="h-full bg-[#c62f65] rounded-full" style={{ width: `${(5 / 5) * 100}%` }} />
                    </div>
                    <span>5.0</span>
                  </div>
                </div>

                <div className="flex justify-between">
                  <span className="shrink-0 max-[1440px]:w-[160px]">Accuracy</span>

                  <div className="flex items-center gap-2 max-[1440px]:grow">
                    <div className="h-2 min-[1440px]:w-[380px] w-full bg-[#1111111a] rounded-full">
                      <div className="h-full bg-[#c62f65] rounded-full" style={{ width: `${(4.9 / 5) * 100}%` }} />
                    </div>
                    <span>4.9</span>
                  </div>
                </div>

                <div className="flex justify-between">
                  <span className="shrink-0 max-[1440px]:w-[160px]">Communication</span>

                  <div className="flex items-center gap-2 max-[1440px]:grow">
                    <div className="h-2 min-[1440px]:w-[380px] w-full bg-[#1111111a] rounded-full">
                      <div className="h-full bg-[#c62f65] rounded-full" style={{ width: `${(4.8 / 5) * 100}%` }} />
                    </div>
                    <span>4.8</span>
                  </div>
                </div>

                <div className="flex justify-between">
                  <span className="shrink-0 max-[1440px]:w-[160px]">Location</span>

                  <div className="flex items-center gap-2 max-[1440px]:grow">
                    <div className="h-2 min-[1440px]:w-[380px] w-full bg-[#1111111a] rounded-full">
                      <div className="h-full bg-[#c62f65] rounded-full" style={{ width: `${(4.8 / 5) * 100}%` }} />
                    </div>
                    <span>4.8</span>
                  </div>
                </div>

                <div className="flex justify-between">
                  <span className="shrink-0 max-[1440px]:w-[160px]">Check-in</span>

                  <div className="flex items-center gap-2 max-[1440px]:grow">
                    <div className="h-2 min-[1440px]:w-[380px] w-full bg-[#1111111a] rounded-full">
                      <div className="h-full bg-[#c62f65] rounded-full" style={{ width: `${(4.9 / 5) * 100}%` }} />
                    </div>
                    <span>4.9</span>
                  </div>
                </div>

                <div className="flex justify-between">
                  <span className="shrink-0 max-[1440px]:w-[160px]">Value</span>

                  <div className="flex items-center gap-2 max-[1440px]:grow">
                    <div className="h-2 min-[1440px]:w-[380px] w-full bg-[#1111111a] rounded-full">
                      <div className="h-full bg-[#c62f65] rounded-full" style={{ width: `${(4.2 / 5) * 100}%` }} />
                    </div>
                    <span>4.2</span>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="border p-6 rounded-3xl space-y-6">
                  <div className="flex items-center gap-4">
                    <img className="h-14 w-14 object-cover rounded-full" src={User_1} alt="" />

                    <div className="space-y-1">
                      <h5 className="text-base font-medium">Steve</h5>
                      <span className="text-xs text-[#717171]">March 2023</span>
                    </div>
                  </div>

                  <p className="text-[#111111]">
                    Abbe's place was so wonderful and just what I needed. It was the perfect escape with a great wood stove, beautiful
                    views, horses, and nearby skiing. I'm so grateful.
                  </p>
                </div>

                <div className="border p-6 rounded-3xl space-y-6">
                  <div className="flex items-center gap-4">
                    <img className="h-14 w-14 object-cover rounded-full" src={User_1} alt="" />

                    <div className="space-y-1">
                      <h5 className="text-base font-medium">Steve</h5>
                      <span className="text-xs text-[#717171]">March 2023</span>
                    </div>
                  </div>

                  <p className="text-[#111111]">
                    Abbe's place was so wonderful and just what I needed. It was the perfect escape with a great wood stove, beautiful
                    views, horses, and nearby skiing. I'm so grateful.
                  </p>
                </div>

                <div className="border p-6 rounded-3xl space-y-6">
                  <div className="flex items-center gap-4">
                    <img className="h-14 w-14 object-cover rounded-full" src={User_1} alt="" />

                    <div className="space-y-1">
                      <h5 className="text-base font-medium">Steve</h5>
                      <span className="text-xs text-[#717171]">March 2023</span>
                    </div>
                  </div>

                  <p className="text-[#111111]">
                    Abbe's place was so wonderful and just what I needed. It was the perfect escape with a great wood stove, beautiful
                    views, horses, and nearby skiing. I'm so grateful.
                  </p>
                </div>

                <div className="border p-6 rounded-3xl space-y-6">
                  <div className="flex items-center gap-4">
                    <img className="h-14 w-14 object-cover rounded-full" src={User_1} alt="" />

                    <div className="space-y-1">
                      <h5 className="text-base font-medium">Steve</h5>
                      <span className="text-xs text-[#717171]">March 2023</span>
                    </div>
                  </div>

                  <p className="text-[#111111]">
                    Abbe's place was so wonderful and just what I needed. It was the perfect escape with a great wood stove, beautiful
                    views, horses, and nearby skiing. I'm so grateful.
                  </p>
                </div>
              </div>
            </div>

            <button className="font-semibold text-[#c62f65]">View more</button>
          </div>

          <hr />

          <div className="space-y-8">
            <h4 className="text-lg font-semibold">Where you'll be</h4>

            <div className="h-[400px] rounded-3xl overflow-hidden">
              <iframe
                src="https://maps.google.com/maps?q=48.410967,-114.331586&amp;z=13&amp;output=embed"
                style={{ height: "100%", width: "100%", border: "0px" }}
              />
            </div>

            <div className="space-y-4">
              <h5 className="text-base font-medium">Whitefish, Montana, United States</h5>
              <p className="text-[#717171]">
                The property, given its close proximity to the refreshing hillside town of Tagaytay and clear blue beaches of Nasugbu,
                provides a quick escape from the hustle and bustle of city life.
              </p>
            </div>

            <button className="font-semibold text-[#c62f65]">View more</button>
          </div>
        </div>

        <div className={S.Finalizer}>
          <div className="sticky top-0 space-y-4 mt-8">
            <div className={S.Bill_Card}>
              <div className="space-y-6">
                <div className="flex gap-2 items-center">
                  <h2 className="text-2xl font-semibold">$10,000</h2>

                  <span>/ night</span>

                  <img className="h-4 w-4 ml-auto" src={Star} alt="" />

                  <span>5.0</span>
                </div>

                <div className="flex gap-3">
                  <label className="grow">
                    <span className="text-xs block mb-2 text-[#717171]">Check In</span>

                    <button className="flex items-center gap-3 w-full py-3 px-4 bg-white rounded-xl" aria-label="date">
                      <img className="h-5 w-5" src={Calender} alt="" />
                      <span className="truncate">6/14/2023</span>
                    </button>
                  </label>
                  <label className="grow">
                    <span className="text-xs block mb-2 text-[#717171]">Check Out</span>

                    <button className="flex items-center gap-3 w-full py-3 px-4 bg-white rounded-xl" aria-label="date">
                      <img className="h-5 w-5" src={Calender} alt="" />
                      <span className="truncate">6/21/2023</span>
                    </button>
                  </label>
                </div>

                <label className="block">
                  <span className="text-xs block mb-2 text-[#717171]">Guests</span>

                  <button className="flex items-center gap-3 w-full py-3 px-4 bg-white rounded-xl" aria-label="date">
                    <span className="truncate">1 guest</span>
                    <img className="h-5 w-5 ml-auto" src={CarrotDown} alt="" />
                  </button>
                </label>

                <hr />

                <div className="space-y-3">
                  <div className="flex gap-1 items-center">
                    <span>6 nights</span>
                    <img className="h-3 w-3" src={Info} alt="" />
                    <span className="ml-auto text-[#111111]">$2,199</span>
                  </div>
                  <div className="flex gap-1 items-center">
                    <span>Cleaning fee</span>
                    <img className="h-3 w-3" src={Info} alt="" />
                    <span className="ml-auto text-[#111111]">$85</span>
                  </div>
                  <div className="flex gap-1 items-center">
                    <span>Airbnb service fee</span>
                    <img className="h-3 w-3" src={Info} alt="" />
                    <span className="ml-auto text-[#111111]">$322</span>
                  </div>
                </div>

                <hr />

                <div className="space-y-1">
                  <div className="flex">
                    <h5 className="text-base font-semibold">Total</h5>
                    <span className="ml-auto text-[#111111]">$2,606</span>
                  </div>
                </div>

                <button className="button py-3.5 bg-[#c62f65] text-white w-full rounded-xl">Reserve</button>
              </div>
            </div>

            <div className={S.Info_Card}>
              <div className="flex gap-6">
                <img className="h-10 w-10" src={Diamond} alt="" />

                <div className="space-y-1">
                  <h4 className="text-base font-semibold">This is a rare find</h4>
                  <p className="text-[#717171]">Kathryn's place on Airbnb is usually fully booked.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </section>
  );
};

export default RoomModal;
