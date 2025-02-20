
// eslint-disable-next-line react/prop-types, no-unused-vars
const ShoeCard = ({imgURL, changeBigShoeImage, bigShoeImg}) => {
      const handleClick = () => {
        if(bigShoeImg !== imgURL) {
          changeBigShoeImage(imgURL)
        }
      }


  return (
     <div
    className={`border-2 rounded-xl
      ${bigShoeImg === imgURL ? 'border-coral-red' : 'border-transparent'} cursor-pointer max-sm:flex-1`}
      onClick={handleClick}
      >
        <div className='flex justify-center items-center bg-card bg-center bg-cover sm:h-40 rounded-xl max-sm:p-4'>
          <img
          src={imgURL}
          alt="shoe-collection"
          width={150}
          height={125}
          className='object-contain' />
        </div>
      </div>
  )
}

export default ShoeCard
