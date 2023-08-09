import PageContent from "../../components/PageContent/PageContent/PageContent";
import { data } from "../../assets/original_data/originalData";
const JewelryPage = () => {
  return <PageContent productType="Jewelry" arrOfProducts={data.jewelry} />;
};
export default JewelryPage;
