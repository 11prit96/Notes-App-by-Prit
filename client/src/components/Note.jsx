/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { FaLocationArrow, FaBriefcase, FaCalendarAlt } from 'react-icons/fa';
import { Link, Form } from 'react-router-dom';
import Wrapper from '../assets/wrappers/Note';
import NoteInfo from './NoteInfo';
import day from 'dayjs';
import advancedFormat from 'dayjs/plugin/advancedFormat';
day.extend(advancedFormat);

const Note = ({
    _id,
    title,
    description,
    priority,
    createdAt,
}) => {
    const date = day(createdAt).format('MMM Do, YYYY');
    return (
        <Wrapper>
            <header>
                <div className='main-icon'>{title.charAt(0)}</div>
                <div className='info'>
                    <h4>{title}</h4>
                    <p>{description}</p>
                </div>
            </header>
            <div className='content'>
                <div className='content-center'>
                    {/* <JobInfo icon={<FaLocationArrow />} text={jobLocation} /> */}
                    <NoteInfo icon={<FaCalendarAlt />} text={date} />
                    {/* <JobInfo icon={<FaBriefcase />} text={jobType} /> */}
                    <div className={`status ${priority}`}>Priority: {priority}</div>
                </div>
                <footer className='actions'>
                    <Link to={`../edit-note/${_id}`} className='btn edit-btn'>
                        Edit
                    </Link>
                    <Form method='post' action={`../delete-note/${_id}`}>
                        <button type='submit' className='btn delete-btn'>
                            Delete
                        </button>
                    </Form>
                </footer>
            </div>
        </Wrapper>
    );
};
export default Note;