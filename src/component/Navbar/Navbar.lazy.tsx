import { lazy, Suspense } from "react";

const LazyHome = lazy(() => import("./Navbar"));

const NavbarLazy = (props: any) => (
  <Suspense fallback={"Loading"}>
    <LazyHome {...props} />
  </Suspense>
);

export default NavbarLazy;
