import React from "react";

import Header from "../components/default/Header";

import SignupForm from '../components/landing-page/SignupForm'


export default function SignUp() {
	
	return (
    <>
      <main>
        <Header />
        <div class="container">
         <SignupForm/>
        </div>
      </main>
    </>
  );
}
