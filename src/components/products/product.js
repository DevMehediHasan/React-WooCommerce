import { isEmpty } from "lodash"
import Link from "next/link"
import { sanitize } from "../../utils/miscellaneous"
import AddToCart from "../cart/add-to-cart"
import Image from "../image"

const Product = ( {product} ) => {

    if( isEmpty (product) ) {
        return null;
    }

    const img = product?.images?.[0] ?? {};
    const productType = product?.type ?? '';

    return(
            <div className="my-2 px-2 w-full overflow-hidden sm:w-1/2 md:w-1/3 xl:w-1/4">
                <Link href={product?.permalink ?? '/'} legacyBehavior>
                    <a>
                        <Image 
                            sourceUrl= {img?.src ?? ''}
                            altText={img?.alt ?? ''}
                            title={product?.name ?? ''}
                            width="380"
                            height="380"
                        />
                        <h3 className='font-bold'>{ product?.name ?? ''}</h3>
                        <div dangerouslySetInnerHTML={{ __html: sanitize( product?.price_html ) }}/>
                    </a>
                </Link>

                { 'simple' === productType ? <AddToCart product={product} /> : null }
            </div>
    )
}

export default Product