import Dataset from '../dataset';

//helpers functions

// filtering app version - helpers function
const filterAppVersion = (condition, apps) => {
    return apps.filter((app) => condition(app));
};

const matureApplications = filterAppVersion(
    (app) =>
        app &&
        app.version &&
        parseInt(app.version[0]) >= 1 &&
        app.author &&
        app.author.name,
    Dataset
);

const betaApplications = filterAppVersion(
    (app) =>
        app &&
        app.version &&
        parseInt(app.version[0]) < 1 &&
        app.author &&
        app.author.name,
    Dataset
);

export const data = {matureApplications, betaApplications};

//app types function - helpers function
const getTypes = (apps) => {
    const appTypes = new Set();
    apps.forEach((app) => app.type && appTypes.add(app.type));
    return [...appTypes];
};

export const typesFilter = getTypes(Dataset);

//filtering by type - helpers function
export const setFilterDataType = (type) => {
    const matureFilterApp = data.matureApplications.filter(app => app.type === type)
    const betaFilterApp = data.betaApplications.filter(app => app.type === type)
    return {matureApplications: matureFilterApp, betaApplications: betaFilterApp}
}

//setting url slug - AppName - helpers function
export const setUrlSlug = (appName) => (window.history.pushState({}, null, `#${appName}`))


