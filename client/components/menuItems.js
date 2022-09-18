import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowAltCircleDown } from '@fortawesome/free-solid-svg-icons'


export const menuItems = [
    {
      title: 'Home',
      url: '/',
    },
        {
            title: `Services`,
            url: '/services',
            submenu: [
            {
                title: 'Wood Fences',
                url: '/wood-fences',
            },
            {
                title: 'Chain Link Fences',
                url: '/chainlink-fences',
            },
            {
                title: 'Wrought Iron Fences',
                url: '/wrought-iron-fences',
            },
            {
                title: 'Commercial Fences',
                url: '/commercial-fences',
            },
            {
                title: 'Custom and Special Fences',
                url: '/custom-fences',
            },
            {
                title: 'Irrigation',
                url: '/irrigation',
            },
            ],
        },
    {
      title: 'About Us',
      url: '/about-us',
    },
    {
      title: 'Contact Us',
      url: '/contact-us',
    },
    {
      title: 'Tools',
      url: '/tools',
    },
    {
      title: 'Portfolio',
      url: '/portfolio',
    },
];