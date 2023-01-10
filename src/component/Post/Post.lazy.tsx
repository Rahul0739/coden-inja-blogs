import { lazy, Suspense } from "react";

const LazyHome = lazy(() => import("./Post"));

const Postlazy = (props: any) => (
  <Suspense fallback={"Loading"}>
    <LazyHome {...props} />
  </Suspense>
);

export default Postlazy;
