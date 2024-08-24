import { register } from "@/app/lib/service";
import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
    try {
        const req = await request.json();
        const res = await register(req);

        return NextResponse.json(
            { status: res.status, message: res.message },
            { status: res.statusCode }
        );
    } catch (error) {
        console.error("Error dalam handler POST:", error);
        return NextResponse.json(
            { status: false, message: "Terjadi kesalahan pada server" },
            { status: 500 }
        );
    }
}
