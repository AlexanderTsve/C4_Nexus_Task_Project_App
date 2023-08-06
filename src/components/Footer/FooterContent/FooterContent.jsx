import FooterList from "../FooterList/FooterList";
import { serviceArr, aboutArr, legalArr } from "../../../util/config";
const FooterContent = () => {
  return (
    <footer>
      <FooterList title="Service" arrOfContent={serviceArr} />
      <FooterList title="About Us" arrOfContent={aboutArr} />
      <FooterList title="Legal" arrOfContent={legalArr} />
    </footer>
  );
};
export default FooterContent;
