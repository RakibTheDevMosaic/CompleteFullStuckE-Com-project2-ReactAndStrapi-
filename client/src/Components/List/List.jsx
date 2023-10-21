import Card from "../Card/Card";
import React from "react";
import "./List.scss";
import useFetch from "../../hooks/useFetch";

const List = ({ SubCategory, maxPrice, sort, catId }) => {
  const { data, loading, error } = useFetch(
    `/api/products?populate=*&filters[categories][id]=${catId}${SubCategory?.map(
      (item) => `&[filters][sub_categories][id][$eq]=${item}`
    )}&[filters][price][$lte]=${maxPrice}&sort=price:${sort}`
  );
  return (
    <div className="list">
      {loading?'Loading':data?.map((item) => (
        <Card item={item} key={item.id} />
      ))}
    </div>
  );
};

export default List;
