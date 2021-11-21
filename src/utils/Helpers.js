import Dataset from '../dataset.json';

// filtering app 
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

//filtering by type - helpers function
export const setFilterDataType = (type) => {
const matureFilterApp = matureApplications.filter(app => app.type === type)
const betaFilterApp = betaApplications.filter(app => app.type === type)
return {matureApplications: matureFilterApp, betaApplications: betaFilterApp}
}

//app types function 
const getTypes = (apps) => {
const appTypes = new Set();
apps.forEach((app) => app.type && appTypes.add(app.type));
return [...appTypes];
};

export const typesFilter = getTypes(Dataset);

//setting url slug by app name
export const setUrlSlug = (appName) => (window.history.pushState({}, null, `#${appName}`))