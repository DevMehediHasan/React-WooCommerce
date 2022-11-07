import Header from "../src/components/layouts/header";
import Footer from "../src/components/layouts/footer";
import axios from "axios";
import Products from "../src/components/products";
import { GET_PRODUCTS_ENDPOINT, HEADER_FOOTER_ENDPOINT } from "../src/utils/constants/endpoints";

export default function Home({headerFooter, products}) {
  const { header, footer } = headerFooter || {};
   return (
        <div >
          
          <Header header={header}/>

          <main  className="container mx-auto p-4">
            <Products products={products}/>
          </main>

          <Footer footer={footer}/>

        </div>
  )
}

export async function getStaticProps() {
  const {data: headerFooterData} = await axios.get( HEADER_FOOTER_ENDPOINT );
  const {data: products } = await axios.get( GET_PRODUCTS_ENDPOINT );

  return{
    props: {
      headerFooter: headerFooterData?.data ??  {}, 
      products: products?.success ?? {} 
    },

    revalidate: 1,
  };
}