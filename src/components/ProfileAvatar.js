import Avatar from "@material-ui/core/Avatar";

import "./profileavatar.css";

const ProfileAvatar = (props) => {
  return (
    <div className="profileavatar-container">
      <Avatar
        variant="circular"
        src="https://d2qp0siotla746.cloudfront.net/img/use-cases/profile-picture/template_0.jpg"
      />
      <div
        style={{ marginLeft: "12px" }}
        className="profileavatar-text-container"
      >
        <p style={{ fontWeight: "bold" }}>John Doe</p>
        <p>( Admin )</p>
      </div>
    </div>
  );
};

export default ProfileAvatar;
