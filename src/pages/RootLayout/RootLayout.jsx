import { Outlet } from "react-router-dom";
import { Fragment } from "react";
import Navigation from "../../components/Header/Navigation/Navigation";
import FooterContent from "../../components/Footer/FooterContent/FooterContent";
const RootLayout = () => {
  return (
    <Fragment>
      <Navigation />
      <main>
        <Outlet />
      </main>
      <FooterContent />
    </Fragment>
  );
};
export default RootLayout;
