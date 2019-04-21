/* ==========================================================================
 * Components Index Point
 * Get all Compnents to Export them 
 * 11/12/2018
 * Alan Medina Silva
 ========================================================================== */


// --------------------------------------
// Import Layouts
// --------------------------------------
    import {Header,TopHeader, StickyHeader, SubHeader, Footer, FooterBottom, SideBar} from '../Layouts/index';    



// --------------------------------------
// Import Form Steps
// --------------------------------------
    // import NewAnuncioFormContainer from '../Views/Anuncios/Steps/NewAnuncioFormContainer';
    // import AnuncioDetails from '../Views/Anuncios/Steps/AnuncioDetails';
    // import ProjectDetails from '../Views/Anuncios/Steps/ProjectDetails'
    // import NewAnuncioFormContainer from '../Views/Anuncios/Steps/NewAnuncioFormContainer'
    import AnuncioConfimation from '../Views/Anuncios/AnuncioConfimation'


// --------------------------------------
// Import Components
// --------------------------------------
    import NavBar from './NavBar/NavBar';
    import Slider from './Slider/Slider';
    import SmallSlider from './Slider/SmallSlider';
    import FloatingSearch from './FloaringSearch/FloatingSearch';
    import SingleSelect from './CustomSelect/SingleSelect';
    import CustomSelect from './CustomSelect/CustomSelect';
    import ProjectLink from './Links/ProjectLink';
    import Breadcumbs from './Breadcumbs/Breadcumbs';
    import ResultsList from './ResultsList/ResultsList';
    import ResultItem from './ResultsList/ResultItem';
    import CustomAccordion from './Accordion/CustomAccordion';
    import CustomAccordionItem from './Accordion/CustomAccordionItem';
    import CheckBoxes from './Inputs/CheckBoxes';
    import ResultsSorting from './ResultsSorting/ResultsSorting';
    import AppButton from './Buttons/AppButton';
    import ProductCard from './ProductCard/ProductCard';
    import Carrousel from './Carrousel/Carrousel';
    import ResultsGrid from './ResultsGrid/ResultsGrid';
    import Form from './Form/Form'  ;
    import StrippedTable from './Table/StrippedTable'
    // import ImagesAnuncio from '../Views/Anuncios/Steps/ImagesAnuncio';

    import BodyCard from './Cards/BodyCard';
    import CardContainer from './Cards/CardContainer';
    import FooterCard from './Cards/FooterCard';
    import ImageCard from './Cards/ImageCard';
    import FilesManager from './FilesManager/FilesManager'
    import AppLoader from './Loader/Loader';


// --------------------------------------
// Widgets
// --------------------------------------
    import FooterLogo from './Widgets/Footer/FooterLogo';
    import FooterMenu from './Widgets/Footer/FooterMenu';
    import FooterSubscribe from './Widgets/Footer/FooterSubscribe';
    import PriceSlider from './Widgets/SideBar/PriceSlider';
    import OptionsBox from './Widgets/SideBar/OptionsBox';
    import RangeSelect from './Widgets/SideBar/RangeSelect';
    import ContactBox from './Widgets/ContactBox/ContactBox';
    import ContactForm from './Widgets/ContactBox/ContactForm';
    import IconsGrid from './Widgets/IconsGrid/IconsGrid';
    import PriceTable from './Widgets/PriceTable/PriceTable';
    import FacebookFeed from './Widgets/FacebookFeed/FacebookFeed';
    import AnuncioLabel from './Widgets/CustomLabel/AnuncioLabel' ;
    import Pagination from './Widgets/Pagination/Pagination';
    import PaginationItem from './Widgets/Pagination/PaginationItem';
    import ActiveFilters from './Widgets/ActiveFilters/ActiveFilters';
    import FilterItem from './Widgets/ActiveFilters/FilterItem';

// --------------------------------------
// Export Components
// --------------------------------------
    export {
        // --------------------------------------
        // Layouts
        // --------------------------------------
        Header,
        StickyHeader,
        TopHeader,
        SubHeader,
        Footer,
        FooterBottom,
        FloatingSearch,
        SideBar,
        // --------------------------------------
        // Components
        // --------------------------------------
        NavBar,
        Slider,
        SmallSlider,
        FooterLogo,
        FooterMenu,
        FooterSubscribe,
        SingleSelect,
        CustomSelect,
        ProjectLink,
        ResultsList,
        ResultItem,
        Breadcumbs,
        CustomAccordion,
        CustomAccordionItem,
        PriceSlider,
        CheckBoxes,
        OptionsBox,
        RangeSelect,
        ResultsSorting,
        AppButton,
        ContactBox,
        ContactForm,
        ProductCard,
        Carrousel,
        IconsGrid,
        ResultsGrid,
        Form,
        StrippedTable,
        BodyCard,
        CardContainer,
        FooterCard,
        ImageCard,
        PriceTable,
        FilesManager,
        AppLoader,
        FacebookFeed,
        AnuncioLabel,
        Pagination,
        PaginationItem,
        ActiveFilters,
        FilterItem,
        // --------------------------------------
        // Form Steps
        // --------------------------------------
        AnuncioConfimation
        // NewAnuncioFormContainer,
        // AnuncioDetails,
        // ImagesAnuncio
    }

