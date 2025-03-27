import axios from 'axios';

const APPSTORE_API_URL = 'http://flask-appstore.fcv3.1473200263418811.cn-hangzhou.fc.devsapp.net';

const appstore_api = axios.create({
    baseURL: APPSTORE_API_URL,
    headers: {
        'Content-Type': 'application/json',
    },
});

//搜索应用，输入market: ios，region: CHN，keyword: 快手，page: 1，pagesize: 5，sp: diandian
const search = async (market, region, keyword, page, pagesize, sp) => {
    try {
        
        const response = await appstore_api.get('/api/appstore/search', {
            params: {
                market: market,
                region: region,
                keyword: keyword,
                page: page,
                pagesize: pagesize,
                sp: sp
            }
        });

        // const response = await api.get('/api/appstore/search');
      
        // console.log(response.json)
        return response.data;
    } catch (error) {
        console.error('Error fetching posts:', error);
        throw error;
    }
};

export default search;