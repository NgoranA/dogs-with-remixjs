import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient()
// pass petsPas22

async function seed() {
    const user = await prisma.user.create({
        // where: {username : "slearndy"},
        data: {
            username: "slearndy",
            password: "$2a$12$J0RsSZLtUKyyyyyh2q46ROoZ0HvPjgOYX6s53Is79yYiP6g1PzGT6"
        }
    })
}

seed()