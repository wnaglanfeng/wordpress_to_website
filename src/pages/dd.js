import { useState, useEffect } from "react";

export default function Home() {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(
                    "https://api.diandian.com/pc/app/v2/word/search_related_contents?market_type=2&country_id=75&word=%E7%9C%BC%E7%A7%91%E5%8C%BB%E9%99%A2%E6%8C%82%E5%8F%B7%E7%BD%91&k=Ggdc552R56ay5Y2J6ZiD5o235Y6Y572jABZPRFJCWUBWAxoFWVVLVEdcC1YAFk9ETARTWhhdWlRGHgYTExYHbVpVBQwXFwUqDF1GRAwDFwE%3D",
                    {
                        headers: {
                            accept: "application/json, text/plain, */*",
                            "accept-language": "zh-CN,zh;q=0.9,en;q=0.8,en-GB;q=0.7,en-US;q=0.6",
                            "cache-control": "no-cache",
                            language: "zh",
                            "sec-ch-ua": '"Microsoft Edge";v="131", "Chromium";v="131", "Not_A Brand";v="24"',
                            "sec-ch-ua-mobile": "?0",
                            "sec-ch-ua-platform": '"Windows"',
                            "sec-fetch-dest": "empty",
                            "sec-fetch-mode": "cors",
                            "sec-fetch-site": "same-site",
                            cookie:
                                "deviceid=51f1efc6b626f3f131bc4d32aaa24fb; Hm_lvt_4b46d92b8c2be1622e347873de8ada00=1741789198; HMACCOUNT=217E0F5B065FCA4A; Hm_lvt_c420cc498e4250baa6114afe2947045e=1741789198; Hm_lvt_e1382854e68f4d69f837bb54a6d1e22f=1741789198; _ga=GA1.1.1249125131.1741789201; Qs_lvt_404253=1734595812%2C1741789202; token=e9addd62b212353e056b1de21791e400eae05843531fa4bf7e88ee3366cf87d10aaf95c123ac3f3c9d43a9c6ee3d0a4cbc3146664c66372939c1878220af31729c9e66585ae2cd19587c714e96188eb6; Hm_lpvt_4b46d92b8c2be1622e347873de8ada00=1741789258; Hm_lpvt_c420cc498e4250baa6114afe2947045e=1741789258; Hm_lpvt_e1382854e68f4d69f837bb54a6d1e22f=1741789258; Qs_pv_404253=4069095846624319000%2C1787094526203391500%2C2754738023895296000%2C1336888613415474700%2C2758574026689292300; _ga_GVCWL6PNZ2=GS1.1.1741789201.1.1.1741789662.0.0.0; _uetsid=15bc3b20ff4d11efb680ab983e79504f; _uetvid=42042d30bde011ef98435d09b9bd1aa3",
                            Referer: "https://app.diandian.com/",
                            "Referrer-Policy": "strict-origin-when-cross-origin",
                        },
                        method: "GET",
                    }
                );

                if (!response.ok) {
                    throw new Error("网络响应异常");
                }

                const result = await response.json();
                setData(result);
            } catch (error) {
                setError(error.message);
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, []);

    if (loading) {
        return <div>加载中...</div>;
    }

    if (error) {
        return <div>错误: {error}</div>;
    }

    return (
        <div>
            <h1>API 返回数据：</h1>
            <pre>{JSON.stringify(data, null, 2)}</pre>
        </div>
    );
}
