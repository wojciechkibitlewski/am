// Next.js API route support: https://nextjs.org/docs/api-routes/introduction


export default function handler(req, res) {
    const data = [
    {
        "name": 'Portfolio',
        "slug": 'portfolio',
        "children":[
            {
                "name": 'Fotografia noworodkowa pozowana',
                "slug": 'fotografia-noworodkowa-pozowana',
            },
            {
                "name": 'Fotografia noworodkowa. lifestyle',
                "slug": 'fotografia-noworodkowa-lifestyle',
            },
            {
                "name": 'Sesje ciążowe',
                "slug": 'sesje-ciazowe',
            },
            {
                "name": 'Fotografia dziecięca i rodzinna. Plener',
                "slug": 'fotografia-dziecieca-i-rodzinna-plener',
            },
            {
                "name": 'Fotografia dziecięca i rodzinna. Studio',
                "slug": 'fotografia-dziecieca-i-rodzinna-studio',
            },
            {
                "name": 'Sesje roczkowe. Sesje typu "smash cake"',
                "slug": 'sesje-roczkowe-sesje-typu-smash-cake',
            },
            {
                "name": 'Fotografia portretowa. Sesje kobiece',
                "slug": 'fotografia-portretowa-sesje-kobiece',
            },
            {
                "name": 'Fotografia ślubna. Reportaż',
                "slug": 'fotografia-slubna-reportaz',
            },
            {
                "name": 'Fotografia ślubna. Plenery',
                "slug": 'fotografia-slubna-plenery',
            },
            {
                "name": 'Fotografia biznesowa',
                "slug": 'fotografia-biznesowa',
            },
            {
                "name": 'Sesje świąteczne',
                "slug": 'sesje-swiateczne',
            }      
        ]
    },{
        "name": 'Blog',
        "slug": 'blog',
        "children":[
            {
                "name": 'Fotografia noworodkowa',
                "slug": 'fotografia-noworodkowa',
            },
            {
                "name": 'Fotografia dzieci',
                "slug": 'fotografia-dzieci',
            },
            {
                "name": 'Fotografia ślubna',
                "slug": 'fotografia-slubna',
            },{
                "name": 'Pozostałe wpisy',
                "slug": 'pozostale-wpisy',
            }
        ]
    },
    {
        "name": 'Oferta',
        "slug": 'oferta',
        "children":[
            {
                "name": 'Fotografia noworodkowa',
                "slug": 'fotografia-noworodkowa',
            },
        ]
    },
    {
        "name": 'Sklep',
        "slug": '',
        "link": 'https://sklep.agnieszkamandal.com'
    },
    {
        "name": 'Warsztaty',
        "slug": 'warsztaty-fotograficzne',
        "children":[
            {
                "name": 'Warsztaty fotografii noworodkowej',
                "slug": 'warsztaty-fotografii-noworodkowej',
            },
            {
                "name": 'Warsztaty fotografii dziecięcej i rodzinnej',
                "slug": 'warsztaty-fotografii-dzieciecej-i-rodzinnej',
            },
            {
                "name": 'Konsultacje fotograficzne',
                "slug": 'konsultacje-fotograficzne',
            }
        ]
    },
    {
        "name": 'Kontakt',
        "slug": 'kontakt'
    }    
    ];

    res.status(200).json(data)
  }
  