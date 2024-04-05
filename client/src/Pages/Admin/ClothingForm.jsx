import { useEffect, useState } from "react";
import { BsImageFill } from 'react-icons/bs';

import AdminLayout from "../../Layouts/AdminLayout";
import { useDispatch, useSelector } from "react-redux";
import { getAllFabrics } from "../../redux/slices/fabricSlice";
import { createClothing } from "../../redux/slices/clothingSlice";
import { useNavigate } from "react-router-dom";

function ClothingForm() {
    const dispatch = useDispatch();
    const navigate=useNavigate();
    const { fabricData } = useSelector((state) => state?.fabric);
    const [clothingData, setClothingData] = useState({
        clothing: "suits",
        clothing_category: [
            {
                clothing_type: "",
                thumbnail: "",
                fabrics: [{
                    fabricId: ""
                }],
                colors: []

            }

        ]

    })

    async function getEveryFabrics() {
        await dispatch(getAllFabrics());
    }
    useEffect(() => {
        getEveryFabrics()
    }, [])
    const colors = [
        "Black",
        "White",
        "Navy",
        "Gray",
        "Blue",
        "Brown",
        "Beige",
        "Red",
        "Green",
        "Pink",
        "Purple",
        "Yellow",
        "Orange",
        "Teal",
        "Burgundy",
        "Olive",
        "Cream",
        "Charcoal",
        "Tan",
        "Khaki"
    ];


    const [previewImage, setPreviewImage] = useState("");

    function getImage(event) {
        event.preventDefault();
        const uploadedImage = event.target.files[0];

        if (uploadedImage) {
            const fileReader = new FileReader();
            fileReader.readAsDataURL(uploadedImage);
            fileReader.addEventListener("load", function () {
                const imageDataUrl = this.result;

                setClothingData(prevState => {
                    const updatedCategory = { ...prevState.clothing_category[0], thumbnail: imageDataUrl };
                    const updatedCategories = [updatedCategory, ...prevState.clothing_category.slice(1)];
                    return { ...prevState, clothing_category: updatedCategories };
                });
                setPreviewImage(imageDataUrl);
            });
        }
    }

    function handleUserInput(event) {
        const { name, value, type, checked } = event.target;

        if (type === "checkbox") {
            // Handle checkboxes (fabrics and colors)
            if (name === "fabrics") {
                // Handle fabrics checkboxes
                setClothingData(prevState => ({
                    ...prevState,
                    clothing_category: prevState.clothing_category.map(category => ({
                        ...category,
                        fabrics: checked ? [...category.fabrics, { fabricId: value }] : category.fabrics.filter(fabric => fabric.fabricId !== value)
                    }))
                }));
            } else if (name === "colors") {
                // Handle colors checkboxes
                setClothingData(prevState => ({
                    ...prevState,
                    clothing_category: prevState.clothing_category.map(category => ({
                        ...category,
                        colors: checked ? [...category.colors, value] : category.colors.filter(color => color !== value)
                    }))
                }));
            }
        } else {
            // For other input types, update the state directly
            if (name === "clothingName") {
                // Update clothing name
                setClothingData(prevState => ({
                    ...prevState,
                    clothing_category: prevState.clothing_category.map((category, index) => {
                        if (index === 0) {
                            return {
                                ...category,
                                clothing_type: value
                            };
                        }
                        return category;
                    })
                }));
            } else {
                // Handle other inputs (if any)
                setClothingData(prevState => ({
                    ...prevState,
                    [name]: value
                }));
            }
        }
    }

    async function createNewClothing(e) {
        e.preventDefault();
        const response = await dispatch(createClothing(clothingData));
        if (response?.payload?.success) {
            setClothingData({
                clothing: "suits",
                clothing_category: [
                    {
                        clothing_type: "",
                        thumbnail: "",
                        fabrics: [{
                            fabricId: ""
                        }],
                        colors: []

                    }

                ]

            }
            )
            navigate("/admin/cothing");
            
        }
    }



    return <AdminLayout>
        <div className="flex justify-center items-center bg-[#2e3138] px-20 py-14 text-white">
            <form onSubmit={createNewClothing} noValidate>
                <h1 className="text-center text-2xl text-yellow-500 font-bold">CLothing Form</h1>

                <label htmlFor="image_uploads" className="cursor-pointer">
                    {previewImage ? (
                        <img className="w-24 h-24 rounded-full m-auto" src={previewImage} />
                    ) : (
                        <BsImageFill className='w-24 h-24 rounded-full m-auto' />
                    )}
                </label>
                <input
                    onChange={getImage}
                    className="hidden"
                    type="file"
                    name="image_uploads"
                    id="image_uploads"
                    accept=".jpg, .jpeg, .png, .svg"
                />

                <label className="font-bold text-yellow-500 text-xl" htmlFor="cloth_category">
                    Clothing Category
                </label>
                <select name="cloth_category" id="cloth_category" className="text-black" value={clothingData.clothing} onChange={handleUserInput}>
                    <option className="" value="Suits">Suits</option>
                    <option className="" value="Pants">Pants</option>
                    <option className="" value="T-Shirst">T-Shirts</option>
                    <option className="" value="Shirts">Shirts</option>
                    <option className="" value="Coats">Coats</option>
                </select>

                <div>
                    <label htmlFor="clothingName">Clothing Name</label>
                    <input
                        type="text"
                        name="clothingName" // Corrected name attribute
                        id="clothingName"
                        value={clothingData.clothing_category[0].clothing_type} // Updated value to match the state structure
                        onChange={handleUserInput}
                        placeholder="Enter your clothing name"
                        className="text-black font-bold"
                    />
                </div>


                <div >
                    <label className="font-bold text-yellow-500 text-xl" htmlFor="fabrics">Fabrics</label>
                    <div className="grid grid-cols-7">
                        {fabricData && fabricData.map((fabric) => {
                            return <div key={fabric._id}>
                                <input type="checkbox" value={fabric._id} onChange={handleUserInput} name="fabrics" />{fabric.fabric_name}
                            </div>
                        })}
                    </div>
                </div>

                <div>
                    <label className="font-bold text-yellow-500 text-xl" htmlFor="colors">Colors</label>
                    <div className="grid grid-cols-7">
                        {colors.map((color, index) => {
                            return <div key={index}>
                                <input type="checkbox" value={color} onChange={handleUserInput} name="colors" /> {color}
                            </div>
                        })}
                    </div>
                </div>

                <button type="submit" className='mt-2 bg-yellow-600 hover:bg-yellow-500 transition-all ease-in-out duration-300 rounded-sm px-4 py-2 font-semibold text-lg cursor-pointer'>
                    Create Clothing
                </button>


            </form>
        </div>
    </AdminLayout>
}
export default ClothingForm;