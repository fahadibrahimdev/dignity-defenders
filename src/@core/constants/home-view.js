import { siteName } from "@/@core/constants/site-info";

export const heroSectionContent = {
    heading: 'Bystander Intervention Beacon',
    text: 'We live in a modern world where we have yet to tackle harassment, violence, and intimidation that goes unchallenged in public against all members of society including, young adults, women, and senior citizens.',
    image: '/images/hero-image.webp',
    alt: 'Hero Image'
}


export const brandFeaturesContent = {
    heading: 'DISCOVER FEATURES',
    features: [
        {
            title: 'DIGNITYDEFENDERS  Button',
            description: 'To call for help simply press the button three times without even looking.',
            icon: 'dot-circle'
        },
        {
            title: 'Associated Smartphone App',
            description: 'The free app works without the need for networking coverage, it uses Bluetooth and so draws very little battery power.',
            icon: 'bluetooth-links'
        },
        {
            title: 'Notifications',
            description: 'The Bluetooth tech transmits a sonar type ping and an “I Feel Unsafe” message to any smartphone within 50m that has the free app downloaded.',
            icon: 'notification'
        },
        {
            title: 'Pocket Sized',
            description: 'The device can be attached like a keychain to your bag and can even be concealed in a closed hand.',
            icon: 'pocket'
        },
    ]
}

export const brandSelectionContent = {
    heading: `Why Choose ${siteName}?`,
    quote: 'Step Up, Step In, Be Safe!',
    descriptions: [
        'The DIGNITYDEFENDERS calls upon those bystanders around who have the app to look up and be aware of what’s happening. An automatic ping from their phones creates an instantaneous tribe of people around a developing situation, whether it’s on public transport, on the street, or in a building, it tells the victim, “You’re not alone - I see you”.',
        'Currently available apps and panic buttons work by sending a message to an emergency contact or to the authorities, which means the situation may have escalated by the time help gets to the victim. DIGNITYDEFENDERS aims to prevent and de-escalate these events by tackling them during the initial signs. Personal whistles and sprays may escalate the situation into a physical altercation. DIGNITYDEFENDERS can be activated without even taking out your phone and without the offender knowing. It simply asks those around you to “look out for you” and to intervene and assist in a way that is safe and appropriate.'
    ],
}

export const benefitsContent = {
    heading: 'Nudging towards the next step',
    text: 'Nothing is empowering in a situation than hearing a sonar ping and knowing that your tribe has your back and is there to support you. At the same time that sonar ping also alerts the intimidator that their actions are being watched and their antisocial behaviour is not acceptable and will not be tolerated.',
    heading02: 'Bystander Intervention',
    text02: 'To ask for help is only the first step to ensure that a user receives the appropriate support they require the app guides what more bystanders can do to safely and effectively tackle a situation.',
    benefits: [
        {
            title: 'Distract',
            description: 'Approach the situation and create a reason to separate the target and the perpetrator.',
            icon: 'running'
        },
        {
            title: 'Direct Action',
            description: 'Call out the antisocial behaviour and ask the perpetrator to STOP.',
            icon: 'styled-speaker'
        },
        {
            title: 'Delegate',
            description: 'Make the situation know to an official or ask someone else to help.',
            icon: 'rocket'
        },
        {
            title: 'Delay',
            description: 'Watch and wait for the situation to pass then check with the person to see if they are okay or require further support.',
            icon: 'timer'
        }
    ],
    image: '/images/benefits.webp',
    alt: 'Benefits Illustration'
}

export const faqsContent = {
    heading: 'Frequently Asked Questions',
    text: 'Want to know more about our services?',
    faqs: [
        {
            question: 'Is DIGNITYDEFENDERS Compatible with Android or iOS?',
            answer: 'DIGNITYDEFENDERS is available on both Android and iOS devices.',

        },
        {
            question: 'Do I need a smartphone to make DIGNITYDEFENDERS work?',
            answer: 'No the DIGNITYDEFENDERS button does not need pairing to a phone and will simply alert any smartphone with the free app downloaded.',

        },
        {
            question: 'Is the DIGNITYDEFENDERS button and app secure?',
            answer: 'Yes the DIGNITYDEFENDERS button only transmits a notification sonar ping and an “I Feel Unsafe” message to nearby phones. It does not have any personal information on it and it’s location is not tracked. ',
        }
    ]
}

export const CTOSectionContent = {
    heading: 'Become a member of the DIGNITYDEFENDERS Tribe',
    text: 'Sign up to download the DIGNITYDEFENDERS app and receive your device.'
}

const date = new Date()
export const footerContent = {
    supportCard: {
        heading: 'Help and Support',
        subHeading: 'User questions and feedback',
        text: 'Feel free to email us for any questions or feedback you would like to provide.'
    },
    socialIcons: [
        {
            icon: 'instagram',
            link: '',
        },
        {
            icon: 'facebook',
            link: '',
        },
        {
            icon: 'twitter',
            link: '',
        }
    ],
    copyRightNotice: `© ${date.getFullYear()} ${siteName}. All Rights  Reserved`,
}

export const buttonsLabel = {
    CTOBtn: 'Pre Sign-Up',
    accent: `Why ${siteName}`
}

export const menuNavLinks = [
    { label: 'Home', sectionId: 'home' },
    { label: 'Features', sectionId: 'features' },
    { label: `Why ${siteName}?`, sectionId: 'whyUs' }
]
