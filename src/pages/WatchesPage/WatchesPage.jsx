import PageContent from "../../components/PageContent/PageContent/PageContent";
import { data } from "../../assets/original_data/originalData";
const WatchesPage = () => {
  return <PageContent productType="Watches" arrOfProducts={data.watches} />;
};
export default WatchesPage;
