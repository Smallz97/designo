import ProjectCard from './ProjectCard';

import styles from './ProjectsList.module.css'

const ProjectsList = ({ projects, images, type }) => {
    return (
        <div className={`${styles.projectsList}`}>
            {
                projects.map((project, index) => (
                    <ProjectCard
                        key={index}
                        type={type}
                        name={project.name}
                        image={images[index]}
                        description={project.description}
                    />
                ))
            }
        </div>
    )
}

export default ProjectsList;