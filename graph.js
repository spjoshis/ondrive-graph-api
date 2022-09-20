// https://www.npmjs.com/package/@microsoft/microsoft-graph-client
// https://www.npmjs.com/package/@microsoft/microsoft-graph-types
// https://developer.microsoft.com/en-us/graph/graph-explorer
// https://learn.microsoft.com/en-us/training/modules/msgraph-manage-files/1-introduction

// Create an authentication provider
const authProvider = {
    getAccessToken: async () => {
        // Call getToken in auth.js
        return await getToken();
    }
};

// Initialize the Graph client
const graphClient = MicrosoftGraph.Client.initWithMiddleware({
    authProvider
});

//Get user info from Graph
async function getUser() {
    ensureScope('user.read');
    return await graphClient
        .api('/me')
        .select('id,displayName')
        .get();
}

async function getFiles() {
    ensureScope('files.read');
    try {
        const response = await graphClient
            .api('/me/drive/root/children')
            .select('id,name,folder,package')
            .get();
        return response.value;
    } catch (error) {
        console.error(error);
    }
}

async function downloadFile(file) {
    try {
        const response = await graphClient
            .api(`/me/drive/items/${file.id}`)
            .select('@microsoft.graph.downloadUrl')
            .get();
        const downloadUrl = response["@microsoft.graph.downloadUrl"];
        window.open(downloadUrl, "_self");
    } catch (error) {
        console.error(error);
    }
}
