export default {
    routes: [
        {
            method: "GET",
            path: "/sitemap.xml",
            handler: "sitemap.index",
            config: {
                auth: false,
            },
        },
    ],
};
