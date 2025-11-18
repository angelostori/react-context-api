import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { DotWave } from 'ldrs/react'
import 'ldrs/react/DotWave.css'


export default function Products() {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        fetch("https://fakestoreapi.com/products")
            .then((res) => res.json())
            .then((data) => {
                setProducts(data);
                setLoading(true);
            });
    }, []);


    return (
        <div className="jumbo prods">
            <div className="container">
                <h1 className="mb-4">I nostri Prodotti</h1>
                {loading ? <div className="row">
                    {products.map((prod) => (
                        <div key={prod.id} className="col-12 col-md-4 col-lg-3 mb-4">
                            <div className="card h-100">
                                <img
                                    src={prod.image}
                                    className="card-img-top p-4"
                                />


                                <div className="card-body">
                                    <h5 className="card-title">
                                        {prod.title}
                                    </h5>
                                    <p className="fw-bold">€ {prod.price}</p>
                                    <Link to={`/product/${prod.id}`} className="btn btn-dark">Info Articolo</Link>
                                </div>
                            </div>
                        </div>
                    ))}
                </div> : <DotWave
                    size="47"
                    speed="1"
                    color="white"
                />}

            </div>

        </div>
    )
}