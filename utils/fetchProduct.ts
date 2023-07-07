export const fetchProduct = async () => {
  const API_URL = process.env.NEXT_PUBLIC_BASE_URL || "";
  console.log(API_URL);
  const res = await fetch(API_URL, {
    method: 'GET',
    headers: {
      accept: 'application/json',
    }});
  if (!res) {
    throw new Error("Failed to fetch data");
  }
  const data = await res.json();
  // const productData: ProductData[] = data;
  return data;
};
