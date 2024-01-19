import { useState, useEffect } from "react"; 

const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", 
    "Nov", "Dec"];

const CreateAccount = () => {

    const [signupForm, setSignupForm] = useState({
        firstName: "",
        surName: "",
        emailOrPhone: "",
        password: ""
    })

    const [selectMonth, setSelectMonth] = useState(""); 
    const [selectDay, setSelectDay] = useState([]); 
    const [selectYear, setSelectYear] = useState([]);

    useEffect(() => {
        let getYears = []; 
        let getDays = [];
        for(let x = 1900; x < 2025; x++) {
            getYears.push(x); 
        }
        setSelectYear(getYears); 

        for(let d = 1; d < 32; d++) {
            getDays.push(d); 
        }
        setSelectDay(getDays); 

    }, []); 

    return (
        <div className="signup-form">
            <h1>Create An Account</h1>
            <h3>It's free and always will be.</h3>
        <form className="create-account">
            <div className="add-name">
            <input type="text" name="firstName" value={signupForm.firstName} placeholder="First Name" autoComplete="off"
            onChange={e => setSignupForm(e.target.value)} />
            <input type="text" name="surname" value={signupForm.surName} placeholder="Surname" autoComplete="off" onChange={e => setSignupForm(e.target.value)} />
            </div>
            <input type="text" name="emailOrPhone" value={signupForm.emailOrPhone} placeholder="Mobile number or email address" autoComplete="off"
            onChange={e => setSignupForm(e.target.value)} />
            <input type="password" name="password" value={signupForm.password} placeholder="Password" 
            autoComplete="off" onChange={e => setSignupForm(e.target.value)} />
            <label style={{marginBottom: 7}}>Birthday</label>
            <div className="date-input">
            <select onChange={(e) => setSelectDay(e.target.value)}>
                    {selectDay.map((day) => {
                        return <option key={day} value={day}>{day}</option>
                    })}
                </select> 
                <select onChange={(e) => setSelectMonth(e.target.value)}>
                    {months.map((month) => {
                        return <option key={month} value={month}>{month}</option>
                    })}
                </select>
                <select onChange={(e) => setSelectYear(e.target.value)}>
                    {selectYear.map((year) => {
                        return <option key={year} value={year}>{year}</option>
                    })}
                </select>
                <a href="#">Why do I need to provide my date of birth?</a>
            </div>
            <div className="gender-check">
            <label>
            <input type="radio" name="gender" />
            Female
            </label>
            <label>
            <input type="radio" name="gender" />
            Male
            </label>
            </div>
            <p>By Clicking Sign Up, you agree to our <a href="#">Terms, Data Policy</a>, and <a href="#">Cookie Policy</a>. You may receive SMS notifications from us and can opt out at any time.</p>
            <button id="signup-button">Sign Up</button>
        </form>
        <p><a href="#">Create a Page</a> for a celebrity, band, or business.</p>
        </div>
    )
}

export default CreateAccount; 