import { useEffect, useState } from "react";
import { BsImageFill } from 'react-icons/bs';

import AdminLayout from "../../Layouts/AdminLayout";
import { useDispatch, useSelector } from "react-redux";
import { getAllFabrics } from "../../redux/slices/fabricSlice";

function ClothingForm(){
    const dispatch=useDispatch();
    const {fabricData}=useSelector((state)=>state?.fabric);
    async function getEveryFabrics(){
        await dispatch(getAllFabrics());
    }
    useEffect(()=>{
        getEveryFabrics()
    },[])
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
        // getting the image
        const uploadedImage = event.target.files[0];

        if(uploadedImage) {
            setSignupData({
                ...signupData,
                avatar: uploadedImage
            });
            const fileReader = new FileReader();
            fileReader.readAsDataURL(uploadedImage);
            fileReader.addEventListener("load", function () {
                setPreviewImage(this.result);
            })
        }
    }

return <AdminLayout>
    <div className="flex justify-center items-center bg-[#2e3138] px-20 py-14 text-white">
        <form >
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
                    <select name="" id="" className="text-black">
                        <option className="">Suits</option>
                        <option className="">Pants</option>
                        <option className="">T-Shirts</option>
                        <option className="">Shirts</option>
                        <option className="">Coats</option>
                    </select>

                    <div>
                        <label htmlFor="">Clothing Name</label>
                        <input type="text"/>
                    </div>
                   
                  <div >
                    <label className="font-bold text-yellow-500 text-xl" htmlFor="fabrics">Fabrics</label>
                           <div className="grid grid-cols-7">
                           {fabricData.map((fabric)=>{
                                return <div key={fabric._id}>
                                    <input type="checkbox" value={fabric.fabric._id}/>{fabric.fabric_name}
                                </div>
                            })}
                           </div>
                  </div>

                  <div>
                    <label className="font-bold text-yellow-500 text-xl" htmlFor="colors">Colors</label>
                    <div className="grid grid-cols-7">
                        {colors.map((color, index) => {
                            return <div key={index}>
                                <input type="checkbox" value={color} /> {color}
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