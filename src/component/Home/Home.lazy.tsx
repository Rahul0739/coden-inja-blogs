import { lazy, Suspense } from "react";
import Loader from "../../common/Loader";

const LazyHome = lazy(() => import("./Home"));

const HomeLazy = (props: any) => (
  <Suspense fallback={<Loader />}>
    <LazyHome {...props} />
  </Suspense>
);

export default HomeLazy;
