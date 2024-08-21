import ProductCard from "../ProductCard/ProductCard";

const FeaturedProducts = () => {
    return (
        <div className="mt-4">
            <div className="text-center">
                <h3 className="text-xl font-semibold">Featured Products</h3>
                <p>Check & Get Your Desired Product!</p>
            </div>
            <div>
                <ProductCard/>
            </div>
        </div>
    );
};

export default FeaturedProducts;