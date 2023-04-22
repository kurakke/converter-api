import { Request, Response } from 'express';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export const getById = async (req: Request, res: Response) => {
    const { usesrId } = req.body;
    const user = await prisma.user.findUnique({
        where: {
            id: usesrId,
        },
        include: {
            text: true,
        },
    });
    res.json(user);

}

export const create = async (req: Request, res: Response) => {
    const { name, email } = req.body;
    const user = await prisma.user.create({
        data: {
            name,
            email,
        },
    });
    res.json(user);
}

