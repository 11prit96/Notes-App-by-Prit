/* eslint-disable react-refresh/only-export-components */
import { NotesContainer, SearchContainer } from '../components';
import { useLoaderData } from 'react-router-dom';
import { useContext, createContext } from 'react';

const AllNotesContext = createContext();

const AllNotes = () => {
    const data = useLoaderData();

    return (
        <AllNotesContext.Provider value={{ data }}>
            {/* <SearchContainer /> */}
            <NotesContainer />
        </AllNotesContext.Provider>
    );
};

export const useAllNotesContext = () => useContext(AllNotesContext);
export default AllNotes;