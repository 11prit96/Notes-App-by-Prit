import mongoose from "mongoose";
import { NOTE_PRIORITY } from "../utils/constants.js";

const NoteSchema = new mongoose.Schema(
    {
        title: String,
        description: String,
        priority: {
            type: String,
            enum: Object.values(NOTE_PRIORITY),
            default: NOTE_PRIORITY.LOW
        },
        createdBy: {
            type: mongoose.Types.ObjectId,
            ref: 'User',
        }
    }
    , { timestamps: true })

export default mongoose.model('Note', NoteSchema)    