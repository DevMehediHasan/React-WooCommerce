import { isEmpty } from 'lodash';
import Product from './product';

const Products = ( { products } ) => {
	
	if ( isEmpty( products ) ) {
		return null;
	}
	

    console.warn(products);
    return (
        <div className="flex flex-wrap -mx-2 overflow-hidden">

            { products.length ? products.map(product =>{
                
                return(
                        <Product key={product?.id} product={product} />
                    )
            } ) : null }

        </div>
    )
}

export default Products;