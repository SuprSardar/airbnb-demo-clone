import { Fragment, useEffect, useRef, useState } from "react";
import type { ReactNode } from "react";

import "./index.css";

import Portal from "../Portal";

import { AE, CN, RE } from "@/utilities";

type Props = {
  children: ReactNode;
  open: boolean;
  onClose: () => void;
};

const Frame = ({ children, open, onClose }: Props) => {
  const modal = useRef<HTMLDivElement | null>(null);
  const [active, setActive] = useState(false);

  useEffect(() => {
    const { current } = modal;

    const transitionEnd = () => setActive(open);
    const keyHandler = (e: KeyboardEvent) => e.key === "Escape" && onClose();
    const clickHandler = (e: MouseEvent) => e.target === current && onClose();

    if (current) {
      AE("transitionend", transitionEnd, current);
      AE("click", clickHandler, current);
    }

    AE("keyup", keyHandler, window);

    if (open) setTimeout(() => setActive(open), 10);

    return () => {
      if (current) {
        RE("transitionend", transitionEnd, current);
        RE("click", clickHandler, current);
      }

      RE("keyup", keyHandler, window);
    };
  }, [open, onClose]);

  return (
    <Fragment>
      {open || active ? (
        <Portal id="frame">
          <div ref={modal} className={CN("Modal", active && open && "Active")}>
            {children}
          </div>
        </Portal>
      ) : null}
    </Fragment>
  );
};

export default Frame;
