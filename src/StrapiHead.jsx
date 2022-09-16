import React from "react";
import { useEffect, useState } from "react";

function StrapiHead() {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch("http://localhost:1337/api/products?populate=*")
            .then((response) => {
                return response.json();
            })
            .then((data) => {
                setProducts(data);
            });
    }, []);

    console.log(products);

    return (
        <>
            <h1>Head of Strapi</h1>
            <div>
                <ul>
                    {products.data?.map((product) => (
                        <li key={product.attributes.name}>{product.attributes.name}</li>
                    ))}
                </ul>
                {products.data?.map((product) => (
                    <img
                        key={product.attributes.image.data.id}
                        src={"http://localhost:1337" + product.attributes.image.data.attributes.url}
                        alt=""
                    />
                ))}
            </div>
        </>
    );
}

export default StrapiHead;
