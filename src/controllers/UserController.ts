import { Request, Response } from 'express';
import User from '../models/UserModel';

export const getUsers = async (res: Response) => {
    try {
        const response = await User.findAll();
        res.status(200).json(response);
    } catch (error) {
        console.log(error.message);
    }
};

export const getUserById = async (req: Request, res: Response) => {
    try {
        const response = await User.findOne({
            where: {
                id: req.params.id,
            },
        });
        res.status(200).json(response);
    } catch (error) {
        console.log(error.message);
    }
};

export const createUser = async (req: Request, res: Response) => {
    try {
        await User.create(req.body);
        res.status(201).json({
            msg: 'User created',
            name: req.body.name,
        });
    } catch (error) {
        console.log(error.message);
    }
};

export const updateUser = async (req: Request, res: Response) => {
    try {
        await User.update(req.body, {
            where: {
                id: req.params.id,
            },
        });
        res.status(200).json({
            msg: 'User updated',
            name: req.body.name,
        });
    } catch (error) {
        console.log(error.message);
    }
};

export const deleteUser = async (req: Request, res: Response) => {
    try {
        await User.destroy({
            where: {
                id: req.params.id,
            },
        });
        res.status(200).json({
            msg: 'User deleted',
        });
    } catch (error) {
        console.log(error.message);
    }
};
