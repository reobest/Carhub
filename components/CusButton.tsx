import { ButtonType } from '@/types'
const CusButton = ({handleClick,btnType,isDisabled,containerStyles,title}:ButtonType) => {
  return (
    <button onClick={handleClick} type={btnType} disabled={isDisabled} className={containerStyles}>{title}</button>
  )
}

export default CusButton