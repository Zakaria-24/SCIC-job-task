import axios from "axios";
import { Button } from "flowbite-react";
import Product from "../../components/Product";



// import { Pagination } from "flowbite-react";
import { useEffect, useState } from "react";

import ReactPaginate from "react-paginate";
import "./pagination.css";
const Home = () => {
  // const [currentPage, setCurrentPage] = useState(1);
  // const onPageChange = (page) => {
  //   setCurrentPage(page);
  // };
  // console.log(currentPage)

  const [currentPage, setCurrentPage] = useState(0);
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("");
  const [brand_name, setBrand] = useState("");
  const [sortOrder, setSortOrder] = useState("");
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [totalCount, setTotalCount] = useState(0);

  const itemsPerPage = 9;
  const numberOfPages = Math.ceil(totalCount / itemsPerPage);
  console.log(numberOfPages)

  const baseUrl = import.meta.env.VITE_API_URL;

  const apiUrl =
    `${baseUrl}/products?` +
    `${category ? `category=${category}&` : ""}` +
    `${search ? `search=${search}&` : ""}` +
    `${brand_name ? `brand_name=${brand_name}&` : ""}` +
    `${sortOrder ? `${sortOrder}&` : ""}` +
    `page=${currentPage}&` +
    `size=${itemsPerPage}`;

  // Remove the trailing '&' if it exists
  const finalUrl = apiUrl.slice(-1) === "&" ? apiUrl.slice(0, -1) : apiUrl;
  console.log(finalUrl);




  useEffect(() => {
    axios.get(finalUrl)
      .then(function (response) {
        // handle success
        setProducts(response?.data?.results)
        console.log(response?.data?.results)
        setTotalCount(response?.data?.totalCount);
        setIsLoading(false)
      })
      .catch(function (error) {
        // handle error
        console.log(error);
        setIsLoading(false);
      })
  }, [category, search, brand_name, sortOrder, currentPage]);


  const handlePageClick = (e) => {
    setCurrentPage(e.selected);
  };

  return (
    <div className="container mx-auto mt-6">
      {/* search, filter and sort */}
      <div className="flex gap-4">
        <div>
          <div className="relative">
            <span className="absolute inset-y-0 left-0 flex items-center pl-2">
              <button
                type="submit"
                title="Search"
                className="p-1 focus:outline-none focus:ring"
              >
                <svg
                  fill="currentColor"
                  viewBox="0 0 512 512"
                  className="w-4 h-8 dark:text-gray-800"
                >
                  <path d="M479.6,399.716l-81.084-81.084-62.368-25.767A175.014,175.014,0,0,0,368,192c0-97.047-78.953-176-176-176S16,94.953,16,192,94.953,368,192,368a175.034,175.034,0,0,0,101.619-32.377l25.7,62.2L400.4,478.911a56,56,0,1,0,79.2-79.195ZM48,192c0-79.4,64.6-144,144-144s144,64.6,144,144S271.4,336,192,336,48,271.4,48,192ZM456.971,456.284a24.028,24.028,0,0,1-33.942,0l-76.572-76.572-23.894-57.835L380.4,345.771l76.573,76.572A24.028,24.028,0,0,1,456.971,456.284Z"></path>
                </svg>
              </button>
            </span>
            <input
              type="search"
              name="Search"
              placeholder="Search..."
              className="w-32 py-3 pl-10 text-sm rounded-md sm:w-auto focus:outline-none dark:bg-gray-100 dark:text-gray-800 focus:dark:bg-gray-50"
              onChange={(e) => setSearch(e.target.value)}
            />
          </div>
        </div>
        <select
          className="select select-success w-full max-w-xs"
          onChange={(e) => setCategory(e.target.value)}
        >
          <option disabled selected>
            All Categories
          </option>
          <option value="Fashion">Fashion</option>
          <option value="Electronics">Electronics</option>
          <option value="Nature">Nature</option>
          <option value="Travel">Travel</option>
          <option value="Stock">Stock</option>
          <option value="Abstract">Abstract</option>
          <option value="Wildlife">Wildlife</option>
          <option value="Photography">Photography</option>
          <option value="Lifestyle">Lifestyle</option>
          <option value="Vintage">Vintage</option>
          <option value="Sports">Sports</option>
          <option value="Decor">Decor</option>
          <option value="Artwork">Artwork</option>
          <option value="Science">Science</option>
          <option value="Health">Health</option>
          <option value="Art">Art</option>
        </select>
        <select
          className="select select-success w-full max-w-xs"
          onChange={(e) => setBrand(e.target.value)}
        >
          <option disabled selected>
            All Brand
          </option>
          <option value="ShineWear">ShineWear</option>
          <option value="ElectroMax">ElectroMax</option>
          <option value="Nature">Nature</option>
          <option value="Wanderlust">Wanderlust</option>
          <option value="Stockify">Stockify</option>
          <option value="Artistry">Artistry</option>
          <option value="WildLens">WildLens</option>
          <option value="PixelPerfect">PixelPerfect</option>
          <option value="LifeLens">LifeLens</option>
          <option value="RetroClicks">RetroClicks</option>
          <option value="SportyShots">SportyShots</option>
          <option value="DecoArt">DecoArt</option>
          <option value="CreativeCanvas">CreativeCanvas</option>
          <option value="TDPhoto">TDPhoto</option>
          <option value="OlenkaStyle">OlenkaStyle</option>
          <option value="Pixabay">Pixabay</option>
          <option value="FergusonClicks">FergusonClicks</option>
          <option value="KarolinaDesign">KarolinaDesign</option>
          <option value="LabLens">LabLens</option>
          <option value="Elevate">Elevate</option>
          <option value="MughalClicks">MughalClicks</option>
          <option value="ShinyDiamond">ShinyDiamond</option>
          <option value="JibaroArt">JibaroArt</option>
          <option value="LaryssaLens">LaryssaLens</option>
          <option value="Eprism">Eprism</option>
          <option value="GabrielStyle">GabrielStyle</option>
          <option value="MathArt">MathArt</option>
        </select>

        <select
          className="select select-success w-full max-w-xs"
          onChange={(e) => setSortOrder(e.target.value)}
        // onChange={(e) => console.log(e.target.value)}
        >
          <option disabled selected>
            Sort by
          </option>
          <option value="sortBy=date&sortOrder=desc">Newest First</option>
          <option value="sortBy=date&sortOrder=asc">Old Product</option>
          <option value="sortBy=price&sortOrder=desc">
            Price: High to Low
          </option>
          <option value="sortBy=price&sortOrder=asc">Price: Low to High</option>
        </select>
        <div>
          <Button
            type="button"
            color="warning"
            onClick={() => {
              setSearch("");
              setCategory("");
              setBrand("");
              setSortOrder("");
              setCurrentPage(1);
            }}
          >
            Reset
          </Button>
        </div>
      </div>

      {/* product section */}
      <section>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-4">
          {/* <Product></Product> */}
          {!isLoading && (products?.map((product) => (

            <Product key={product?._id} product={product} />
          )))}
        </div>
      </section>

      {/* <div className="flex overflow-x-auto sm:justify-center mt-6 mb-10">
        <Pagination currentPage={currentPage} totalPages={20} onPageChange={onPageChange} showIcons />
      </div> */}


      {/* Pagination */}
      <ReactPaginate
        breakLabel="..."
        nextLabel="next >"
        onPageChange={handlePageClick}
        pageRangeDisplayed={5}
        pageCount={numberOfPages}
        previousLabel="< previous"
        renderOnZeroPageCount={null}
        containerClassName="pagination-container"
        pageClassName="pagination-list"
        pageLinkClassName="pagination-anchor"
        previousLinkClassName="previous-anchor"
        nextLinkClassName="next-anchor"
      />

    </div>
  );
};

export default Home;
