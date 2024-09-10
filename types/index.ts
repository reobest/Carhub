import React from "react";
import { MouseEventHandler } from "react";
export type CarType = {
    city_mpg: number;
    class: string;
    combination_mpg: number;
    cylinders: number;
    displacement: number;
    drive: string;
    fuel_type: string;
    highway_mpg: number;
    make: string;
    model: string;
    transmission: string;
    year: number;
  }
  export type ButtonType = {
    isDisabled?:boolean;
    btnType?:"submit" | "button";
    containerStyles?:string;
    handleClick?:MouseEventHandler<HTMLButtonElement>;
    title:string;
}
export interface FilterProps {
  manufacturer?: string;
  year?: number;
  model?: string;
  limit?: number;
  fuel?: string;
}
export interface HomeProps {
  searchParams: FilterProps;
}
export interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  cars: CarType | null;
}