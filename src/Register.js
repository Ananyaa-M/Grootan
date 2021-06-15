const Login = () => {
    return ( 
    <div className="grid">
        <form className="form login">
            <header className="login__header">
                <h3 className="login__title">Register</h3>
            </header>
            <div className="login__body">
                <div className="form__field">
                    <input type="email" placeholder="Email" required/>
                </div>
                <div className="form__field">
                    <input type="password" placeholder="New Password" required/>
                </div>
                <div className="form__field">
                    <input type="password" placeholder="Confirm Password" required/>
                </div>
            </div>
            <footer className="login__footer">
                <input type="submit" value="Register"/>
            </footer>
        </form>
  </div>
    );
}
 
export default Login;
