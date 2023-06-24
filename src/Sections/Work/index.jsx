import Heading from "./../../Components/Heading";
import GitHubIcon from "@mui/icons-material/GitHub";
import OpenInNewIcon from "@mui/icons-material/OpenInNew";
import constant from "../../constant.json";
import styles from "./styles.module.css";

function Work() {
	return (
		<section id="work">
			<Heading index="03" heading="My Projects" />
			<div className={styles.container}>
				{constant.projects.map((project, index) =>
					index % 2 === 0 ? (
						<div className={styles.project}>
							<div className={styles.left}>
								<a >
									<img
										src={project.image}
										className={styles.img}
										alt="project_img"
									/>
								</a>
							</div>
							<div className={styles.right}>
								<a className={styles.heading}>
									{project.title}
								</a>
								<p className={styles.desc}>{project.desc}</p>
								<div className={styles.skill_container}>
									{project.skills.map((skill) => (
										<p>{skill}</p>
									))}
								</div>
								<div>
									<a href="https://github.com/nirajpatil02/olympicsdata-niraj" className={styles.link}>
										<GitHubIcon />
				                    </a>
								</div>
							</div>
						</div>
					) : (
						<div className={styles.project}>
							<div className={styles.left}>
								<a className={styles.heading}>
									{project.title}
								</a>
								<p className={styles.desc}>{project.desc}</p>
								<div className={styles.skill_container}>
									{project.skills.map((skill) => (
										<p>{skill}</p>
									))}
								</div>
								<div>
									<a href="https://github.com/InfiniteZer/Weatherly_App" className={styles.link}>
										<GitHubIcon />
									</a>
						
								</div>
							</div>
							<div className={styles.right}>
								<a >
									<img
										src={project.image}
										className={styles.img}
										alt="project_img"
									/>
								</a>
							</div>
						</div>
					)
				)}
			</div>
		</section>
	);
}

export default Work;