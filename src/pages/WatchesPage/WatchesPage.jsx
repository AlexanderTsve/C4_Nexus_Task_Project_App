import ProductGrid from "../../components/PageContent/ProductGrid/ProductGrid";
import { data } from "../../assets/original_data/originalData";
const WatchesPage = () => {
  return <ProductGrid arrOfProducts={data.watches} />;
};
export default WatchesPage;
