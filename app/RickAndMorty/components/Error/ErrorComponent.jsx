import React, {Fragment} from 'react';

function ErrorComponent({error}) {

    const handleRefresh = () => {
        window.location.reload()
    }

    return (
        <Fragment>
        <div>An Error has occurred: {error}</div>
        <button onClick={handleRefresh}>Try Again</button>
        </Fragment>
    );
}

export default ErrorComponent;