import { lazy, Suspense } from "react";
import Loader from "../../common/Loader";

const ShowBlogs = lazy(() => import("./ShowBlogs"));

const ShowBlogsLazy = (props: any) => (
  <Suspense fallback={<Loader />}>
    <ShowBlogs {...props} />
  </Suspense>
);

export default ShowBlogsLazy;
