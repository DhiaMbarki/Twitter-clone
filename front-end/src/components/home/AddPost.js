import React,{useState,useEffect} from 'react'

function AddPost() {
    const [title,setTitle] = useState("")
    const [body,setBody] = useState("")
    const [image,setImage] = useState("")





   const postDetails = ()=>{
    const data = new FormData()
    data.append("file",image)
    data.append("upload_preset","tweetler")
    data.append("cloud_name","cnq")
    fetch("https://api.cloudinary.com/v1_1/cnq/image/upload",{
        method:"post",
        body:data
    })
    .then(res=>res.json())
    .then(data=>{
       setUrl(data.url)
    })
    .catch(err=>{
        console.log(err)
    })

 
}


    return (
        <div className="card input-filed"
        style={{
            margin:"90px auto",
            maxWidth:"800px",
            height:"500px",
            padding:"100px",
            textAlign:"center"
        }}
        >
            <h4>𝒂𝒅𝒅 𝒏𝒆𝒘 𝑻𝒘𝒆𝒆𝒕</h4>
            <input 
           type="text"
            placeholder="title"
            value={title}
            onChange={(e)=>setTitle(e.target.value)}
            />
            <input
            type="text"
             placeholder="body"
             value={body}
            onChange={(e)=>setBody(e.target.value)}
             />
            <div className="file-field input-field">
             <div className="btn #64b5f6 blue darken-1" >
                 <span>file</span>
                 <input type="file" onChange={(e)=>setImage(e.target.files[0])}  />
             </div>
             <div className="file-path-wrapper">
                 <input className="file-path validate" type="text" />
             </div>
             </div>
             <button class="btn-floating btn-large waves-effect waves-light red"><i class="material-icons"
               onClick={()=>postDetails()}
             >

                add</i></button>
 
        </div>
    )
}

export default AddPost
