export const dashboardLinks = [
    {
        name: 'Home',
        url: 'dashboard/home',
        icon: 'https://image-here.com',
        subUrls: []
    },
    {
        name: 'Finder',
        url: 'dashboard/finder',
        icon: 'https://image-here.com',
        subUrls: [
            {
                name: 'Ecommerce Businesses',
                url: 'dashboard/finder/ecom-finder',
            },
            {
                name: 'Software Businesses',
                url: 'dashboard/finder/ecom-finder',
            },
            {
                name: 'Local Businesses',
                url: 'dashboard/finder/ecom-finder',
            }
        ]
    },
    {
        name: 'Utility Tools',
        url: 'dashboard/tools',
        icon: 'https://image-here.com',
        subUrls: [
            {
                name: 'Email Extractor',
                url: 'dashboard/tools/email-extractor',
                tooltip: 'Takes in a url and extracts all emails from the page'
            },
            {
                name: 'Personalized Messenger',
                url: 'dashboard/tools/personalized-messenger',
                tooltip: 'Takes in information about a person/company and crafts a personalized message using said information'
            },
        ]
    }
]

