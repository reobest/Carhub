"use client"
import React , {useState} from 'react'
import { Card } from '.'
import { CarType } from '@/types'
import Modal from '@/components/Model'
const Msection = ({ response }: any) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedCar, setSelectedCar] = useState<CarType | null>(null);
 const closeModal = () => {
    setIsModalOpen(false);
  };
  const openModal = (car:CarType) => {
    setSelectedCar(car);
    setIsModalOpen(true);
  };
  return (
    <div className='w-full h-auto flex flex-wrap justify-around gap-[20px]'>
      <Modal onClose={closeModal} isOpen={isModalOpen} cars={selectedCar} />
      {response?.map((car: CarType) => (
        <Card car={car} openModal={() => openModal(car)} key={Math.random()} />
      ))}
    </div>
  )
}

export default Msection