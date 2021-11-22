import { useState } from 'react';
import Table from '../../components/Table/Table';
import { genericData } from '../../helpers/Helpers';

const Root = () => {

    // //sets the state of the active table
    const [tableActive, setTableActive] = useState({ matureTable: false, betaTable: true });
    // //sets the state of the data type 
    const [filteredData, setFilteredData] = useState(genericData.setFilterDataType("IT"));
    // //sets the state of the current active button 
    const [activeButtons, setActiveButtons] = useState({
        activeButton: "IT",
        allButtons: [...genericData.typesFilter]
    });

    // //the method passed to TableHeader -> Button
    // //after clicking on the button, it sets the state and hides the contents of the table.
    const handleTableHide = (table) => {
        table ? setTableActive({
            matureTable: !tableActive.matureTable,
            betaTable: tableActive.betaTable
        }) :
            setTableActive({
                matureTable: tableActive.matureTable,
                betaTable: !tableActive.betaTable
            })
    }

    // //the method called after clicking on the button changes current button state to active
    // // and filters the data in the table.
    const handleChangeType = (i, type) => {
        setActiveButtons({ ...activeButtons, activeButton: activeButtons.allButtons[i] })
        setFilteredData({
            betaApplications: genericData.setFilterDataType(type).betaApplications,
            matureApplications: genericData.setFilterDataType(type).matureApplications
        })
    }

    return (
        <>
            <Table
                handleTableHide={handleTableHide}
                tableActive={tableActive}
                handleChangeType={handleChangeType}
                filteredData={filteredData}
                activeButtons={activeButtons} />
        </>
    )
}

export default Root;

