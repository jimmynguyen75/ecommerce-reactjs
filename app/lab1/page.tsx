import Lab1List from "@/components/Lab1List";
import { ProductData } from "@/typings";
import { fetchProduct } from "@/utils/fetchProduct";
import { Suspense } from "react";

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
    <Suspense fallback={<p>Loading feed...</p>}>
      <Lab1List productData={productData} />
    </Suspense>
  );
}