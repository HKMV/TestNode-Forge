// Autodesk Forge configuration
module.exports = {
    // Set environment variables or hard-code here
    credentials: {
        client_id: process.env.FORGE_CLIENT_ID,
        client_secret: process.env.FORGE_CLIENT_SECRET,
        callback_url: process.env.FORGE_CALLBACK_URL
    },
    scopes: {
        // Required scopes for the server-side application
        //有关您可以允许该应用程序运行的所有可能范围的列表，请访问https://developer.autodesk.com/en/docs/oauth/v2/overview/scopes/
        // internal: ['bucket:create', 'bucket:read', 'data:read', 'data:create', 'data:write'],
        internal: ['data:read', 'data:write', 'data:create', 'bucket:read', 'bucket:delete', 'bucket:update', 'bucket:create'],
        // Required scope for the client-side viewer
        public: ['viewables:read']
    }
};
