import React, { useState, useEffect } from 'react';
import Item from './Item';
import { useParams } from 'react-router-dom';
import { collection, getDocs, getFirestore } from 'firebase/firestore';
import '../main.css';

const ItemListContainer = () => {
    const { id: categoryId } = useParams();
    const [filteredProducts, setFilteredProducts] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const db = getFirestore();
                const itemsCollection = collection(db, "ItemsComputacion");
                const snapshot = await getDocs(itemsCollection);
                const docs = snapshot.docs.map((doc) => ({id: doc.id, ...doc.data()
                }));
                if (categoryId) {
                    const categoryProducts = docs.filter(
                        (prod) => prod.category.toLowerCase() === categoryId
                    );
                    setFilteredProducts(categoryProducts);
                } else {
                    setFilteredProducts(docs);
                }
                setLoading(false);
            } catch (error) {
                console.error("Error fetching data:", error);
                setLoading(false);
            }
        };

        fetchData();
    }, [categoryId]);

    return (
        <div className="item-container">
            {loading ? (
                <p>Loading...</p>
            ) : (
                filteredProducts.map((item) => (    
                    <Item key={item.id} product={item} />
                ))
            )}
        </div>
    );
}

export default ItemListContainer;