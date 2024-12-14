import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";

import { CTA } from "../components";
import { experiences, skills } from "../constants";

import "react-vertical-timeline-component/style.min.css";

const About = () => {
  return (
    <section className='max-container'>
      <h1 className='head-text'>
        Hello, I'm{" "}
        <span className='blue-gradient_text font-semibold drop-shadow'>
          {" "}
          Anjali Nauria   
        </span>{" "}
        👋
      </h1>

      <div className='mt-5 flex flex-col gap-3 text-slate-500'>
        <p>
         A passionate and dedicated full stack web developer. With a strong background in both front-end and back-end technologies, 
         I thrive on creating dynamic, responsive, and user-friendly web applications. My expertise includes working with modern frameworks and libraries, ensuring seamless integration and performance across all platforms. I'm committed to continuous learning and staying updated with the latest industry trends to deliver cutting-edge solutions.        </p>
      </div>

      <div className='py-10 flex flex-col'>
        <h3 className='subhead-text'>My Skills</h3>

        <div className='mt-16 flex flex-wrap gap-12'>
          {skills.map((skill) => (
            <div className='block-container w-20 h-20' key={skill.name}>
              <div className='btn-back rounded-xl' />
              <div className='btn-front rounded-xl flex justify-center items-center'>
                <img
                  src={skill.imageUrl}
                  alt={skill.name}
                  className='w-1/2 h-1/2 object-contain'
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className='py-16'>
        <h3 className='subhead-text'>Work Experience.</h3>
        <div className='mt-5 flex flex-col gap-3 text-slate-500'>
          <p>
          I'm a passionate Full Stack Web Developer who loves creating seamless, efficient, and visually appealing web applications. I've developed a user-friendly web app for Urban Car Rental that boosted customer engagement by 25%, built a responsive website for Amit Travels and Tour with advanced search and secure booking features, and designed a scalable web app for Jabalpur Car Rentals.</p>
          
          <p>In addition to web development, I have a strong foundation in graphic design (50% proficiency) and professional photo editing. I also have a year of experience in SEO, improving search rankings and driving organic traffic. My expertise includes optimizing and managing Google Ads, setting up Google Business Profiles, and providing web hosting solutions.</p> 
         
          <p>With skills in HTML, CSS, JavaScript, React.js on the front-end, and Node.js and MongoDB on the back-end, I'm always learning and aiming to deliver solutions that exceed expectations</p>

          
          <p>If you’re looking for a dedicated developer with a versatile skill set to bring impactful web solutions to life, let’s connect!</p>
          
        </div>

        <div className='mt-12 flex'>
          <VerticalTimeline>
            {experiences.map((experience, index) => (
              <VerticalTimelineElement
                key={experience.company_name}
                date={experience.date}
                iconStyle={{ background: experience.iconBg }}
                icon={
                  <div className='flex justify-center items-center w-full h-full'>
                    <img
                      src={experience.icon}
                      alt={experience.company_name}
                      className='w-[60%] h-[60%] object-contain'
                    />
                  </div>
                }
                contentStyle={{
                  borderBottom: "8px",
                  borderStyle: "solid",
                  borderBottomColor: experience.iconBg,
                  boxShadow: "none",
                }}
              >
                <div>
                  <h3 className='text-black text-xl font-poppins font-semibold'>
                    {experience.title}
                  </h3>
                  <p
                    className='text-black-500 font-medium text-base'
                    style={{ margin: 0 }}
                  >
                    {experience.company_name}
                  </p>
                </div>

                <ul className='my-5 list-disc ml-5 space-y-2'>
                  {experience.points.map((point, index) => (
                    <li
                      key={`experience-point-${index}`}
                      className='text-black-500/50 font-normal pl-1 text-sm'
                    >
                      {point}
                    </li>
                  ))}
                </ul>
              </VerticalTimelineElement>
            ))}
          </VerticalTimeline>
        </div>
      </div>

      <hr className='border-slate-200' />

      <CTA />
    </section>
  );
};

export default About;
