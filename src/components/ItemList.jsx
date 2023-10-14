import React, { useState, useEffect } from 'react';
import Item from './Item';

const ItemList = ({ categoryId, docs }) => {
    const [filteredProducts, setFilteredProducts] = useState([]);

    useEffect(() => {
        // Filtra los productos por categoría
        let categoryProducts;

        if (categoryId === null) {
            // si categoryId es null, se muestran todos los productos
            categoryProducts = docs;
        } else {
            categoryProducts = docs.filter((prod) => prod.category.toLowerCase() === categoryId);
        }

        setFilteredProducts(categoryProducts);
    }, [categoryId, docs]);

    return (
        filteredProducts.map((item) => (
            <Item key={item.id} product={item} />
        ))
    );
}

export default ItemList;
