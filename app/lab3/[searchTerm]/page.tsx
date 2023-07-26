import { Clothing, ReviewData } from "@/typings";

import ClothList from '@/components/ClothList';
import Lab3List from '@/components/Lab3List';
import Loading from './loading';
import { Suspense } from 'react';

type Props = {
    params: {
        searchTerm: string;
    }
}

const search = async(searchTerm: string) => {
    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/clothing/users/${searchTerm}`)
    const data: Clothing[] = await res.json();
    return data;
}

async function page({params: {searchTerm}}: Props) {
  const searchResults: Clothing[] = await search(searchTerm);
  return (
    <section>
    <Suspense fallback={<Loading/>}>
      <Lab3List reviewData={searchResults} searchTerm={searchTerm}/>
    </Suspense>
  </section>
  )
}

export default page

