import { Outlet } from "react-router-dom";
import { Fragment } from "react";
import Navigation from "../../components/Header/Navigation/Navigation";
const RootLayout = () => {
  return (
    <Fragment>
      <Navigation />
      <main>
        <Outlet />
      </main>
    </Fragment>
  );
};
export default RootLayout;
