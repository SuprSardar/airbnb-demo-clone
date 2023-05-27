import { useEffect, useMemo } from "react";
import type { ReactNode } from "react";
import { createPortal } from "react-dom";

import { CE } from "@/utilities";

type Props = {
  children: ReactNode;
  parent?: HTMLElement;
  id?: string;
};

const Portal = ({ children, parent, id }: Props) => {
  const el = useMemo(() => CE("div"), []);

  useEffect(() => {
    if (id) el.id = id;

    const target = parent ?? document.body;
    target.appendChild(el);

    return () => void target.removeChild(el);
  }, [el, parent, id]);

  return createPortal(children, el);
};

export default Portal;
