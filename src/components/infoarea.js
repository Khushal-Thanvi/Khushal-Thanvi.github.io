import React from "react";
import '../css/infoarea.css';
import { Expcard } from "./expcard";
import { Educard } from "./educard";
import { Skillcard } from "./skillcard";
import { Certcard } from "./certcard";


const exp_data = [
    {
      "title": "Technical Coordinator at GDSC MESCOE - Present",
      "info": "Google DSC is a community to learn new software skills with our peers.",
      "points": ["Focused on resolving and preventing tech related issues for multiple events.",
      "Managing and maintaining the club website using technologies like javascript, React and Node.js",
      "Participated in various google hosted events like google kickstart, solution challenge, etc."
    ]
    },
    {
      "title": "Technical head at RoboClub MESCOE - Present",
      "info": "Focused on developing new skills in the field of Robotics and automation.",
      "points": ["Researching and gaining practical knowledge by solving different problem statements.",
      "Participating in various robotic competitions.",
      "Conducting events and workshops related to robotics."
    ]
    },
    {
        "title": "Part of RoboCon team - Team Anonymous - Present",
        "info": "RoboCon MESCOE team formed for participating in international ABU RoboCon and national DD RoboCon but notlimited to those.",
        "points": ["Researched new concepts and worked on different innovative ways to tackle the problem statements.",
        "Worked in an interdisciplinary manner and gained basic skills in three main fields: Electronics, Computerand Mechanical."
    ]
      },
      {
        "title": "Trainee at Pi Jam foundation - 2018",
        "info": "Developed problem solving skills and focused on solving real world problems using technology.",
        "points": ["Learned about designing simple circuits using sensors and raspberry pi.",
        "Focused on implementing technology to help solve day-to-day problems."]
      }
  ];

const summary = `A super curious and enthusiastic student who loves learning
  and gaining new skills in the field of IT and Automation
  Technology. Is a trustworthy and hardworking candidate. A fast
  learner and one who possesses good strategic thinking,
  research and interpersonal communication skills. Embraces
  teamwork and has shown leadership skills during multiple
  projects.
  `;

const edu_data = [
    {
        "title": "Bachelor of Engineering (E&TC) - Second Year",
        "institute": "Modern Education Society’s College of Engineering, Pune",
        "date": "2020 - 2024"
    },
    {
        "title": "Higher Secondary School Certificate - Science",
        "institute": "Don Bosco Jr College, Pune ",
        "date": "Year of Completion: 2020"
    },
    {
        "title": "Secondary School Certificate - 10th std",
        "institute": "Rashmi English Medium School, Pune ",
        "date": "Year of Completion: 2018"
    }
];

const skill_data = [
    {
        "title": "React",
        "logo": "logos/logo192.png"
    },
    {
        "title": "Python",
        "logo": "logos/python-logo.png"
    },
    {
        "title": "Javascript",
        "logo": "logos/javascript-logo.png"
    },
    {
        "title": "Node.js",
        "logo": "logos/node-logo.png"
    },
    {
        "title": "C++",
        "logo": "logos/cpp-logo1.png"
    },
    {
        "title": "C",
        "logo": "logos/c-logo.png"
    }
]

const about_data_para1 = `I am currently an Electronics and communication engineering student who loves working with technology. I got interested in computers and electronics at a very young age, fascinated by the almost magical stuff these devices could do. By the time I was in high school, 
I was the de facto tech support guy among my family and friends.`

const about_data_para2 = `I am an always curious quick learner looking for every opportunity to grow and learn about something new.
I am also an aspiring Data Scientist willing to dive deep into the field of software development and learn more about Machine Learning, Data analysis, Artificial Intelligence (AI), making informed business decisions using data, etc. I am also interested in the field of web development, 
mostly front end and have worked with technologies like Javascript, React, Html, CSS, etc.`

const about_data_para3 = `I have worked with the Pi Jam foundation learning and teaching about making simple devices using sensors, motors and Raspberry Pi, to solve real world problems.
Managed a Model United Nations club with my friends in the school where we taught students skills like debating, public speaking and participated in various MUN competitions.
I have also worked in a team towards successfully implementing a rainwater harvesting system in our school.`

const cert_data = [
    {
        "title": "Google IT Support Certificate",
        "auth": "Coursera",
        "date": "Issued Jul 2022",
        "url": "https://www.linkedin.com/redir/redirect?url=https%3A%2F%2Fwww%2Ecredly%2Ecom%2Fbadges%2Ffd1aada3-06ab-4934-be3e-f1362685512c%3Fsource%3Dlinked_in_profile&urlhash=I2mU&trk=public_profile_see-credential"
    },
    {
        "title": "Google IT Support Specialization",
        "auth": "Coursera",
        "date": "Issued Jul 2022",
        "url": "https://www.coursera.org/account/accomplishments/specialization/certificate/KA3MXEZJP6QG"
    },
    {
        "title": "Machine Learning Foundations: A Case Study Approach",
        "auth": "Coursera",
        "date": "Issued Dec 2021",
        "url": "https://www.coursera.org/account/accomplishments/certificate/WX44JJWVQBR7"
    },
    {
        "title": "Cloud Computing Basics (Cloud 101)",
        "auth": "Coursera",
        "date": "Issued May 2022",
        "url": "https://www.coursera.org/account/accomplishments/certificate/AF4ALRL253E2"
    }
]

export function Infoarea({ page }) {

    if (page === 'About') {
        return(
            <section id='infoarea'>
                <h2>Summary</h2>
                <p className="about_data">{about_data_para1}</p>
                <p className="about_data">{about_data_para2}</p>
                <p className="about_data">{about_data_para3}</p>
                <h2>Education</h2>
                {
                    edu_data.map((edu, i)=>(
                        <Educard edu={edu} key={i} />
                    ))
                }
            </section>
        );
    }
    else if (page === 'Experience') {
        return(
            <section id='infoarea'>
            {
                exp_data.map((exp, i) => (
                    <Expcard exp={exp} key={i} />
                ))
            }
            </section>
        );
    }
    else if (page === 'Skills') {
        return(
            <section id='infoarea'>
                <h2>Skills</h2>
                    {
                        skill_data.map((skill, i)=>(
                            <Skillcard skill={skill} key={i} />
                        ))
                    }
                <h2>Certifications</h2>
                {
                    cert_data.map((cert, i) => (
                        <Certcard cert={cert} key={i} />
                    ))
                }
            </section>
        );
    }

    return(
        <section id='infoarea'>
                <p>Something went wrong</p>
        </section>
    );
}