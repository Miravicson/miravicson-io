import userData from '@constants/data';
import Image from 'next/image';
import ProgressiveImage from 'react-progressive-image';
import Header from './Header';
import AngledArrow from './Icons/AngledArrow';
export default function Hero() {
  return (
    <Header>
      <div className="flex flex-col items-center mx-auto ssm:items-start ssm:flex-row md:justify-between">
        <div className="order-last text-center ssm:text-left ssm:order-first lg:w-4/6 bmd:text-left">
          <h1 className={`font-bold leading-[1] text-[1em] m-0`}>
            Writer.
            <br />
            Developer.
            <br />
            <span className={`whitespace-nowrap`}>AI Engineer.</span>
          </h1>
        </div>
        {/* Image container */}
        <div className="order-first ssm:mb-0 ssm:order-last relative w-full sm:block sm:left-[1vw] sm:top-[calc(-1rem+5vw)] md:top-[4rem] bmd:left-[2vw] 2xl:w-2/6 2xl:left-[12rem]">
          <div className="w-full transform scale-75 sm:scale-[0.9] bmd:scale-[1]">
            <ProgressiveImage
              src={userData.avatarUrl}
              placeholder={userData.avatarUrlSmall}
            >
              {(src) => (
                <Image
                  src={src}
                  alt="victor ughonu"
                  className="rounded-full shadow-lg bmd:rounded-none "
                  height={505}
                  width={495}
                  priority
                />
              )}
            </ProgressiveImage>

            <div className="flex flex-row justify-between mt-[-5px] transform translate-x-10 bmd:transform-none">
              <div className="flex-row hidden space-x-2 ssm:flex md:space-x-4">
                <AngledArrow />
                <p className="font-mono text-xs">That&apos;s me</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Header>
  );
}
