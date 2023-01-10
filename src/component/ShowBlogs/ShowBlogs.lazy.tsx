import { lazy, Suspense } from "react";

const ShowBlogs = lazy(() => import("./ShowBlogs"));

const ShowBlogsLazy = (props: any) => (
  <Suspense fallback={"Loading..!"}>
    <ShowBlogs {...props} />
  </Suspense>
);

export default ShowBlogsLazy;
