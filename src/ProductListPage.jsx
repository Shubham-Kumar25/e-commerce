import React, { useEffect, useState } from "react";
import ProductList from "./ProductList";
import { getProductList } from "./api";
import NoMatching from "./NoMatching";
import Loading from "./Loading";

function ProductListPage() {
  const [productList, setProductList] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(function () {
    const xyz = getProductList();
    xyz.then(function (products) {
      setProductList(products);
      setLoading(false);
    });
  }, []);

  const [query, setQuery] = useState("");
  const [sort, setSort] = useState("default");

  const data = productList.filter(function (item) {
    const lowerCaseTitle = item.title.toLowerCase();
    const lowerCaseQuery = query.toLowerCase();

    return lowerCaseTitle.indexOf(lowerCaseQuery) != -1;
  });

  function handleSearch(event) {
    setQuery(event.target.value);
  }

  function handleSortChange(event) {
    setSort(event.target.value);
  }

  if (sort == "pricelow") {
    data.sort(function (x, y) {
      return x.price - y.price;
    });
  } else if (sort == "pricehigh") {
    data.sort(function (x, y) {
      return y.price - x.price;
    });
  } else if (sort == "name") {
    data.sort(function (x, y) {
      return x.title < y.title ? -1 : 1;
    });
  }

  if (loading) {
    return <Loading />;
  }

  return (
    <div className="p-2 max-w-6xl mx-auto bg-white px-9 py-12.5 my-16">
      <input
        value={query}
        placeholder="Search"
        onChange={handleSearch}
        className="border border-gray-500 rounded-md mb-4"
      />
      <select
        onChange={handleSortChange}
        value={sort}
        className="border border-gray-500 rounded-md mb-4 ml-4"
      >
        <option value="default">Default Sort</option>
        <option value="name">Sort By Name: A-Z</option>
        <option value="pricelow">Sort By Price: Low to High</option>
        <option value="pricehigh">Sort By Price: High to Low</option>
      </select>
      <div className="my-12">
        {data.length > 0 && <ProductList products={data}></ProductList>}
        {data.length == 0 && <NoMatching />}
      </div>
    </div>
  );
}

export default ProductListPage;
