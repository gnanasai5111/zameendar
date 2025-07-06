import React, { useEffect, useState } from "react";
import { allStages, getListingDetailValuesPg, pgConstants } from "../constants";
import "./pg.less";
import { Form, message } from "antd";
import BasicDetails from "./formSteps/BasicDetails";
import RoomDetails from "./formSteps/RoomDetails";
import { useNavigate, useParams } from "react-router-dom";
import StageProgress from "../properyStepsFlow/StageProgress";
import ButtonsGrp from "../properyStepsFlow/ButtonsGrp";
import { addPg } from "../../../redux/addPg/addPgActions";
import { useDispatch, useSelector } from "react-redux";
import FormAmenities from "../amenities/FormAmenities";
import UploadImages from "../formUploadImages/UploadImages";
import { getSellerListingDetails } from "../../../redux/getSellerListingDetails/getSellerListingDetailsActions";

function Pg() {
  const [stages, setStages] = useState(allStages);
  const [selectedValue, setSelectedValue] = useState(0);

  const [selectedRooms, setSelectedRooms] = useState([]);
  const [currentActive, setCurrentActive] = useState();

  const [selectedTypes, setSelectedTypes] = useState({
    "1 SHARING": [
      { rent_per_month: "", safety_deposit: "", id: 1, isEdit: true },
    ],
    "2 SHARING": [
      { rent_per_month: "", safety_deposit: "", id: 2, isEdit: true },
    ],
    "3 SHARING": [
      { rent_per_month: "", safety_deposit: "", id: 3, isEdit: true },
    ],
    "4 SHARING": [
      { rent_per_month: "", safety_deposit: "", id: 4, isEdit: true },
    ],
    "5 SHARING": [
      { rent_per_month: "", safety_deposit: "", id: 5, isEdit: true },
    ],
    "6 SHARING": [
      { rent_per_month: "", safety_deposit: "", id: 5, isEdit: true },
    ],
  });

  const user = useSelector((state) => state.user);

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [form] = Form.useForm();
  const params = useParams();
  let propertyId = params.id;

  const [data, setData] = useState(pgConstants);

  useEffect(() => {
    setData({ ...pgConstants });
  }, []);

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

      const getSharingTypes = (type, id) => {
        let sharingValues = list?.sharing_types?.filter((i) => i.type === type);
        if (sharingValues?.length === 0) {
          return [
            {
              rent_per_month: "",
              safety_deposit: "",
              id: id,
              isEdit: true,
            },
          ];
        }
        return sharingValues
          ?.filter((i) => i.type === type)
          .map((i, index) => {
            return {
              rent_per_month: i.rent_per_month,
              safety_deposit: i.safety_deposit,
              id: id + index,
              isEdit: false,
            };
          });
      };

      setSelectedTypes({
        "1 SHARING": getSharingTypes("1 SHARING", 1),
        "2 SHARING": getSharingTypes("2 SHARING", 2),
        "3 SHARING": getSharingTypes("3 SHARING", 3),
        "4 SHARING": getSharingTypes("4 SHARING", 4),
        "5 SHARING": getSharingTypes("5 SHARING", 5),
        "6 SHARING": getSharingTypes("6 SHARING", 6),
      });

      setSelectedRooms([...new Set(list?.sharing_types?.map((i) => i.type))]);
      if (list?.sharing_types?.length > 0) {
        setCurrentActive(list?.sharing_types[0]?.type);
      }

      setData({
        ...getListingDetailValuesPg(list, form, selectedTypes),
      });
    }
  }, [getSellerListingDetailsReducer]);

  useEffect(() => {
    setData({ ...data, sharing_types: { ...selectedTypes } });
    form.setFieldValue("sharing_types", { ...selectedTypes });
  }, [selectedTypes]);

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
      "about_property",
      data?.about_property ? data?.about_property : ""
    );
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
      "furnishing_detail",
      JSON.stringify(data?.furnishing_detail)
    );
    formData.append("food_offerings", JSON.stringify(data?.food_offerings));
    formData.append("sharing_for", JSON.stringify(data?.sharing_for));

    let sharingTypes = Object.keys(data?.sharing_types);

    let sharingData = [];
    sharingTypes.forEach((eachType) => {
      data?.sharing_types[eachType].forEach((item) => {
        if (item?.rent_per_month && item?.safety_deposit) {
          sharingData.push({
            rent_per_month: item?.rent_per_month,
            safety_deposit: item?.safety_deposit,
            type: eachType,
          });
        }
      });
    });

    console.log(sharingData, sharingTypes, data?.sharing_types);

    formData.append("sharing_types", JSON.stringify(sharingData));

    formData.append("attached_washroom", data?.attached_washroom);
    formData.append("food_facility", data?.food_facility);
    formData.append("parking_facility", data?.parking_facility);
    formData.append("ready_to_move_in", data?.ready_to_move_in);
    formData.append(
      "coliving_common_areas",
      JSON.stringify(data?.coliving_common_areas)
    );
    formData.append("non_veg_available", data?.non_veg_available);
    formData.append("visitor_allowed", data?.visitor_allowed);

    formData.append(
      "opposite_sex_visitor_allowed",
      data?.opposite_sex_visitor_allowed
    );
    formData.append("drinking_allowed", data?.drinking_allowed);
    formData.append("smoking_allowed", data?.smoking_allowed);
    formData.append("any_time_allowed", data?.any_time_allowed);
    formData.append("last_time_entry", "123");

    form
      .validateFields()
      .then((values) => {
        dispatch(addPg(formData, user?.token, navigate));
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
    <div className="pg-wrapper">
      <StageProgress handleStepChange={handleStepChange} stages={stages} />

      <div className="content">
        {selectedValue === 0 && (
          <BasicDetails
            data={data}
            setData={setData}
            form={form}
            selectedRooms={selectedRooms}
            setSelectedRooms={setSelectedRooms}
            selectedTypes={selectedTypes}
            setSelectedTypes={setSelectedTypes}
            currentActive={currentActive}
            setCurrentActive={setCurrentActive}
          />
        )}
        {selectedValue === 1 && (
          <RoomDetails data={data} setData={setData} form={form} />
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

export default Pg;
