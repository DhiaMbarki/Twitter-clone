import React, { useState, useEffect } from "react";
import design from "materialize-css";
import { useHistory } from "react-router-dom";
//gfygugiuhi
function AddPost() {
  const history = useHistory();

  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [image, setImage] = useState("");
  const [url, setUrl] = useState("");
  useEffect(() => {
    if (url) {
      fetch("/createpost", {
        method: "post",
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer " + localStorage.getItem("jwt"),
        },
        body: JSON.stringify({
          title,
          body,
          picture: url,
        }),
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.error) {
            design.toast({ html: data.error, classes: "#000000 black" });
          } else {
            //    dispatch({type:"USER",payload:data.user})
            design.toast({
              html: "created yout tweet with successfully",
              classes: "#000000 black",
            });
            history.push("/");
          }
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }, [url]);

  const postDetails = () => {
    const data = new FormData();
    data.append("file", image);
    data.append("upload_preset", "tweetler");
    data.append("cloud_name", "RBK");
    fetch("	https://api.cloudinary.com/v1_1/rbkk/image/upload", {
      method: "post",
      body: data,
    })
      .then((res) => res.json())
      .then((data) => {
        setUrl(data.url);
        console.log(data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div
      className="card input-filed"
      style={{
        margin: "90px auto",
        maxWidth: "800px",
        height: "500px",
        padding: "100px",
        textAlign: "center",
      }}
    >
      <h4>𝒂𝒅𝒅 𝒏𝒆𝒘 𝑻𝒘𝒆𝒆𝒕</h4>
      <input
        type="text"
        placeholder="title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <input
        type="text"
        placeholder="body"
        value={body}
        onChange={(e) => setBody(e.target.value)}
      />
      <div className="file-field input-field">
        <div className="btn #64b5f6 blue darken-1">
          <span>file</span>
          <input type="file" onChange={(e) => setImage(e.target.files[0])} />
        </div>
        <div className="file-path-wrapper">
          <input className="file-path validate" type="text" />
        </div>
      </div>
      <button class="btn-floating btn-large waves-effect waves-light red">
        <i class="material-icons" onClick={() => postDetails()}>
          add
        </i>
      </button>
    </div>
  );
}

export default AddPost;
