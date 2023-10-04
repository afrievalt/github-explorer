import { NextApiHandler } from "next";

const hello:NextApiHandler = (req, res) => {
    res.status(200).json({
        hello: "is it me your looking for?"
    })
}

export default hello