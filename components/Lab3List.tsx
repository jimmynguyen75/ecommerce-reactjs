"use client";

import { FormEvent, useState } from "react";

import { useRouter } from "next/navigation";
import { ReviewData } from "@/typings";

type Props = {
  reviewData: ReviewData[];
  searchTerm?: string;
};

function Lab3List({ reviewData, searchTerm }: Props) {
  const [search, setSearch] = useState("");
  const router = useRouter();

  const handleSearch = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    router.push(`/lab3/${search}`);
  };
  return (
    <>
      <div className="bg-white py-8">
        <div className="mx-auto px-6 lg:px-8">
          <div className="mx-auto lg:mx-0">
            <div className="flex justify-between items-center">
              <h2 className="text-xl mb-[10px] mr-4 font-bold tracking-tight text-gray-900 sm:text-4xl">Calling from MongoDB</h2>
              <img className="h-18 w-32 ml-auto" src="https://1000logos.net/wp-content/uploads/2016/10/Amazon-Logo.png" alt="" />
            </div>
          </div>
          <div className="mb-3">
            <form onSubmit={handleSearch} className="relative mb-4 flex w-full flex-wrap items-stretch">
              <input
                type="search"
                className="relative m-0 -mr-0.5 block w-[1px] min-w-0 flex-auto rounded-l border border-solid border-neutral-100 bg-transparent bg-clip-padding px-3 py-[0.25rem] text-base font-normal leading-[1.6] text-neutral-700 outline-none transition duration-200 ease-in-out focus:z-[3] focus:border-primary focus:text-neutral-700 focus:shadow-[inset_0_0_0_1px_rgb(59,113,202)] focus:outline-none dark:border-blue-300 dark:text-neutral-800 dark:placeholder:text-neutral-400 dark:focus:border-primary"
                placeholder="Tìm sản phẩm"
                aria-label="Search"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                aria-describedby="button-addon1"
              />
              <button
                className="relative z-[2] flex items-center rounded-r bg-blue-500 px-6 py-2.5 text-xs font-medium uppercase leading-tight text-white shadow-md transition duration-150 ease-in-out hover:bg-primary-700 hover:shadow-lg focus:bg-primary-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-primary-800 active:shadow-lg"
                type="submit"
                id="button-addon1"
                data-te-ripple-init
                data-te-ripple-color="light"
              >
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="h-5 w-5">
                  <path
                    fillRule="evenodd"
                    d="M9 3.5a5.5 5.5 0 100 11 5.5 5.5 0 000-11zM2 9a7 7 0 1112.452 4.391l3.328 3.329a.75.75 0 11-1.06 1.06l-3.329-3.328A7 7 0 012 9z"
                    clipRule="evenodd"
                  />
                </svg>
              </button>
            </form>
          </div>
          <div className="font-medium">
            {searchTerm
              ? reviewData.length > 0
                ? reviewData.length + " kết quả cho từ khóa '" + searchTerm + "'"
                : "Không có kết quả"
              : "Danh sách các sản phẩm [" + reviewData.length + "]"}
          </div>
          <div className="mx-auto mt-4 grid max-w-2xl grid-cols-1 gap-x-4 gap-y-4 border-t border-orange-600 pt-2 sm:mt-8 sm:pt-8 lg:mx-0 lg:max-w-none md:grid-cols-3 lg:grid-cols-5">
            {reviewData.map((data, i) => (
              <article key={i} className="flex bg-gray-50 border border-gray-200 rounded-sm p-4 max-w-xl flex-col items-start justify-between">
                <div className="flex  items-center gap-x-4 text-xs">
                  <time className="text-gray-500">User ID: {data.user_id}</time>
                  <a href="#" className="relative z-10 rounded-full bg-gray-50 px-3 py-1.5 font-medium text-gray-600 hover:bg-gray-100">
                    Rating: {data.rating}
                  </a>
                </div>
                <div className="group relative">
                  <h3 className="mt-1 text-md font-semibold leading-6 text-gray-900 group-hover:text-gray-600">
                    <a href="#">
                      <span className="absolute inset-0"></span>
                      {data.category}
                    </a>
                  </h3>
                  <p className="mt-3 line-clamp-3 text-sm leading-6 text-gray-600">{data.review_summary}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default Lab3List;
