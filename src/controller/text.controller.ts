import { Request, Response } from 'express';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export const create = async (req: Request, res: Response) => {
    const { userId, text, convertedText } = req.body;
    const createText = await prisma.text.create({
        data: {
            text: text,
            convertedText: convertedText,
            User: {
                connect: {
                    id: userId
                }
            }
        }
    })
    res.json(createText)
}