import { useState } from "react";

const FormHandling = () => {
    const [data,setData] = useState({
        fullname: '',
        email:'',
        password:'',
        gender:'',
         })
    const onchangeHandler =  (e) => {
        setData(() =>({
            ...setData,
            [e.target.value]:e.target.value
        }))
        }
        const submithandler = (e) => {
            e.preventDefault();
            console.log('data.fullname:',fullname)
        }

    return ( <>
    <form onSubmit={submithandler}>
    <div>
        <label>FULL NAME</label><br></br>
        <input type="text" value={data.fullname} onChange={onchangeHandler}></input>
    </div>
    <div>
    <button type="submit">SUBMIT</button>
    </div>
    </form>
    </>)
}
export default FormHandling;