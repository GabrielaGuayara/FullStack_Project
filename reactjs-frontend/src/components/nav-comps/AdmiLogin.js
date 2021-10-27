import { useState } from 'react'
import { useHistory } from 'react-router'
import { Navbar } from './Navbar'

export const Admilogin = () => {
    
    let history =useHistory()
    
    const [admi] = useState({
        email:"user@gmail.com",
        password:"User123456"
    })
    
    const [admiData, setAdmiData] = useState(
            {
            email:'',
            password:''
        })
    
        const handleSubmit = e =>{
            e.preventDefault();
                checkLogin(admiData) // Passing data stored in userData to the Login component.
            }
    
    const checkLogin = (data=>{
       
        if(admi.email === data.email && admi.password === data.password){
            return history.push('/products')
        }
        
        else{
            return alert('Email and password do not match our records. Please double-check and try again')
        }
    })

return (
    <div>
        <Navbar/>
        <div className="main-admi">
            <div className="row">
                <div className="card border-0 col-md-6 offset-md-3 offset-md-3 bg-transparent" >
                        <div className="card-body ">
                            <form className="ctn-contact ">  
                            <h5 className="text-center pt-3">Admin User Login</h5>
                                 <div className="form-group mx-3 py-2  ">
                                <label>Email: </label>
                                <input placeholder="Email" name="name" type="text" id="email"className="form-control" required
                                    value={admiData.email} onChange={e=>setAdmiData({...admiData, email:e.target.value})} />
                                   
                                </div> 
                                <br/>  
                                <div className="form-group mx-3 py-2 ">
                                <label>Password: </label>
                                <input placeholder="Password" name="password" type="password" id="password" required className="form-control"
                                    value={admiData.password} onChange={e=>setAdmiData(({...admiData, password: e.target.value}))} />
                                </div> 
                                <br/>  
                                <div className="mx-3 py-3">
                                <button className="btn btn-warning  " onClick={handleSubmit}> SignIn</button>
                                </div >                 
                             </form>
                        </div>
                </div>
            </div>
        </div>
    </div>
    )
}

