import { useState } from 'react';
import Table from '../../components/Table/Table';
import {typesFilter, setFilterDataType} from '../../utils/Helpers';

const Root = () =>   {
    //hooks
    //setTableActive
    const [tableActive, setTableActive] = useState({matureTable: false,betaTable: true});
    //setFilteredData
    const [filteredData, setFilteredData] = useState(setFilterDataType("IT"));
    //setActiveButtons
    const [activeButtons, setActiveButtons] = useState({
    activeBtn: "IT",    
    btns: [...typesFilter]
    });

    const hideTable = (table) => {
        table ? setTableActive({
            matureTable: !tableActive.matureTable, 
            betaTable: tableActive.betaTable
        }) :
        setTableActive({
            matureTable: tableActive.matureTable, 
            betaTable: !tableActive.betaTable
        }) 
    }

    //handleChangeType
    const handleChangeType = (i, type) => {
        setActiveButtons({...activeButtons, activeBtn: activeButtons.btns[i]})
        setFilteredData({
            betaApplications: setFilterDataType(type).betaApplications,
            matureApplications: setFilterDataType(type).matureApplications
            })
    }

    return (                                                                                                                                                          
      <Table
          hideTable={hideTable}
          tableActive={tableActive}
          handleChangeType={handleChangeType}
          filteredData={filteredData}
          activeButtons={activeButtons}/>
    )
}

export default Root;

