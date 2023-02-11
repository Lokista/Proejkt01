import { stringify } from "postcss";
import React from "react";
import Image from "next/image";
import Currency from "react-currency-formatter";
import { useDispatch } from "react-redux";
import { addToBasket, removeFromBasket } from "../../Redux/BasketSlice";
import { useAuth } from "../Context/AuthContext";
import { useRef } from "react";
import { dbF, colComRef } from "../../auth/firebase";
import { serverTimestamp, getDocs, addDoc } from "firebase/firestore";
import { useEffect, useState } from "react";
import { useCollection } from "react-firebase-hooks/firestore";
import ProductComents from "./ProductComents";
import Link from "next/link";

function ProductView({ id, title, description, price, count, image, track }) {
  
  const commentRef = useRef(null);

  const [collectionPosts, loading, error] = useCollection(colComRef);

  const { user, logout } = useAuth();

  const dispatch = useDispatch();
  useEffect(() => {
    // getDocs(colComRef).then((snap) => { // get to the documents by reference
    //     snap.docs.forEach((doc) => {
    //         setTempStorage({...doc.data()})
    //     })
    //   })
    //   console.log(`jest nowy ${collectionPosts}`)
  }, []);

  const sendComent = (e) => {
    e.preventDefault();
    if (!commentRef.current.value) return;

    addDoc(colComRef, {
      comment: commentRef.current.value,
      account: user.email,
      productId: id,
      timestamp: serverTimestamp(),
    });
    commentRef.current.value = "";
  };

  const removeItemFromBasket = () => {
    dispatch(removeFromBasket({ id }));
    console.log(id);
  };

  const addItemToBasket = () => {
    const product = {
      id,
      title,
      description,
      price,
      count,
      image,
    };
    dispatch(addToBasket(product));
  };

  const b = parseInt(id);
  const a = parseInt(track);

  if (a !== b) {
    return;
  } else {
    return (
      <div>
        <div className=" relative grid md:grid-cols-4  rounded-xl md:space-x-20 xl:space-x-32 scale-100 md:scale-90 justify-items-center sm:justify-items-start p-5 bg-zinc-700">
          <div className="w-auto">
            <Image
              className="w-36 h-36"
              src={image}
              width={250}
              height={250}
              layout="fixed"
              alt="xd"
            />
          </div>
          <div className="col-span-2">
            <p className="text-2xl md:text-3xl font-bold"> {title} </p>
            <p className=" text-md md:text-xl"> {description} </p>
            <p className="font-bold">
              <Currency quantity={price} currency="usd"></Currency>
            </p>
          </div>
          <div className="flex flex-col">
            <button
              onClick={addItemToBasket}
              className=" h-auto rounded-xl bg-red-500 p-2 
               text-xl font-semibold hover:scale-105 transition-colors 
               duration-700 hover:bg-red-400 my-auto"
            >
              Add one more
            </button>

            <button
              onClick={removeItemFromBasket}
              className=" h-auto rounded-xl bg-red-500 p-2  
               text-xl font-semibold hover:scale-105 transition-colors 
               duration-700 hover:bg-red-400 my-auto"
            >
              Remove from basket
            </button>
          </div>
        </div>
        <div
          className=" relative flex flex-col
        rounded-xl md:space-x-20 xl:space-x-32 
        scale-100 md:scale-90 p-5
         bg-zinc-700"
        >
          {user ? (
            <form className="flex flex-col" onSubmit={sendComent}>
              {user ? (
                <p>
                  {" "}
                  Write coment belove <strong>{user.email}</strong>
                </p>
              ) : (
                <strong>you need to bee loged in to comment</strong>
              )}
              <input
                className="w-auto h-[100px] text-black"
                type="text"
                ref={commentRef}
                placeholder={`what do you think about product ${
                  user ? user.email : "guest"
                }`}
              ></input>
              <button className="button w-32 tracking-widest " type="submit">
                {" "}
                Submit
              </button>
            </form>
          ) : (
            <p className="text-xl font-bold flex">
              Login to comment
              <p className="text-green-200 pl-1">
                {" "}
                <Link href="/Login" passHref>
                  <>
                  {" "}
                  (here){" "}
                  </>
                </Link>
              </p>{" "}
            </p>
          )}
        </div>

        {/* coments by ppl */}
        {collectionPosts?.docs.map((posts) => (
          <ProductComents
            key={posts.id}
            id={posts.id}
            account={posts.data().account}
            comment={posts.data().comment}
            productId={posts.data().productId}
            track={track}
          ></ProductComents>
        ))}
      </div>
    );
  }
}

export default ProductView;
