import { NextResponse } from "next/server.js"
import connect from "../../../../utils/db.js"
import Post from "@/models/Post.js"

export const GET = async(request, {params}) => {

    const {id} = params
    try {
        await connect()
        const post = await Post.findById(id)
        return new NextResponse(JSON.stringify(post), {status: 200})
    } catch (error) {
        return new NextResponse("DataBase error", {status: 500})
    }
}