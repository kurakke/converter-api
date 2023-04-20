import { Request, Response } from "express";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const create = async (req: Request, res: Response) => {
    const { userId, text } = req.body;
    const user = await prisma.user.create({
        where: {
            id: userId,
        },
        data: {
            textGroups: {
                create: {
                    texts: {
                        create: {
                            text,
                        },
                    },
                    convertedTexts: {
                        create: {
                            text,
                        },
                    },
                },
            }
        }
    });
    res.send(user);
}