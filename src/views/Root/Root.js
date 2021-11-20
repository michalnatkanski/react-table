import { useState } from 'react';
import Table from '../../components/Table/Table';
import {data, typesFilter, setFilterDataType, setUrlSlug} from '../../utils/Helpers';

const Root = () =>   {

    //hooks - setTableActive for hiding tables | setFiteredData for fitered state
    const [tableActive, setTableActive] = useState({matureTable: false,betaTable: true});
    const [filteredData, setFilteredData] = useState(setFilterDataType("IT"));
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

    //changeType function setting fitered data in setFilteredData hook 
    const handleChangeType = (i, type) => {
        setActiveButtons({...activeButtons, activeBtn: activeButtons.btns[i]})
        setFilteredData({
            betaApplications: setFilterDataType(type).betaApplications,
            matureApplications: setFilterDataType(type).matureApplications
            })
    }

    return (                                                                                                                                                          
      <Table
          data={data} 
          typesFilter={typesFilter} 
          setUrlSlug={setUrlSlug}
          hideTable={hideTable}
          tableActive={tableActive}
          handleChangeType={handleChangeType}
          filteredData={filteredData}
          activeButtons={activeButtons}/>
    )
}

export default Root;

