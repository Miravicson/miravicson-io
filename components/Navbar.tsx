import userData from '@constants/data';
import Link from 'next/link';
import InstagramLogo from './Icons/InstagramLogo';
import LinkedInLogo from './Icons/LinkedInLogo';
import TwitterLogo from './Icons/TwitterLogo';
import NavLink from './NavLink';
import ThemeToggleButton from './ThemeToggleButton';

const navBarLinks = [
  { name: 'Articles', link: '/articles' },
  {
    name: 'Work',
    link: '/work',
  },
  {
    name: 'Projects',
    link: '/projects',
  },
  {
    name: 'About',
    link: '/about',
  },
  {
    name: 'Resume',
    link: '/resume',
  },
];
export default function Navbar() {
  return (
    <div className="mt-8  md:mt-[5vw] bmd:mt-[10vw]">
      <div className="flex items-center justify-between md:flex-row">
        <div className="flex flex-col">
          <Link href="/">
 
              <h1 className="text-base md:text-[1.125rem] md:leading-[1.3] font-medium leading-[1.3]">
                {userData.name}
              </h1>
              <p className="text-base font-light leading-[1.3] md:text-[1.125rem] md:leading-[1.3]">
                {userData.designation}
              </p>

          </Link>
        </div>
        {/* Desktop Nav links */}
        <div className="hidden space-x-8 md:block">
          {navBarLinks.map((linkObj) => (
            <NavLink
              key={linkObj.name}
              path={linkObj.link}
              name={linkObj.name}
            />
          ))}
        </div>

        <div className="flex flex-row items-center space-x-3">
          <a
            href={userData.socialLinks.instagram.link}
            className="text-base font-normal text-primary-text-color dark:text-d-primary-text-color"
          >
            <InstagramLogo
              className={`w-[16px] h-[16px] sm:w-4 sm:h-4 bmd:w-5 bmd:h-5`}
            />
          </a>
          <a
            href={userData.socialLinks.twitter.link}
            className="text-base font-normal text-gray-600 dark:text-gray-300"
          >
            <TwitterLogo
              className={`w-[16px] h-[16px] sm:w-4 sm:h-4 bmd:w-5 bmd:h-5`}
            />
          </a>
          <a
            href={userData.socialLinks.linkedin.link}
            className="text-base font-normal text-gray-600 dark:text-gray-300"
          >
            <LinkedInLogo
              className={`w-[16px] h-[16px] sm:w-4 sm:h-4 bmd:w-5 bmd:h-5`}
            />
          </a>
          <ThemeToggleButton />
        </div>
      </div>

      {/* Mobile Nav links */}
      <div className="flex justify-between w-full mt-8 md:hidden">
        {navBarLinks.map((linkObj) => (
          <NavLink key={linkObj.name} path={linkObj.link} name={linkObj.name} />
        ))}
      </div>
    </div>
  );
}
