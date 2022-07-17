import './Register.css'

const Register = () => {
    return (
        <div className="register">
            <span className="registerTitle">Sign Up</span>
            <form className="registerForm">
                <label htmlFor="username">Username</label>
                <input id="username" className="registerInput" type="text" placeholder='Enter your username'/>
                <label htmlFor="email">Email</label>
                <input id="email" className="registerInput" type="text" placeholder='Enter your email'/>
                <label htmlFor="password">Password</label>
                <input id="password" className="registerInput" type="password" placeholder='Enter your password'/>
                <button className="registerButton">Sign Up</button>
            </form>
            <button className='registerLoginButton'>Login</button>
        </div>
    );
}

export default Register;
