import { qualitiesIllustrations } from "../../../assets/data/data";
import Illustration from "../illustration/Illustration";
import styles from "./QualitiesIllustrationsList.module.css";

const QualitiesIllustrationsList = () => {
    return (
        <div className={styles.qualitiesIllustrationsList}>
            {
                qualitiesIllustrations.map((illustration, index) => {
                    return (
                        <Illustration
                            key={index}
                            type={`qualities`}
                            name={qualitiesIllustrations[index].name}
                            text={qualitiesIllustrations[index].text}
                            imageLink={qualitiesIllustrations[index].imageLink}
                        />
                    );
                })
            }
        </div>
    )
}

export default QualitiesIllustrationsList;