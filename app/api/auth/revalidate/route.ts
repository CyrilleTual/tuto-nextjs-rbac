// pages/api/revalidate/route.js

import { NextApiRequest, NextApiResponse } from "next";

export const POST = async (req: NextApiRequest, res: NextApiResponse) =>{
    console.log ("revalidate");
    try {
        // Liste des chemins à invalider
        const paths = ["/user", "/guru", "admin"];
        for (const path of paths) {
            await res.revalidate(path);
        }
        return res.json({ revalidated: true });
    } catch (err) {
        console.error(err);
        return res.status(500).json({ message: "Error revalidating" });
    }
}