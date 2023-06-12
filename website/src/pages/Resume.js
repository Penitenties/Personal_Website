import '../Css/Default.css';

import { Container } from '@mui/material';

import Footer from '../components/Footer.js';
import Header from '../components/Header.js';
import JobCard from '../components/JobCard.js';


function Resume() {
    return (
        <div className='background' style={{ flexDirection: 'column' }} >

            <Header />
            <Container className='container'>
                {/*general information*/}
          <div style={{ flexDirection: 'row', marginBottom: '30px' }}>
                  <div style={{ flexDirection: 'column', maxWidth: '50%' }}>
                    <h1>Contact Information</h1>
                    <p>Email: ethanjdc@gmail.com<br />
                       Phone: 202-812-1337<br />
                       Linkedin: <a target="_blank" href="www.linkedin.com/in/ethanjdc">ethanjdc</a> 
                    </p>
                  </div>
                    <div style={{ height: '45px', paddingLeft: '60px' }} >
                      <a href='../Downloadable/Ethan_Johnson_resume.docx' download='Ethan_Johnson_resume.docx' className='downloadButton' >Download resume</a>
                    </div>
                </div>

                {/*work experiance*/}
                <p className='smallTitle'>Experiance</p>
                <JobCard jobTitle="Full Stack Developer"
                    datesWorked="September 2020 - June 2022"
                    companyName="Ziki"
                    companyDescription="Start up"
                    summary="Full stack developer with a focus on frontend and user experience in a fast paced startup environment working directly with the CEO.  Worked full-time while completing an undergraduate degree."
                    duties={["Created a full scale food delivery app as part of a team of eight developers.",
                        "Managed the Wordpress implementation both as a standalone blog and a REST API.",
                        "Lead the creation of the Ziki website.",
                        "Rebuilt the company website as part of a rebranding initiative.",
                        "Maintained and updated the AWS e2c instances that housed Ziki's web products and API's.",
                        "Managed Ziki's log4j bug incident response in 2021."
                    ]} />

                <JobCard jobTitle="Web Developer"
                    datesWorked="September 2019 - March 2022"
                    companyName="Philadelphia Water Deparment"
                    companyDescription="Part of the Philadelphia city government"
                    summary="Created internal tools and external content for the public affairs division of the Philadelphia Water Department."
                    duties={["Designed and wrote public facing, interactive web pages to educate the public on important issues.",
                        "Interfaced with the design, content, and strategy teams to ensure consistent messaging and feel for web content.",
                        "Created internal Wordpress tools to help non-technical people post web content to the organization's intranet.",
                        "Documented Wordpress tools for other employees and future interns.",
                        "Worked in a team utilizing the Agile management practices."
                    ]} />

                <JobCard jobTitle="IT Associate"
                    datesWorked="September 2018 - March 2019"
                    companyName="Maritime Charter Academy"
                    companyDescription="Public charter shool"
                    summary="Worked on all aspects of IT for a Maritime Charter School in Philadelphia including network management, device management, administration, and help desk."
                    duties={["Created python scripts to sort and format large amounts of student data for government reporting.",
                        "Interfaced with the design, content, and strategy teams to ensure consistent messaging and feel for web content.",
                        "Assisted with the union of the middle and high school networks moving the DHCP, DC, and several VMs onto new servers and WAN that spanned two different physical locations.",
                        "Managed day to day help desk duties for the teachers and students."
                    ]} />

                <JobCard jobTitle="IT Intern"
                    datesWorked="June 2018 - September 2018"
                    companyName="Gallagher & Associates"
                    companyDescription="An internationally recognized museum planning and design firm."
                    summary=""
                    duties={["Reported to the Director of IT assisting with all aspects of IT operations.",
                        "Managed tier one and two responses to help desk tickets in a mixed environment containing Apple, Microsoft, and Google based OS devices.",
                        "Onboarded new employees, created Active Directory accounts, Google accounts, and security fobs.",
                        "Assisted with major projects including inventory and auditing industrial printing supplies, all employee computers, and IT hardware."
                    ]} />


                { /* other stuff */ }


            </Container>
            <Footer />

        </div>

    );
}

export default Resume;