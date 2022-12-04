import React from "react";
import Link from "next/link";
import { LoginIcon, LogoutIcon } from "@heroicons/react/outline";
import { useAuth } from "../Context/AuthContext";
import { useRouter } from "next/router";
import { useRef } from "react";
import { db } from "../../auth/firebase";
import { FirebaseError } from "firebase/app";

function MenuObject({ isKlicked }) {
  const router = useRouter();
  const comentRef = useRef(null);

  const sendComent = (e) => {
    e.preventDefault();
    if (!comentRef.current.value) return;
    db.collection("comments").add({
      comment: comentRef.current.value,
      account: user.email,
      timestamp: FirebaseError.firestore.FieldValue.serverTimeStamp(),
    });
    inputRef.current.value = "";
  };
  const { user, logout } = useAuth();

  return (
    <div className="flex flex-col z-90 text-red-500 items-center absolute  w-full bg-gray-900 bg-opacity-90 lg:hidden z-50">
      <Link href="/Home">
        <a className=" link2 active:bg-gray-800 transition-colors duration-100 p-2 w-full flex justify-center">
          Home
        </a>
      </Link>
      <Link href="/">
        <a className=" link2  active:bg-gray-800 transition-colors duration-100 p-2 w-full flex justify-center">
          Shop
        </a>
      </Link>
      <Link href="/">
        <a className=" link2 active:bg-gray-800 transition-colors duration-100 p-2 w-full flex justify-center">
          Gallery
        </a>
      </Link>
      <Link href="/">
        <a className=" link2 active:bg-gray-800 transition-colors duration-100 p-2 w-full flex justify-center">
          Contact
        </a>
      </Link>

      {/* function to add login needed here masta */}

      {user ? (
        <div
          onClick={() => {
            logout();
            router.push("/Login");
          }}
          className=" group bg-red-500 p-2  rounded-xl w-full flex justify-center bg-opacity-50"
        >
          <LogoutIcon className="h-15 w-6  transistion-color duration-700 cursor-pointer "></LogoutIcon>
          <p className=" transistion-color duration-700 cursor-pointer scale-100 text-gray-300">
            Logout
          </p>
        </div>
      ) : (
        <>
          <Link href="/Login" passHref>
            <div className=" group bg-gray-500 p-2  rounded-l-xl w-full flex justify-center bg-opacity-50">
              <LoginIcon className="h-15 w-6  transistion-color duration-700 cursor-pointer "></LoginIcon>
              <p className=" transistion-color duration-700 cursor-pointer scale-100 ">
                Login
              </p>
            </div>
          </Link>

          <Link href="/SignUp" passHref>
            <div className=" group  bg-red-500 p-2  rounded-r-xl w-full flex justify-center bg-opacity-50">
              <LogoutIcon className="text-white h-15 w-6 transistion-color duration-700 cursor-pointer"></LogoutIcon>
              <p className="text-white transistion-color duration-700 cursor-pointer scale-100">
                Sign In
              </p>
            </div>
          </Link>
        </>
      )}
    </div>
  );
}

export default MenuObject;
