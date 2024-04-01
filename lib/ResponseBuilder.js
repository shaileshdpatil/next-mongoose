import {NextResponse} from "next/server";
import statusCodes from "@/lib/CODES.JS";

export const APIResponse = {
    success: (body, status = statusCodes.success) => {
        return NextResponse.json(body, status);
    },
    error: (body, status = statusCodes.failed) => {
        return NextResponse.json(body, status);
    },
}