import axios from "axios";
import Layout from "../src/components/layout";
import { HEADER_FOOTER_ENDPOINT } from "../src/utils/constants/endpoints";

export default function Cart({headerFooter}) {
    return (
        <Layout headerFooter={headerFooter || {}}>
          
        </Layout>
  )
}

export async function getStaticProps() {
    const {data: headerFooterData} = await axios.get( HEADER_FOOTER_ENDPOINT );

    return{
      props: {
        headerFooter: headerFooterData?.data ??  {},
      },
  
      revalidate: 1,
    };
  }