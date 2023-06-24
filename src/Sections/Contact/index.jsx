import Heading from "../../Components/Heading";
import styles from "./style.module.css";
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import MailIcon from '@mui/icons-material/Mail';


function Contact() {
	return (
		<section className={styles.contact_section} id="contact">
			<div className={styles.heading_1}>
				<Heading index="04" heading="What's Next" />
			</div>
			<h1 className={styles.heading_2}>Get In Touch</h1>
			<p className={styles.desc}>
				Feel free to get in touch with me. I am always open to discussing new
				projects, creative ideas or opportunities to be part of your visions.
			</p>
			<a href="mailto:niraj2002patil@gmail.com">
				<button className={styles.btn}>
					<MailIcon />
				</button>
			</a>
			<a href="https://github.com/nirajpatil02">
				<button className={styles.btn}>
					<GitHubIcon /> 
				</button>
			</a>
			<a href="https://www.linkedin.com/in/niraj-patil-699b131b6/">
				<button className={styles.btn}>
					<LinkedInIcon /> 
				</button>
			</a>
				<p className={styles.desc}>
                Phone Number: +91 99207 78111
            </p>
			
		</section>
	);
}

export default Contact;