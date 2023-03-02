import axios from "axios";
import { useSelector } from "react-redux";

const data = useSelector((state) => state.profile);
const token = data?.token?.payload
// const id = data?.profile?.payload?.id

export default function handler(req, res) {
    try {
        const config = {
            headers: {
                "Content-Type": "multipart/form-data",
                Authorization: `Bearer ${token}`,
            },
        };
        const { address_alias, recipient_name, street, city, postal_code, recipient_phone_number, } = req.body;
// console.log(req.body)
        axios
            .post(`${process.env.NEXT_PUBLIC_API_URL}/addresses`, {
                address_alias,
                recipient_name,
                street,
                city,
                postal_code,
                recipient_phone_number,
            },config)
            .then((response) => {
                // console.log(response)
                res.status(200).json(response.data);
            })
            .catch((error) => {
                console.log(error)
                res.status(400).json(error?.response?.data);
            });
    } catch (error) {
        res.status(500).json("Internal server error");
        console.log(error)
    }
}