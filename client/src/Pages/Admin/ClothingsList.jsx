import { useDispatch, useSelector } from "react-redux";
import AdminLayout from "../../Layouts/AdminLayout";
import { getAllClothings } from "../../redux/slices/clothingSlice";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Clothing from "../../../../server/models/clothing.model";

function ClothingList() {
    const dispatch = useDispatch();
    const { clothingData } = useSelector((state) => state?.clothing);
    async function getEveryClothings() {
        await dispatch(getAllClothings())
    }


    let count = 0;
    useEffect(() => {
        getEveryClothings();
    }, [])
    return <AdminLayout>
        <div className="bg-[#2E3138] px-20 py-14 text-white">
            <Link to="/admin/clothing/create" className="font-semibold " >Create new clothing</Link>
            <table>
                <thead>
                    <tr>
                        <th>S.No</th>
                        <th>Image</th>
                        <th>Clothings</th>
                        <th>Clothings Name</th>
                        <th>Fabrics</th>
                        <th>Colors</th>
                    </tr>
                </thead>
                <tbody>
                    {clothingData.map((clothes, index) => {

                        return <tr key={index}>
                            <td>{++count}</td>
                            <td><img className="h-[50px] w-[50px]" src={clothes.clothing_category[index].thumbnail.secure_url} /></td>
                            <td>{clothes.clothing}</td>
                            <td>{clothes.clothing_category[index].clothing_type}</td>
                        </tr>
                    })}
                </tbody>
            </table>
        </div>
    </AdminLayout>
}
export default ClothingList;