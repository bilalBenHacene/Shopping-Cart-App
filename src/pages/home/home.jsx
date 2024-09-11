import React, { useEffect, useState } from "react";
import Product from "../../components/product";
import { Circles, FidgetSpinner } from "react-loader-spinner";

const Home = () => {
  const [products, setProducts] = useState([]);
  const [pending, setPending] = useState(false);
  const fetchData = async () => {
    setPending(true);
    try {
      const response = await fetch("https://fakestoreapi.com/products");
      const data = await response.json();
      if (data) setProducts(data);
    } catch (error) {
      console.log(error.messge);
    } finally {
      setPending(false);
    }
  };
  useEffect(() => {
    fetchData();
  }, []);

  return (
    <section className="container mx-auto bg-slate-50 p-2">
      {pending && (
        <div className="flex justify-center items-center w-full h-screen">
          <Circles
            height={120}
            width={120}
            color="rgb(255,0,0)"
            visible={true}
          />
        </div>
      )}

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-2 gap-y-5">
        {products && products?.length > 0
          ? products.map((prod) => <Product key={prod.id} data={prod} />)
          : null}
      </div>
    </section>
  );
};

export default Home;
