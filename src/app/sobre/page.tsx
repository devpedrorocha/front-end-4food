import AboutUs from "../components/AboutUs";
import { Dropdown } from "../components/DropDown";
import { OurHistory } from "../components/OurHistory";
import LocalizationCarousel from "../components/localizationCarousel";



export default function Sobre() {

    return (
    <section className="lg:p-5">
        <AboutUs />
        <OurHistory />
        <LocalizationCarousel />
    </section>
);
}