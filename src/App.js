
import { useAppContext } from './AppContext';
import Accordion from './components/Accordion/Accordion';
import AccordionNav from './components/AccordionNav/AccordionNav';
const App = () => {

    const { 
        getMatureApps,
        getBetaApps,
    } = useAppContext();

    return (
        <>
            <AccordionNav /> 
            <main>         
                <Accordion
                    apps={getMatureApps()}>
                    Mature Applications
                </Accordion>  
                <Accordion
                    apps={getBetaApps()}>
                    Beta Applications
                </Accordion>
            </main>
        </>
    )
}

export default App;

