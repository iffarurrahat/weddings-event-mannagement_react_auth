import { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import SingleWeddingOptionCard from "./SingleWeddingOptionCard";

const SingleWeddingOption = () => {

    const [option, setOption] = useState(null);

    const { id } = useParams();
    const idNum = parseInt(id)

    const weddingOptions = useLoaderData();

    useEffect(() => {
        const findOption = weddingOptions.find(data => data.id === idNum)
        setOption(findOption);
    }, [idNum, weddingOptions])


    return (
        <div className="pt-16">
            <SingleWeddingOptionCard option={option}></SingleWeddingOptionCard>
        </div>
    );
};

export default SingleWeddingOption;