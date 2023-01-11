import { lazy, Suspense } from "react";
import Loader from "../../common/Loader";

const LazyHome = lazy(() => import("./Navbar"));

const NavbarLazy = (props: any) => (
  <Suspense fallback={<Loader />}>
    <LazyHome {...props} />
  </Suspense>
);

export default NavbarLazy;
