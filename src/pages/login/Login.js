import './Login.css'

const Login = () => {
    return (
        <div className="login">
            <form className="loginForm">
                <label htmlFor="Email">Email</label>
                <input type="text" placeholder='Enter your email'/>
                <label htmlFor="Email">Password</label>
                <input type="password" placeholder='Enter your password'/>
                <button className="loginButton">Login</button>
            </form>
            <button className='loginRegisterButton'>Register</button>
        </div>
    );
}

export default Login;
