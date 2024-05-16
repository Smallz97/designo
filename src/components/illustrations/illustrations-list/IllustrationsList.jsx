import { illustrations } from "../../../assets/data/data";
import Illustration from "../illustration/Illustration";

const IllustrationsList = () => {
    return (
        <>
            {
                illustrations.map((illustration, index) => {
                    return (
                        <Illustration
                            key={index}
                            name={illustrations[index].name}
                            text={illustrations[index].text}
                            imageLink={illustrations[index].imageLink}
                        />
                    );
                })
            }
        </>
    )
}

export default IllustrationsList;