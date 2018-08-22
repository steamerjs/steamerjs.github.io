module.exports = {
    title: 'Steamerjs',
    description: 'Steamerjs前端开发体系',
    head: [
        ['link', { rel: 'icon', href: '/image/logo.png' }]
    ],
    themeConfig: {
        nav: [
            { text: '首页', link: '/' },
            { text: '教程', link: '/introduction/Introduction' },
            { text: 'Github', link: 'https://github.com/steamerjs/steamerjs' },
        ],
        sidebar: [
            {
                title: '简介',
                collapsable: false,
                children: [
                  '/introduction/Introduction',
                  '/introduction/Quick-Start',
                  '/introduction/Steamer-Process',
                  '/introduction/Steamer-Core',
                  '/introduction/Steamer-QA'
                ]
            },
            {
                title: '配置阶段',
                collapsable: false,
                children: [
                  '/steps/Init-Config'
                ]
            },
            {
                title: '开发阶段-命令',
                collapsable: false,
                children: [
                    '/steps/Develop',
                    '/plugins/Steamer-Plugin-Kit',
                    '/plugins/Steamer-Plugin-Pro',
                    '/plugins/Steamer-Plugin-Mock'
                ]
            },
            {
                title: '开发阶段-项目脚手架',
                collapsable: false,
                children: [
                    '/projectkits/Starterkit',
                    '/projectkits/Bootstrap',
                    '/projectkits/Configuration',
                    '/projectkits/Folder-Structure',
                    '/projectkits/Static-Server',
                    '/projectkits/SPA-Development',
                    '/projectkits/Resource-Import',
                    '/projectkits/Style-Sprites',
                    '/projectkits/React-Related'
                ]
            },
            {
                title: '开发阶段-组件类库脚手架',
                collapsable: false,
                children: [
                    '/componentkits/Starterkit',
                    '/componentkits/Configuration',
                    '/componentkits/Folder-Structure',
                    '/componentkits/Practise-Standard',
                    '/componentkits/Starterkit-Standard'
                ]
            },
            {
                title: '开发阶段-脚手架使用指南',
                collapsable: false,
                children: [
                    '/kitguide/Introduction',
                    '/kitguide/Migration',
                    '/kitguide/Upgrade',
                ]
            },
            {
                title: '发布阶段',
                collapsable: false,
                children: [
                    '/steps/Publish',
                ]
            },
            {
                title: '内置插件',
                collapsable: false,
                children: [
                    '/builtin-plugins/Steamer-Plugins',
                    '/builtin-plugins/Steamer-Plugin-Doctor',
                    '/builtin-plugins/Steamer-Plugin-Config',
                    '/builtin-plugins/Steamer-Plugin-List',
                    '/builtin-plugins/Steamer-Plugin-Team',
                    '/builtin-plugins/Steamer-Plugin-Update',
                    '/plugins/Steamer-Plugin-Kit',
                    '/plugins/Steamer-Plugin-Task',
                    '/builtin-plugins/Steamer-Plugin-Develop'
                ]
            },
            {
                title: '脚手架与命令插件开发',
                collapsable: false,
                children: [
                    '/develop/Steamer-Develop',
                    '/starterkits/Steamer-Example',
                    '/plugins/Steamer-Plugin-Example'
                ]
            },
        ]
    },
};