import React,{useState,useContext,} from 'react'

import design from 'materialize-css'
import {Link,useHistory} from 'react-router-dom'
import {UserContext} from '../../../App'
const Signin  = ()=>{
    const {state,dispatch} = useContext(UserContext)
    const history = useHistory()
    const [password,setPasword] = useState("")
    const [email,setEmail] = useState("")
    const PostData = ()=>{
        if(!/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email)){  //from emailregex.com
            design.toast({html: "pleaze enter your informations :(",classes:"#000000 black"})//alert screen
            return
        }
        fetch("/signin",{
            method:"post",
            headers:{
                "Content-Type":"application/json"
            },
            body:JSON.stringify({
                password,
                email
            })
        }).then(res=>res.json())
        .then(data=>{
            console.log(data)
           if(data.error){
              design.toast({html: data.error,classes:"#000000 black"})
           }
           else{
               localStorage.setItem("jwt",data.token)
               localStorage.setItem("user",JSON.stringify(data.user))
               dispatch({type:"USER",payload:data.user})
               design.toast({html:"signedin success",classes:"#000000 black"})
               history.push('/')
           }
        }).catch(err=>{
            console.log(err)
        })
    }
   return (
      <div className="cardd">
          <div className="card1 auth-card input-field">
            <h2>♕ 𝕋𝕨𝕖𝕖𝕥𝕝𝕖𝕣 ♕</h2>
            <input
            type="text"
            placeholder="email"
            value={email}
            onChange={(e)=>setEmail(e.target.value)}
            />
            <input
            type="password"
            placeholder="password"
            value={password}
            onChange={(e)=>setPasword(e.target.value)}
            />
            <button className="waves-effect waves-light btn-small"
            onClick={()=>PostData()}
            >
                Login
            </button>
            <h5>
                <Link to="/signup"><p className="colll"> I Dont have an account ?</p></Link>
            </h5>
            {/* <h6>
                <Link to="/reset">Forgot password ?</Link>
            </h6> */}
    
        </div>
      </div>
   )
}


export default Signin