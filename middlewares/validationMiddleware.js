import mongoose from "mongoose";
import Note from "../models/Notes_model.js"
import User from '../models/User_model.js';
import { body, param, validationResult } from "express-validator"
import { NOTE_PRIORITY } from "../utils/constants.js";
import { BadRequestError, NotFoundError } from "../errors/customErrors.js"

const withValidationErrors = (validateValues) => {
    return [
        validateValues,
        (req, res, next) => {
            const errors = validationResult(req);
            if (!errors.isEmpty()) {
                const errorMessages = errors.array().map((error) => error.msg);
                if (errorMessages[0].startsWith('No Note')) {
                    throw new NotFoundError(errorMessages);
                }
                if (errorMessages[0].startsWith('not authorized')) {
                    throw new UnauthorizedError('not authorized to access this route');
                }
                throw new BadRequestError(errorMessages);
            }
            next();
        },
    ];
};

export const validateNoteInput = withValidationErrors([
    body('title').notEmpty().withMessage('Title is required'),
    body('description').notEmpty().withMessage('Description is required'),
    body('priority').isIn(Object.values(NOTE_PRIORITY)).withMessage('Invalid Note Priority')
])

export const validateIdParam = withValidationErrors([
    param('id').custom(async (value, { req }) => {
        const isValidMongoId = mongoose.Types.ObjectId.isValid(value);
        if (!isValidMongoId) throw new BadRequestError('Invalid MongoDB id');
        const note = await Note.findById(value);
        if (!note) throw new NotFoundError(`No Note with id : ${value}`);
        const isAdmin = req.user.role === 'admin';
        const isOwner = req.user.userId === note.createdBy.toString();
        if (!isAdmin && !isOwner)
            throw UnauthorizedError('not authorized to access this route');
    })
])

export const validateRegisterInput = withValidationErrors([
    body('firstName').notEmpty().withMessage('name is required'),
    body('email')
        .notEmpty()
        .withMessage('email is required')
        .isEmail()
        .withMessage('invalid email format')
        .custom(async (email) => {
            const user = await User.findOne({ email });
            if (user) {
                throw new BadRequestError('email already exists');
            }
        }),
    body('password')
        .notEmpty()
        .withMessage('password is required')
        .isLength({ min: 8 })
        .withMessage('password must be at least 8 characters long'),
    body('lastName').notEmpty().withMessage('last name is required'),
    body('location').notEmpty().withMessage('location is required'),
]);

export const validateLoginInput = withValidationErrors([
    body('email')
        .notEmpty()
        .withMessage('email is required')
        .isEmail()
        .withMessage('invalid email format'),
    body('password').notEmpty().withMessage('password is required'),
]);

export const validateUpdateUserInput = withValidationErrors([
    body('firstName').notEmpty().withMessage('name is required'),
    body('email')
        .notEmpty()
        .withMessage('email is required')
        .isEmail()
        .withMessage('invalid email format')
        .custom(async (email, { req }) => {
            const user = await User.findOne({ email });
            if (user && user._id.toString() !== req.user.userId) {
                throw new Error('email already exists');
            }
        }),
    body('lastName').notEmpty().withMessage('last name is required'),
    body('location').notEmpty().withMessage('location is required'),
]);