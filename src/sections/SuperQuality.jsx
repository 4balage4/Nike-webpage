import Button from '../components/Button'
import {shoe8} from '../assets/images'


const SuperQuality = () => {
  return (
    <section id="about-us"
    className="flex justify-between items-center max-lg:flex-col gap-10 w-full max-container">
      <div className="flex flex-1 flex-col">
      <h2 className="font-palanquin text-4xl capitalize font-bold lg:max-w-lg">
          We Provide You
          <span className="text-coral-red"> Super Quality</span> Shoes
        </h2>
        <p className=" mt-4 lg:max-w-lg info-text">Ensuring Premium comfort and style, our meticulously crafted footwear is designed to elevate your experience, providing you with unmatched quality, innovation, and touch of elegance.</p>
        <p className="info-text mt-4 lg:max-w-lg">Our dedication of detail and excellence ensures your satisfaction</p>
        <div className='mt-10'>
          <Button label="View Details"/>

        </div>
      </div>
      <div className=''>
        <img src={shoe8} alt='shoe8'
        width={570}
        height={522} />
      </div>
    </section>
  )
}

export default SuperQuality
