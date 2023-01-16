import React, { useRef, useState } from "react";
import { Page, Section } from "react-page-layout";
import { useDispatch, useSelector } from "react-redux";
import uploadImage from "../assets/images/profile.svg";
import { updateProfile } from "../reducks/users/operations";
import { getUser } from "../reducks/users/selectors";
import ProfileHeader  from '../components/default/ProfileHeader';
import { Link } from "react-router-dom";
import defaultProfile from "../assets/images/profile.svg"
import menuIcon from "../assets/images/menu-icon.svg"

export default function MyProfile() {
	const dispatch = useDispatch();
	const selector = useSelector((state) => state);
	const user = getUser(selector);
	const userValues = { id: user.id, name: user.name, email: user.email, profile: user.profile };
	const [values, setValues] = useState(userValues);
	const [image, setImage] = useState([]);
  	const [isLoading, setIsLoading] = useState(false);
	const [openModalMenu, setOpenModalMenu] = useState(false);
	const token = user ? user.token : null;

	

	const [previewImage, setPreviewImage] = useState(null);

	const inputFile = useRef(null);
	const onButtonClick = () => {
		inputFile.current.click();
	};

	const inputImage = (event) => {
		const file = event.target.files[0];
		const objectUrl = URL.createObjectURL(file);
		setPreviewImage(objectUrl);
		setImage(file);
		setValues({...values, profile: null})
	};

	const handleInputChange = (e) => {
		const { name, value } = e.target;

		setValues({
			...values,
			[name]: value,
		});
	};

	const updateProfileHandler = async () => {
		setIsLoading(true);
		await dispatch(updateProfile({ ...values, profile: image }, values.id));
    	setIsLoading(false);
	};

	return (
    <Page layout="default">
      <Section slot="main">
        <div>
          {token ? (
            <button
              onClick={() => setOpenModalMenu(true)}
              className="sign-out-btn"
            >
              <img
                src={user.profile ?? defaultProfile}
                alt="profile-img"
                width={36}
                height={36}
              />
              <div className="profile-nav">
                {user.name}<br/>
                {user.email}
              </div>

              <img src={menuIcon} />
            </button>
          ) : (
            <Link to="/sign-in">Sign in</Link>
          )}
          <ProfileHeader
            user={user}
            openModalMenu={openModalMenu}
            setOpenModalMenu={setOpenModalMenu}
          />
        </div>
        <div class="box">
          <div class="profile">
            {/* <img src="img/profile.svg" alt=""/> */}
            <input
              type="file"
              style={{ display: "none" }}
              ref={inputFile}
              onChange={inputImage}
            />
            <img
              name="image"
              onClick={onButtonClick}
              type="file"
              src={
                previewImage
                  ? previewImage
                  : values.profile
                  ? values.profile
                  : uploadImage
              }
              alt="Upload"
            />
            <h1>{`${
              isLoading ? "Updating Profile..." : "Add Profile Picture"
            }`}</h1>
          </div>
          <form action="#">
            <label for="usename">USERNAME</label>
            <br />
            <input
              type="text"
              name="name"
              value={values.name}
              onChange={handleInputChange}
              placeholder="Type your name"
            />
            <br />
            <label for="usename">E-MAIL</label>
            <br />
            <input
              type="email"
              name="email"
              onChange={handleInputChange}
              value={values.email}
              placeholder="Type your mail address"
            />
            <br />
            <button id="btn-login" onClick={updateProfileHandler}>
              SIGN UP
            </button>
          </form>
        </div>
      </Section>
    </Page>
  );
}
