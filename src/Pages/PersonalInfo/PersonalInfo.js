import React, { useContext } from 'react'

import { DataContext } from 'Context/DataContext'

export const PersonalInfo = () => {

    const { userInfo } = useContext(DataContext);

    return (
        <React.Fragment>
            <section>
                <h2>
                    Pagina 1
                </h2>
                <pre>
                    {JSON.stringify(userInfo, null, 2)}
                </pre>
            </section>
            <hr />
            <section>
                <h2>
                    Pagina 2
                </h2>
                <pre>
                    {JSON.stringify(userInfo, null, 2)}
                </pre>
            </section>
        </React.Fragment>
    )
}
