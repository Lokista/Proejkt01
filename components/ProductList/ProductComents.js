import React from "react";
import { colComRef, dbF } from "../../auth/firebase";
import { deleteDoc, doc } from "firebase/firestore";
import { useAuth } from "../Context/AuthContext";

function ProductComents({ id, account, comment, productId, track }) {
  const { user } = useAuth();

  const deleteComment = (e) => {
    e.preventDefault();
    const docRef = doc(dbF, "comments", id);
    deleteDoc(docRef);
  };

  const b = parseInt(productId);
  const a = parseInt(track);

  if (a !== b) {
    return;
  } else {
    return (
      <div
        className=" relative flex flex-col
        rounded-xl md:space-x-20 xl:space-x-32 
        scale-100 md:scale-90  p-5
         bg-zinc-700"
      >
        <div className="flex flex-col">
          <div className="grid grid-cols-2">
            <strong>{account}</strong>
            {user && user.email === account ? (
              <button
                className="w-16 bg-red-500"
                onClick={(e) => deleteComment(e)}
              >
                delete
              </button>
            ) : null}
          </div>
          <p className="p-4 bg-gray-600">{comment}</p>
        </div>
      </div>
    );
  }
}

export default ProductComents;
