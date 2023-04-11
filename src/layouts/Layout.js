import MainLayout from "./MainLayout";

export const LayoutType = {
  default: "default",
  main: "main",
  mainV2: "main-version-2",
};

const Layout = ({ type = LayoutType.default, children }) => {
  switch (type) {
    case LayoutType.main:
      return <MainLayout>{children}</MainLayout>;
    case LayoutType.mainV2:
      return <MainLayout>{children}</MainLayout>;
    default:
      return <>{children}</>;
  }
};

export default Layout;
