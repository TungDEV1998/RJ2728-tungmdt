import React from 'react'
import { useState, useEffect } from "react";

type Props = {}

interface IUser {
    id: number;
    name: string;
    age: number;
}

function RenderList({ }: Props) {
    const [listUser, setListUser] = useState<Array<IUser>>([]);

    useEffect(() => {
        getListUser();
    }, []);
    const getListUser = () => {
        const url = "https://63758f5b48dfab73a4fb0332.mockapi.io/users"
        fetch(url, {
            method: 'GET', 

        })
            .then((response) => response.json())
            .then((data) => {
                console.log('Success:', data);
                setListUser(data)
            })
            .catch((error) => {
                console.error('Error:', error);
            });
    }

    

    const deleteUser = () => {
        const url = "https://63758f5b48dfab73a4fb0332.mockapi.io/users" 
        fetch(url, {
            method: 'DELETE', 

        })
            .then((response) => response.json())
            .then((data) => {
                console.log('Success:', data);
                getListUser();
            })
            .catch((error) => {
                console.error('Error:', error);
            });
    }

    return (
        <>
            <div>RenderList</div>
            <thead>
                aaaa
            </thead>
            <tbody>
                {listUser.map((item) => (
                    <tr key={`${item.id}`}>
                        <th scope='row'>{item.id}</th>
                        <td>{item.name}</td>
                        <td>{item.age}</td>
                        <td>
                            <button>DETAIL</button>
                            <button onClick={() => deleteUser()}>DELETE</button>
                        </td>
                    </tr>
                ))}
            </tbody>

        </>

    )
}
export default RenderList
