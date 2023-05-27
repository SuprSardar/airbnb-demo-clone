import { Fragment, Suspense } from "react";
import { Navigate, Route, Routes } from "react-router-dom";

import { Lazy } from "@/utilities";

import Logo from "@/assets/svgs/logo.svg";

const pages = [{ Link: "/", View: Lazy(import("@/pages/home")) }];

const PagesRouter = () => {
  return (
    <Fragment>
      <Suspense fallback={<Fallback />}>
        <Routes>
          <Route path="*" element={<Navigate to={""} />} />

          {pages.map(({ Link, View }, index) => (
            <Route key={index} path={Link} element={<View />} />
          ))}
        </Routes>
      </Suspense>
    </Fragment>
  );
};

const Fallback = () => (
  <div className="h-screen w-screen grid place-items-center">
    <div className="h-12 w-12 animate-bounce fill-[#121212]">
      <img src={Logo} alt="logo-small" />
    </div>
  </div>
);

export default PagesRouter;
