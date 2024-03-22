import Wrapper from "../assets/wrappers/Landing"
import { NavLink } from 'react-router-dom'
import Logo from "../components/Logo"

const Landing = () => {
    return (
        <Wrapper>
            <nav>
                <Logo />
            </nav>
            <div className="page">
                <p>Hey, forgetting something??</p>
                <p>Save a note, then. Its quite easy.</p>
                <p>But first of all..</p>
                <div className="links">
                    <NavLink to='/register' className='btn register-link'>Register</NavLink>
                    <NavLink to='/login' className='btn login-link'>Login</NavLink>
                </div>
            </div>

        </Wrapper>
    )
}

export default Landing


