import React, { useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import logo from "../../assets/images/logo.svg";

import Logo from "../../assets/images/logo.png";
import { getUser } from "../../reducks/users/selectors";
import ProfileHeader from "./ProfileHeader";

const Header = () => {
	const selector = useSelector((state) => state);
	const user = getUser(selector);
	const token = user ? user.token : null;
	const [openModalMenu, setOpenModalMenu] = useState(false);

	return (
    <aside>
      <div class="logo">
        <Link to="/">
          <img src={logo} alt="logo" />
        </Link>
      </div>
    </aside>
  );
};

export default Header;
