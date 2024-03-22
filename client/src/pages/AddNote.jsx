/* eslint-disable no-unused-vars */
import { FormRow } from "../components";
import Wrapper from '../assets/wrappers/DashboardFormPage';
import { useOutletContext } from 'react-router-dom';
import { NOTE_PRIORITY } from "../../../utils/constants";
import { Form, useNavigation, redirect } from 'react-router-dom';
import { toast } from 'react-toastify';
import customFetch from "../utils/customFetch";
import FormRowSelect from "../components/FormRowSelect";
import SubmitBtn from "../components/SubmitBtn";

const AddNote = () => {
    return (
        <Wrapper>
            <Form method='post' className='form'>
                <div className="form-title">
                    <h4>Add Note</h4>
                </div>
                <div className='form-center'>
                    <FormRow type='text' name='title' />
                    <FormRow type='text' name='description' />
                    <FormRowSelect
                        labelText='note priority'
                        name='priority'
                        defaultValue={NOTE_PRIORITY.LOW}
                        list={Object.values(NOTE_PRIORITY)}
                    />

                    <SubmitBtn formBtn />
                </div>
            </Form>
        </Wrapper>
    );
};

export default AddNote;
