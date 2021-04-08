import React from "react";

function Profile() {
  return (
    <div>
      <div
        style={{
          display: "flex",
          justifyContent: "space-around",
          margin: "18px 0px",
        }}
      >
        <div>
          <img
            style={{ width: "160px", height: "160px", borderRadius: "10px" }}
            src="https://scontent.ftun4-1.fna.fbcdn.net/v/t1.6435-9/157381447_2860189534263179_1326743122113976050_n.jpg?_nc_cat=107&ccb=1-3&_nc_sid=09cbfe&_nc_ohc=LFLUSqMx_vAAX8ksLnl&_nc_ht=scontent.ftun4-1.fna&oh=4bbdc176b308274bfd4a80859da0fa13&oe=6094D0C8"
          />
        </div>
        <div>
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
              <strong>9999</strong> followers
            </h6>
            <h6>
              <strong>50</strong> posts
            </h6>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Profile;
