import React from 'react'
import Header from './Header'
import { Container } from 'react-bootstrap'

function Layout({title, keywords, description, children}) {
    return (
        <div>
            <head>
                <tile>{title}</tile>
                <meta name='description' content={description} />
                <meta name='keywords' content={keywords} />
            </head>
            <Header />
            <Container>
                {children}
            </Container>
        </div>
    )
}

Layout.defaultProps = {
    title: 'React Scroll',
    description: 'Animate on Scroll',
    keywords: 'Animate on Scroll'
}

export default Layout