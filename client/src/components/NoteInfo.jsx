import Wrapper from '../assets/wrappers/NoteInfo';

const NoteInfo = ({ icon, text }) => {
    return (
        <Wrapper>
            <span className='note-icon'>{icon}</span>
            <span className='note-text'>{text}</span>
        </Wrapper>
    );
};
export default NoteInfo;