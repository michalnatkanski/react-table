
const ErrorBoundary = ({ error }) => {
    return (
        <>
            <p>There was a problem with data fetching:</p>
            <h2 style={{ color: "red" }}>{error.toString()}</h2>
        </>
    )
};

export default ErrorBoundary;