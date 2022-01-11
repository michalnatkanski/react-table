import AppContextProvider from '../../AppContext';
import App from '../../App';

const Root = () => (
        <AppContextProvider>
            <App/>
        </AppContextProvider>
    )

export default Root;