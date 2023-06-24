import Heading from "../../Components/Heading";
import styles from "./styles.module.css";

function About() {
	return (
		<section id="about">
			<Heading index="01" heading="About Me" />
			<div className={styles.container}>
				<div className={styles.left}>
					<p className={styles.desc}>
					From an early stage in my academic journey, 
					I developed a profound interest in the art of 
					problem-solving, particularly through the realm of coding. 
					It is my firm belief that the fields of data science, analytics, 
					and machine learning possess the potential to revolutionize our 
					world by providing profound solutions to complex problems.
					</p>
					<p className={styles.desc}>
					I find joy in exploring new destinations through travel, 
					which broadens my perspective and inspires creativity. 
					Additionally, I find solace in music, as it provides a 
					source of relaxation and inspiration. Staying informed about 
					current affairs is also an important part of my routine, as it 
					allows me to stay connected to the evolving world around us.
					</p>
				</div>
				<div className={styles.right}>
					<img
						src="./images/niraj_img_1.jpg"
						alt="profile"
						className={styles.profile_img}
					/>
					<div className={styles.img_border}></div>
				</div>
			</div>
		</section>
	);
}

export default About;