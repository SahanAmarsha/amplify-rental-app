import React, {useEffect, useState} from "react";
import MyAddHomeForm from "../my-components/MyAddHomeForm";
import { Storage } from "@aws-amplify/storage";
import { v4 as uuid } from "uuid";
import {Home} from "../models";
import {DataStore} from "aws-amplify";
import {useNavigate} from "react-router-dom";

const AddHome = () => {
    const [address, setAddress] = useState("");
    const [price, setPrice] = useState("");
    const [image, setImage] = useState(null)

    const navigate = useNavigate();

    const addFormOverrides = {
        "Flex.Flex[0].Flex[2].TextField[0]": {
            onChange: (event) => { setAddress(event.target.value) }
        },
        "Flex.Flex[0].Flex[2].TextField[1]": {
            onChange: (event) => { setPrice(event.target.value) }
        },
    }
    console.log('address', address);
    console.log('price', price);

    const saveHome = async () => {
        try {
            // saving image using s3 storage

            if(image) {
                let key = uuid().toString(); // image file key
                const result = await Storage.put(key, image, {
                    contentType: image.type,
                });

                console.log('result', result);
                // saving details using app sync API
                await DataStore.save(
                    new Home({
                        "address": address,
                        "price": parseFloat(price),
                        "imageUrl": key
                    })
                );
                navigate('/');
            }
        } catch (err) {
            console.log('Error', err);
        }
    }

    return (
        <div className="app-body">
            <MyAddHomeForm onSubmit={saveHome} image={image} onImageUpload={setImage} overrides={addFormOverrides}/>
        </div>

    );
}

export default AddHome;