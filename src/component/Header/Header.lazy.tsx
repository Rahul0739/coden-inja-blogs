import { lazy, Suspense } from "react";
import Loader from "../../common/Loader";

const LazyHome = lazy(() => import("./Header"));

const HeaderLazy = (props: any) => (
  <Suspense fallback={<Loader />}>
    <LazyHome {...props} />
  </Suspense>
);

export default HeaderLazy;
