import Link from 'next/link';
import userData from '@constants/data';
import NavLink from './NavLink';
import InstagramLogo from './Icons/InstagramLogo';
import TwitterLogo from './Icons/TwitterLogo';
import LinkedInLogo from './Icons/LinkedInLogo';
import ThemeToggleButton from './ThemeToggleButton';

export default function Navbar() {
  return (
    <div className="mt-8  md:py-15">
      <div className="flex items-center justify-between md:flex-row">
        <div className="flex flex-col">
          <Link href="/">
            <a>
              <h1 className="text-base md:text-xl font-medium leading-[1.3]">
                {userData.name}
              </h1>
              <p className="text-base font-light leading-[1.3] ">
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

        <div className="flex flex-row items-center space-x-4">
          <a
            href={userData.socialLinks.instagram}
            className="text-base font-normal text-gray-600 dark:text-gray-300"
          >
            <InstagramLogo />
          </a>
          <a
            href={userData.socialLinks.twitter}
            className="text-base font-normal text-gray-600 dark:text-gray-300"
          >
            <TwitterLogo />
          </a>
          <a
            href={userData.socialLinks.linkedin}
            className="text-base font-normal text-gray-600 dark:text-gray-300"
          >
            <LinkedInLogo />
          </a>
          <ThemeToggleButton />
        </div>
      </div>

      {/* Mobile Nav links */}
      <div className="flex mt-8 w-full justify-between md:hidden">
        <NavLink path="/articles" name="Articles" />
        <NavLink path="/work" name="Work" />
        <NavLink path="/projects" name="Projects" />
        <NavLink path="/about" name="About" />
      </div>
    </div>
  );
}
