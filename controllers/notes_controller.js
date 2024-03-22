import { StatusCodes } from "http-status-codes"
import Note from "../models/Notes_model.js"

export const getAllNotes = async (req, res) => {
    const allNotes = await Note.find({ createdBy: req.user.userId })
    res.status(StatusCodes.OK).json(allNotes)
}

export const createNote = async (req, res) => {
    req.body.createdBy = req.user.userId;
    const note = await Note.create(req.body)
    res.status(StatusCodes.CREATED).json({ note })
}

export const getSingleNote = async (req, res) => {
    const { id } = req.params
    const note = await Note.findById(id)
    res.status(StatusCodes.OK).json({ note })
}

export const updateNote = async (req, res) => {
    const { id } = req.params
    const updatedNote = await Note.findByIdAndUpdate(id, req.body, { new: true })
    res.status(StatusCodes.OK).json({ note: updatedNote })
}

export const deleteNote = async (req, res) => {
    const { id } = req.params
    const deletedNote = await Note.findByIdAndDelete(id)
    res.status(StatusCodes.OK).json({ message: `Note with id ${id} was deleted.` })
}