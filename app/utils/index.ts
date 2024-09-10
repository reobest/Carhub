import axios from "axios";
import { FilterProps } from "@/types";

export const calculateCarRent = (city_mpg: number, year: number) => {
  const basePricePerDay = 50;
  const mileageFactor = 0.1;
  const ageFactor = 0.05;
  const mileageRate = city_mpg * mileageFactor;
  const ageRate = (new Date().getFullYear() - year) * ageFactor;
  const rentalRatePerDay = basePricePerDay + mileageRate + ageRate;

  return rentalRatePerDay.toFixed(0);
};
export async function fetchCars(filters: FilterProps) {
  const { manufacturer, year, model, limit, fuel } = filters;
  const options = {
    method: 'GET',
    url: `https://cars-by-api-ninjas.p.rapidapi.com/v1/cars?make=${manufacturer}&model=${model}&fuel_type=${fuel}&year=${year}&limit=${limit}`,
    headers: {
      'X-RapidAPI-Key': '542e091ce2msh711e6f2801e38d3p1a487djsn715b3270eab8',
      'X-RapidAPI-Host': 'cars-by-api-ninjas.p.rapidapi.com'
    }
  };
  const response = await axios.request(options);
  const finalResponse = response.data
  return finalResponse;
}
export const updateSearchParams = (manufacturer?: string, model?: string, fuel?: string, year?: string , limit? : number) => {
  console.log(limit);
  
  const searchParams = new URLSearchParams(window.location.search);
  if (manufacturer && manufacturer?.length > 0) {
    searchParams.set("manufacturer", manufacturer);
  }
  if (model && model?.length > 0) {
    searchParams.set("model", model);
  }
  if (fuel && fuel?.length > 0) {
    searchParams.set("fuel", fuel);
  }
  if (year && year?.length > 0) {
    searchParams.set("year", year);
  }
  if (limit && limit > 0) {
    searchParams.set("limit", `${limit}`);
  }
  const newPathname = `${window.location.pathname}?${searchParams.toString()}`;
  return newPathname;
};
export const generateCarImageUrl = async (Name: string) => {
  try {
      const { data } = await axios.get(
        `https://api.unsplash.com/search/photos?query=${Name}&client_id=GGzRO5i_YcInXS8KQQC9IlzDJlWcCMPj1VVPjbDDTeg`
      );
      const response = data.results[1].urls.full
      
      return response
  } catch (error) {
    console.log(error);
  } 
}

