import React from 'react';
import userData from '@constants/data';
import SocialLink from './SocialLink';

function SocialLinks({ className }: { className?: string }) {
  return (
    <div className={`hidden md:block`}>
      <h1 className="mt-8 text-xl font-semibold">
        Social Links
      </h1>
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
          <img
            src={userData.avatarUrl}
            alt="victor ughonu"
            className="object-cover w-full shadow-lg"
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
              <img
                src={userData.avatarUrl}
                alt="victor ughonu"
                className="h-full shadow-lg "
              />
            </figure>

            {userData.about.description?.map((desc, idx) => (
              <p key={idx} className="mb-4 text-[1.125rem] leading-[1.7] break-words">
                {desc}
              </p>
            ))}

            <h1 className="inline-block px-2 py-1 text-3xl font-bold bg-red-500 rounded-md text-gray-50">
              Tech Stack
            </h1>
            <div className="flex flex-row flex-wrap mt-8">
              <img
                src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/javascript/javascript.png"
                className="w-20 h-20 mx-4 my-4"
              />
              <img
                src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/java/java.png"
                className="w-20 h-20 mx-4 my-4"
              />
              <img
                src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/typescript/typescript.png"
                className="w-20 h-20 mx-4 my-4"
              />
              <img
                src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/html/html.png"
                className="w-20 h-20 mx-4 my-4"
              />
              <img
                src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/css/css.png"
                className="w-20 h-20 mx-4 my-4"
              />
              <img
                src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/angular/angular.png"
                className="w-20 h-20 mx-4 my-4"
              />
              <img
                src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/vue/vue.png"
                className="w-20 h-20 mx-4 my-4"
              />
              <img
                src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/git/git.png"
                className="w-20 h-20 mx-4 my-4"
              />
              <img
                src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/react/react.png"
                className="w-20 h-20 mx-4 my-4"
              />
              <img
                src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/firebase/firebase.png"
                className="w-20 h-20 mx-4 my-4"
              />
              <img
                src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/mysql/mysql.png"
                className="w-20 h-20 mx-4 my-4"
              />
              <img
                src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/mongodb/mongodb.png"
                className="w-20 h-20 mx-4 my-4"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
