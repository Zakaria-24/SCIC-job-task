import { Button } from "flowbite-react";
import Product from "../../components/Product";

import axios from 'axios';
import { useQuery } from '@tanstack/react-query';

import { Pagination } from "flowbite-react";
import { useState } from "react";

const Home = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const onPageChange = (page) => setCurrentPage(page);

  const baseUrl = import.meta.env.VITE_API_URL;

  const { data: products = [], isLoading, isError } = useQuery({
    queryKey: ["products"],
    queryFn: () => getQueries(),
  });
  // console.log(queries, isLoading);

  const getQueries = async () => {
    const { data } = await axios(`${baseUrl}/products`);
    // console.log(data);
    return data;
  };

  if (isLoading) return <h1>Loading....</h1>;
  if (isError) return <h1>Error loading data!!!</h1>;


  return (
    <div className="container mx-auto mt-6">

      <div className="flex gap-4">
        <div>
          <div className="relative">
            <span className="absolute inset-y-0 left-0 flex items-center pl-2">
              <button type="submit" title="Search" className="p-1 focus:outline-none focus:ring">
                <svg fill="currentColor" viewBox="0 0 512 512" className="w-4 h-8 dark:text-gray-800">
                  <path d="M479.6,399.716l-81.084-81.084-62.368-25.767A175.014,175.014,0,0,0,368,192c0-97.047-78.953-176-176-176S16,94.953,16,192,94.953,368,192,368a175.034,175.034,0,0,0,101.619-32.377l25.7,62.2L400.4,478.911a56,56,0,1,0,79.2-79.195ZM48,192c0-79.4,64.6-144,144-144s144,64.6,144,144S271.4,336,192,336,48,271.4,48,192ZM456.971,456.284a24.028,24.028,0,0,1-33.942,0l-76.572-76.572-23.894-57.835L380.4,345.771l76.573,76.572A24.028,24.028,0,0,1,456.971,456.284Z"></path>
                </svg>
              </button>
            </span>
            <input type="search" name="Search" placeholder="Search..." className="w-32 py-3 pl-10 text-sm rounded-md sm:w-auto focus:outline-none dark:bg-gray-100 dark:text-gray-800 focus:dark:bg-gray-50" />
          </div>
        </div>

        <select className="select select-success w-full max-w-xs">
          <option disabled selected>All Categories</option>
          <option>One Piece</option>
        </select>
        <select className="select select-success w-full max-w-xs">
          <option disabled selected>All Brand</option>
          <option>One Piece</option>
        </select>
        <select className="select select-success w-full max-w-xs">
          <option disabled selected>Sort by</option>
          <option>Newest First</option>
          <option>Price: Low to High</option>
          <option>Price: High to Low</option>
        </select>
        <div>
          <Button type="submit" color="warning">Reset</Button>
        </div>
      </div>

      {/* product section */}
      <section>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-4">
          {/* <Product></Product> */}
          {products?.map((product) => (
            <Product key={product._id} product={product} />
          ))}
        </div>
      </section>

      <div className="flex overflow-x-auto sm:justify-center mt-6 mb-10">
        <Pagination currentPage={currentPage} totalPages={100} onPageChange={onPageChange} showIcons />
      </div>

    </div>
  );
};

export default Home;