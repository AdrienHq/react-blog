import { NextResponse } from "next/server";
import prisma from "@/utils/connect";

export const GET = async () => {
    try {
        const categories = await prisma.category.findMany();

        if (!categories) {
            // Handle case where no categories are found
            return new NextResponse(
                JSON.stringify({ message: "No categories found" }),
                { status: 404 }
            );
        }

        return new NextResponse(
            JSON.stringify(categories),
            { status: 200 }
        );
    } catch (err) {
        console.error("Error fetching categories:", err);
        return new NextResponse(
            JSON.stringify({ message: "Something went wrong" }),
            { status: 500 }
        );
    }
};
