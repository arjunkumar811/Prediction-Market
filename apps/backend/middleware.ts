import { createClient } from "@supabase/supabase-js";
import type { NextFunction, Request, Response } from "express";
const supabase = createClient("https://jyyyzkwufgvxlthfwaej.supabase.co", "process.env.SUPABASE_SECRET_KEY");

export async function middleware (req: Request, res: Response, next: NextFunction) {
const token = req.headers.authorization;

try {
    const {data: {user} , error } = await supabase.auth.getUser(token);
    console.log(user);
    console.log(error);
} catch (e) {
    res.status(403).json({
        message: "Incorrect credentials"
    })
}


}