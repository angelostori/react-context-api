import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

export default function Product() {

    const { id } = useParams()
    const [product, setProduct] = useState({});


    useEffect(() => {
        fetch(`https://fakestoreapi.com/products/${id}`)
            .then(res => res.json())
            .then(data => setProduct(data))
    }, [id])

    const navigate = useNavigate()

    return (

        <div className="jumbo">
            <div className="container">
                <h1>{product.title}</h1>
                <div className="row prod">
                    <div className="col-6 vh-100 my-5">
                        <img src={product.image} className="img-fluid" />
                    </div>
                    <div className="col-6 my-5">
                        <p><strong>Category: </strong>{product.category}</p>
                        <hr />
                        <p><strong>Description: </strong>{product.description}</p>
                        <hr />
                        <p><strong>Rating: </strong>{product.rating?.rate} ({product.rating?.count})</p>
                        <h3>€ {product.price}</h3>
                        <hr />
                        <div>
                            <button onClick={() => navigate(`/product/${product.id - 1}`)}>&lt; Prev</button>
                            <button onClick={() => navigate(`/product/${product.id + 1}`)}>Next &gt;</button>
                        </div>



                    </div>
                </div>
            </div>
        </div>
    )
}

/*
SLIDE DI RIFERIMENTO
export default function SingleProduct() {
useEffect(() => {
// fetch dati usando l'id
}, []);
const navigate = useNavigate();
return (
<div>
<h1>ID prodotto: {id}</h1>
<button

onClick={() => navigate(-1)}>
Torna alla pagina precedente
</button>
</div>
);
}
*/