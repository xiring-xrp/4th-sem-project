import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import AdminLayout from "../../Layouts/AdminLayout";
import { getOrderedData, updateOrderStatus } from "../../redux/slices/orderSlice";

function Ordered() {
  const dispatch = useDispatch();
  const { orderData } = useSelector((state) => state?.order);

  useEffect(() => {
    dispatch(getOrderedData());
  }, [dispatch]);

  const handleInput = async (event, orderId) => {
    const newStatus = event.target.value;
    const response = await dispatch(updateOrderStatus({ orderId, status: newStatus }));
    if (response) {
      console.log("Order status updated successfully");
      dispatch(getOrderedData()); // Refresh order data
    }
  };

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, "0");
    const day = String(date.getDate()).padStart(2, "0");
    return `${year}/${month}/${day}`;
  };
  console.log(orderData)
  let count = 0;
  return (
    <AdminLayout>
      <div className="px-16 bg-[#2E3138] text-white pt-4 py-10">
        <p className="text-center text-yellow-500 text-5xl font-bold">Orders</p>
        <table className="mt-8 border-collapse border-2">
          <thead>
            <tr>
              <th className="border-2 w-[40px]">S.N</th>
              <th className="border-2 w-[120px]">Ordered Date</th>
              <th className="border-2 w-[100px]">Name</th>
              <th className="border-2">Phone</th>
              <th className="border-2 w-[160px]">Clothing type</th>
              <th className="border-2 w-[60px]">Fabric</th>
              <th className="border-2 w-[70px]">Color</th>
              <th className="border-2 w-[60px]">Rate</th>
              <th className="border-2 w-[400px]">Measurements</th>
              <th className="border-2 w-[125px]">Order Status</th>
            </tr>
          </thead>
          <tbody>
            {orderData.map(( order ) => (
              <tr key={order._id}>
                <td className="border-2 pl-2 font-semibold">{++count}</td>
                <td className="border-2 pl-2 font-semibold">{formatDate(order.createdAt)}</td>
                <td className="border-2 pl-2 font-semibold">{order.userId.fullName}</td>
                <td className="border-2 pl-2 font-semibold">{order.userId.phoneNumber}</td>
                <td className="border-2 pl-2 font-semibold">{order.clothing_type}</td>
                <td className="border-2 pl-2 font-semibold">{order.fabric}</td>
                <td className="border-2 pl-2 font-semibold">{order.color}</td>
                <td className="border-2 pl-2 font-semibold">{order.rate}</td>
                <td className="border-2 pl-2 w-[310px] font-semibold">
                  <ul className="grid grid-cols-2 pl-2">
                    <li>Neck: {order.measurementId.neck}</li>
                    <li>Sleeves Length: {order.measurementId.sleevesLength}</li>
                    <li>Bicep Around: {order.measurementId.bicepAround}</li>
                    <li>Hips: {order.measurementId.hips}</li>
                    <li>Stomach: {order.measurementId.stomach}</li>
                    <li>Thigh: {order.measurementId.thigh}</li>
                    <li>Shoulder Width: {order.measurementId.shoulderWidth}</li>
                    <li>Chest Around: {order.measurementId.chestAround}</li>
                    <li>Pants Waist: {order.measurementId.pantsWaist}</li>
                    <li>Leg Length: {order.measurementId.legLength}</li>
                  </ul>
                </td>
                <td className="border-2 pl-2 font-semibold">
                  <select
                    className="bg-[#2E3138] border-2 border-black"
                    value={order.order_status}
                    name="orderStatus"
                    onChange={(event) => handleInput(event, order._id)}
                  >
                    <option value="Processing">Processing</option>
                    <option value="Completed">Completed</option>
                  </select>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </AdminLayout>
  );
}

export default Ordered;
