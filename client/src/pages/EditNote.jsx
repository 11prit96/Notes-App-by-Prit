import { FormRow, FormRowSelect, SubmitBtn } from '../components';
import Wrapper from '../assets/wrappers/DashboardFormPage';
import { useLoaderData } from 'react-router-dom';
import { NOTE_PRIORITY } from '../../../utils/constants';
import { Form } from 'react-router-dom';


const EditJob = () => {
    const { note } = useLoaderData();

    return (
        <Wrapper>
            <Form method='post' className='form'>
                <h4 className='form-title'>edit job</h4>
                <div className='form-center'>
                    <FormRow type='text' name='title' defaultValue={note.title} />
                    <FormRow type='text' name='description' defaultValue={note.description} />
                    <FormRowSelect
                        name='priority'
                        labelText='note priority'
                        defaultValue={note.priority}
                        list={Object.values(NOTE_PRIORITY)}
                    />
                    <SubmitBtn formBtn />
                </div>
            </Form>
        </Wrapper>
    );
};
export default EditJob;