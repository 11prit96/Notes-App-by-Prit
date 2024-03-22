import { Router } from "express"
import { getAllNotes, createNote, getSingleNote, updateNote, deleteNote } from "../controllers/notes_controller.js"
import { validateIdParam, validateNoteInput } from "../middlewares/validationMiddleware.js"

const router = Router()

router
    .route('/')
    .get(getAllNotes)
    .post(validateNoteInput, createNote)

router
    .route('/:id')
    .get(validateIdParam, getSingleNote)
    .patch(validateIdParam, validateNoteInput, updateNote)
    .delete(validateIdParam, deleteNote)

export default router