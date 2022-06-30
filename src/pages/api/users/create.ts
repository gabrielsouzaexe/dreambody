import { NextApiRequest, NextApiResponse } from "next";
import { prisma } from "../../../lib/prisma";

export default async function (req: NextApiRequest, res: NextApiResponse) {
    const { title } = req.body

    // await prisma.user.create({
    //     data: {
             
    //     }
    // })

    return res.status(201).json({});
}