export const dashboardLinks = [
    {
        name: 'Home',
        url: '/dashboard',
        icon: 'home.svg',
        subUrls: []
    },
    {
        name: 'Finder',
        url: '/dashboard/finder',
        icon: 'search.svg',
        subUrls: [
            {
                name: 'Ecommerce Businesses',
                url: '/dashboard/finder/ecom-finder',
                icon: 'shopping-bag.svg'
            },
            {
                name: 'Software Businesses',
                url: '/dashboard/finder/saas-finder',
                icon: 'bx-code-alt.svg'
            },
            {
                name: 'Local Businesses',
                url: '/dashboard/finder/local-finder',
                icon: 'map-pin.svg'
            }
        ]
    },
    {
        name: 'Utility Tools',
        url: '/dashboard/tools',
        icon: 'tool.svg',
        subUrls: [
            {
                name: 'Email Extractor',
                url: '/dashboard/tools/email-extractor',
                tooltip: 'Takes in a url and extracts all emails from the page'
            },
            {
                name: 'Personalized Messenger',
                url: '/dashboard/tools/personalized-messenger',
                tooltip: 'Takes in information about a person/company and crafts a personalized message using said information'
            },
            {
                name: 'Email Verifier',
                url: '/dashboard/tools/email-verfier',
                tooltip: 'Takes in a list of emails and dtermines if the email is reachable',
            },
            {
                name: 'Website Quality ',
                url: '/dashboard/tools/website-quality',
                tooltip: 'Analyses  website to determine it conversion factor and quality UI/UX'
            }
        ]
    },
    {
        name: 'Analytics',
        url: '/dashboard/analytics',
        icon: 'activity.svg',
        subUrls: []
    }
]
//urls should not start with '/'
//icon property directory is referencing the public/icons/** directory

export const miscLinks = [
    {
        name: 'Help Center',
        url: '#',
        icon: 'help-circle.svg'
    },
    {
        name: 'Settings',
        url: '#',
        icon: 'settings.svg'
    },{
        name: 'API Intergration',
        url: '#',
        icon: 'code.svg'
    }
]
export const dashOverviewData = [
    {
        title: 'Emails Sent',
        icon:  'mail-up.svg'
    },
    {
        title: 'Open Rate',
        icon: 'mail-opened.svg'
    },
    {
        title: 'Clicked Links',
        icon: 'hand-click.svg'
    }
]