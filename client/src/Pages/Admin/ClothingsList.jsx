import { useDispatch, useSelector } from "react-redux";
import AdminLayout from "../../Layouts/AdminLayout";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import { getAllClothings } from "../../redux/slices/clothingSlice";
import React from "react";

function ClothingList() {
  const dispatch = useDispatch();
  const { clothingData } = useSelector((state) => state?.clothing);

  async function getEveryClothings() {
    await dispatch(getAllClothings());
  }

  useEffect(() => {
    getEveryClothings();
  }, []);

  return (
    <AdminLayout>
      <div className="bg-[#2E3138] px-20 py-14 text-white">
        <Link to="/admin/clothing/create" className="font-semibold">
          <button className="py-2 font-bold text-yellow-500">Create new clothing</button>
        </Link>
        <table className="table-auto border-2">
          <thead>
            <tr>
              <th className="w-[50px] border-2">S.No</th>
              <th className="w-[100px] border-2">Image</th>
              <th className="w-[150px] border-2">Clothings Name</th>
              <th className="w-[125px] border-2">Fabrics</th>
              <th className="w-[125px] border-2">Colors</th>
             
            </tr>
          </thead>
          <tbody>
            {clothingData.map((cloth, index) => (
              <React.Fragment key={index}>
                {cloth.clothing_category.map((category, idx) => (
                  <tr>
                    <td className="w-[50px] border-[2px] pl-4">{index * cloth.clothing_category.length + idx + 1}</td>
                    <td className=" border-[2px] pl-4">
                      <img
                        className="h-[50px] w-[50px]"
                        src={category.thumbnail.secure_url}
                        alt="Clothing Thumbnail"
                      />
                    </td>
                    <td className="border-[2px] pl-4">{category.clothing_type}</td>
                    <td className="border-[2px] pl-4">
                      {category.fabrics.map((fabric, i) => (
                        <p key={i}>{fabric.fabricId.fabric_name}</p>
                      ))}
                    </td>
                    <td className="border-[2px] pl-4">
                      {category.colors.map((color, i) => (
                        <p key={i}>{color}</p>
                      ))}
                    </td>
                   
                  </tr>
                ))}
              </React.Fragment>
            ))}
          </tbody>
        </table>
      </div>
    </AdminLayout>
  );
}

export default ClothingList;
