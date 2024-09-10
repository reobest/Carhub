import { Hero,Msection, Search , CustomFilters , ShowMoreButton} from "@/components";
import { fetchCars } from '@/app/utils'
import { HomeProps } from '@/types'
export default async function  Home({ searchParams }: HomeProps) {

  const response = await fetchCars({
    manufacturer: searchParams.manufacturer || "toyota",
    year: searchParams.year || 2022,
    fuel: searchParams.fuel || "",
    limit: searchParams.limit || 10,
    model: searchParams.model || "camry",
  })
  return (
    <main>
      <Hero/>
      <Search/>
      <CustomFilters/>
      <Msection response={response}/>
      <ShowMoreButton/>
    </main>
  );
}




