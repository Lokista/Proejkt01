import React, { useEffect, useState } from "react";
import { ref, set, get, child, onValue, remove } from "firebase/database";
import { colProRef } from "../../auth/firebase";
import { addDoc, collection, doc, setDoc, deleteDoc } from "firebase/firestore";
import { dbF } from "../../auth/firebase";
import { stringify } from "postcss";

function AdminPanel2({ products }) {
  const [typeDelete, setTypeDelete] = useState(null);

  const prRef = colProRef;
  console.log("xd", prRef);

  const restoreData = (e) => {
    e.preventDefault();
    console.log("dzialam");
    {
      products.map((list) => {
        setDoc(doc(dbF, "products", `${list.id}`), {
          id: list.id,
          title: list.title,
          description: list.description,
          price: list.price,
          count: list.count,
          image: list.image,
        });
      });
    }
  };
  //delete data
  const deleteData = () => {
    deleteDoc(doc(dbF, "products", `${typeDelete}`));
    setTypeDelete("");
  };
  return (
    <div>
      <div>
        {products.forEach((u) => {
          console.log(u);
        })}
      </div>
      <button onClick={(e) => restoreData(e)} className="button">
        add to data base
      </button>

      <input
        className="text-black"
        type="text"
        value={typeDelete}
        onChange={(e) => setTypeDelete(e.target.value)}
      ></input>
      <button onClick={(e) => deleteData(e)} className=" button">
        delete
      </button>

      <button className=" button">x</button>
    </div>
  );
}

export default AdminPanel2;
