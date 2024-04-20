import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import HomeLayout from "../Layouts/HomeLayout";
import { getUserData } from "../redux/slices/authSlice";
import { getMeasurementData } from "../redux/slices/measurementSlice";
import { createOrder } from "../redux/slices/orderSlice";

function Order() {
  const { state } = useLocation();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const measureData = useSelector((state) => state?.measurement.measureData);
  const userData = useSelector((state) => state?.auth?.data);
  async function getDetails() {
    await dispatch(getMeasurementData());
    await dispatch(getUserData());
  }
  useEffect(() => {
    getDetails();
  }, []);
  const [orderData, setOrderData] = useState({
    userId:userData._id,
    measurementId:userData.measurementId,
    clothing_type: state.clothing_type,
    fabric: "",
    color: "",
    rate: "",
  });
 
  const handleUserInput = (e) => {
    const { name, value } = e.target;
    setOrderData({
      ...orderData,
      [name]: value,
    });
  };
  function rateGenerator() {
    if (orderData.fabric !== "") {
      const fabric = orderData.fabric;
      const fab = state.fabrics.filter(
        (item) => item.fabricId.fabric_name === fabric
      );
      setOrderData({
        ...orderData,
        rate: fab[0].fabricId.rate,
      });
    }
  }
  useEffect(() => {
    rateGenerator();
  }, [orderData.fabric]);
  async function createNewOrder(event) {
    event.preventDefault();

    const response = await dispatch(createOrder(orderData));
    console.log(response.payload.success);
    if (response?.payload.success) {
      setOrderData({
        userId:userData._id,
        measurementId:userData.measurementId,
        clothing_type: state.clothing_type,
        fabric: "",
        color: "",
        rate: "",
      });
      navigate("/custom-clothing");
    }
  }

  return (
    <HomeLayout>
      <div className="flex items-center justify-center bg-[#2e3138] h-[100vh] text-white">
        <form noValidate className="flex flex-col" onSubmit={createNewOrder}>
          <label htmlFor="clothing_type" className="text-xl font-bold">Clothing Type</label>
          <input
            type="text"
            name="clothingType"
            className="text-black text-base p-1 rounded"
            id="clothing_type"
            readOnly
            value={orderData.clothing_type}
          />
          <label htmlFor="fabric" className="text-xl mt-2 font-bold">Fabric</label>
          <select
            className="text-black p-1 rounded"
            name="fabric"
            id="fabric"
            onChange={handleUserInput}
            value={orderData.fabric}
          >
            <option value="" selected disabled hidden>Choose a fabric</option>
            {state.fabrics.map((fabric, index) => {
              return (
                <option
                  value={fabric.fabricId.fabric_name}
                  className="text-black"
                  key={index}
                >
                  {fabric.fabricId.fabric_name}
                </option>
              );
            })}
          </select>
          <label htmlFor="color" className="text-xl mt-2 font-bold">Color</label>
          <select
            className="text-black p-1 rounded"
            name="color"
            id="color"
            onChange={handleUserInput}
            value={orderData.color}
          >
            <option value="">Choose a color</option>
            {state.colors.map((color, index) => {
              return (
                <option value={color} className="text-black" key={index}>
                  {color}
                </option>
              );
            })}
          </select>
          <label htmlFor="price" className="text-xl mt-2 font-bold">Rate</label>
          <input
            type="text"
            name="price"
            className="text-black p-1 rounded"
            id="price"
            onChange={handleUserInput}
            value={orderData.rate}
          />

          <button
            type="submit"
            className="mt-6 bg-yellow-600 hover:bg-yellow-500 transition-all ease-in-out duration-300 rounded-sm px-8 py-2 font-semibold text-lg cursor-pointer"
          >
            CONFIRM ORDER
          </button>
        </form>
      </div>
    </HomeLayout>
  );
}

export default Order;
