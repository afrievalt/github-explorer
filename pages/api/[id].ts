import { NextApiHandler } from "next";

const hello:NextApiHandler = (req, res) => {
    const {id} = req.query;
    res.status(200).json({
        id,
        hello: "is it me your looking for?"
    })
}

export default hello