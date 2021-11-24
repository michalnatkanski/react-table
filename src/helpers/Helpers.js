
    //setting url slug by app name
    const setUrlSlug = (appName) => (window.history.pushState({}, null, `#${appName}`))

    export { setUrlSlug }