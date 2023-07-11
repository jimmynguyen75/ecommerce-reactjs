import { Suspense } from 'react';

import Lab3List from '@/components/Lab3List';
import { ReviewData } from '@/typings';
import Loading from './loading';

type Props = {
    params: {
        searchTerm: string;
    }
}
const search = async(searchTerm: string) => {
    console.log("searchTerm", searchTerm)
    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/ratings/${searchTerm}`)
    const data: ReviewData[] = await res.json();
    return data;
}
async function page({params: {searchTerm}}: Props) {
    const searchResults: ReviewData[] = await search(searchTerm);
  return (
    <section>
    <Suspense fallback={<Loading/>}>
      <Lab3List reviewData={searchResults} searchTerm={searchTerm}/>
    </Suspense>
  </section>
  )
}

export default page

