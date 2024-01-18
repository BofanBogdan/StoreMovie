import React from "react";
import useFetch from "../../hooks/useFetch";
import { useParams } from "react-router-dom";
import DetailsBanner from "./detailsBanner/DetailsBanner";
import "./style.scss";
import Cast from "./cast/Cast";
import Similar from "../details/carousels/Similar";
import Recommendation from "../details/carousels/Recommendation";
const Details = () => {
  const { mediaType, id } = useParams();
  const { data: credits, loading: creditsLoading } = useFetch(
    `/${mediaType}/${id}/credits`
  );

  return (
    <div>
      <DetailsBanner />
      <Cast data={credits?.cast} loading={creditsLoading} />
      <Similar mediaType={mediaType} id={id} />
      <Recommendation mediaType={mediaType} id={id} />
    </div>
  );
};

export default Details;
