import axios from "axios";
import Products from "../src/components/products";
import { HEADER_FOOTER_ENDPOINT } from "../src/utils/constants/endpoints";
import { getProductData } from "../src/utils/products";
import Layout from "../src/components/layout";

export default function Home({headerFooter, products}) {
  
   return (
        <Layout headerFooter={headerFooter || {}}>
          <Products products={products}/>
        </Layout>
  )
}

export async function getStaticProps() {
  const {data: headerFooterData} = await axios.get( HEADER_FOOTER_ENDPOINT );
  const {data: products } = await getProductData();

  return{
    props: {
      headerFooter: headerFooterData?.data ??  {}, 
      products: products ?? {} 
    },

    revalidate: 1,
  };
}