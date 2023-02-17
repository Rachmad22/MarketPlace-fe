import axios from "axios";

const handler = (req, res) => {
  try {
    const { email, password } = req.body;
    axios
      .post(`https://long-rose-spider-hem.cyclic.app/auth/login`, {
        email,
        password,
      })
      .then((response) => {
        res.status(200).json(response?.data);
      })
      .catch((error) => {
        res.status(400).json(error?.response?.data);
      });
  } catch (error) {
    res.status(500).json("Internal server error");
  }
};

export default handler;
