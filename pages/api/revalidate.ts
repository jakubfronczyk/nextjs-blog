//https://<your-site.com>/api/revalidate?secret=<token>
//http://localhost:3000/api/revalidate?path=/&secret=;gj!SzM>X&37DtxV#m3H4dDiS"Dg-TeJ'TN!JA^.@6.C<:ibC,Dd}pRo-UKemwZ

import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse
) {
    if (req.query.secret !== process.env.MY_SECRET_TOKEN) {
        return res.status(401).json({ message: "Invalid secret" });
    }

    const path = req.query.path as string;

    await res.revalidate(path);

    return res.json({ revalidated: true });
}
