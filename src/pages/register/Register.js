import './Register.css'

const Register = () => {
    return (
        <div className="register">
            <span className="registerTitle">Sign Up</span>
            <form className="registerForm">
                <label htmlFor="Email">Email</label>
                <input className="registerInput" type="text" placeholder='Enter your email'/>
                <label htmlFor="Email">Password</label>
                <input className="registerInput" type="password" placeholder='Enter your password'/>
                <button className="registerButton">Sign Up</button>
            </form>
            <button className='registerLoginButton'>Login</button>
        </div>
    );
}

export default Register;
