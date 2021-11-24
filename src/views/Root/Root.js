import { useState, useEffect } from 'react';
import Table from '../../components/Table/Table';
import TableFilter from '../../components/TableFilter/TableFilter';

const Root = () => {
    //fetch data hook
    const [data, setData] = useState([]);
    //filteringData
    const [filteredData, setFilteredData] = useState({ dataLoaded: false, matureApplications: [], betaApplications: [] });
    //table active
    const [tableActive, setTableActive] = useState({ matureTable: true, betaTable: false });
    //sets the state of the current active button 
    const [activeButton, setActiveButton] = useState({ activeButton: "IT" });
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

    //get app types
    const getTypes = () => {
        const appTypes = new Set();
        data.map((app) => app.type && appTypes.add(app.type));
        return [...appTypes];
    };

    const types = getTypes();

    //get version apps function
    const getVersionApps = (filter) => data.filter(app => filter(app))

    const matureApps = getVersionApps(
        (app) =>
            app &&
            app.version &&
            parseInt(app.version[0]) >= 1 &&
            app.author &&
            app.author.name
    )

    const betaApps = getVersionApps(
        (app) =>
            app &&
            app.version &&
            parseInt(app.version[0]) < 1 &&
            app.author &&
            app.author.name
    )

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