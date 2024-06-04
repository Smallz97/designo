import ProjectCard from './ProjectCard';

import styles from './ProjectsList.module.css'

const ProjectsList = ({ projects, images }) => {
    return (
        <div className={`${styles.projectsList}`}>
            {
                projects.map((project, index) => (
                    <ProjectCard
                        key={index}
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