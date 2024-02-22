import { Helmet, HelmetProvider } from 'react-helmet-async';

function About() {
    return (
        <HelmetProvider>
            <Helmet>
            <title>About</title>
            </Helmet>
        <div className='container'>
            <div className="about-section">
                <h1>About Us Page</h1>
                <p>Some text about who we are and what we do.</p>
                <p>Resize the browser window to see that this page is responsive by the way.</p>
            </div>
        </div>
        </HelmetProvider>
    );
}

export default About;