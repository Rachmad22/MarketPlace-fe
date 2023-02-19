import axios from "axios";

export default function handler(req, res) {
    try {
        const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJkYXRhIjp7ImlkIjoyMywibmFtZSI6IkFuZG8iLCJlbWFpbCI6InJlc3R1QGdtYWlsLmNvbSIsInBob25lX251bWJlciI6IjA4OTY4Nzg3OCIsInN0b3JlX25hbWUiOiJhbHZpYW5kbyBzdG9yZSIsInJvbGUiOmZhbHNlLCJwaG90byI6Imh0dHA6Ly9yZXMuY2xvdWRpbmFyeS5jb20vZHptYWdpaGZ1L2ltYWdlL3VwbG9hZC92MTY3Njc5MzYyOS82NmY0NWYxZC0yM2YwLTRmOTItYjM0ZC0zMDVkZTdjZmMyYTYuanBnIiwiZGF0ZV9vZl9iaXJ0aCI6bnVsbCwiZ2VuZGVyIjp0cnVlLCJjcmVhdGVkX2F0IjoiMjAyMy0wMi0xOFQyMDo1NTozMC4xNDZaIiwidXBkYXRlZF9hdCI6IjIwMjMtMDItMTlUMTA6MzM6MjcuMDAwWiJ9LCJpYXQiOjE2NzY4MDc2ODcsImV4cCI6MTY3NjgxMTI4N30.2ROMXrlEJFXjwJngv3-hqGxKVc3vgD1czZfgGevTvgU"
        const config = {
            headers: {
                "Content-Type": "multipart/form-data",
                Authorization: `Bearer ${token}`,
            },
        };
        const { address_alias, recipient_name, street, city, postal_code, recipient_phone_number, } = req.body;
// console.log(street)
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