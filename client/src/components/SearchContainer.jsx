/* eslint-disable no-unused-vars */
import { FormRow, FormRowSelect, SubmitBtn } from '.';
import Wrapper from '../assets/wrappers/DashboardFormPage';
import { Form, useSubmit, Link } from 'react-router-dom';
import { NOTE_PRIORITY } from '../../../utils/constants';
import { useAllNotesContext } from '../pages/AllNotes';

const SearchContainer = () => {
    const { searchValues } = useAllNotesContext();
    const { search, jobStatus, jobType, sort } = searchValues;
    const submit = useSubmit();

    const debounce = (onChange) => {
        let timeout;
        return (e) => {
            const form = e.currentTarget.form;
            clearTimeout(timeout);
            timeout = setTimeout(() => {
                onChange(form);
            }, 2000);
        };
    };
    return (
        <Wrapper>
            <Form className='form'>
                <h5 className='form-title'>search form</h5>
                <div className='form-center'>
                    <FormRow
                        type='search'
                        name='search'
                        defaultValue={search}
                        onChange={debounce((form) => {
                            submit(form);
                        })}
                    />

                    <FormRowSelect
                        labelText='note priority'
                        name='priority'
                        list={['all', ...Object.values(NOTE_PRIORITY)]}
                        defaultValue={jobStatus}
                        onChange={(e) => {
                            submit(e.currentTarget.form);
                        }}
                    />
                    {/* <FormRowSelect
                        name='sort'
                        defaultValue={sort}
                        list={[...Object.values(NOTE_SORT_BY)]}
                        onChange={(e) => {
                            submit(e.currentTarget.form);
                        }}
                    /> */}
                    <Link to='/dashboard/all-jobs' className='btn form-btn delete-btn'>
                        Reset Search Values
                    </Link>
                </div>
            </Form>
        </Wrapper>
    );
};
export default SearchContainer;