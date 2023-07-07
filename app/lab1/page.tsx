
import Lab1List from "@/components/Lab1List";
import { ProductData } from "@/typings";
import { fetchProduct } from "@/utils/fetchProduct";

const getProduct = async () => {
  const productData: ProductData[] = await fetchProduct();
  if (!productData) {
    throw new Error("Failed to fetch data");
  }
  return productData;
}
export default async function Home() {
  //const res = await fetch('https://62f9bd713c4f110faa8c35de.mockapi.io/api/users')
  //const res = await fetch('https://54.151.176.179/api/products')
  // const [productData, setProductData] = useState<ProductData[]>([]);
  // const [loading, setLoading] = useState(false);
  // useState
  // //   const loadingBtn = () => {
  // //     setLoading(true);
  // //     setTimeout(() => {
  // //       setLoading(false);
  // //     }, 3000);
  // //   };
  // const onSearch = async (value: string) => {
  //   // const productData: ProductData[] = await getData();
  //   // console.log("data", productData);
  //   // setProductData(productData)
  //   //console.log(data)
  // };
  // useEffect(() => {
  //   // const fectching = async () => {
  //   //   const productData: ProductData[] = await getData();
      
  //   //   setProductData(productData)
  //   // };
  //   setLoading(prev=>!prev)
  //   // fectching();
  // }, []);
  // console.log(productData);

  const productData: ProductData[] = await getProduct();
  return (
    // <div
    //   className="h-screen relative overflow-x-hidden flex flex-col text-left md:flex-row max-w-full justify-evenly mx-auto items-center z-0 "
    // >
    //   <h3 className="absolute top-8 uppercase tracking-[20px] text-blue-600 z-30 text-2xl">
    //     <div className="w-full text-center pt-12">
    //       Ecommerce
    //     </div>
    //   </h3>
      
    //   <div className="w-full absolute top-[30%] bg-[#F7AB0A]/10 left-0 h-[500px] -skew-y-12">
    //   </div>
    // </div>
    <Lab1List productData={productData}/>
  );
}