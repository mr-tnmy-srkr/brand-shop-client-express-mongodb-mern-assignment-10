import { useLoaderData } from "react-router-dom";
import ProductsCard from "../../components/ProductsCard/ProductsCard";

const BrandProduct = () => {

    const products = useLoaderData();

    // console.log(products);

    return (
        <div className="grid md:grid-cols-2 gap-10 my-8">
           {
            products?.map(product=><ProductsCard key = {product._id} product = {product}></ProductsCard>)
           }
        </div>
    );
};

export default BrandProduct;