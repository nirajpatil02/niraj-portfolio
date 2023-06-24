import styles from "./styles.module.css";

function Home() {
	return (
		<section className={styles.home_section} id="home">
			<p className={styles.greet}>Hi, my name is</p>
			<h1 className={styles.heading_1}>Niraj.</h1>
			<h1 className={styles.heading_2}>I am a third year engineering student.</h1>
			<p className={styles.desc}>
			I have a strong passion for data and a genuine enthusiasm for 
			continuously expanding my knowledge and learning new technologies. 
			I am dedicated to the field of data science, analytics, and machine 
			learning, and I am constantly seeking opportunities to enhance my expertise 
			in these areas.
			</p>
			<a href="#work">
				<button className={styles.btn}>Check out my work !</button>
			</a>
		</section>
	);
}

export default Home;