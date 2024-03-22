/* eslint-disable no-unused-vars */
import customFetch from "./customFetch"
import { toast } from 'react-toastify';
import { redirect } from "react-router-dom"

export const registerAction = async ({ request }) => {
    const formData = await request.formData()
    const data = Object.fromEntries(formData)
    try {
        await customFetch.post('auth/register', data)
        toast.success('Registration successful')
        return redirect('/login')
    } catch (error) {
        toast.error(error?.response?.data?.msg)
        return error
    }
}

export const loginAction = async ({ request }) => {
    const formData = await request.formData()
    const data = Object.fromEntries(formData)
    try {
        await customFetch.post('auth/login', data)
        toast.success('Login successful')
        return redirect('/dashboard')
    } catch (error) {
        toast.error(error?.response?.data?.msg)
        return error
    }
}

export const dashboardLoader = async () => {
    try {
        const { data } = await customFetch('users/current-user')
        return data
    } catch (error) {
        return redirect('/')
    }
}

export const AddNoteAction = async ({ request }) => {
    const formData = await request.formData();
    const data = Object.fromEntries(formData);
    try {
        await customFetch.post('/notes', data);
        toast.success('Note added successfully ');
        return redirect('all-notes');
    } catch (error) {
        toast.error(error?.response?.data?.msg);
        return error;
    }
};

export const allNotesLoader = async ({ request }) => {
    try {
        const { data } = await customFetch.get('/notes');
        return {
            data,
        };
    } catch (error) {
        toast.error(error?.response?.data?.msg);
        return error;
    }
};

export const editNoteLoader = async ({ params }) => {
    try {
        const { data } = await customFetch.get(`/notes/${params.id}`)
        return data
    } catch (error) {
        toast.error(error?.response?.data?.msg)
        return redirect('/dashboard/all-notes')
    }
}

export const editNoteAction = async ({ request, params }) => {
    const formData = await request.formData()
    const data = Object.fromEntries(formData)
    try {
        await customFetch.patch(`/notes/${params.id}`, data)
        toast.success('Note edited successfully')
        return redirect('/dashboard/all-notes')
    } catch (error) {
        toast.error(error?.response?.data?.msg)
        return error
    }
}

export const deleteNoteAction = async ({ params }) => {
    try {
        await customFetch.delete(`/notes/${params.id}`)
        toast.success('Note deleted successfully')
    } catch (error) {
        toast.error(error?.response?.data?.msg)
    }
    return redirect('/dashboard/all-notes')
}