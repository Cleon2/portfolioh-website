import React from "react";

function Experience({ experienceRef }) {
  return (
    <div
      ref={experienceRef}
      className=" mx-10 mt-20 md:mx-20 pt-20 pb-6 grid grid-cols-1 md:grid-cols-2 md:content-center mt-10"
    >
      <div className="my-auto">
        <h1 className="text-4xl md:text-5xl mb- 1 md:mb-3">Experience</h1>
        <div className="flex flex-col mt-6">
          <a href="https://www.bellos.app/" target="_blank">
            <img
              src="\assets\bellos.png"
              className="w-44 h-1/2 md:h-5/12 object-cover mb-2"
            />
          </a>
          <h1 className="text-xl font-semibold">Software Engineer Intern</h1>
          <h3 className="text-gray-500">May 2022 - August 2022</h3>
          <p className="text-gray-500">
            Bellos is a cloud platform that simplifies Waitlist, Reservation and
            Ticketing operations while providing better guest experiences.
          </p>
          <ul className="mt-5 list-disc list-inside">
            <li>Built customer reservation front-end and back-end</li>
            <li>Automated reservation email reminders using AWS SES</li>
            <li>
              Worked with React, Redux, Typescript, ExpressJs, Postgresql and
              Vite
            </li>
          </ul>
        </div>

        <div className="flex flex-col mt-10">
          <a href="https://180dc.org/branch/sgkr/" target="_blank">
            <img
              src="\assets\180dc.jpg"
              className="w-44 h-1/4 object-cover mb-2"
            />
          </a>
          <p className="text-gray-500">
            180 Degrees Consulting Singapore (Kent Ridge) is a student-led,
            social-impact consultancy committed to solving the most complex
            problems of socially-minded organisations.
          </p>
          <h1 className="text-xl font-semibold mt-6">Deputy Project Leader</h1>
          <h3 className="text-gray-500">January 2022 - present</h3>
          <ul className="mt-5 list-disc list-inside">
            <li>Scope: Market Segmentation</li>
            <li>Industry: Climate-tech</li>
          </ul>
          <h1 className="text-xl font-semibold mt-6">Project Analyst</h1>
          <h3 className="text-gray-500">August 2022 - November 2022</h3>
          <ul className="mt-5 list-disc list-inside">
            <li>Scope: Revenue Generation Strategy (Singapore)</li>
            <li>Industry: Online floral market</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Experience;
