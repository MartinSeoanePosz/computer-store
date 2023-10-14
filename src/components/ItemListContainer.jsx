import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { collection, getDocs, getFirestore } from 'firebase/firestore';
import '../main.css';
import ItemList from './ItemList';

const ItemListContainer = () => {

    const { id: categoryId } = useParams();
    const [loading, setLoading] = useState(true);
    const [docs, setDocs] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const db = getFirestore();
                const itemsCollection = collection(db, "ItemsComputacion");
                const snapshot = await getDocs(itemsCollection);
                const items = snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));

                setDocs(items);
                setLoading(false);
                console.log(items);
            } catch (error) {
                console.error("Error fetching data:", error);
                setLoading(false);
            }
        };

        fetchData();
    }, []);

    return (
        <div className="item-container">
            {loading ? <p>Loading...</p> : <ItemList categoryId={categoryId || null} docs={docs} />}
        </div>
    );
}

export default ItemListContainer;

