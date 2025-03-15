// app/api/confess.ts
import { NextResponse } from "next/server";
import db from '@/lib/db'
export async function POST(req:Request) {
    const { confession } = await req.json();
    return new Promise<NextResponse>((resolve, reject) => {
        db.run(
            `INSERT INTO confessions (confession) VALUES (?)`,
            [confession],
            function (err) {
                if (err) {
                    reject(new Error('Failed to insert confession'));
                } else {
                    resolve(
                        new NextResponse(
                            JSON.stringify({ message: `Confession submitted~ ${confession}`}),
                            { status: 200 }
                        )
                    )
                }
            }
        )
    });
};