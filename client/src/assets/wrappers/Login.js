import styled from "styled-components";

const Wrapper = styled.section`
min-height: 100vh;
display: grid;
align-items: center;
.logo {
  display: block;
  margin: 0 auto;
  margin-bottom: 1.38rem;
}
.form {
  max-width: 400px;
  border-top: 5px solid var(--primary-2);
}
h3 {
  text-align: center;
  margin-bottom: 1.38rem;
  color: var(--primary-4)
}
p {
  margin-top: 1rem;
  text-align: center;
  line-height: 1.5;
}
.btn {
  margin-top: 1rem;
}
.member-btn {
  color: var(--primary-4);
  letter-spacing: var(--letter-spacing);
  margin-left: 0.25rem;
}
`
export default Wrapper