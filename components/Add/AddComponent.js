import { doc, setDoc } from "firebase/firestore";
import React, { useState, useEffect, useRef } from "react";
import { dbF } from "../../auth/firebase";
import { useAuth } from "../Context/AuthContext";
import useFindNextId from "../CustomHooks/useFindNextId";
import Svg from "../Svg";
import { getNextId } from "../CustomHooks/useFindNextId";
import { shoeSize, shoeType, shoeCategory } from "../reusable/shoesInfo";
import { addSchema } from "../Validation/AddSchema";
import { useForm, useWatch } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

function AddComponent() {
  const nextIndex = useFindNextId();
  const [hide, setHide] = useState(false);
  const sizeRef = useRef(null);
  const { user, logout } = useAuth();
  const [shoeTypeArray, setShoeTypeArray] = useState();
  const [shoeCategoryArray, setShoeCategoryArray] = useState();

  const uid = () =>
    // simple uid generator
    String(Date.now().toString(32) + Math.random().toString(16)).replace(
      /\./g,
      ""
    );

  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(addSchema),
  });
  useEffect(() => {
    setShoeCategoryArray(shoeCategory);
    setShoeTypeArray(shoeType);
  }, []);

  useEffect(() => {
    console.log(shoesData);
  });
  const delCategory = (item) => {
    // delete category from the list
    console.log("to jest e ", item);
    setShoeCategoryArray([...shoeCategoryArray, item]);
    setShoesData({
      ...shoesData,
      category: shoesData.category.filter((cat) => cat !== item),
    });
  };
  const delType = (item) => {
    // delete type from the list
    console.log("to jest e ", item);
    setShoesData({
      ...shoesData,
      type: shoesData.type.filter((cat) => cat !== item),
    });
    setShoeTypeArray([...shoeTypeArray, item]);
  };

  const addCategory = (e) => {
    // add category to the list
    if (shoesData.category == null) {
      setShoesData({ ...shoesData, category: [e] });
      setShoeCategoryArray(shoeCategoryArray.filter((cat) => cat !== e));
      return;
    }
    if (shoesData.category.includes(e)) {
      console.log("category already exist");
    } else {
      setShoesData({
        ...shoesData,
        category: [...shoesData.category, e],
      });
      setShoeCategoryArray(shoeCategoryArray.filter((cat) => cat !== e));
    }
  };
  const addType = (e) => {
    // add type to the list
    if (shoesData.type == null) {
      setShoesData({ ...shoesData, type: [e] });
      setShoeTypeArray(shoeTypeArray.filter((item) => item !== e));
      return;
    }
    if (shoesData.type.includes(e)) {
      console.log("type already exist");
    } else {
      setShoesData({
        ...shoesData,
        type: [...shoesData.type, e],
      });
      setShoeTypeArray(shoeTypeArray.filter((item) => item !== e));
    }
  };

  const [shoesData, setShoesData] = useState({
    // state for shoes data
    owner: user.email,
    title: "",
    model: "",
    description: "",
    size: "",
    count: "",
    price: "",
    image: null,
    brand: "",
    category: null,
    type: null,
  });

  const addNewData = () => {
    // add new data to the state
    getNextId().then((fr) => {
      //get next id from firebase and made promise
      console.log("to ja", fr);
      setDoc(doc(dbF, "products", `${fr}`), {
        id: fr,
        owner: shoesData.owner,
        title: shoesData.title,
        model: shoesData.model,
        description: shoesData.description,
        size: shoesData.size,
        count: shoesData.count,
        price: shoesData.price,
        image: shoesData.image,
        brand: shoesData.brand,
        category: shoesData.category,
        type: shoesData.type,
      });
    });
  };

  const addImage = (e) => {
    // add image to the state
    const file = e.target.files[0];
    const reader = new FileReader(); // read file
    if (e.target.files[0]) {
      reader.readAsDataURL(e.target.files[0]);
    }
    reader.onloadend = () => {
      setShoesData({ ...shoesData, image: reader.result });
    };
  };

  const deleteImage = () => {
    setShoesData({ ...shoesData, image: null });
  };

  return (
    <div className="relative bg-backgr text-center content-center center item-center 
    justify-center origin-center object-center place-items-center snap-center">
      <h1 className=" text-5xl font-extrabold tracking-widest text-red-500 text-center mt-5">
        Add product
      </h1>
      <form
        className=" relative bg-elementC rounded-xl sm:m-6 md:m-8 lg:m-12 p-12 "
        onSubmit={handleSubmit(addNewData)}
      >
        <div className="relative flex flex-row justify-between space-x-2 ">
          <div className="">
            {/* NAME */}
            <div className="  text-left text-xl flex flex-col ">
              <label className=" text-red-500 font-semibold">
                Product name:
              </label>
              <input
                placeholder="type your name..."
                type="text "
                className="rounded-md bg-gray-100 text-gray-900 outline-none pl-4"
                {...register("title", {
                  onChange: (e) => {
                    setShoesData({ ...shoesData, title: e.target.value });
                  },
                })}
              ></input>
              <span className="mb-8 text-sm text-red-500">
                {errors?.title?.message}
              </span>
            </div>
            <br></br>
            {/* MODEL */}
            <div className="  text-left text-xl flex flex-col ">
              <label className=" text-red-500 font-semibold">
                Product model:
              </label>
              <input
                placeholder="type your model..."
                type="text "
                className="rounded-md bg-gray-100 text-gray-900 outline-none pl-4"
                {...register("model", {
                  onChange: (e) => {
                    setShoesData({ ...shoesData, model: e.target.value });
                  },
                })}
              ></input>
              <span className="mb-8 text-sm text-red-500">
                {errors?.model?.message}
              </span>
            </div>
            <br></br>
            {/* BRAND */}
            <div className="  text-left text-xl flex flex-col ">
              <label className=" text-red-500 font-semibold">Brand name:</label>
              <input
                placeholder="type your brand..."
                type="text "
                className="rounded-md bg-gray-100  outline-none pl-4 text-gray-900"
                {...register("brand", {
                  onChange: (e) => {
                    setShoesData({ ...shoesData, brand: e.target.value });
                  },
                })}
              ></input>
              <span className="mb-8 text-sm text-red-500">
                {errors?.brand?.message}
              </span>
            </div>
            <br></br>
            {/* SIZE */}
            <div className="  text-left text-xl flex flex-col ">
              <label className=" text-red-500 font-semibold">What size: </label>
              <select
                className="bg-elementC outline-gray-300 outline-1 outline "
                // onChange={(e) =>
                //   setShoesData({ ...shoesData, size: e.target.value })
                // }
                {...register("size", {
                  onChange: (e) => {
                    setShoesData({ ...shoesData, size: e.target.value });
                  },
                })}
                onClick={(e) => {
                  setHide(!hide);
                }}
              >
                <option className={` bg-elementC black `}> ---</option>
                {shoeSize.map((shoe) => {
                  return (
                    <option
                      className={` bg-elementC black `}
                      value={shoe.value}
                    >
                      {shoe.label}
                    </option>
                  );
                })}
              </select>
              <span className="mb-8 text-sm text-red-500">
                {errors?.size?.message}
              </span>
            </div>
            {/* COUNT */}
            <div className="  text-left text-xl flex flex-col ">
              <label className=" text-red-500 font-semibold">How many:</label>
              <input
                placeholder="type your count(1,20,100...)"
                type="number"
                className="text-gray-900 outline-none pl-4 rounded-md bg-gray-100"
                {...register("count", {
                  onChange: (e) => {
                    setShoesData({ ...shoesData, count: e.target.value });
                  },
                })}
              ></input>
              <span className="mb-8 text-sm text-red-500">
                {errors?.count?.message}
              </span>
            </div>
            {/* IMAGE */}
            <div className="  text-left text-xl flex flex-col ">
              <label className=" text-red-500 font-semibold">Add image:</label>
              <input
                type="file"
                // onChange={addImage}
                {...register("image", {
                  onChange: (e) => {
                    addImage(e);
                  },
                })}
                // ref={imageInput}
                className="text-gray-900 outline-none pl-4 rounded-md"
              />
              <span className="mb-8 text-sm text-red-500">
                {errors?.image?.message}
              </span>
            </div>

            {/* PRICE */}
            <div className="text-left text-xl flex flex-col ">
              <label className="text-red-500 font-semibold">Price:</label>
              <input
                placeholder="type your price in dollars(100,200,300...)"
                type="number"
                className="text-gray-900 outline-none pl-4 rounded-md bg-gray-100"
                {...register("price", {
                  onChange: (e) => {
                    setShoesData({ ...shoesData, price: e.target.value });
                  },
                })}
              ></input>
              <span className="mb-8 text-sm text-red-500">
                {errors?.price?.message}
              </span>
            </div>
          </div>
          {/* Second flex div */}
          <div className="w-[400px] flex flex-col text-xl">
            {/* delete/show categories */}
            <div className="relative p-5  text-center">
              <label className="text-red-500  font-semibold">
                Your categories
              </label>
              <div className="flex bg-zinc-800 rounded-md p-1 space-x-3 flex-wrap">
                {shoesData.category != null &&
                  shoesData.category.map((shoe) => {
                    return (
                      <div key={uid()} className="flex">
                        <label
                          onClick={(e) => delCategory(shoe)}
                          // {...register("category" , {
                          //   onClick: (e) => {
                          //     setShoesData({
                          //       shoesData,
                          //       category: e.target.value
                          //     })
                          //   }
                          // }
                          // )}
                          className="hover:text-red-500 transition-colors duration-500 cursor-pointer"
                        >
                          {shoe}
                        </label>
                        <span className="mb-8 text-sm text-red-500">
                          {errors?.category?.message}
                        </span>

                        <div
                          className=" h-3"
                          onClick={(e) => delCategory(shoe)}
                        >
                          <Svg need="delete" />
                        </div>
                      </div>
                    );
                  })}
              </div>
            </div>
            {/* delete/show type */}
            <div className="relative p-5  text-center ">
              <label className="text-red-500 font-semibold ">
                Your type of shoe
              </label>
              <div className="flex bg-zinc-800 rounded-md p-1 space-x-3 flex-wrap">
                {shoesData.type != null &&
                  shoesData.type.map((shoe) => {
                    return (
                      <div key={uid()} className="flex">
                        <label
                          onClick={(e) => delType(shoe)}
                          className="hover:text-red-500 transition-colors duration-500 cursor-pointer"
                        >
                          {shoe}
                        </label>
                        <div className=" h-3" onClick={(e) => delType(shoe)}>
                          <Svg need="delete" />
                        </div>
                      </div>
                    );
                  })}
              </div>
            </div>
            <div className=" text-center">
              <label className="relative font-semibold text-red-500 ">
                {" "}
                Your preview image:
              </label>
              {shoesData.image && (
                <div className="flex justify-center">
                  <img
                    src={shoesData.image}
                    alt="shoe"
                    className="w-40 h-40 object-cover"
                  />
                </div>
              )}
            </div>
          </div>
          {/* third flex div */}
          <div className=" text-xl">
            {/* adding category */}
            <div className="w-[400px] text-center">
              <label className="text-red-500 font-semibold ">
                Pick category that describe your shoes
              </label>
              <div className="flex bg-zinc-800 flex-wrap space-x-3">
                {shoeCategoryArray?.map((shoe) => {
                  return (
                    <div key={uid()} className="flex">
                      <label
                        onClick={(e) => addCategory(shoe)}
                        className="hover:text-green-500 transition-colors duration-500 cursor-pointer"
                      >
                        {shoe}
                      </label>
                      <div
                        onClick={(e) => addCategory(shoe)}
                        className="h-0 bg-red-300 relative top-2 left-0.5"
                      >
                        <Svg need="add" />
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
            {/* adding type */}
            <div className="w-[400px] text-center">
              <label className="text-red-500 font-semibold">
                Pick type that describe your shoes
              </label>
              <div className="flex bg-zinc-800 flex-wrap space-x-3">
                {shoeTypeArray?.map((shoe) => {
                  return (
                    <div key={uid()} className="flex">
                      <label
                        onClick={(e) => addType(shoe)}
                        className="hover:text-green-500 transition-colors duration-500 cursor-pointer"
                      >
                        {shoe}
                      </label>
                      <div
                        onClick={(e) => addType(shoe)}
                        className="h-0 bg-red-300 relative top-2 left-0.5"
                      >
                        <Svg need="add" />
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
        <div></div>
        <div className="text-center flex flex-col">
          <label className="text-xl font-semibold text-red-500 pb-3 tracking-widest mt-5  pr-[150px] pt-3">
            Describe:
          </label>
          <textarea
            {...register("description", {
              onChange: (e) => {
                setShoesData({ ...shoesData, description: e.target.value });
              },
            })}
            rows="5"
            cols="25"
            type="text"
            className={`text-gray-900 bg-gray-100  rounded-md  pl-4 pb-1 outline-none w-[300px] sm:w-[500px] ml-auto mr-auto`}
            placeholder="describe your problem..."
          ></textarea>
          <span className="mb-8 text-sm text-red-500">
            {errors?.description?.message}
          </span>
        </div>

        <div className=" text-center">
          <button
            type="submit"
            className="bg-red-500 p-3 pl-9 pr-9 rounded-md m-10 font-semibold text-gray-200 transition-colors hover:bg-red-400 "
          >
            Add item
          </button>
        </div>
      </form>
    </div>
  );
}

export default AddComponent;
