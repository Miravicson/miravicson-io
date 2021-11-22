import React from 'react';
import userData from '@constants/data';
import SocialLink from './SocialLink';
import TechStackThumbNail, { techStack } from './TechStackThumbNail';
import Image from 'next/image';

function SocialLinks({ className }: { className?: string }) {
  return (
    <div className={`hidden md:block`}>
      <h1 className="mt-8 text-xl font-semibold">Social Links</h1>
      <div className={`mt-4 ml-4 ${className}`}>
        {Object.values(userData.socialLinks).map((socialLink) => (
          <SocialLink key={socialLink.name} {...socialLink} />
        ))}
      </div>
    </div>
  );
}

export default function AboutMe() {
  return (
    <section>
      <div className="mx-auto text-container">
        <p className="text-2xl font-medium leading-[1.5] md:text-4xl">
          {userData.about.title}
        </p>
      </div>

      <div className="relative w-full mt-[1.5rem] full-page-width sm:hidden">
        <figure className="w-full">
          <Image
            src={userData.avatarUrl}
            alt="victor ughonu"
            className="object-cover w-full shadow-lg"
            height="505"
            width="495"
          />
        </figure>
      </div>

      <div>
        <div className="grid max-w-6xl grid-cols-1 mx-auto lg:pt-20 md:grid-cols-3 gap-y-20 gap-x-20">
          <div className="inline-flex flex-col">
            <SocialLinks />
          </div>
          {/* Text area */}
          <div className="col-span-1 mt-4 md:col-span-2">
            <figure className="floated-profile-picture">
              <Image
                src={userData.avatarUrl}
                alt="victor ughonu"
                className="h-full shadow-lg "
                width="313"
                height="320"
              />
            </figure>

            {userData.about.description?.map((desc, idx) => (
              <p
                key={idx}
                className="mb-4 text-[1.125rem] leading-[1.7] break-words"
              >
                {desc}
              </p>
            ))}

            <h1 className="inline-block px-2 py-1 mt-4 text-3xl font-bold rounded-md bg-error-color text-gray-50">
              Tech Stack
            </h1>
            <div className="grid grid-cols-4 pt-5">
              {techStack.map((techStack) => (
                <TechStackThumbNail
                  key={techStack.name}
                  Icon={techStack.icon}
                  name={techStack.name}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
