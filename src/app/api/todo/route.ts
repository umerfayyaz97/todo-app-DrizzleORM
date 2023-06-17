import { NextRequest, NextResponse } from "next/server";
import { QueryResult } from "@vercel/postgres";
// import { error } from "console";
import {db, Todo, NewTodo, todoTable} from "@/lib/drizzle";
import { sql } from "@vercel/postgres";


export async function GET(request: NextRequest){
    // const client = await db.connect();

try{ 
    await sql`CREATE TABLE IF NOT EXISTS Todos(id serial, task varchar(255) )`
   
    const res = await db.select().from(todoTable);

        console.log(res)
//    console.log(res.rows.find((item)=> item.id === 2))
    return NextResponse.json ({data: res})

} catch (err){
    console.log((err as {message: string}).message)
    return NextResponse.json({message:"something went wrong"})
}

} 

export async function POST(request: NextRequest){
    // const client = await db.connect();
    const req = await request.json();

    try {
        if (req.task){
           const res = await db.insert(todoTable).values({
            task: req.task,
           }).returning();
           
           console.log(res)
        return NextResponse.json({message: "Iron man is here"})
        }else {
            throw new Error("Im Batman")
            }
                
    } catch (error) {
        return NextResponse.json({message: (error as {message: string}).message })
        
    }

}