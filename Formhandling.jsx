import { useState } from "react";

const FormHandling = () => {
    const[values,setValues] = useState({
        firstname: '',
        lastname: '',
        email: '',
        password: '',
        contact: '',
        gender: '',
        language: '',
        resume: '',
        url: '',
        about: ''

    })
    const onChangeEventHandler = (e) => {
        setValues({...values,[e.target.name]:[e.target.value]}) // it will take previous values and compare and Assign

    }
     
    const onSubmitHandler = (e) => {
        e.preventDefault()
        console.log(values)
    }

    const ResetFunction = (e) =>{   // RESETING the input fiels
        setValues({firstname:'',lastname:'',email:'',password:'',contact:''})

    }
    return(<>
    
        <form onSubmit={onSubmitHandler}>
            <div>
                <label>FIRST NAME</label><br></br>
                <input type="text" placeholder="Enter First Name"  name="firstname" value={values.firstname} onChange={onChangeEventHandler} required></input>
            </div>
            <div>
                <label>LAST NAME</label><br></br>
                <input type="text" placeholder="Enter Last Name" name="lastname" value={values.lastname} onChange={onChangeEventHandler} required></input>
            </div>
            <div>
                <label>EMAIL</label><br></br>
                <input type="email" placeholder="Enter Email" name="email" value={values.email} onChange={onChangeEventHandler} required></input>
            </div>
            <div>
                <label>PASSWORD</label><br></br>
                <input type="password" placeholder="Enter Password" name="password" value={values.password} onChange={onChangeEventHandler} ></input>
            </div>
            <div>
                <label>CONTAct</label><br></br>
                <input type="text" placeholder="Enter Contact Number" name="contact" value={values.contact} onChange={onChangeEventHandler} ></input>
            </div>
            
            <label>GENDER</label> <br></br>
            <input type="radio" name="gender" onChange={onChangeEventHandler} />MALE
            <input type="radio" name="gender" onChange={onChangeEventHandler} />FEMALE
            <input type="radio" name="gender" onChange={onChangeEventHandler} />OTHER

            <div>
                <label>LANGUAGE</label><br></br>
                <select name="subject" id="subject" onChange={onChangeEventHandler} >
                    <option value={"english"}>ENGLISH</option>
                    <option value={"hindi"} >HINDI</option>
                    <option value={"telugu"} >TELUGU</option>
                </select>
            </div>
            <div>
                <label>RESUME</label><br></br>
                <input type="file" placeholder="Select Resume" name="resume" onChange={onChangeEventHandler} ></input>
            </div>

            <div>
                <label>URL</label><br></br>
                <input type="text" placeholder="Enter Image Url" onChange={onChangeEventHandler} ></input>
            </div>
            <div>
                <label>About</label><br></br>
                <textarea name="about" id="about" cols={"30"} rows={"10"} placeholder="Enter Description"  onChange={onChangeEventHandler} ></textarea>
            </div>
            <button type="button" onClick={ResetFunction}>RESET</button>&nbsp;&nbsp;&nbsp;
            <button type="submit">SUBMIT</button>
        </form>
   
    </>)
}
export default FormHandling;