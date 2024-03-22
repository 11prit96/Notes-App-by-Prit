import Wrapper from "../assets/wrappers/Register"
import { FormRow } from "../components"
import { NavLink, Form, useNavigation } from "react-router-dom"

const Register = () => {
    const navigation = useNavigation()
    const isSubmitting = navigation.state === "submitting"
    return (
        <Wrapper>
            <Form method="post" className="form">
                <h3>Register</h3>
                <FormRow type="text" name="firstName" labelText="First Name" />
                <FormRow type="text" name="lastName" labelText="Last Name" />
                <FormRow type="email" name="email" />
                <FormRow type="text" name="location" />
                <FormRow type="password" name="password" />
                <button type="submit" className="btn" disabled={isSubmitting}>
                    {isSubmitting ? "Submitting..." : "Submit"}
                </button>
                <p>
                    Already a member?
                    <NavLink to='/login' className='member-btn'>
                        Login
                    </NavLink>
                </p>
            </Form>
        </Wrapper>
    )
}

export default Register
