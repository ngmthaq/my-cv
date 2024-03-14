import { memo } from "react";
import { BaseLayout } from "../../layouts";

const HomePageView = () => {
  return (
    <BaseLayout>
      <p>Hello World</p>
    </BaseLayout>
  );
};

export default memo(HomePageView);
