import { useEffect, useState } from "react";
import { getProducts } from "../services/api";
import ProductCard from "../components/ProductCard";

function Products(){
    const [loading,setLoading] = useState(true);
    const [products,setProducts] = useState([]);
    const [error,setError] = useState(null);

    useEffect(()=>{

        async function fetchProducts() {
            try{

                const data = await getProducts();
                setProducts(data);

            }catch(err){
                setError(err.message)
            } finally {
                setLoading(false);
            }
        }

        fetchProducts();
    },[]);

    if(loading) return <p>Loding products...</p>
    if(error) return  <p className="text-danger">{error}</p>

    return (
        <>
       <div className="container py-4">

        <h1 className="mb-4">Products</h1>

        <div className="row g-4">
            {products.map((product) => (
                <div
                    className="col-12 col-sm-6 col-lg-4 col-xl-3"
                    key={product.id}
                >
                    <ProductCard product={product} />
                </div>
            ))}
        </div>

    </div>
        </>
    );
}

export default Products