import React, { useEffect, useState } from "react";
import {
  allStages,
  dateRegex,
  getListingDetailValuesRent,
  rentConstants,
} from "../constants";
import "./rent-property.less";
import { Form, message } from "antd";

import BasicDetails from "./formSteps/BasicDetails";
import PropertyFormDetails from "./formSteps/PropertyFormDetails";
import { useNavigate, useParams } from "react-router-dom";
import StageProgress from "../properyStepsFlow/StageProgress";
import ButtonsGrp from "../properyStepsFlow/ButtonsGrp";
import { addRent } from "../../../redux/addRent/addRentActions";
import { useDispatch, useSelector } from "react-redux";
import UploadImages from "../formUploadImages/UploadImages";
import FormAmenities from "../amenities/FormAmenities";
import { getSellerListingDetails } from "../../../redux/getSellerListingDetails/getSellerListingDetailsActions";
import dayjs from "dayjs";

function RentProperty() {
  const [stages, setStages] = useState(allStages);
  const [selectedValue, setSelectedValue] = useState(0);

  const params = useParams();
  const user = useSelector((state) => state.user);

  let propertyId = params.id;
  let propertyType = params.category;

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [form] = Form.useForm();

  const [data, setData] = useState(rentConstants);

  useEffect(() => {
    if (propertyId) {
      dispatch(getSellerListingDetails(propertyId, user?.token));
    }
  }, [propertyId, user?.token]);

  const getSellerListingDetailsReducer = useSelector(
    (state) => state.getSellerListingDetails
  );

  useEffect(() => {
    if (getSellerListingDetailsReducer.success.data) {
      let list = getSellerListingDetailsReducer.success.data?.data;

      setData({
        ...getListingDetailValuesRent(list, form),
      });
    }
  }, [getSellerListingDetailsReducer]);

  useEffect(() => {
    setData({ ...rentConstants });
  }, [params.category]);

  const backHandler = () => {
    if (selectedValue > 1) {
      setSelectedValue(selectedValue - 1);
    } else {
      navigate("/add-property");
    }
  };

  const nextHandler = () => {
    const formData = new FormData();
    if (propertyId) {
      formData.append("property_id", propertyId);
    }

    formData.append("project_name", data?.project_name);
    formData.append(
      "rent_type",
      params?.category?.charAt(0).toUpperCase() + params?.category?.slice(1)
    );
    formData.append(
      "address_detail",
      JSON.stringify({
        state: data?.state,
        city: data?.city,
        street_address: data?.maps_details?.long_name,
        area: data?.maps_details?.short_name,
        postal_code: "",
      })
    );
    formData.append(
      "maps_details",
      JSON.stringify({
        location: `${data?.maps_details?.lat},${data?.maps_details?.lng}`,
      })
    );
    formData.append("facing", JSON.stringify(data?.facing));
    formData.append("about_property", data?.about_property);
    formData.append("amenities", JSON.stringify(data?.amenities));
    let imageDetails = [];
    data?.property_images
      ?.filter((i) => !i.id)
      .forEach((eachFile) => {
        let { fileType, fileData } = eachFile;
        imageDetails.push({
          title: "Property Images",
          meta_data: [{ name: `${fileType}` }],
        });
        const blob = new Blob([fileData]);

        formData.append("property_images", blob);
      });

    formData.append("image_details", JSON.stringify(imageDetails));

    formData.append(
      "bedroom_available",
      JSON.stringify(data?.bedroom_available)
    );
    formData.append("carpet_area", data?.carpet_area);
    formData.append("rent_per_month", data?.rent_per_month);
    formData.append("advance_amount", data?.advance_amount);
    formData.append("ready_to_move_in", data?.ready_to_move_in);
    // if (dateRegex.test(data?.available_from)) {
    //   formData.append(
    //     "available_from",
    //     dayjs(data?.available_from).format("DD/MM/YYYY")
    //   );
    // } else {
    //   formData.append("available_from", data?.available_from);
    // }

    formData.append("number_of_floors", data?.number_of_floors);
    formData.append(
      "number_of_car_parking",
      data?.number_of_car_parking ? data?.number_of_car_parking : 0
    );
    formData.append(
      "number_of_bike_parking",
      data?.number_of_bike_parking ? data?.number_of_bike_parking : 0
    );

    formData.append(
      "furnishing_detail",
      JSON.stringify(data?.furnishing_detail)
    );

    formData.append(
      "floor_number",
      data?.floor_number ? data?.floor_number : 0
    );
    form
      .validateFields()
      .then((values) => {
        dispatch(addRent(formData, user?.token, navigate, params?.category));
        let currentValue = selectedValue;
        let temp = stages;
        temp[currentValue].status = "completed";
        if (currentValue < 4) {
          temp[currentValue + 1].status = "current";
        }
        setStages([...temp]);
        setSelectedValue(selectedValue + 1);
      })
      .catch((e) => {
        message.error("Please fill all the required fields!");
      });
  };

  const handleStepChange = (value) => {
    if (value > selectedValue) {
      nextHandler();
    } else {
      let temp = stages;
      temp.forEach((item, index) => {
        if (item.status === "current") {
          temp[index].status = "pending";
        }
      });
      temp[value].status = "current";
      setStages(temp);
      setSelectedValue(value);
    }
  };
  return (
    <div className="rent-wrapper">
      <StageProgress handleStepChange={handleStepChange} stages={stages} />
      <div className="content">
        {selectedValue === 0 && (
          <BasicDetails
            data={data}
            propertyType={params.category}
            setData={setData}
            form={form}
          />
        )}
        {selectedValue === 1 && (
          <PropertyFormDetails
            data={data}
            propertyType={params.category}
            setData={setData}
            form={form}
          />
        )}
        {selectedValue === 2 && (
          <FormAmenities data={data} setData={setData} form={form} />
        )}
        {selectedValue === 3 && (
          <UploadImages data={data} setData={setData} form={form} />
        )}
        {/* {selectedValue === 4 && <Pricing />} */}
      </div>
      <ButtonsGrp
        selectedValue={selectedValue}
        nextHandler={nextHandler}
        backHandler={backHandler}
      />
    </div>
  );
}

export default RentProperty;
