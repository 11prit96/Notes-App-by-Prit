import Note from './Note';
import Wrapper from '../assets/wrappers/NotesContainer';
import { useAllNotesContext } from '../pages/AllNotes';
import PageBtnContainer from './PageBtnContainer';
const NotesContainer = () => {
    const { data } = useAllNotesContext();
    const { data: notes } = data

    // const { notes, totalNotes, numOfPages } = data;
    if (notes.length === 0) {
        return (
            <Wrapper>
                <h2>No notes to display...</h2>
            </Wrapper>
        );
    }
    return (
        <Wrapper>
            <h5>
                {notes.length} note{notes.length > 1 && 's'} found
            </h5>
            <div className='notes'>
                {notes.map((note) => {
                    return <Note key={note._id} {...note} />;
                })}
            </div>
            {/* {numOfPages > 1 && <PageBtnContainer />} */}
        </Wrapper>
    );
};
export default NotesContainer;