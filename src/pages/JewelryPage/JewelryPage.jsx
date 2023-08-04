import ProductGrid from "../../components/PageContent/ProductGrid/ProductGrid";
import { data } from "../../assets/original_data/originalData";
const JewelryPage = () => {
  return <ProductGrid arrOfProducts={data.jewelry} />;
};
export default JewelryPage;
