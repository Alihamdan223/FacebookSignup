import { useState } from "react"; 

const Header = () => {

    const [logInput, setLogInput] = useState({
        email: "",
        password: ""
    });

    function handleChange(e) {
        const {name, value} = e.target;
        setLogInput((prevInput) => {
            return {
                ...prevInput,
                [name]: value
            }
        })
    };

    return (
        <header className="fb-header">
            <nav className="fb-nav">
                <h1>facebook</h1>
        <form className="login-form">
            <label for="email">Email or Phone</label>
            <input type="email" name="email" value={logInput.email} onChange={handleChange} />
            <label for="password">Password</label>
            <input type="password" name="password" value={logInput.password} onChange={handleChange} /> 
            <span className="forgotten-account">Forgotten account?</span>
            <button className="login-btt">Log In</button>
        </form>
            </nav>
        </header>
    )
}

export default Header; 