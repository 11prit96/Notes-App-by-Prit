import styled from 'styled-components'

const Wrapper = styled.section`
    nav{
        width: var(--full-width);
        height: var(--nav-height);
        background-color: #777;
        display: flex;
        align-items: center;
        padding: 1.5rem 3rem;
        font-size: 1.5rem;
        background: var(--primary-3);
    }
    .page{
        height: calc(100vh - var(--nav-height));
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        background: var(--secondary-1);
    }
    p{
        letter-spacing: var(--letter-spacing);
        margin: 1rem 0;
    }
    .links{
        margin: 1rem 0;
    }
    .btn{
        padding: 0.75rem 1rem;
    }
    .register-link{
        margin-right: 1rem;
    }
`

export default Wrapper