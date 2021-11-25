import { useState, useEffect } from 'react';
import Table from '../../components/Table/Table';
import TableFilter from '../../components/TableFilter/TableFilter';
import { matureFiltering, betaFiltering, getTypes, getVersionApps } from '../../helpers/Helpers';

const Root = () => {
    //stores fetched data
    const [data, setData] = useState([]);
    //stores filtered data, if data is provided, the dataLoaded flag changes to true and displays the data in the table
    const [filteredData, setFilteredData] = useState({ dataLoaded: false, matureApplications: [], betaApplications: [] });
    //stores information about the active table
    const [tableActive, setTableActive] = useState({ matureTable: true, betaTable: false });
    //stores current active button
    const [activeButton, setActiveButton] = useState({ activeButton: "IT" });
    //stores a call to a helper function that takes data types
    const types = getTypes(data);
    //stores a call to the helper function of the filtered data
    const matureApps = getVersionApps(data, matureFiltering);
    const betaApps = getVersionApps(data, betaFiltering);
    //fetching data
    const getData = () => {
        fetch('./dataset.json'
            , {
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                }
            }
        )
            .then(function (response) {
                return response.json();
            })
            .then(function (myJson) {
                setData(myJson)
            });
    }
    useEffect(() => {
        getData()
    }, [])

    //returns a filtered data object to hook - filteredData
    const setFilterDataType = (type) => {
        const matureFilterApp = matureApps.filter(app => app.type === type)
        const betaFilterApp = betaApps.filter(app => app.type === type)
        return {
            matureApplications: matureFilterApp,
            betaApplications: betaFilterApp
        }
    }

    //changing data type 
    const handleChangeDataType = (type) => {
        setFilteredData({
            dataLoaded: true,
            matureApplications: setFilterDataType(type).matureApplications,
            betaApplications: setFilterDataType(type).betaApplications
        })
        setActiveButton({
            activeButton: type
        })
    }

    //hiding table 
    const handleTableHide = (tab) => {
        tab ?
            setTableActive({
                matureTable: !tableActive.matureTable,
                betaTable: tableActive.betaTable
            }) :
            setTableActive({
                matureTable: tableActive.matureTable,
                betaTable: !tableActive.betaTable
            })
    }

    return (
        <>
            <TableFilter
                types={types}
                activeButton={activeButton}
                handleChangeDataType={handleChangeDataType}
            />
            <Table
                handleTableHide={handleTableHide}
                tableActive={tableActive}
                filteredData={filteredData}
                setFilterDataType={setFilterDataType}
            />
        </>
    )
}

export default Root;