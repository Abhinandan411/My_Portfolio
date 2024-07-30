import emailjs from "@emailjs/browser";
import React, { useState } from "react";
import { Button, Input, Textarea } from "@material-tailwind/react";
import contactimg from "../assets/contact-img.svg";
import { Tooltip } from "@material-tailwind/react";

const Data = [
  {
    link: "https://www.linkedin.com/in/abhinandan-kr-b7431623a/",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linkedin/linkedin-original.svg",
    tooltip: "Connect On Linkedin",
  },
  {
    link: "https://github.com/Abhinandan411",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg",
    tooltip: "Connect On Github",
  },
  {
    link: "https://www.instagram.com/abhi_babu_04/",
    icon: "https://upload.wikimedia.org/wikipedia/commons/9/95/Instagram_logo_2022.svg",
    tooltip: "Follow On Instagram",
  },
  {
    link: "mailto:abhinandankumar6204@gmail.com",
    icon: "https://cdn.iconscout.com/icon/free/png-512/free-mail-1299-1100772.png?f=webp&w=256",
    tooltip: "Mail Me",
  },
];

const Contact = () => {
  // const [message, showMessage] = useState(false);
  // const [error, setError] = useState(false);

  // const sendEmail = (e) => {
  //   e.preventDefault();

  //   emailjs
  //     .sendForm(
  //       "service_id", // Replace with your EmailJS service ID
  //       "template_id", // Replace with your EmailJS template ID
  //       e.target,
  //       "user_id" // Replace with your EmailJS user ID
  //     )
  //     .then(
  //       (result) => {
  //         console.log(result.text);
  //         showMessage(true);
  //         setError(false);
  //       },
  //       (error) => {
  //         console.log(error.text);
  //         showMessage(false);
  //         setError(true);
  //       }
  //     );
  //   e.target.reset();
  // };

  return (
    <div className="w-full flex flex-col justify-center items-center">
      <h1 className="text-5xl font-bold text-blue-900 text-center border-spacing-2 border-b-2 border-b-blue-600 my-10">
        Contact
      </h1>
      <div className="flex items-center w-full justify-center gap-8">
        {Data.map((item, index) => {
          return (
            <Tooltip
              key={index}
              color="black"
              content={item.tooltip}
              className="bg-white text-black"
            >
              <a
                href={item.link}
                target="_blank"
                rel="noreferrer"
                className="rounded-full text-2xl bg-gray-600 bg-opacity-20 hover:bg-opacity-50 w-10 h-10 flex items-center justify-center"
              >
                <img
                  src={item.icon}
                  alt={item.tooltip}
                  loading="lazy"
                  className="p-2 text-white bg-white rounded-full"
                />
              </a>
            </Tooltip>
          );
        })}
      </div>
      <div className="flex flex-col md:flex-row lg:w-[70%] items-center justify-around">
        <div className="w-[100vw] p-5 lg:w-[500px]">
          <div className="relative rounded-lg bg-opacity-60 backdrop-blur-sm p-8  sm:p-12">
            <form onSubmit="" className="bg-slate-900">
              <div className="mb-6">
                <Input
                  type="text"
                  name="name"
                  label="Enter Your Name"
                  required
                  color="blue"
                />
              </div>
              <div className="mb-6">
                <Input
                  type="email"
                  name="email"
                  label="Enter Your Email"
                  required
                  color="blue"
                />
              </div>
              <div className="mb-6">
                <Textarea
                  rows="6"
                  name="message"
                  label="Enter Message"
                  required
                  color="blue"
                />
              </div>
              <div>
                <Button
                  variant="gradient"
                  color="blue"
                  className="bg-white"
                  fullWidth
                  type="submit"
                >
                  Send Message
                </Button>
                {/* <div>
                  {message && !error && (
                    <p className="text-green-500 text-center mt-2">
                      Message Sent Successfully
                    </p>
                  )}
                  {error && (
                    <p className="text-red-500 text-center mt-2">
                      Failed to Send Message. Please try again.
                    </p>
                  )}
                </div> */}
              </div>
            </form>
          </div>
        </div>
        <div className="lg:w-[500px] lg-max:hidden">
          <img
            className="h-[300px] w-[300px] lg:h-[500px] lg:w-[500px]"
            src={contactimg}
            loading="lazy"
            alt="contactimg"
          />
        </div>
      </div>
    </div>
  );
};

export default Contact;
