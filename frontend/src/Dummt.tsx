import React from "react";
import { createLogger } from "vite";
import axios from "axios";

const Dummt = () => {
    const createItem = async () => {
        const response = await fetch(
            "www.https://lodemon.onrender.com/api/profile",
            {
                method: "post",
                headers: {
                    "Content-type": "application/json",
                },
                body: JSON.stringify({ name: "newItem" }),
            },
        );
        const newItem = await response.json();
        console.log(newItem);
    };
    const updatedData = async (id) => {
        const response = await fetch(
            `www.https://lodemon.onrender.com/api/profile${id}`,
            {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ name: "Upadted Data" }),
            },
        );
    };
    const deleteItem = async (id) => {
        await fetch(`www.https://lodemon.onrender.com/api/profile/${id}`, {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json",
            },
        });
    };







    //////////////////
    // using axios //
    ////////////////

    const createItem1 = async () => {
        const response = await axios.post("`www.https://lodemon.onrender.com/api/profile/",{name:"learn React"})
        console.log(response.data)
    }
    const updatedData1 = async () => {
        const response = await axios.put("`www.https://lodemon.onrender.com/api/profile/1",{name:"learn React updated"})
        console.log(response.data)
    }
    const deleteItem1 = async () => {
        const response = await axios.delete("`www.https://lodemon.onrender.com/api/profile/1")
        console.log(response.data)
    }






    return <div></div>;
};

export default Dummt;
