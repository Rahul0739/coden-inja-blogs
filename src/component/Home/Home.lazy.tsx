import { lazy, Suspense } from "react";

const LazyHome = lazy(() => import("./Home"));

const HomeLazy = (props: any) => (
  <Suspense fallback={"Loading"}>
    <LazyHome {...props} />
  </Suspense>
);

export default HomeLazy;
