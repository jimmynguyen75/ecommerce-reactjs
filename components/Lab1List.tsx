"use client";

import React from "react";
import { Card, Col, Row } from "antd";
import { ProductData } from "@/typings";
type Props = {
  productData: ProductData[];
};

function Lab1List({ productData }: Props) {
  return (
    <>
      <div className="bg-white py-12 sm:py-6">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:mx-0">
            <h2 className="text-xl font-bold tracking-tight text-gray-900 sm:text-4xl">Ecommerce website</h2>
            <p className="mt-2 text-md leading-8 text-gray-600">This is lab 1</p>
          </div>
          <div className="mx-auto mt-4 grid max-w-2xl grid-cols-1 gap-x-4 gap-y-4 border-t border-gray-200 pt-2 sm:mt-8 sm:pt-8 lg:mx-0 lg:max-w-none lg:grid-cols-4">
            {productData.map((data, i) => (
              <article key={data.ID} className="flex bg-gray-50 border border-gray-200 rounded-sm p-4 max-w-xl flex-col items-start justify-between">
                <div className="flex  items-center gap-x-4 text-xs">
                  <time className="text-gray-500">ID: {data.ProductID}</time>
                  <a href="#" className="relative z-10 rounded-full bg-gray-50 px-3 py-1.5 font-medium text-gray-600 hover:bg-gray-100">
                    ${data.Price}
                  </a>
                </div>
                <div className="group relative">
                  <h3 className="mt-1 text-md font-semibold leading-6 text-gray-900 group-hover:text-gray-600">
                    <a href="#">
                      <span className="absolute inset-0"></span>
                      {data.ProductName}
                    </a>
                  </h3>
                  <p className="mt-3 line-clamp-3 text-sm leading-6 text-gray-600">{data.Description}</p>
                </div>
                {/* <div className="relative mt-8 flex items-center gap-x-4">
          <img src="https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="" className="h-10 w-10 rounded-full bg-gray-50"/>
          <div className="text-sm leading-6">
            <p className="font-semibold text-gray-900">
              <a href="#">
                <span className="absolute inset-0"></span>
                Michael Foster
              </a>
            </p>
            <p className="text-gray-600">Co-Founder / CTO</p>
          </div>
        </div> */}
              </article>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default Lab1List;
