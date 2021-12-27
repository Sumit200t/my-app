
import CardWarp from '../cards/card';
import HeaderSlider from '../header_slider/header_slider';


function Home({history}) {
    return (
        <>
            <HeaderSlider history={history} />
            <CardWarp />
        </>


    )
}

export default Home;