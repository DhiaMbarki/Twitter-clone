import React from 'react'

function AddPost() {
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
            <input 
            type="text"
             placeholder="title"
             />
            <input
             type="text"
              placeholder="description"
              />
            <div className="file-field input-field">
             <div className="btn #64b5f6 blue darken-1" >
                 <span>file</span>
                 <input type="file"   />
             </div>
             <div className="file-path-wrapper">
                 <input className="file-path validate" type="text" />
             </div>
             </div>
             <button class="btn-floating btn-large waves-effect waves-light red"><i class="material-icons">

                add</i></button>
 
        </div>
    )
}

export default AddPost
