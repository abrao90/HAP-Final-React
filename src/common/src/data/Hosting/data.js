import {
  IconOne,
  IconTwo,
  IconThree,
  IconFour,
  IconFive,
  IconSix,
  AuthorOne,
  AuthorTwo,
  AuthorThree,
} from './images';

// Why Us Section Content
export const FEATURES_DATA = [
  {
    title: 'Stress-free Experience',
    description:
      'A visit to a veterinarian can be a great strain on a sick animal. An exhausting journey, a full waiting room, new smells and a new environment means higher stress level. Thats why our veterinarians would rather come to you.',
    icon: 'flaticon-trophy violate',
    animation: true,
  },
  {
    title: 'Convenient',
    description:
      'Save time and let your veterinarian come home comfortably. We make sure that you can spend your precious time with your pet.',
    icon: 'flaticon-startup yellow',
    animation: true,
  },
  {
    title: 'Trustworthy',
    description:
      'We understand exactly how important you trust the veterinarian. That is why we attach great importance to providing competent local veterinarians. With us, your pet is in good hands.',
    icon: 'flaticon-creative green',
    animation: true,
  },
];

// FAQ Section Content
export const FAQ_DATA = [
  {
    expend: true,
    title: 'How to contact with a Vet?',
    description:
      'Our Customer Experience Team is available 7 days a week and we offer 2 ways to get in contact.Email and Chat . We try to reply quickly, so you need not to wait too long for a response!. ',
  },
  {
    title: 'How to update system information?',
    description:
      'Please read the documentation carefully . We also have some online  video tutorials regarding this issue . If the problem remains, Please Open a ticket in the support forum . ',
  },
  {
    title: 'How much time before a booking?',
    description:
      'At first, Please check your internet connection . We also have some online  video tutorials regarding this issue . If the problem remains, Please Open a ticket in the support forum .',
  },
  {
    title: 'New update fixed all bug and issues?',
    description:
      'We are giving the update of this theme continuously . You will receive an email Notification when we push an update. Always try to be updated with us .',
  },
];

// Service Section Content
export const SERVICES_DATA = [
  {
    title: 'General Checkup',
    description:
      'Get Lightspeed Development Server for your website and fly in the web',
    icon: `${IconOne}`,
  },
  {
    title: 'Grooming and care',
    description:
      'Best Protection and some tools are provided with our Web servers .',
    icon: `${IconTwo}`,
  },
  {
    title: 'Vaccinations',
    description:
      'You can build any kind of E-commerce Shop with payment security tools',
    icon: `${IconThree}`,
  },
  {
    title: 'Euthenasia and life services',
    description:
      'We have provided 30 days money back guarantee for our customer',
    icon: `${IconFour}`,
  },
  {
    title: 'Insurance assistance',
    description:
      'Client Satisfaction is our first priority and We are best at it',
    icon: `${IconFive}`,
  },
  {
    title: 'Other services',
    description:
      'A Dedicated support team is always ready to provide best support ',
    icon: `${IconSix}`,
  },
];

export const MENU_ITEMS = [
  {
    label: 'Book an Appointment',
    path: '#banner_section',
    offset: '40',
  },
  {
    label: 'Why Us',
    path: '#feature_section',
    offset: '40',
  },
  {
    label: 'Our Services',
    path: '#service_section',
    offset: '40',
  },
  {
    label: 'Testimonial',
    path: '#testimonial_section',
    offset: '70',
  },
  {
    label: 'FAQ',
    path: '#faq_section',
    offset: '70',
  },
  {
    label: 'For Vets',
    path: '#',
    offset: '70',
  },
  {
    label: 'Contact',
    path: '#contact_section',
    offset: '70',
  },
  {
    label: 'Blog',
    path: '#blog_section',
    offset: '70',
  },
];

export const FOOTER_WIDGET = [
  {
    title: 'About Us',
    menuItems: [
      {
        url: '#',
        text: 'Customer Support',
      },
      {
        url: '#',
        text: 'About Us',
      },
      {
        url: '#',
        text: 'Copyright',
      },
    ],
  },
  {
    title: 'Our Information',
    menuItems: [
      {
        url: '#',
        text: 'Privacy Policy',
      },
      {
        url: '#',
        text: 'Terms & Conditions',
      },
      {
        url: '#',
        text: 'Site Map',
      },
      {
        url: '#',
        text: 'Operational Hours',
      },
    ],
  },
  {
    title: 'My Account',
    menuItems: [
      {
        url: '#',
        text: 'Press inquiries',
      },
      {
        url: '#',
        text: 'Social media directories',
      },
      {
        url: '#',
        text: 'Images & B-roll',
      },
    ],
  },
  {
    title: 'Policy',
    menuItems: [
      {
        url: '#',
        text: 'Application security',
      },
      {
        url: '#',
        text: 'Software principles',
      },
      {
        url: '#',
        text: 'Unwanted software policy',
      },
      {
        url: '#',
        text: 'Responsible supply chain',
      },
    ],
  },
];

export const MONTHLY_PRICING_TABLE = [
  {
    freePlan: true,
    name: 'Clinics Starter Pack',
    description: 'Digital customer support and reservation management assistance for clinics',
    price: '€59',
    priceLabel: 'Per Month',
    buttonLabel: 'SIGN UP',
    url: '#',
    listItems: [
      {
        content: 'Online Bookings',
      },
      {
        content: 'Calendar Management',
      },
      {
        content: 'Appointment optimization',
      },
      {
        content: 'Customer Data Management',
      },
      {
        content: 'GDPR Compliant',
      },
    ],
  },
  {
    name: 'Freelance Vets',
    description: 'Work exclusively with Hug A Pet, and earn as per your schedule!',
    price: '€399',
    priceLabel: 'Per Month, €2000 guaranteed income p.m.',
    buttonLabel: 'SIGN UP',
    url: '#',
    listItems: [
      {
        content: 'Guaranteed Income of €2000 per month',
      },
      {
        content: 'Schedule based on your availability',
      },
      {
        content: 'App-based Business',
      },
      {
        content: 'Consult customers from home over video',
      },
      {
        content: 'Access to invoicing and payment tools',
      },
    ],
  },
  {
    name: 'Premium Partner Pack',
    description: 'For larger clinics or group of clinics that handle both mobile vet bookings and normal bookings',
    price: 'On Enquiry',
    priceLabel: 'Per month & subscription yearly',
    buttonLabel: 'SIGN UP',
    url: '#',
    listItems: [
      {
        content: 'Drag & Drop Builder',
      },
      {
        content: '1,000s of Templates Ready',
      },
      {
        content: 'Blog Tools',
      },
      {
        content: 'eCommerce Store ',
      },
      {
        content: '30+ Webmaster Tools',
      },
    ],
  },
];

export const YEARLY_PRICING_TABLE = [
  {
    freePlan: true,
    name: 'Clinics starter pack',
    description: 'Digital customer support and reservation management assistance for clinics',
    price: '$49',
    priceLabel: 'Yearly',
    buttonLabel: 'SIGN UP',
    url: '#',
    listItems: [
      {
        content: 'Online Bookings',
      },
      {
        content: 'Calendar Management',
      },
      {
        content: 'Appointment optimization',
      },
      {
        content: 'Customer Data Management',
      },
      {
        content: 'GDPR Compliant',
      },
    ],
  },
  {
    name: 'Freelance Vet',
    description: 'Work exclusively with Hug A Pet, and earn as per your schedule!',
    price: '€399.00',
    priceLabel: 'Per month / subscription yearly €36000 minimum revenue',
    buttonLabel: 'SIGN UP',
    url: '#',
    listItems: [
      {
        content: 'Guaranteed Income of €3000 per month',
      },
      {
        content: 'Schedule based on your availability',
      },
      {
        content: 'App-based Business',
      },
      {
        content: 'Consult customers from home over video',
      },
      {
        content: 'Access to invoicing and payment tools',
      },
    ],
  },
  {
    name: 'Premium Partner Pack',
    description: 'For clinics looking for digital customer support and reservation management assistance',
    price: 'INQUIRE NOW',
    priceLabel: 'Per month & subscription yearly',
    buttonLabel: 'START FREE TRIAL',
    url: '#',
    listItems: [
      {
        content: 'Drag & Drop Builder',
      },
      {
        content: '3,000s of Templates Ready',
      },
      {
        content: 'Advanced branding',
      },
      {
        content: 'Knowledge base support',
      },
      {
        content: '80+ Webmaster Tools',
      },
    ],
  },
];

export const TESTIMONIALS = [
  {
    review:
      'Best experience! The vet visited me in 30 mins and I was able to schedule something quickly',
    name: 'Denny Hilguston',
    designation: 'Cat Owner',
    avatar: `${AuthorOne}`,
  },
  {
    review:
      'Very good service. Everything happened without me making a single call',
    name: 'Justin Albuz',
    designation: 'Dog Owner',
    avatar: `${AuthorTwo}`,
  },
  {
    review:
      'Good prices and efforts by the staff',
    name: 'Milly Cristiana',
    designation: 'Bird Owner',
    avatar: `${AuthorThree}`,
  },
];

// DOMAIN NAMES IN THIS CASE == SERVICES

export const DOMAIN_NAMES = [
  {
    label: 'General Checkup',
    value: 'general-Checkup',
  },
  {
    label: 'Castration',
    value: 'castration',
  },
  {
    label: 'Vaccination',
    value: 'vaccination',
  },
  {
    label: 'Euthenesia',
    value: 'euthenesia',
  },
  {
    label: 'General Information',
    value: 'general-information',
  },
  {
    label: 'Other',
    value: 'other',
  },
];

export const DOMAIN_PRICE = [
  {
    content: '12 vets in Kreutzberg',
  },
  {
    content: '15 vets in Mitte',
  },
  {
    content: '9 vets in Charlottenburg',
  },
  {
    content: '11 vets in Freidrichshain',
  },
  {
    content: '& much more',
    url: '#',
  },
];