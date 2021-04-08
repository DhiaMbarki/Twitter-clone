import React from "react";
import "./profile.css"

function Profile() {
  return (
    <div style={{maxWidth:"1300px",margin:"0px auto"}}>
      <div
        style={{
          display: "flex",
          justifyContent: "space-around",
          margin: "18px 0px",
          borderBottom: "1px solid grey",
        }}
      >
        <div>
          <img
            style={{ width: "160px", height: "160px", borderRadius: "10px" }}
            src="https://scontent.ftun4-1.fna.fbcdn.net/v/t1.6435-9/157381447_2860189534263179_1326743122113976050_n.jpg?_nc_cat=107&ccb=1-3&_nc_sid=09cbfe&_nc_ohc=LFLUSqMx_vAAX8ksLnl&_nc_ht=scontent.ftun4-1.fna&oh=4bbdc176b308274bfd4a80859da0fa13&oe=6094D0C8"
          />
        </div>
        <div className="mov">
          <h4>Dhia-Mbarki</h4>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              width: "108%",
            }}
          >
            <h6>
              <strong>05</strong> posts
            </h6>
            <h6>
              <strong>999K</strong> followers
            </h6>
            <h6>
              <strong>50</strong> following
            </h6>
          </div>
        </div>
      </div>
      <div className="gall">
            <img className="item" src="https://scontent.ftun4-1.fna.fbcdn.net/v/t1.6435-9/46485342_2216992951916177_620915343149236224_n.jpg?_nc_cat=101&ccb=1-3&_nc_sid=8bfeb9&_nc_ohc=8WV9-WFFWaMAX_5aItD&_nc_ht=scontent.ftun4-1.fna&oh=8de269385de54c9757383594b6b021df&oe=60933625"/>
            <img className="item" src="https://scontent.ftun4-1.fna.fbcdn.net/v/t1.6435-9/46485342_2216992951916177_620915343149236224_n.jpg?_nc_cat=101&ccb=1-3&_nc_sid=8bfeb9&_nc_ohc=8WV9-WFFWaMAX_5aItD&_nc_ht=scontent.ftun4-1.fna&oh=8de269385de54c9757383594b6b021df&oe=60933625"/>
            <img className="item" src="https://scontent.ftun4-1.fna.fbcdn.net/v/t1.6435-9/46485342_2216992951916177_620915343149236224_n.jpg?_nc_cat=101&ccb=1-3&_nc_sid=8bfeb9&_nc_ohc=8WV9-WFFWaMAX_5aItD&_nc_ht=scontent.ftun4-1.fna&oh=8de269385de54c9757383594b6b021df&oe=60933625"/>
            <img className="item" src="https://scontent.ftun4-1.fna.fbcdn.net/v/t1.6435-9/46485342_2216992951916177_620915343149236224_n.jpg?_nc_cat=101&ccb=1-3&_nc_sid=8bfeb9&_nc_ohc=8WV9-WFFWaMAX_5aItD&_nc_ht=scontent.ftun4-1.fna&oh=8de269385de54c9757383594b6b021df&oe=60933625"/>
            <img className="item" src="https://scontent.ftun4-1.fna.fbcdn.net/v/t1.6435-9/46485342_2216992951916177_620915343149236224_n.jpg?_nc_cat=101&ccb=1-3&_nc_sid=8bfeb9&_nc_ohc=8WV9-WFFWaMAX_5aItD&_nc_ht=scontent.ftun4-1.fna&oh=8de269385de54c9757383594b6b021df&oe=60933625"/>
            <img className="item" src="https://scontent.ftun4-1.fna.fbcdn.net/v/t1.6435-9/46485342_2216992951916177_620915343149236224_n.jpg?_nc_cat=101&ccb=1-3&_nc_sid=8bfeb9&_nc_ohc=8WV9-WFFWaMAX_5aItD&_nc_ht=scontent.ftun4-1.fna&oh=8de269385de54c9757383594b6b021df&oe=60933625"/>

      </div>
    </div>
  );
}

export default Profile;
