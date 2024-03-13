import { Suspense, isValidElement, lazy } from "react";

export function delay(seconds = 1) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve();
    }, seconds * 1000);
  });
}

export function lazyLoadComponent(componentPath, LoadingComponent = null) {
  const Component = lazy(() => import(componentPath));
  const Loading = LoadingComponent && isValidElement(LoadingComponent) ? LoadingComponent : <div>Loading...</div>;
  return (
    <Suspense fallback={Loading}>
      <Component />
    </Suspense>
  );
}
