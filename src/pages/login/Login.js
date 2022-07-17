import './Login.css'

const Login = () => {
    return (
        <div className="login">
            <span className="loginTitle">Login</span>
            <form className="loginForm">
                <label htmlFor="email">Email</label>
                <input id="email" className="loginInput" type="text" placeholder='Enter your email'/>
                <label htmlFor="password">Password</label>
                <input id="password" className="loginInput" type="password" placeholder='Enter your password'/>
                <button className="loginButton">Login</button>
            </form>
            <button className='loginRegisterButton'>Sign Up</button>
        </div>
    );
}

export default Login;
