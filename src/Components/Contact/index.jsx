import { Helmet, HelmetProvider } from 'react-helmet-async';

function Contact() {
    return ( 
        <HelmetProvider>
            <Helmet>
            <title>contact Page</title>
            </Helmet>
        <div className='container'>
               <div className="contact-section">
                <h1>contact Page</h1>
                <p>Some text about who we are and what we do.</p>
                <p>Resize the browser window to see that this page is responsive by the way.</p>
            </div>
        </div>
        </HelmetProvider>
     );
}

export default Contact;