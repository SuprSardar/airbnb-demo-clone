import S from "./index.module.css";
import RoomCard from "../rooms-card";

import Room_1 from "@/assets/images/room_1.webp";
import Room_2 from "@/assets/images/room_2.webp";
import Room_3 from "@/assets/images/room_3.webp";
import Room_4 from "@/assets/images/room_4.webp";
import Room_5 from "@/assets/images/room_5.webp";
import Room_6 from "@/assets/images/room_6.webp";
import Room_7 from "@/assets/images/room_7.webp";
import Room_8 from "@/assets/images/room_8.webp";
import Room_9 from "@/assets/images/room_9.webp";
import Room_10 from "@/assets/images/room_10.webp";
import Room_11 from "@/assets/images/room_11.webp";

const rooms = [
  {
    Title: "Whitefish Estate",
    Address: "Whitefish, Montana, United States",
    Price: "$10,000",
    Duration: "night",
    Rating: "5.0",
    Image: Room_1,
  },
  {
    Title: "Luxury stay in Weston, Saint James, Barbados",
    Address: "Weston, Saint James, Barbados",
    Price: "$1,500",
    Duration: "night",
    Rating: "5.0",
    Image: Room_2,
  },
  {
    Title: "Numero 22 - Lake Como - Design Living & Lake View",
    Address: "Laglio, Lombardia, Italy",
    Price: "$359",
    Duration: "night",
    Rating: "4.99",
    Image: Room_3,
  },
  {
    Title: "7,500 sq ft Private Beachfront Estate",
    Address: "Dubai, United Arab Emirates",
    Price: "$2,478",
    Duration: "night",
    Rating: "4.73",
    Image: Room_4,
  },
  {
    Title: "Bohemian & Spacious / Private Pool and Garden",
    Address: "Tulum, Quintana Roo, Mexico",
    Price: "$199",
    Duration: "night",
    Rating: "4.97",
    Image: Room_5,
  },
  {
    Title: "Designer A-Frame Cabin in the Trees",
    Address: "Lake Arrowhead, California, United States",
    Price: "$225",
    Duration: "night",
    Rating: "4.93",
    Image: Room_6,
  },
  {
    Title: "Fully Renovated 2 BR on River w/ Pool - Walk to To",
    Address: "Aspen, Colorado, United States",
    Price: "$546",
    Duration: "night",
    Rating: "5.0",
    Image: Room_7,
  },
  {
    Title: "Magnolia's Hillcrest Cottage",
    Address: "Waco, Texas, United States",
    Price: "$500",
    Duration: "night",
    Rating: "4.97",
    Image: Room_8,
  },
  {
    Title: "Unique Architecture Cave House by Cycladica",
    Address: "Oia, South Aegean, Greece",
    Price: "$930",
    Duration: "night",
    Rating: "4.95",
    Image: Room_9,
  },
  {
    Title: "ATELIER ArtVillas Costa Rica",
    Address: "Uvita, Osa, Puntaneras, Costa Rica",
    Price: "$830",
    Duration: "night",
    Rating: "4.80",
    Image: Room_10,
  },
  {
    Title: "Mountainside Luxury Cabin with Batulao View",
    Address: "Calaca, Calabarzon, Philippines",
    Price: "$483",
    Duration: "night",
    Rating: "4.87",
    Image: Room_11,
  },
];

const RoomsGrid = () => {
  return (
    <main className={S.Grid}>
      <section className={S.Layout}>
        {rooms.map((room, index) => (
          <RoomCard key={index} room={room} />
        ))}
      </section>
    </main>
  );
};

export default RoomsGrid;
