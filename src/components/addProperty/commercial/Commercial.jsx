import React, { useEffect, useState } from "react";
import {
  commercialConstants,
  commercialStages,
  dateRegex,
  getListingDetailValuesCommercial,
} from "../constants";
import "./commercial.less";
import { Form, message } from "antd";

import BasicDetails from "./formSteps/BasicDetails";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import StageProgress from "../properyStepsFlow/StageProgress";
import ButtonsGrp from "../properyStepsFlow/ButtonsGrp";
import { addCommercial } from "../../../redux/addComercial/addCommercialActions";
import { useDispatch, useSelector } from "react-redux";
import FormAmenities from "../amenities/FormAmenities";
import UploadImages from "../formUploadImages/UploadImages";
import { getSellerListingDetails } from "../../../redux/getSellerListingDetails/getSellerListingDetailsActions";
import dayjs from "dayjs";

function Commercial() {
  const [stages, setStages] = useState(commercialStages);
  const [selectedValue, setSelectedValue] = useState(0);

  const params = useParams();

  let propertyId = params.id;
  let propertyType = params.category;

  const user = useSelector((state) => state.user);
  const location = useLocation();

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [form] = Form.useForm();

  const [data, setData] = useState(commercialConstants);

  useEffect(() => {
    setData({ ...commercialConstants });
  }, [params.category]);

  const backHandler = () => {
    if (selectedValue > 1) {
      setSelectedValue(selectedValue - 1);
    } else {
      navigate("/add-property");
    }
  };

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
        ...getListingDetailValuesCommercial(list, form),
      });
    }
  }, [getSellerListingDetailsReducer]);

  console.log(data?.possession_date);

  const nextHandler = () => {
    const formData = new FormData();
    if (propertyId) {
      formData.append("property_id", propertyId);
    }
    formData.append("project_name", data?.project_name);

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

    formData.append(
      "commerical_category",
      params?.category?.charAt(0).toUpperCase() + params?.category?.slice(1)
    );
    formData.append(
      "commercial_type",
      location?.pathname?.includes("sell") ? "Sell" : "Rent"
    );

    if (dateRegex.test(data?.possession_date)) {
      formData.append(
        "possession_date",
        dayjs(data?.possession_date).format("DD/MM/YYYY")
      );
    } else {
      formData.append("possession_date", data?.possession_date);
    }

    formData.append(
      "min_contract_period",
      data?.min_contract_period ? data?.min_contract_period : 0
    );
    formData.append("final_price", data?.final_price ? data?.final_price : 0);
    formData.append(
      "price_per_square_feet",
      data?.price_per_square_feet ? data?.price_per_square_feet : 0
    );
    formData.append(
      "price_per_square_yard",
      data?.price_per_square_yard ? data?.price_per_square_yard : 0
    );
    formData.append(
      "builtup_area",
      data?.builtup_area ? data?.builtup_area : 0
    );
    formData.append(
      "passenger_lifts",
      data?.passenger_lifts ? data?.passenger_lifts : 0
    );
    formData.append(
      "service_lifts",
      data?.service_lifts ? data?.service_lifts : 0
    );
    formData.append("parking_available", data?.parking_available);
    formData.append("negotialble", data?.negotialble);
    formData.append("tax_gov_charges_included", data?.tax_gov_charges_included);
    formData.append("dg_ups_charges_included", data?.dg_ups_charges_included);
    formData.append("water_charges_included", data?.water_charges_included);
    formData.append(
      "floor_number",
      data?.floor_number ? data?.floor_number : 0
    );
    formData.append(
      "electricity_bill_included",
      data?.electricity_bill_included
    );
    formData.append(
      "safety_deposit",
      data?.safety_deposit ? data?.safety_deposit : 0
    );
    formData.append(
      "rent_per_month",
      data?.rent_per_month ? data?.rent_per_month : 0
    );

    formData.append("amenities", JSON.stringify(data?.amenities));
    let imageDetails = [];
    data?.property_images
      .filter((i) => !i.id)
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

    form
      .validateFields()
      .then((values) => {
        dispatch(
          addCommercial(
            formData,
            user?.token,
            navigate,
            params?.category,
            location?.pathname?.includes("sell") ? "sell" : "rent"
          )
        );
        let currentValue = selectedValue;
        let temp = stages;
        temp[currentValue].status = "completed";
        if (currentValue < 3) {
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
    <div className="commercial-wrapper">
      <StageProgress handleStepChange={handleStepChange} stages={stages} />
      <div className="content">
        {selectedValue === 0 && (
          <BasicDetails
            data={data}
            propertyType={params.category}
            setData={setData}
            form={form}
            isLand={params?.category?.includes("land")}
            isSell={location?.pathname?.includes("sell")}
          />
        )}

        {selectedValue === 1 && (
          <FormAmenities data={data} setData={setData} form={form} />
        )}
        {selectedValue === 2 && (
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

export default Commercial;
