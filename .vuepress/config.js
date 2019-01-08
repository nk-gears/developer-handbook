module.exports = {
    title: 'Developer Handbook',

    head: [
        ['link', { rel: 'icon', href: '/favicon.png' }]
    ],

    themeConfig: {
        sidebar: [
            '/',
            {
                title: 'Architecture',
                children: [
                    '/architecture/ddd',
                    '/architecture/rest',
                    '/architecture/microservices/',
                    '/architecture/eda',
                    '/architecture/architecting-applications-for-kubernetes',
                    '/architecture/12-factors',
                ]
            },
            {
                title: 'Java Backend',
                children: [
                    '/java-backend/',
                    '/java-backend/datetime',
                    '/java-backend/logging',
                    '/java-backend/dto',
                    '/java-backend/force-not-null',
                    '/java-backend/wf-engine'
                ]
            },
            {
                title: 'Database',
                children: [
                    '/database/',
                ]
            },
            {
                title: 'API',
                children: [
                    '/api/general-guidelines',
                    '/api/naming',
                    '/api/resources',
                    '/api/request-response',
                    '/api/http',
                    '/api/json-guidelines'
                ]
            },
            {
                title: 'Testing',
                children: [
                    '/testing/testing'
                ]
            },
            {
                title: 'Frontend',
                children: [
                    '/frontend/css/css-best-practices'
                ]
            },
            {
                title: 'Git',
                children: [
                    '/git/tbd'
                ]
            }

        ],

        repo: 'stakater/developer-handbook',
        editLinks: true,
        editLinkText: 'Help us improve this page!'
    }
}
