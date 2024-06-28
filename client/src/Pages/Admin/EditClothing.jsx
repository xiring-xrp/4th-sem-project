import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams, useNavigate } from "react-router-dom";
import AdminLayout from "../../Layouts/AdminLayout";
import { getClothing, updateClothing } from "../../redux/slices/clothingSlice";

function EditClothing() {
  const { id } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { clothing } = useSelector((state) => state.clothing);
    
  const [formData, setFormData] = useState({
    name: "",
    clothing_category: [
      {
        clothing_type: ""
      }
    ],
  });

  useEffect(() => {
    dispatch(getClothing(id));
  }, [dispatch, id]);

  useEffect(() => {
    if (clothing) {
      setFormData(clothing);
    }
  }, [clothing]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleCategoryChange = (index, field, value) => {
    const newCategories = [...formData.clothing_category];
    newCategories[index][field] = value;
    setFormData({ ...formData, clothing_category: newCategories });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await dispatch(updateClothing({ id, formData }));
    navigate("/admin/clothing");
  };
  
  return (
    <AdminLayout>
      <div className="bg-[#2E3138]">
        <div className="flex justify-center pt-20">
          <h1 className="text-5xl font-semibold">
              <span className="text-yellow-500 font-bold">
                Edit Clothing
              </span>
          </h1>
        </div>
        <div className="p-10 text-white flex items-center justify-center gap-10 h-[350px]">
            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <label className="block font-bold mb-2 text-yellow-500">Name</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  className="text-black rounded-sm pl-1 w-full"
                />
              </div>
              {formData.clothing_category.map((category, index) => (
                <div key={index} className="mb-4">
                  <label className="block font-bold mb-2 text-yellow-500">Clothing Type</label>
                  <input
                    type="text"
                    value={category.clothing_type}
                    onChange={(e) => handleCategoryChange(index, "clothing_type", e.target.value)}
                    className="text-black rounded-sm pl-1 w-full"
                  />
                </div>
              ))}
              <button type="submit" className="mt-8 bg-yellow-600 hover:bg-yellow-500 transition-all ease-in-out duration-300 rounded px-2 py-2 font-semibold text-lg cursor-pointer">
                Save Changes
              </button>
            </form>
        </div>
      </div>
    </AdminLayout>
  );
}

export default EditClothing;
