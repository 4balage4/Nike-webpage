import {footerLogo} from '../assets/images';
import {copyrightSign} from '../assets/icons'
import {socialMedia, footerLinks} from '../constants'

const Footer = () => {
  return (
    <footer className="max-container">
      <div className="flex justify-between item-start gap-20 flex-wrap max-lg:flex-col ">
        <div className='flex flex-col items-start'>
          <a href="/">
            <img src={footerLogo} alt=""
            width={150}
            height={46} />
          </a>
          <p className='mt-6 text-base leading-7 font-montserrat text-white-500 sm:max-w-sm text-white'>Get shoes ready for the new term at your nearest Nike store. Find Your perfect Size In Store. Get Rewards</p>
        <div className='flex items-center gap-5 mt-8'>
          {socialMedia.map((icon) =>{
            return (
              <div className='bg-white rounded-full flex justify-center items-center w-12 h-12'>
                <img

                key={icon.alt}
                src={icon.src}
                alt={icon.alt}
                width={24}
                height={24} />
              </div>
            )
          })}
        </div>
        </div>
        <div className="flex flex-1 justify-between gap:20 lg:gap-10 flex-wrap">
          {footerLinks.map((section) => {
            return (
              <div key={section}>
                <h4 className='text-white'>
                  {section.title}
                </h4>
                <ul>
                  {section.links.map((link) => {
                    return (
                      <li
                      key={link.name}
                      className='mt-3 text-white-400 font-montserrat text-base leading-normal cursor-pointer hover:text-slate-gray'>
                      <a href=''>{link.name}</a>
                        </li>
                    )
                  })}
                </ul>
              </div>
            )
          })}
        </div>
      </div>
      <div className='flex justify-between text-white-400 mt-24 max-sm:flex-col max-sm-items-center'>
          <div className='flex flex-1 justify-center items-center gap-2 font-montserrat'>
              <img src={copyrightSign} alt='copy right sign'
              width={20}
              height={20}
              className="rounded-full m-0" />
              <p>Project based on Javascrip Mastery</p>
              <p className='font-montserrat cursor-pointer hover:text-slate-gray'>Terms and Conditions</p>
          </div>
      </div>
    </footer>
  )
}

export default Footer
