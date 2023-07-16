import React from "react";
import ProductionCard from "../cards/productionCard";
import CardRow from "../cardRow";

const ProductionCompaniesRow = ({companies}) => {
  let prodCards = [];

  if (companies) {
    prodCards = companies.map((company) => (
      <ProductionCard key={company.id} company={company} />
    ))
  }

  return (
    <>
      <br/>
      <CardRow>
        {prodCards}
      </CardRow>
    </>

  )
};
export default ProductionCompaniesRow;