import { Link } from "react-router-dom";

import { CN } from "@/utilities";

import S from "./index.module.css";
import Avatar from "@/assets/images/avatar.png";
import LogoFull from "@/assets/svgs/logo-full.svg";

const AppHeader = () => {
  return (
    <header className={S.Header}>
      <div className="flex items-center justify-between h-full w-full">
        <div className={S.Logo}>
          <Link to={"/"}>
            <img className="object-cover" src={LogoFull} alt="logo" />
          </Link>
        </div>

        <nav className={S.Nav}>
          <Link to={"/stays"} className={CN(S.Link, S.Active)}>
            Stays
          </Link>
          <Link to={"/experiences"} className={S.Link}>
            Experiences
          </Link>
          <Link to={"/online-experiences"} className={S.Link}>
            Online Experiences
          </Link>
        </nav>

        <div className={S.User}>
          <button className={S.Menu_Button} aria-label="context-menu">
            <img className="rounded-full" src={Avatar} alt="user" />

            <svg
              className="h-6 w-6 stroke-[#717171] stroke-2"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <line x1="3" y1="6" x2="21" y2="6"></line>
              <line x1="3" y1="12" x2="21" y2="12"></line>
              <line x1="3" y1="18" x2="21" y2="18"></line>
            </svg>
          </button>
        </div>
      </div>
    </header>
  );
};

export default AppHeader;
