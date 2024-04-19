import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import AdminLayout from "../../Layouts/AdminLayout";
import { getOrderedData } from "../../redux/slices/orderSlice";

function Ordered(){
    const dispatch=useDispatch();
    const {orderData}=useSelector((state)=>state?.order);
    console.log(orderData);
    async function getAllOrders(){
        await dispatch(getOrderedData());
    }
    
function formatDate(dateString) {
    const date = new Date(dateString);
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, "0");
    const day = String(date.getDate()).padStart(2, "0");
    return `${year}/${month}/${day}`;
  }
    useEffect(()=>{
       getAllOrders()
    },[])
    let count=0;
    return (
        <AdminLayout>
            <div className="px-16 bg-[#2E3138] text-white pt-4">
                <p className="text-center text-6xl font-bold">Orders</p>
                <table className=" border-collapse border-2 ">
                    <thead>
                        <tr>
                            <th className="border-2 ">S.N</th>
                            <th className="border-2">Ordered Date</th>
                            <th className="border-2">Customer Name</th>
                            <th className="border-2">Phone number</th>
                            <th className="border-2 w-[130px]">Clothing type</th>
                            <th className="border-2 w-[60px]">Fabric</th>
                            <th className="border-2 w-[60px]">Color</th>
                            <th className="border-2 w-[60px]">Rate</th>
                            <th className="border-2">Measurements</th>
                        </tr>
                    </thead>
                    <tbody>
                       {
                        orderData.map((order,index)=>{
                            console.log(order.userId.fullName);
                            return <tr key={index}>
                                <td className="border-2 pl-2 font-semibold">{++count}</td>
                                <td className="border-2 pl-2 font-semibold">{formatDate(order.createdAt)}</td>
                                <td className="border-2 pl-2 font-semibold">{order.userId.fullName}</td>
                                <td className="border-2 pl-2 font-semibold">{order.userId.phoneNumber}</td>
                                <td className="border-2 pl-2 font-semibold">{order.clothing_type}</td>
                                <td className="border-2 pl-2 font-semibold">{order.fabric}</td>
                                <td className="border-2 pl-2 font-semibold">{order.color}</td>
                                <td className="border-2 pl-2 font-semibold">{order.rate}</td>
                                <td className="border-2 pl-2 font-semibold"><ul className="grid grid-cols-4 gap-[2px]">
                                    <li>Neck: {order.measurementId.neck}</li>
                                    <li>sleeves Length: {order.measurementId.sleevesLength}</li>
                                    <li>Bicep Around: {order.measurementId.bicepAround}</li>
                                    <li>Hips: {order.measurementId.hips}</li>
                                    <li>Stomach: {order.measurementId.stomach}</li>
                                    <li>Thigh: {order.measurementId.thigh}</li>
                                    <li>Shoulder Width: {order.measurementId.shoulderWidth}</li>
                                    <li>Chest Around: {order.measurementId.chestAround}</li>
                                    <li>Pants Waist: {order.measurementId.pantsWaist}</li>
                                    <li>LegLength: {order.measurementId.legLength}</li>
                                    </ul></td>
                            </tr>
                        })
                       }
                    </tbody>
                </table>
            </div>
        </AdminLayout>
    )
}

export default Ordered;