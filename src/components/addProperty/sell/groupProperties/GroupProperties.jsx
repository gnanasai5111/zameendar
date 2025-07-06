import React, { useEffect, useState } from "react";
import {
  allStages,
  dateRegex,
  getListingDetailValuesGroup,
  groupApartmentsConstants,
  groupPlotsConstants,
  groupVillasConstants,
} from "../../constants";
import "./group-properties.less";
import { Form, message } from "antd";

import BasicDetails from "./formSteps/BasicDetails";
import PropertyFormDetails from "./formSteps/PropertyFormDetails";
import { useNavigate, useParams } from "react-router-dom";
import Pricing from "../../pricing/Pricing";
import { useDispatch, useSelector } from "react-redux";
import { addGroupApartments } from "../../../../redux/addGroupApartments/addGroupApartmentsActions";
import { addGroupVillas } from "../../../../redux/addGroupVillas/addGroupVillasActions";
import { addGroupPlots } from "../../../../redux/addGroupPlots/addGroupPlotsActions";
import FormAmenities from "../../amenities/FormAmenities";
import UploadImages from "../../formUploadImages/UploadImages";
import StageProgress from "../../properyStepsFlow/StageProgress";
import ButtonsGrp from "../../properyStepsFlow/ButtonsGrp";
import { getSellerListingDetails } from "../../../../redux/getSellerListingDetails/getSellerListingDetailsActions";
import dayjs from "dayjs";

function GroupProperties() {
  const [stages, setStages] = useState(allStages);
  const [selectedValue, setSelectedValue] = useState(0);

  // Group apartments bedroom types
  const [selectedRooms, setSelectedRooms] = useState([]);
  const [currentActive, setCurrentActive] = useState();
  const [selectedTypes, setSelectedTypes] = useState({
    "1 BHK": [{ sqft: "", image: [], id: 1, isEdit: true }],
    "2 BHK": [{ sqft: "", image: [], id: 2, isEdit: true }],
    "3 BHK": [{ sqft: "", image: [], id: 3, isEdit: true }],
    "4 BHK": [{ sqft: "", image: [], id: 4, isEdit: true }],
    "5 BHK": [{ sqft: "", image: [], id: 5, isEdit: true }],
  });

  // Group Villa land sizes
  const [selectedLand, setSelectedLand] = useState([""]);

  // Group plot selected Plots
  const [selectedPlots, setSelectedPlots] = useState([""]);
  const params = useParams();

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const user = useSelector((state) => state.user);
  const [form] = Form.useForm();

  let propertyId = params.id;
  let propertyType = params.category;

  const [data, setData] = useState(
    params.category === "group-appartments"
      ? groupApartmentsConstants
      : params.category === "group-villas"
      ? groupVillasConstants
      : params.category === "group-plots"
      ? groupPlotsConstants
      : []
  );

  console.log(propertyType, data);
  useEffect(() => {
    if (params.category === "group-appartments") {
      setData({ ...groupApartmentsConstants });
    } else if (params.category === "group-villas") {
      setData({ ...groupVillasConstants });
    } else if (params.category === "group-plots") {
      setData({ ...groupPlotsConstants });
    }
  }, [params.category]);

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
      let bedroomsTypes;
      if (
        propertyType === "group-appartments" ||
        propertyType === "group-villas"
      ) {
        const bhkImages = (type, id) => {
          if (
            list?.bhk_details?.filter((i) => Object.keys(i).includes(type))
              ?.length === 0
          ) {
            return [{ sqft: "", image: [], id: id, isEdit: true }];
          }
          return list?.bhk_details
            ?.filter((i) => Object.keys(i).includes(type))
            ?.map((i, index) => {
              let image = list?.images?.filter(
                (j) => j.meta_data[0].name === i.name
              );

              return {
                sqft: i[type],
                image:
                  image?.length > 0
                    ? ["http://64.227.177.77/" + image[0]?.image]
                    : [],
                id: id + index,
                imageId: image?.length > 0 ? image[0]?.image_id : "",
                isEdit: false,
              };
            });
        };
        bedroomsTypes = {
          "1 BHK": bhkImages("1 BHK", 1),
          "2 BHK": bhkImages("2 BHK", 2),
          "3 BHK": bhkImages("3 BHK", 3),
          "4 BHK": bhkImages("4 BHK", 4),
          "5 BHK": bhkImages("5 BHK", 5),
        };

        setSelectedTypes({ ...bedroomsTypes });
        setSelectedRooms([
          ...new Set(list?.bhk_details?.map((i) => Object.keys(i)[1])),
        ]);
        if (list?.bhk_details?.length > 0) {
          setCurrentActive(Object.keys(list?.bhk_details[0])[1]);
        }
      }
      if (propertyType === "group-villas") {
        setSelectedLand(list?.land_area_sizes);
      }
      if (propertyType === "group-plots") {
        setSelectedPlots(list?.plot_sizes);
      }

      setData({
        ...getListingDetailValuesGroup(list, propertyType, form, bedroomsTypes),
      });
    }
  }, [getSellerListingDetailsReducer]);

  useEffect(() => {
    setData({ ...data, bhk_details: { ...selectedTypes } });
    form.setFieldValue("bhk_details", selectedTypes);
  }, [selectedTypes]);

  useEffect(() => {
    setData({ ...data, land_area_sizes: [...selectedLand] });
    form.setFieldValue("land_area_sizes", [...selectedLand]);
  }, [selectedLand]);

  useEffect(() => {
    setData({ ...data, plot_sizes: [...selectedPlots] });
    form.setFieldValue("plot_sizes", [...selectedPlots]);
  }, [selectedPlots]);

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
    formData.append("start_price", data?.start_price);
    formData.append("end_price", data?.end_price);
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

    formData.append("amenities", JSON.stringify(data?.amenities));

    formData.append("contact_details", JSON.stringify({}));

    formData.append("about_property", data?.about_property);

    formData.append("rera_id", data?.rera_id);
    formData.append("sale_type", data?.sale_type);
    formData.append("facing", JSON.stringify(data?.facing));

    if (params.category !== "group-plots") {
      formData.append("price_per_sqft", data?.price_per_sqft);
      formData.append("ready_to_occupy", data?.ready_to_occupy);

      if (dateRegex.test(data?.possession_date)) {
        formData.append(
          "possession_date",
          dayjs(data?.possession_date).format("DD/MM/YYYY")
        );
      } else {
        formData.append("possession_date", data?.possession_date);
      }

      formData.append("sale_type", data?.sale_type);
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
      formData.append("property_age", data?.property_age);
      let bhktypes = Object.keys(data?.bhk_details);

      let bhkData = [];
      bhktypes.forEach((eachType) => {
        let count = 1;
        data?.bhk_details[eachType]
          ?.filter((i) => !i.imageId)
          ?.forEach((item) => {
            if (item?.image?.length > 0 && !item?.imageId) {
              const blob = new Blob([item.image[0]]);

              formData.append("property_images", blob);
              imageDetails.push({
                title: `BHK`,
                meta_data: [
                  {
                    type: eachType,
                    name: `${eachType} Type - ${count}`,
                    sqft: item?.sqft,
                  },
                ],
              });
            }
            if (item?.sqft) {
              bhkData.push({
                [`${eachType}`]: item?.sqft,
                name: `${eachType} Type - ${count}`,
              });
              count++;
            }
          });
      });

      formData.append("bhk_details", JSON.stringify(bhkData));
    }

    if (params.category === "group-appartments") {
      formData.append("number_of_floors", data?.number_of_floors);
      formData.append("number_of_bedrooms", 0);
      formData.append("no_of_bathrooms", 0);
      formData.append("project_area", data?.project_area);
      formData.append("image_details", JSON.stringify(imageDetails));
      form
        .validateFields()
        .then((values) => {
          dispatch(addGroupApartments(formData, user?.token, navigate));
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
    } else if (params.category === "group-villas") {
      formData.append("land_area_sizes", JSON.stringify(data?.land_area_sizes));
      formData.append("land_width", data?.land_width);
      formData.append("total_project_area", data?.total_project_area);
      formData.append(
        "number_of_floors",
        JSON.stringify(data?.number_of_floors)
      );
      formData.append("land_length", data?.land_length);
      formData.append("image_details", JSON.stringify(imageDetails));
      form
        .validateFields()
        .then((values) => {
          dispatch(addGroupVillas(formData, user?.token, navigate));
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
    } else if (params.category === "group-plots") {
      formData.append("price_per_sqyd", data?.price_per_sqyd);
      formData.append("plot_sizes", JSON.stringify(data?.plot_sizes));
      formData.append("image_details", JSON.stringify(imageDetails));
      formData.append("total_project_area", data?.total_project_area);
      form
        .validateFields()
        .then((values) => {
          dispatch(addGroupPlots(formData, user?.token, navigate));
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
    }
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
    <div className="group-wrapper">
      <StageProgress handleStepChange={handleStepChange} stages={stages} />
      <div className="content">
        {selectedValue === 0 && (
          <BasicDetails
            data={data}
            propertyType={params.category}
            setData={setData}
            form={form}
            selectedRooms={selectedRooms}
            setSelectedRooms={setSelectedRooms}
            setSelectedTypes={setSelectedTypes}
            selectedTypes={selectedTypes}
            currentActive={currentActive}
            setCurrentActive={setCurrentActive}
            selectedLand={selectedLand}
            setSelectedLand={setSelectedLand}
            selectedPlots={selectedPlots}
            setSelectedPlots={setSelectedPlots}
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

export default GroupProperties;
