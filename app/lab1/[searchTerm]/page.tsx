import Lab1List from '@/components/Lab1List';
import { ProductData } from '@/typings';
import React, { Suspense } from 'react'

type Props = {
    params: {
        searchTerm: string;
    }
}
const search = async(searchTerm: string) => {
    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/product/search?q=${searchTerm}`)
    const data: ProductData[] = await res.json();
    return data;
}
async function page({params: {searchTerm}}: Props) {
    const searchResults: ProductData[] = await search(searchTerm);
  return (
    <section>
    <Suspense fallback={<p>Loading feed...</p>}>
      <Lab1List productData={searchResults} searchTerm={searchTerm}/>
    </Suspense>
  </section>
  )
}

export default page

