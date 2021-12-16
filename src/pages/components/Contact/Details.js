import ContactItem from '../../Contact/contactItem/ContactItem';
import React from 'react';
import styled from 'styled-components';

const Details = () => {
    const phone = <i class="fas fa-phone-square-alt"></i>
    const location = <i class="fas fa-street-view"></i>
    const email = <i class="fas fa-envelope"></i>
    return (
        <DetailsStyled>
            <div className="right-content">
                            <ContactItem 
                                icon={phone} 
                                title={'Phone'}
                                contact1={'+8801688290597'}
                                contact2={'+8801727465381'}
                            />
                            <ContactItem 
                                icon={email} 
                                title={'Email'}
                                contact1={'fht801@gmail.com'}
                                contact2={'hasan.fahiim@gmail.com'}
                            />
                            <ContactItem 
                                icon={location} 
                                title={'Address'}
                                contact1={'uttara, Dhaka'}
                                // contact2={'hasan.fahiim@gmail.com'}
                            />
                        </div>
        </DetailsStyled>
    );
};

const DetailsStyled = styled.div`
.right-content {
            display: flex;
            justify-content: center;
            flex-direction: column;
        }
`;

export default Details;