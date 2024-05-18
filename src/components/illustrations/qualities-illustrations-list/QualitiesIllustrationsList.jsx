import { qualitiesIllustrations } from "../../../assets/data/data";
import Illustration from "../illustration/Illustration";

const QualitiesIllustrationsList = () => {
    return (
        <>
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
        </>
    )
}

export default QualitiesIllustrationsList;