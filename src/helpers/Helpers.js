import dataset from '../dataset.json';

const genericDataFunction = () => {

    const filterAppVersion = (filter, apps) => {
    return apps.filter((app) => filter(app));
  };

  const matureApplications = filterAppVersion(
    (app) =>
      app &&
      app.version &&
      parseInt(app.version[0]) >= 1 &&
      app.author &&
      app.author.name,
    dataset
  );

  const betaApplications = filterAppVersion(
    (app) =>
      app &&
      app.version &&
      parseInt(app.version[0]) < 1 &&
      app.author &&
      app.author.name,
    dataset
  );

  //filtering by type - helpers function
  const setFilterDataType = (type) => {
    const matureFilterApp = matureApplications.filter(app => app.type === type)
    const betaFilterApp = betaApplications.filter(app => app.type === type)
    return { matureApplications: matureFilterApp, betaApplications: betaFilterApp }
  }

  //app types function 
  const getTypes = (apps) => {
    const appTypes = new Set();
    apps.forEach((app) => app.type && appTypes.add(app.type));
    return [...appTypes];
  };

  const typesFilter = getTypes(dataset);

  //setting url slug by app name
  const setUrlSlug = (appName) => (window.history.pushState({}, null, `#${appName}`))

  return { setFilterDataType: setFilterDataType, typesFilter: typesFilter, setUrlSlug: setUrlSlug }
}

export const genericData = genericDataFunction();
