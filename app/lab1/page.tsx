import Lab1List from "@/components/Lab1List";
import Loading from "./loading";
import { ProductData } from "@/typings";
import { Suspense } from "react";
import { fetchProduct } from "@/utils/fetchProduct";

const getProduct = async () => {
  const productData: ProductData[] = await fetchProduct();
  if (!productData) {
    throw new Error("Failed to fetch data");
  }
  return productData;
};
export default async function Home() {
  const productData: ProductData[] = await getProduct();
  return (
    <Suspense fallback={<Loading/>}>
      <Lab1List productData={productData} />
    </Suspense>
  );
}