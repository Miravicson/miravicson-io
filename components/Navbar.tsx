import Link from 'next/link';
import userData from '@constants/data';
import NavLink from './NavLink';
import InstagramLogo from './Icons/InstagramLogo';
import TwitterLogo from './Icons/TwitterLogo';
import LinkedInLogo from './Icons/LinkedInLogo';
import ThemeToggleButton from './ThemeToggleButton';

export default function Navbar() {
  return (
    <div className="mt-8  md:mt-[5vw] bmd:mt-[10vw]">
      <div className="flex items-center justify-between md:flex-row">
        <div className="flex flex-col">
          <Link href="/">
            <a>
              <h1 className="text-base md:text-[1.125rem] md:leading-[1.3] font-medium leading-[1.3]">
                {userData.name}
              </h1>
              <p className="text-base font-light leading-[1.3] md:text-[1.125rem] md:leading-[1.3]">
                {userData.designation}
              </p>
            </a>
          </Link>
        </div>
        {/* Desktop Nav links */}
        <div className="hidden space-x-8 md:block">
          <NavLink path="/articles" name="Articles" />
          <NavLink path="/work" name="Work" />
          <NavLink path="/projects" name="Projects" />
          <NavLink path="/about" name="About" />
        </div>

        <div className="flex flex-row items-center space-x-3">
          <a
            href={userData.socialLinks.instagram.link}
            className="text-base font-normal text-primary-text-color dark:text-d-primary-text-color"
          >
            <InstagramLogo className={`w-[16px] h-[16px] sm:w-4 sm:h-4 bmd:w-5 bmd:h-5`} />
          </a>
          <a
            href={userData.socialLinks.twitter.link}
            className="text-base font-normal text-gray-600 dark:text-gray-300"
          >
            <TwitterLogo className={`w-[16px] h-[16px] sm:w-4 sm:h-4 bmd:w-5 bmd:h-5`} />
          </a>
          <a
            href={userData.socialLinks.linkedin.link}
            className="text-base font-normal text-gray-600 dark:text-gray-300"
          >
            <LinkedInLogo className={`w-[16px] h-[16px] sm:w-4 sm:h-4 bmd:w-5 bmd:h-5`} />
          </a>
          <ThemeToggleButton />
        </div>
      </div>

      {/* Mobile Nav links */}
      <div className="flex justify-between w-full mt-8 md:hidden">
        <NavLink path="/articles" name="Articles" />
        <NavLink path="/work" name="Work" />
        <NavLink path="/projects" name="Projects" />
        <NavLink path="/about" name="About" />
      </div>
    </div>
  );
}
