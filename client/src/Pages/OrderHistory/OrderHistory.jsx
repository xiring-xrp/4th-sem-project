import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import HomeLayout from "../../Layouts/HomeLayout";
import { getOrderdataByUser } from "../../redux/slices/orderSlice";

function OrderHistory(){
    const dispatch=useDispatch();
    const {orderData}=useSelector((state)=>state?.order);

    async function getAllOrders(){
        await dispatch(getOrderdataByUser());
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
    console.log(orderData);
    let count=0;
    return(
        <HomeLayout>
            <div className="px-16 bg-[#2E3138] h-[100vh] text-white pt-15 py-16">
                <p className="text-center text-yellow-500 text-5xl font-bold">Order History</p>
                <div  className="flex justify-center">
                <table className="mt-10 border-collapse border-2">
                    <thead>
                        <tr className="h-[50px]">
                            <th className="border-2 w-[50px] ">S.N</th>
                            <th className="border-2 w-[200px]">Ordered Date</th>
                            <th className="border-2 w-[200px]">Clothing type</th>
                            <th className="border-2 w-[100px]">Fabric</th>
                            <th className="border-2 w-[100px]">Color</th>
                            <th className="border-2 w-[100px]">Rate</th>
                            <th className="border-2 w-[200px]">Order Status</th>
                        </tr>
                    </thead>
                    <tbody>
                    {orderData&&orderData.length>0?
                    (
                        orderData.map((order,index)=>{
                            console.log(orderData);
                                    return <tr key={index}>
                                        <td className="h-[40px] border pl-2 font-semibold">{++count}</td>
                                        <td className="h-[40px] border-2 pl-2 font-semibold">{formatDate(order.createdAt)}</td>
                                        <td className="h-[40px] border-2 pl-2 font-semibold">{order.clothing_type}</td>
                                        <td className="h-[40px] border-2 pl-2 font-semibold">{order.fabric}</td>
                                        <td className="h-[40px] border-2 pl-2 font-semibold">{order.color}</td>
                                        <td className="h-[40px] border-2 pl-2 font-semibold">{order.rate}</td>
                                        <td className="h-[40px] border-2 pl-2 font-semibold">{order.order_status}</td>
                                    </tr>
                                })
                    ):(
                        <tr>
                            <td>you</td>
                            <td>have no orders</td>
                        </tr>
                    )
                    }
                    </tbody>
                </table>
                </div>
            </div>
        </HomeLayout>
    )
}

export default OrderHistory;