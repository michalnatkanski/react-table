
//setting url slug by app name
const setUrlSlug = (appName) => (window.history.pushState({}, null, `#${appName}`))

const matureFiltering = ((app) =>
    app &&
    app.version &&
    parseInt(app.version[0]) >= 1 &&
    app.author &&
    app.author.name);

const betaFiltering = ((app) =>
    app &&
    app.version &&
    parseInt(app.version[0]) < 1 &&
    app.author &&
    app.author.name);

//get app types
const getTypes = (data) => {
    const appTypes = new Set();
    data.map((app) => app.type && appTypes.add(app.type));
    return [...appTypes];
};

//get version apps function
const getVersionApps = (data, filter) => data.filter(app => filter(app))

export { setUrlSlug, matureFiltering, betaFiltering, getTypes, getVersionApps }