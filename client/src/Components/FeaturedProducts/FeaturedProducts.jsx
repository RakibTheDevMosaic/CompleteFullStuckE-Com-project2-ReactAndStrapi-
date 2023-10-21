import React from "react";
import "./FeatredProducts.scss";
import Card  from "../Card/Card";
import useFetch from "../../hooks/useFetch";
const FeaturedProducts = ({ type }) => {

  const {data,loading,error} = useFetch(`/api/products?populate=*&filters[type][$eq]=${type}`)

  return (
    <div className="featured-product">
      <div className="top">
        <h1>{type} products</h1>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ratione,
          fugit saepe. Blanditiis itaque odio consequuntur accusantium ipsum
          quis, eveniet quia illum. Temporibus itaque inventore assumenda amet
          explicabo eos quaerat eligendi sapiente, modi debitis tempora expedita
          quasi blanditiis consequuntur soluta aspernatur adipisci ipsam ullam
          vel autem.
        </p>
      </div>
      <div className="bottom">
        {error?"Something went wrong !":(loading ? "loading" : data?.map(item=>(
            <Card item={item} key={item.id}/>
        )))}
      </div>
    </div>
  );
};

export default FeaturedProducts;
