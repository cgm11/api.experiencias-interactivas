const axios = require('axios');

async function getImage(title) {
    try {
        const response = await axios.get('https://api.unsplash.com/search/photos', {
            headers: { 'Authorization': 'Client-ID QKpot1UxCIRelB_YXyyR1GizOf_iA7y6zb3MpSMfL_g' },
            params: {
                query: title,
                page: 1,
                per_page: 1
            }
        });
        return response.data.results[0].urls.small;
    } catch (error) {
        console.error(error);
        return "Empty image";
    }
}

module.exports = {
    getImage
}