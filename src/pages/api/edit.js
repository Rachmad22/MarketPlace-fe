import axios from "axios";

export default function handler(req, res) {
    try {
        const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJkYXRhIjp7ImlkIjo2LCJuYW1lIjoicmVzdHUiLCJlbWFpbCI6InJlc3R1QGdtYWlsLmNvbSIsInBob25lX251bWJlciI6IjA4OTY4Nzg3OCIsInN0b3JlX25hbWUiOiJhbHZpYW5kbyBzdG9yZSIsInJvbGUiOmZhbHNlLCJwaG90byI6bnVsbCwiZGF0ZV9vZl9iaXJ0aCI6bnVsbCwiZ2VuZGVyIjp0cnVlLCJjcmVhdGVkX2F0IjoiMjAyMy0wMi0xN1QwOTo1ODowMy4wMjFaIiwidXBkYXRlZF9hdCI6IjIwMjMtMDItMTdUMDk6NTg6MDMuMDIxWiJ9LCJpYXQiOjE2NzY3NDA1MTAsImV4cCI6MTY3Njc0NDExMH0.9yov5fIhRwcrEcNb1FGDvp4BY1kyzFdgpF4-pBXwu5Y"
        const config = {
            headers: {
                "Content-Type": "multipart/form-data",
                Authorization: `Bearer ${token}`,
            },
        };
        const { name, email, phone_number, photo, date_of_birth, gender } = req.body;

        axios
            .patch(`${process.env.NEXT_PUBLIC_API_URL}/users/update/6`, {
                name,
                email,
                phone_number,
                photo,
                date_of_birth,
                gender,
                password: "restU123"
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