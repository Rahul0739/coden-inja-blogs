import { lazy, Suspense } from "react";
import Loader from "../../common/Loader";

const LazyHome = lazy(() => import("./Post"));

const Postlazy = (props: any) => (
  <Suspense fallback={<Loader />}>
    <LazyHome {...props} />
  </Suspense>
);

export default Postlazy;
