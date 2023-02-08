import React from 'react'
import { useState, useEffect } from "react";
import Styles from "./Detail.module.css";

interface IUser {
    name: string,
    age: number,
    id: number,
    img: string,
}

function Detail() {
    const [user, setUser] = useState<IUser | undefined>({
        name: 'ad',
        age: 21,
        id: 4,
        img: 'aaa',
    })

    useEffect(() => {
        getListUser();
    }, []);
    const getListUser = () => {
        const url = "https://63758f5b48dfab73a4fb0332.mockapi.io/users/4"
        fetch(url, {
            method: 'GET',

        })
            .then((response) => response.json())
            .then((data) => {
                console.log('Success:', data);
                setUser(data)
            })
            .catch((error) => {
                console.error('Error:', error);
            });
    }

    return (
        <div>
            <h1>DETAIL</h1>
            <div className={`card ${Styles.bg__color}`} style={{ width: 300 }}>
                <img src={user?.img} className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title ">Name: {user?.name}</h5>
                    <p className="card-text">Age: {user?.age}</p>
                    <p className="card-text">ID: {user?.id}</p>
                </div>
            </div>
        </div>
    )
}
export default Detail