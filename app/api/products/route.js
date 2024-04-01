import dbConnect from "@/lib/db";
import {products} from "@/models/product";
import {APIResponse} from "@/lib/ResponseBuilder";

// {params} get :id
export const GET = async (req) => {
    try {
        await dbConnect();
        const documentId = req.nextUrl.searchParams.getparams("id");
        if (documentId) {
            const results = await products.findById(documentId);
            return APIResponse.success(results);
        } else {
            const results = await products.find();
            return APIResponse.success(results);
        }
    } catch (e) {
        return APIResponse.error({error:"called"});
    }
}

export const POST = async (req) => {
    try {
        const request = await req.json();
        await products.create(request);
        return APIResponse.success(request);
    } catch (e) {
        return APIResponse.error({error:e.error});
    }
}