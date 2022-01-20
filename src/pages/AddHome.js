import React, {useEffect, useState} from "react";
import MyAddHomeForm from "../my-components/MyAddHomeForm";

const AddHome = () => {
    const [address, setAddress] = useState("");
    const [price, setPrice] = useState("");
    const [image, setImage] = useState(null)

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


            // saving details using app sync API

        } catch (err) {

        }
    }

    useEffect(() => {

    }, []);

    return (
        <div className="app-body">
            <MyAddHomeForm image={image} onImageUpload={setImage} overrides={addFormOverrides}/>
        </div>

    );
}

export default AddHome;