import React from 'react';
import Breadcrumbs from '../../components/Breadcrumbs/Breadcrumbs';

const ContactPage = () => {
    return (
        <div>
            <Breadcrumbs title="Contact" />
            <Feedback />
        </div>
    );
};

export default ContactPage;