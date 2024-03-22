/* eslint-disable react/no-unescaped-entities */
import Wrapper from "../assets/wrappers/Login"
import { FormRow } from "../components"
import { Form, NavLink, useNavigation } from "react-router-dom"

const Login = () => {
    const navigation = useNavigation();
    const isSubmitting = navigation.state === 'submitting';
    return (
        <Wrapper>
            <Form method="post" className="form">
                <h3>Login</h3>
                <FormRow type="email" name="email" />
                <FormRow type="password" name="password" />
                <button type='submit' className='btn btn-block' disabled={isSubmitting}>
                    {isSubmitting ? 'submitting...' : 'submit'}
                </button>
                <p>Don't have an account yet?
                    <NavLink to="/register" className="member-btn">Register</NavLink>
                </p>
            </Form>
        </Wrapper>
    )
}

export default Login
