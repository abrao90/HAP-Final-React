import React from 'react';
import PropTypes from 'prop-types';
import Box from '../../../../../elements/Box';
import Text from '../../../../../elements/Text';
import Heading from '../../../../../elements/Heading';
import Button from '../../../../../elements/Button';
import Input from '../../../../../elements/Input';
import Container from '../../../components/UI/Container';

import ContactFromWrapper from './contact.style';

const ContactSection = ({
  sectionWrapper,
  row,
  contactForm,
  secTitleWrapper,
  secHeading,
  secText,
  button,
  note,
}) => {
  return (
    <Box {...sectionWrapper}>
      <Container>
        <Box {...secTitleWrapper}>
          <Text {...secText} content="STAY IN TOUCH WITH US" />
          <Heading
            {...secHeading}
            content="Are you a vet and want to know more about our product?"
          />
        </Box>
        <Box {...row}>
          <Box {...contactForm}>
            <ContactFromWrapper>
              <Input
                inputType="email"
                placeholder="Email address"
                iconPosition="right"
                isMaterial={false}
                className="email_input"
              />
              <Button {...button} title="SIGN UP" />
            </ContactFromWrapper>
            <Text
              {...note}
              content="This mailing list is for only professionals in the petcare industry. If you are a customer looking for assistance for your pet, please email us at info@gohugapet.com."
            />
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

ContactSection.propTypes = {
  sectionWrapper: PropTypes.object,
  secTitleWrapper: PropTypes.object,
  row: PropTypes.object,
  contactForm: PropTypes.object,
  secHeading: PropTypes.object,
  secText: PropTypes.object,
  button: PropTypes.object,
  note: PropTypes.object,
};

ContactSection.defaultProps = {
  sectionWrapper: {
    id: 'contact_section',
    as: 'section',
    pt: ['0px', '10px', '20px', '80px'],
    pb: ['0px', '0px', '0px', '0px', '80px'],
    bg: '#f9fbfd',
  },
  secTitleWrapper: {
    mb: ['45px', '50px', '60px'],
  },
  secText: {
    as: 'span',
    display: 'block',
    textAlign: 'center',
    fontSize: `${2}`,
    letterSpacing: '0.15em',
    fontWeight: `${6}`,
    color: 'primary',
    mb: `${3}`,
  },
  secHeading: {
    textAlign: 'center',
    fontSize: [`${6}`, `${8}`],
    fontWeight: '400',
    color: 'headingColor',
    letterSpacing: '-0.025em',
    mb: `${0}`,
  },
  row: {
    flexBox: true,
    justifyContent: 'center',
  },
  contactForm: {
    width: [1, 1, 1, 1 / 2],
  },
  button: {
    type: 'button',
    fontSize: `${2}`,
    fontWeight: '600',
    borderRadius: '4px',
    pl: '22px',
    pr: '22px',
    colors: 'primaryWithBg',
    height: `${4}`,
  },
  note: {
    fontSize: ['13px', '14px', '15px', '15px', '15px'],
    color: '#5d646d',
    lineHeight: '1.87',
    textAlign: 'center',
  },
};

export default ContactSection;
