import { lazy, Suspense } from 'react';

const LazyHome = lazy(() => import('./Header'));

const HeaderLazy = (props: any) => (
  <Suspense fallback={'Loading'}>
    <LazyHome {...props} />
  </Suspense>
);

export default HeaderLazy;
