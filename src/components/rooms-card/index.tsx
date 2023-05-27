import { Fragment, useState } from "react";

import S from "./index.module.css";
import Frame from "../frame";
import RoomModal from "../modals/room-modal";

import Star from "@/assets/svgs/star.svg";
import Heart from "@/assets/svgs/heart.svg";

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

const RoomCard = ({ room }: Props) => {
  const [openModal, setOpenModal] = useState(false);

  return (
    <Fragment>
      <article className={S.Room} onClick={() => setOpenModal(true)}>
        <div className={S.Preview}>
          <img className="object-cover" src={room.Image} alt="room" loading="lazy" />
        </div>

        <div className={S.Info}>
          <div className={S.Top}>
            <h3 className={S.Title}>{room.Title}</h3>
            <address className={S.Address}>{room.Address}</address>
          </div>

          <div className={S.Bottom}>
            <div className="flex gap-1">
              <span className={S.Price}>{room.Price}</span>
              <span className={S.Duration}>/ {room.Duration}</span>
            </div>

            <div className="flex gap-2 items-center">
              <img className="h-4 w-4" src={Star} alt="rating" />
              <span>{room.Rating}</span>
            </div>
          </div>
        </div>

        <div className={S.Overlay}>
          <button className={S.Like} aria-label="like">
            <img className="h-4 w-4" src={Heart} alt="like" />
          </button>
        </div>
      </article>

      <Frame open={openModal} onClose={() => setOpenModal(false)}>
        <RoomModal room={room} />
      </Frame>
    </Fragment>
  );
};

export default RoomCard;
