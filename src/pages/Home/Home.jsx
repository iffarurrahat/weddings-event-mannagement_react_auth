import { useLoaderData } from "react-router-dom";
import Banner from "../../components/Header/Banner/Banner";
import WeddingOptions from "../../components/WeddingOptions/WeddingOptions";
import MatchCouple from "../../components/MatchCouple/MatchCouple";
import ProjectCounter from "../../components/ProjectCounter/ProjectCounter";

const Home = () => {

    const services = useLoaderData();
    // console.log(services);

    return (
        <div>
            <Banner></Banner>
            <WeddingOptions services={services}></WeddingOptions>
            <ProjectCounter></ProjectCounter>
            <MatchCouple></MatchCouple>
        </div>
    );
};

export default Home;