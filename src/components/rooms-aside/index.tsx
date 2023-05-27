import { useState } from "react";
import { Link } from "react-router-dom";

import { CN } from "@/utilities";

import S from "./index.module.css";
import Logo from "@/assets/svgs/logo.svg";
import AmazingViews from "@/assets/svgs/amazing-views.svg";
import TineHomes from "@/assets/svgs/tiny-homes.svg";
import ChefsKitchen from "@/assets/svgs/chefs-kitchen.svg";
import Surfing from "@/assets/svgs/surfing.svg";
import Mansions from "@/assets/svgs/mansions.svg";
import Luxe from "@/assets/svgs/luxe.svg";
import Treehouses from "@/assets/svgs/treehouses.svg";
import Camping from "@/assets/svgs/camping.svg";
import Beachfront from "@/assets/svgs/beachfront.svg";
import Farms from "@/assets/svgs/farms.svg";
import Castles from "@/assets/svgs/castles.svg";
import Islands from "@/assets/svgs/islands.svg";
import Vineyards from "@/assets/svgs/vineyards.svg";
import AmazingPools from "@/assets/svgs/amazing-pools.svg";
import Skiing from "@/assets/svgs/skiing.svg";
import Desert from "@/assets/svgs/desert.svg";

const links = [
  { Route: "#", Label: "All Homes", Icon: Logo },
  { Route: "#", Label: "Amazing Views", Icon: AmazingViews },
  { Route: "#", Label: "Tiny Homes", Icon: TineHomes },
  { Route: "#", Label: "Chef's Kitchen", Icon: ChefsKitchen },
  { Route: "#", Label: "Surfing", Icon: Surfing },
  { Route: "#", Label: "Mansions", Icon: Mansions },
  { Route: "#", Label: "Luxe", Icon: Luxe },
  { Route: "#", Label: "Treehouses", Icon: Treehouses },
  { Route: "#", Label: "Camping", Icon: Camping },
  { Route: "#", Label: "Beachfront", Icon: Beachfront },
  { Route: "#", Label: "Farms", Icon: Farms },
  { Route: "#", Label: "Castles", Icon: Castles },
  { Route: "#", Label: "Islands", Icon: Islands },
  { Route: "#", Label: "Vineyards", Icon: Vineyards },
  { Route: "#", Label: "Amazing Pools", Icon: AmazingPools },
  { Route: "#", Label: "Skiing", Icon: Skiing },
  { Route: "#", Label: "Desert", Icon: Desert },
];

const RoomsAside = () => {
  const [activeLinkIndex] = useState(0);

  return (
    <aside className={S.Aside}>
      <ul className={S.Links}>
        {links.map(({ Route, Icon, Label }, index) => (
          <li key={index}>
            <Link to={Route} className={CN(S.Link, activeLinkIndex === index && S.Active)}>
              <img className="h-5 w-5" src={Icon} alt={Label} />
              <span className="truncate">{Label}</span>
            </Link>
          </li>
        ))}
      </ul>
    </aside>
  );
};

export default RoomsAside;
