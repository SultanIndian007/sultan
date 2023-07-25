import { NextResponse } from "next/server.js"
import connect from "../../../utils/db.js"
import Post from "@/models/Post.js"

export const GET = async(request) => {
    try {
        await connect()
        const posts = await Post.find()
        return new NextResponse(JSON.stringify(posts), {status: 200})
    } catch (error) {
        return new NextResponse("DataBase error", {status: 500})
    }
}