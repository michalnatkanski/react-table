import styles from '../AccordionNav/AccordionNav.module.scss';
import { useAppContext } from '../../AppContext';
import NavItem from './NavItem/NavItem';

const TableFilter = () => {

    const { appState } = useAppContext();

    return (
        <header>
            <nav className={styles.wrapper}>
                <ul>
                    {appState.types.map((type) =>
                        <NavItem
                            type={type}
                            key={type}>
                            {type}
                        </NavItem>
                    )}
                </ul>
            </nav>
        </header>
    )
}
export default TableFilter;