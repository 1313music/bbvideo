
// 关键功能初始化
        window.addEventListener('DOMContentLoaded', function() {
            // 创建脚本加载函数
            function loadScript(src, callback) {
                const script = document.createElement('script');
                script.src = src;
                script.defer = true;
                script.onload = callback;
                document.body.appendChild(script);
            }
            
            // 先加载核心功能
            loadScript('https://cdn.jsdelivr.net/npm/hls.js', function() {
                // 配置 hls.js，但仅对HLS流使用，不影响MP4播放
                if (Hls.isSupported()) {
                    Hls.DefaultConfig.enableWorker = true;
                    Hls.DefaultConfig.enableStreaming = true;
                    Hls.DefaultConfig.maxBufferLength = 30;
                    Hls.DefaultConfig.maxMaxBufferLength = 60;
                    Hls.DefaultConfig.liveSyncDurationCount = 3;
                }
                loadScript('https://cdn.jsdelivr.net/npm/dplayer/dist/DPlayer.min.js', initializeApp);
            });
        });
        
        // 应用核心逻辑
        function initializeApp() {
            // 更完整的视频数据（民谣主题）
            const videoData = {
                     bgyh: [ // 逼哥夜話 -> bgyh
                { 
                    id: 1, 
                    title: "逼哥夜話 - 上海", 
                    url: "https://r2.1701701.xyz/bgyh/B%E5%93%A5%E5%A4%9C%E8%A9%B1%E4%B8%8A%E6%B5%B7/%E3%80%8AB%E5%93%A5%E5%A4%9C%E8%A9%B1%E2%94%80%E2%94%80%E4%B8%8A%E6%B5%B7%E3%80%8B.m3u8", 
                    thumb: "https://v.1701701.xyz/img/bgyhfm.png"
                },
                { 
                    id: 2, 
                    title: "逼哥夜話 - 寧波 上", 
                    url: "https://r2.1701701.xyz/bgyh/B%E5%93%A5%E5%A4%9C%E8%A9%B1%E5%AF%A7%E6%B3%A2%E4%B8%8A/%E3%80%8AB%E5%93%A5%E5%A4%9C%E8%A9%B1%E2%94%80%E2%94%80%E5%AF%A7%E6%B3%A2%E3%80%8B%E4%B8%8A.m3u8", 
                    thumb: "https://v.1701701.xyz/img/bgyhfm.png"
                },
                { 
                    id: 3, 
                    title: "逼哥夜話 - 寧波 下", 
                    url: "https://r2.1701701.xyz/bgyh/B%E5%93%A5%E5%A4%9C%E8%A9%B1%E5%AF%A7%E6%B3%A2%E4%B8%8B/%E3%80%8AB%E5%93%A5%E5%A4%9C%E8%A9%B1%E2%94%80%E2%94%80%E5%AF%A7%E6%B3%A2%E3%80%8B%E4%B8%8B.m3u8", 
                    thumb: "https://v.1701701.xyz/img/bgyhfm.png"
                },
                { 
                    id: 4, 
                    title: "逼哥夜話 - 廈門 上", 
                    url: "https://r2.1701701.xyz/bgyh/B%E5%93%A5%E5%A4%9C%E8%A9%B1%E5%BB%88%E9%96%80%E4%B8%8A/%E3%80%8AB%E5%93%A5%E5%A4%9C%E8%A9%B1%E2%94%80%E2%94%80%E5%BB%88%E9%96%80%E3%80%8B%E4%B8%8A.m3u8", 
                    thumb: "https://v.1701701.xyz/img/bgyhfm.png"
                },
                { 
                    id: 5, 
                    title: "逼哥夜話 - 廈門 下", 
                    url: "https://r2.1701701.xyz/bgyh/B%E5%93%A5%E5%A4%9C%E8%A9%B1%E5%BB%88%E9%96%80%E4%B8%8B/%E3%80%8AB%E5%93%A5%E5%A4%9C%E8%A9%B1%E2%94%80%E2%94%80%E5%BB%88%E9%96%80%E3%80%8B%E4%B8%8B.m3u8", 
                    thumb: "https://v.1701701.xyz/img/bgyhfm.png"
                },
                { 
                    id: 6, 
                    title: "逼哥夜話 - 昆明 上", 
                    url: "https://r2.1701701.xyz/bgyh/B%E5%93%A5%E5%A4%9C%E8%A9%B1%E6%98%86%E6%98%8E%E4%B8%8A/%E3%80%8AB%E5%93%A5%E5%A4%9C%E8%A9%B1%E2%94%80%E2%94%80%E6%98%86%E6%98%8E%E3%80%8B%E4%B8%8A.m3u8", 
                    thumb: "https://v.1701701.xyz/img/bgyhfm.png"
                },
                { 
                    id: 7, 
                    title: "逼哥夜話 - 昆明 下", 
                    url: "https://r2.1701701.xyz/bgyh/B%E5%93%A5%E5%A4%9C%E8%A9%B1%E6%98%86%E6%98%8E%E4%B8%8B/%E3%80%8AB%E5%93%A5%E5%A4%9C%E8%A9%B1%E2%94%80%E2%94%80%E6%98%86%E6%98%8E%E3%80%8B%E4%B8%8B.m3u8", 
                    thumb: "https://v.1701701.xyz/img/bgyhfm.png"
                },
                { 
                    id: 8, 
                    title: "逼哥夜話 - 贵阳", 
                    url: "https://r.1701701.xyz/bgyh/B%E5%93%A5%E5%A4%9C%E8%A9%B1%E8%B4%B5%E9%98%B3/B%E5%93%A5%E5%A4%9C%E8%A9%B1%E8%B4%B5%E9%98%B3.m3u8", 
                    thumb: "https://v.1701701.xyz/img/bgyhfm.png"
                },
                { 
                    id: 9, 
                    title: "逼哥夜話 - 重慶 上", 
                    url: "https://r2.1701701.xyz/bgyh/B%E5%93%A5%E5%A4%9C%E8%A9%B1%E9%87%8D%E6%85%B6%E4%B8%8A/%E3%80%8AB%E5%93%A5%E5%A4%9C%E8%A9%B1%E2%94%80%E2%94%80%E9%87%8D%E6%85%B6%E3%80%8B%E4%B8%8A.m3u8", 
                    thumb: "https://v.1701701.xyz/img/bgyhfm.png"
                },
                { 
                    id: 10, 
                    title: "逼哥夜話 - 重慶 下", 
                    url: "https://r2.1701701.xyz/bgyh/B%E5%93%A5%E5%A4%9C%E8%A9%B1%E9%87%8D%E6%85%B6%E4%B8%8B/%E3%80%8AB%E5%93%A5%E5%A4%9C%E8%A9%B1%E2%94%80%E2%94%80%E9%87%8D%E6%85%B6%E3%80%8B%E4%B8%8B.m3u8", 
                    thumb: "https://v.1701701.xyz/img/bgyhfm.png"
                },
                { 
                    id: 11, 
                    title: "逼哥夜話 - 香港", 
                    url: "https://r2.1701701.xyz/bgyh/B%E5%93%A5%E5%A4%9C%E8%A9%B1%E9%A6%99%E6%B8%AF/%E3%80%8AB%E5%93%A5%E5%A4%9C%E8%A9%B1%E2%94%80%E2%94%80%E9%A6%99%E6%B8%AF%E3%80%8B.m3u8", 
                    thumb: "https://v.1701701.xyz/img/bgyhfm.png"
                }
            ],
            bgyh2: [ // 逼哥夜話第二季 -> bgyh2
                { 
                    id: 201, 
                    title: "逼哥夜話 第二季 01 - 深圳", 
                    url: "https://r2.1701701.xyz/bgyh2/%E6%9D%8E%E5%BF%97%E3%80%90%E9%80%BC%E5%93%A5%E5%A4%9C%E8%A9%B1%E3%80%91%EF%BC%88%E7%AC%AC%E4%BA%8C%E5%AD%A3%EF%BC%8901%20-%20%E6%B7%B1%E5%9C%B3/playlist.m3u8", 
                    thumb: "https://v.1701701.xyz/img/bgyh2fm.png"
                },
                { 
                    id: 202, 
                    title: "逼哥夜話 第二季 02 - 西安", 
                    url: "https://r2.1701701.xyz/bgyh2/%E6%9D%8E%E5%BF%97%E3%80%90%E9%80%BC%E5%93%A5%E5%A4%9C%E8%A9%B1%E3%80%91%EF%BC%88%E7%AC%AC%E4%BA%8C%E5%AD%A3%EF%BC%8902%20-%20%E8%A5%BF%E5%AE%89/playlist.m3u8", 
                    thumb: "https://v.1701701.xyz/img/bgyh2fm.png"
                },
                { 
                    id: 203, 
                    title: "逼哥夜話 第二季 03 - 上海", 
                    url: "https://r2.1701701.xyz/bgyh2/%E6%9D%8E%E5%BF%97%E3%80%90%E9%80%BC%E5%93%A5%E5%A4%9C%E8%A9%B1%E3%80%91%EF%BC%88%E7%AC%AC%E4%BA%8C%E5%AD%A3%EF%BC%8903%20-%20%E4%B8%8A%E6%B5%B7/%E6%9D%8E%E5%BF%97%E3%80%90%E9%80%BC%E5%93%A5%E5%A4%9C%E8%A9%B1%E3%80%91%EF%BC%88%E7%AC%AC%E4%BA%8C%E5%AD%A3%EF%BC%8903%20-%20%E4%B8%8A%E6%B5%B7.m3u8", 
                    thumb: "https://v.1701701.xyz/img/bgyh2fm.png"
                },
                { 
                    id: 204, 
                    title: "逼哥夜話 第二季 04 - 武漢", 
                    url: "https://r2.1701701.xyz/bgyh2/%E6%9D%8E%E5%BF%97%E3%80%90%E9%80%BC%E5%93%A5%E5%A4%9C%E8%A9%B1%E3%80%91%EF%BC%88%E7%AC%AC%E4%BA%8C%E5%AD%A3%EF%BC%8904%20-%20%E6%AD%A6%E6%BC%A2/%E6%9D%8E%E5%BF%97%E3%80%90%E9%80%BC%E5%93%A5%E5%A4%9C%E8%A9%B1%E3%80%91%EF%BC%88%E7%AC%AC%E4%BA%8C%E5%AD%A3%EF%BC%8904%20-%20%E6%AD%A6%E6%BC%A2.m3u8", 
                    thumb: "https://v.1701701.xyz/img/bgyh2fm.png"
                },
                { 
                    id: 205, 
                    title: "逼哥夜話 第二季 05 - 重慶", 
                    url: "https://r2.1701701.xyz/bgyh2/%E6%9D%8E%E5%BF%97%E3%80%90%E9%%BC%E5%93%A5%E5%A4%9C%E8%A9%B1%E3%80%91%EF%BC%88%E7%AC%AC%E4%BA%8C%E5%AD%A3%EF%BC%8905%20-%20%E9%87%8D%E6%85%B6/%E6%9D%8E%E5%BF%97%E3%80%90%E9%80%BC%E5%93%A5%E5%A4%9C%E8%A9%B1%E3%80%91%EF%BC%88%E7%AC%AC%E4%BA%8C%E5%AD%A3%EF%BC%8905%20-%20%E9%87%8D%E6%85%B6.m3u8", 
                    thumb: "https://v.1701701.xyz/img/bgyh2fm.png"
                },
                { 
                    id: 206, 
                    title: "逼哥夜話 第二季 06 - 北京", 
                    url: "https://r2.1701701.xyz/bgyh2/%E6%9D%8E%E5%BF%97%E3%80%90%E9%80%BC%E5%93%A5%E5%A4%9C%E8%A9%B1%E3%80%91%EF%BC%88%E7%AC%AC%E4%BA%8C%E5%AD%A3%EF%BC%8906%20-%20%E5%8C%97%E4%BA%AC/%E6%9D%8E%E5%BF%97%E3%80%90%E9%80%BC%E5%93%A5%E5%A4%9C%E8%A9%B1%E3%80%91%EF%BC%88%E7%AC%AC%E4%BA%8C%E5%AD%A3%EF%BC%8906%20-%20%E5%8C%97%E4%BA%AC.m3u8", 
                    thumb: "https://v.1701701.xyz/img/bgyh2fm.png"
                }
            ],
          wmsss: [ // 我們的叁叁肆 -> wmsss
                { 
                    id: 301, 
                    title: "安徽篇 - 预告", 
                    url: "https://r2.1701701.xyz/334/%E6%9D%8E%E5%BF%97%E3%80%90%E6%88%91%E5%80%91%E7%9A%84%E5%8F%81%E5%8F%81%E8%82%86%E3%80%91%E5%AE%89%E5%BE%BD%E7%AF%87%20-%20%E9%A2%84%E5%91%8A/playlist.m3u8", 
                    thumb: "https://v.1701701.xyz/img/334.jpg"
                },
                { 
                    id: 302, 
                    title: "安徽篇01 - 出發吧！還剩333", 
                    url: "https://r2.1701701.xyz/334/%E6%9D%8E%E5%BF%97%E3%80%90%E6%88%91%E5%80%91%E7%9A%84%E5%8F%81%E5%8F%81%E8%82%86%E3%80%91%E5%AE%89%E5%BE%BD%E7%AF%8701%20-%20%E5%87%BA%E7%99%BC%E5%90%A7%EF%BC%81%E9%82%84%E5%89%A9333/%E6%9D%8E%E5%BF%97%E3%80%90%E6%88%91%E5%80%91%E7%9A%84%E5%8F%81%E5%8F%81%E8%82%86%E3%80%91%E5%AE%89%E5%BE%BD%E7%AF%8701%20-%20%E5%87%BA%E7%99%BC%E5%90%A7%EF%BC%81%E9%82%84%E5%89%A9333.m3u8", 
                    thumb: "https://v.1701701.xyz/img/334.jpg"
                },
                { 
                    id: 303, 
                    title: "安徽篇02 - 我是巡演經理，也是道歉專業戶", 
                    url: "https://r2.1701701.xyz/334/%E6%9D%8E%E5%BF%97%E3%80%90%E6%88%91%E5%80%91%E7%9A%84%E5%8F%81%E5%8F%81%E8%82%86%E3%80%91%E5%AE%89%E5%BE%BD%E7%AF%8702%20-%20%E6%88%91%E6%98%AF%E5%B7%A1%E6%BC%94%E7%B6%93%E7%90%86%EF%BC%8C%E4%B9%9F%E6%98%AF%E9%81%93%E6%AD%89%E5%B0%88%E6%A5%AD%E6%88%B6/%E6%9D%8E%E5%BF%97%E3%80%90%E6%88%91%E5%80%91%E7%9A%84%E5%8F%81%E5%8F%81%E8%82%86%E3%80%91%E5%AE%89%E5%BE%BD%E7%AF%8702%20-%20%E6%88%91%E6%98%AF%E5%B7%A1%E6%BC%94%E7%B6%93%E7%90%86%EF%BC%8C%E4%B9%9F%E6%98%AF%E9%81%93%E6%AD%89%E5%B0%88%E6%A5%AD%E6%88%B6.m3u8", 
                    thumb: "https://v.1701701.xyz/img/334.jpg"
                },
                { 
                    id: 304, 
                    title: "安徽篇03 - 淮南事變", 
                    url: "https://r2.1701701.xyz/334/%E6%9D%8E%E5%BF%97%E3%80%90%E6%88%91%E5%80%91%E7%9A%84%E5%8F%81%E5%8F%81%E8%82%86%E3%80%91%E5%AE%89%E5%BE%BD%E7%AF%8703%20-%20%E6%B7%AE%E5%8D%97%E4%BA%8B%E8%AE%8A/%E6%9D%8E%E5%BF%97%E3%80%90%E6%88%91%E5%80%91%E7%9A%84%E5%8F%81%E5%8F%81%E8%82%86%E3%80%91%E5%AE%89%E5%BE%BD%E7%AF%8703%20-%20%E6%B7%AE%E5%8D%97%E4%BA%8B%E8%AE%8A.m3u8", 
                    thumb: "https://v.1701701.xyz/img/334.jpg"
                },
                { 
                    id: 305, 
                    title: "安徽篇04 - 留給音響師的時間不多了", 
                    url: "https://r2.1701701.xyz/334/%E6%9D%8E%E5%BF%97%E3%80%90%E6%88%91%E5%80%91%E7%9A%84%E5%8F%81%E5%8F%81%E8%82%86%E3%80%91%E5%AE%89%E5%BE%BD%E7%AF%8704%20-%20%E7%95%99%E7%B5%A6%E9%9F%B3%E9%9F%BF%E5%B8%AB%E7%9A%84%E6%99%82%E9%96%93%E4%B8%8D%E5%A4%9A%E4%BA%86/%E6%9D%8E%E5%BF%97%E3%80%90%E6%88%91%E5%80%91%E7%9A%84%E5%8F%81%E5%8F%81%E8%82%86%E3%80%91%E5%AE%89%E5%BE%BD%E7%AF%8704%20-%20%E7%95%99%E7%B5%A6%E9%9F%B3%E9%9F%BF%E5%B8%AB%E7%9A%84%E6%99%82%E9%96%93%E4%B8%8D%E5%A4%9A%E4%BA%86.m3u8", 
                    thumb: "https://v.1701701.xyz/img/334.jpg"
                },
                { 
                    id: 306, 
                    title: "安徽篇05 - 日落前抵達", 
                    url: "https://r2.1701701.xyz/334/%E6%9D%8E%E5%BF%97%E3%80%90%E6%88%91%E5%80%91%E7%9A%84%E5%8F%81%E5%8F%81%E8%82%86%E3%80%91%E5%AE%89%E5%BE%BD%E7%AF%8705%20-%20%E6%97%A5%E8%90%BD%E5%89%8D%E6%8A%B5%E9%81%94/%E6%9D%8E%E5%BF%97%E3%80%90%E6%88%91%E5%80%91%E7%9A%84%E5%8F%81%E5%8F%81%E8%82%86%E3%80%91%E5%AE%89%E5%BE%BD%E7%AF%8705%20-%20%E6%97%A5%E8%90%BD%E5%89%8D%E6%8A%B5%E9%81%94.m3u8", 
                    thumb: "https://v.1701701.xyz/img/334.jpg"
                },
                { 
                    id: 307, 
                    title: "山東篇01 - 明日復明日", 
                    url: "https://r2.1701701.xyz/334/%E6%9D%8E%E5%BF%97%E3%80%90%E6%88%91%E5%80%91%E7%9A%84%E5%8F%81%E5%8F%81%E8%82%86%E3%80%91%E5%B1%B1%E6%9D%B1%E7%AF%8701%20-%20%E6%98%8E%E6%97%A5%E5%BE%A9%E6%98%8E%E6%97%A5/%E6%9D%8E%E5%BF%97%E3%80%90%E6%88%91%E5%80%91%E7%9A%84%E5%8F%81%E5%8F%81%E8%82%86%E3%80%91%E5%B1%B1%E6%9D%B1%E7%AF%8701%20-%20%E6%98%8E%E6%97%A5%E5%BE%A9%E6%98%8E%E6%97%A5.m3u8", 
                    thumb: "https://v.1701701.xyz/img/334.jpg"
                },
                { 
                    id: 308, 
                    title: "山東篇02 - 明日何其多", 
                    url: "https://r2.1701701.xyz/334/%E6%9D%8E%E5%BF%97%E3%80%90%E6%88%91%E5%80%91%E7%9A%84%E5%8F%81%E5%8F%81%E8%82%86%E3%80%91%E5%B1%B1%E6%9D%B1%E7%AF%8702%20-%20%E6%98%8E%E6%97%A5%E4%BD%95%E5%85%B6%E5%A4%9A/playlist.m3u8", 
                    thumb: "https://v.1701701.xyz/img/334.jpg"
                },
                { 
                    id: 309, 
                    title: "山東篇03 - 自來水公司的口琴手", 
                    url: "https://r2.1701701.xyz/334/%E6%9D%8E%E5%BF%97%E3%80%90%E6%88%91%E5%80%91%E7%9A%84%E5%8F%81%E5%8F%81%E8%82%86%E3%80%91%E5%B1%B1%E6%9D%B1%E7%AF%8703%20-%20%E8%87%AA%E4%BE%86%E6%B0%B4%E5%85%AC%E5%8F%B8%E7%9A%84%E5%8F%A3%E7%90%B4%E6%89%8B/%E6%9D%8E%E5%BF%97%E3%80%90%E6%88%91%E5%80%91%E7%9A%84%E5%8F%81%E5%8F%81%E8%82%86%E3%80%91%E5%B1%B1%E6%9D%B1%E7%AF%8703%20-%20%E8%87%AA%E4%BE%86%E6%B0%B4%E5%85%AC%E5%8F%B8%E7%9A%84%E5%8F%A3%E7%90%B4%E6%89%8B.m3u8", 
                    thumb: "https://v.1701701.xyz/img/334.jpg"
                },
                { 
                    id: 310, 
                    title: "山東篇04 - 是誰還在唱歌", 
                    url: "https://r2.1701701.xyz/334/%E6%9D%8E%E5%BF%97%E3%80%90%E6%88%91%E5%80%91%E7%9A%84%E5%8F%81%E5%8F%81%E8%82%86%E3%80%91%E5%B1%B1%E6%9D%B1%E7%AF%8704%20-%20%E6%98%AF%E8%AA%B0%E9%82%84%E5%9C%A8%E5%94%B1%E6%AD%8C/%E6%9D%8E%E5%BF%97%E3%80%90%E6%88%91%E5%80%91%E7%9A%84%E5%8F%81%E5%8F%81%E8%82%86%E3%80%91%E5%B1%B1%E6%9D%B1%E7%AF%8704%20-%20%E6%98%AF%E8%AA%B0%E9%82%84%E5%9C%A8%E5%94%B1%E6%AD%8C.m3u8", 
                    thumb: "https://v.1701701.xyz/img/334.jpg"
                },
                { 
                    id: 311, 
                    title: "山東篇05 - 兩個好吉友", 
                    url: "https://r2.1701701.xyz/334/%E6%9D%8E%E5%BF%97%E3%80%90%E6%88%91%E5%80%91%E7%9A%84%E5%8F%81%E5%8F%81%E8%82%86%E3%80%91%E5%B1%B1%E6%9D%B1%E7%AF%8705%20-%20%E5%85%A9%E5%80%8B%E5%A5%BD%E5%90%89%E5%8F%8B/%E6%9D%8E%E5%BF%97%E3%80%90%E6%88%91%E5%80%91%E7%9A%84%E5%8F%81%E5%8F%81%E8%82%86%E3%80%91%E5%B1%B1%E6%9D%B1%E7%AF%8705%20-%20%E5%85%A9%E5%80%8B%E5%A5%BD%E5%90%89%E5%8F%8B.m3u8", 
                    thumb: "https://v.1701701.xyz/img/334.jpg"
                },
                { 
                    id: 312, 
                    title: "山東篇06 - 這個世界會好的", 
                    url: "https://r2.1701701.xyz/334/%E6%9D%8E%E5%BF%97%E3%80%90%E6%88%91%E5%80%91%E7%9A%84%E5%8F%81%E5%8F%81%E8%82%86%E3%80%91%E5%B1%B1%E6%9D%B1%E7%AF%8706%20-%20%E9%80%99%E5%80%8B%E4%B8%96%E7%95%8C%E6%9C%83%E5%A5%BD%E7%9A%84/%E6%9D%8E%E5%BF%97%E3%80%90%E6%88%91%E5%80%91%E7%9A%84%E5%8F%81%E5%8F%81%E8%82%86%E3%80%91%E5%B1%B1%E6%9D%B1%E7%AF%8706%20-%20%E9%80%99%E5%80%8B%E4%B8%96%E7%95%8C%E6%9C%83%E5%A5%BD%E7%9A%84.m3u8", 
                    thumb: "https://v.1701701.xyz/img/334.jpg"
                },
                { 
                    id: 313, 
                    title: "陜寧篇01 - 票！", 
                    url: "https://r2.1701701.xyz/334/%E6%9D%8E%E5%BF%97%E3%80%90%E6%88%91%E5%80%91%E7%9A%84%E5%8F%81%E5%8F%81%E8%82%86%E3%80%91%E9%99%9C%E5%AF%A7%E7%AF%8701%20-%20%E7%A5%A8%EF%BC%81/%E6%9D%8E%E5%BF%97%E3%80%90%E6%88%91%E5%80%91%E7%9A%84%E5%8F%81%E5%8F%81%E8%82%86%E3%80%91%E9%99%9C%E5%AF%A7%E7%AF%8701%20-%20%E7%A5%A8%EF%BC%81.m3u8", 
                    thumb: "https://v.1701701.xyz/img/334.jpg"
                },
                { 
                    id: 314, 
                    title: "陜寧篇02 - 圍城", 
                    url: "https://r2.1701701.xyz/334/%E6%9D%8E%E5%BF%97%E3%80%90%E6%88%91%E5%80%91%E7%9A%84%E5%8F%81%E5%8F%81%E8%82%86%E3%80%91%E9%99%9C%E5%AF%A7%E7%AF%8702%20-%20%E5%9C%8D%E5%9F%8E/%E6%9D%8E%E5%BF%97%E3%80%90%E6%88%91%E5%80%91%E7%9A%84%E5%8F%81%E5%8F%81%E8%82%86%E3%80%91%E9%99%9C%E5%AF%A7%E7%AF%8702%20-%20%E5%9C%8D%E5%9F%8E.m3u8", 
                    thumb: "https://v.1701701.xyz/img/334.jpg"
                },
                { 
                    id: 315, 
                    title: "陜寧篇03 - 王洪宇", 
                    url: "https://r2.1701701.xyz/334/%E6%9D%8E%E5%BF%97%E3%80%90%E6%88%91%E5%80%91%E7%9A%84%E5%8F%81%E5%8F%81%E8%82%86%E3%80%91%E9%99%9C%E5%AF%A7%E7%AF%8703%20-%20%E7%8E%8B%E6%B4%AA%E5%AE%87/%E6%9D%8E%E5%BF%97%E3%80%90%E6%88%91%E5%80%91%E7%9A%84%E5%8F%81%E5%8F%81%E8%82%86%E3%80%91%E9%99%9C%E5%AF%A7%E7%AF%8703%20-%20%E7%8E%8B%E6%B4%AA%E5%AE%87.m3u8", 
                    thumb: "https://v.1701701.xyz/img/334.jpg"
                },
                { 
                    id: 316, 
                    title: "陜寧篇04 - 這個不好說", 
                    url: "https://r2.1701701.xyz/334/%E6%9D%8E%E5%BF%97%E3%80%90%E6%88%91%E5%80%91%E7%9A%84%E5%8F%81%E5%8F%81%E8%82%86%E3%80%91%E9%99%9C%E5%AF%A7%E7%AF%8704%20-%20%E9%80%99%E5%80%8B%E4%B8%8D%E5%A5%BD%E8%AA%AA/%E6%9D%8E%E5%BF%97%E3%80%90%E6%88%91%E5%80%91%E7%9A%84%E5%8F%81%E5%8F%81%E8%82%86%E3%80%91%E9%99%9C%E5%AF%A7%E7%AF%8704%20-%20%E9%80%99%E5%80%8B%E4%B8%8D%E5%A5%BD%E8%AA%AA.m3u8", 
                    thumb: "https://v.1701701.xyz/img/334.jpg"
                },
                { 
                    id: 317, 
                    title: "陜寧篇05 - 鍵盤俠", 
                    url: "https://r2.1701701.xyz/334/%E6%9D%8E%E5%BF%97%E3%80%90%E6%88%91%E5%80%91%E7%9A%84%E5%8F%81%E5%8F%81%E8%82%86%E3%80%91%E9%99%9C%E5%AF%A7%E7%AF%8705%20-%20%E9%8D%B5%E7%9B%A4%E4%BF%A0/%E6%9D%8E%E5%BF%97%E3%80%90%E6%88%91%E5%80%91%E7%9A%84%E5%8F%81%E5%8F%81%E8%82%86%E3%80%91%E9%99%9C%E5%AF%A7%E7%AF%8705%20-%20%E9%8D%B5%E7%9B%A4%E4%BF%A0.m3u8", 
                    thumb: "https://v.1701701.xyz/img/334.jpg"
                },
                { 
                    id: 318, 
                    title: "陜寧篇06 - 再見小村", 
                    url: "https://r2.1701701.xyz/334/%E6%9D%8E%E5%BF%97%E3%80%90%E6%88%91%E5%80%91%E7%9A%84%E5%8F%81%E5%8F%81%E8%82%86%E3%80%91%E9%99%9C%E5%AF%A7%E7%AF%8706%20-%20%E5%86%8D%E8%A6%8B%E5%B0%8F%E6%9D%91/%E6%9D%8E%E5%BF%97%E3%80%90%E6%88%91%E5%80%91%E7%9A%84%E5%8F%81%E5%8F%81%E8%82%86%E3%80%91%E9%99%9C%E5%AF%A7%E7%AF%8706%20-%20%E5%86%8D%E8%A6%8B%E5%B0%8F%E6%9D%91.m3u8", 
                    thumb: "https://v.1701701.xyz/img/334.jpg"
                },
                { 
                    id: 319, 
                    title: "陜寧篇07 - 西夏王陵", 
                    url: "https://r2.1701701.xyz/334/%E6%9D%8E%E5%BF%97%E3%80%90%E6%88%91%E5%80%91%E7%9A%84%E5%8F%81%E5%8F%81%E8%82%86%E3%80%91%E9%99%9C%E5%AF%A7%E7%AF%8707%20-%20%E8%A5%BF%E5%A4%8F%E7%8E%8B%E9%99%B5/%E6%9D%8E%E5%BF%97%E3%80%90%E6%88%91%E5%80%91%E7%9A%84%E5%8F%81%E5%8F%81%E8%82%86%E3%80%91%E9%99%9C%E5%AF%A7%E7%AF%8707%20-%20%E8%A5%BF%E5%A4%8F%E7%8E%8B%E9%99%B5.m3u8", 
                    thumb: "https://v.1701701.xyz/img/334.jpg"
                },
                { 
                    id: 320, 
                    title: "雲南篇01 - 整裝再發", 
                    url: "https://r2.1701701.xyz/334/%E6%9D%8E%E5%BF%97%E3%80%90%E6%88%91%E5%80%91%E7%9A%84%E5%8F%81%E5%8F%81%E8%82%86%E3%80%91%E9%9B%B2%E5%8D%97%E7%AF%8701%20-%20%E6%95%B4%E8%A3%9D%E5%86%8D%E7%99%BC/%E6%9D%8E%E5%BF%97%E3%80%90%E6%88%91%E5%80%91%E7%9A%84%E5%8F%81%E5%8F%81%E8%82%86%E3%80%91%E9%9B%B2%E5%8D%97%E7%AF%8701%20-%20%E6%95%B4%E8%A3%9D%E5%86%8D%E7%99%BC.m3u8", 
                    thumb: "https://v.1701701.xyz/img/334.jpg"
                },
                { 
                    id: 321, 
                    title: "雲南篇02 - 我是新來的燈光師，請多關照", 
                    url: "https://r2.1701701.xyz/334/%E6%9D%8E%E5%BF%97%E3%80%90%E6%88%91%E5%80%91%E7%9A%84%E5%8F%81%E5%8F%81%E8%82%86%E3%80%91%E9%9B%B2%E5%8D%97%E7%AF%8702%20-%20%E6%88%91%E6%98%AF%E6%96%B0%E4%BE%86%E7%9A%84%E7%87%88%E5%85%89%E5%B8%AB%EF%BC%8C%E8%AB%8B%E5%A4%9A%E9%97%9C%E7%85%A7/%E6%9D%8E%E5%BF%97%E3%80%90%E6%88%91%E5%80%91%E7%9A%84%E5%8F%81%E5%8F%81%E8%82%86%E3%80%91%E9%9B%B2%E5%8D%97%E7%AF%8702%20-%20%E6%88%91%E6%98%AF%E6%96%B0%E4%BE%86%E7%9A%84%E7%87%88%E5%85%89%E5%B8%AB%EF%BC%8C%E8%AB%8B%E5%A4%9A%E9%97%9C%E7%85%A7.m3u8", 
                    thumb: "https://v.1701701.xyz/img/334.jpg"
                },
                { 
                    id: 322, 
                    title: "雲南篇03 - 一个異類和他的同路人", 
                    url: "https://r2.1701701.xyz/334/%E6%9D%8E%E5%BF%97%E3%80%90%E6%88%91%E5%80%91%E7%9A%84%E5%8F%81%E5%8F%81%E8%82%86%E3%80%91%E9%9B%B2%E5%8D%97%E7%AF%8703%20-%20%E4%B8%80%E4%B8%AA%E7%95%B0%E9%A1%9E%E5%92%8C%E4%BB%96%E7%9A%84%E5%90%8C%E8%B7%AF%E4%BA%BA/%E6%9D%8E%E5%BF%97%E3%80%90%E6%88%91%E5%80%91%E7%9A%84%E5%8F%81%E5%8F%81%E8%82%86%E3%80%91%E9%9B%B2%E5%8D%97%E7%AF%8703%20-%20%E4%B8%80%E4%B8%AA%E7%95%B0%E9%A1%9E%E5%92%8C%E4%BB%96%E7%9A%84%E5%90%8C%E8%B7%AF%E4%BA%BA.m3u8", 
                    thumb: "https://v.1701701.xyz/img/334.jpg"
                },
                { 
                    id: 323, 
                    title: "雲南篇04 - 大理想國", 
                    url: "https://r2.1701701.xyz/334/%E6%9D%8E%E5%BF%97%E3%80%90%E6%88%91%E5%80%91%E7%9A%84%E5%8F%81%E5%8F%81%E8%82%86%E3%80%91%E9%9B%B2%E5%8D%97%E7%AF%8704%20-%20%E5%A4%A7%E7%90%86%E6%83%B3%E5%9C%8B/%E6%9D%8E%E5%BF%97%E3%80%90%E6%88%91%E5%80%91%E7%9A%84%E5%8F%81%E5%8F%81%E8%82%86%E3%80%91%E9%9B%B2%E5%8D%97%E7%AF%8704%20-%20%E5%A4%A7%E7%90%86%E6%83%B3%E5%9C%8B.m3u8", 
                    thumb: "https://v.1701701.xyz/img/334.jpg"
                },
                { 
                    id: 324, 
                    title: "雲南篇05 - 飛", 
                    url: "https://r2.1701701.xyz/334/%E6%9D%8E%E5%BF%97%E3%80%90%E6%88%91%E5%80%91%E7%9A%84%E5%8F%81%E5%8F%81%E8%82%86%E3%80%91%E9%9B%B2%E5%8D%97%E7%AF%8705%20-%20%E9%A3%9B/%E6%9D%8E%E5%BF%97%E3%80%90%E6%88%91%E5%80%91%E7%9A%84%E5%8F%81%E5%8F%81%E8%82%86%E3%80%91%E9%9B%B2%E5%8D%97%E7%AF%8705%20-%20%E9%A3%9B.m3u8", 
                    thumb: "https://v.1701701.xyz/img/334.jpg"
                },
                { 
                    id: 325, 
                    title: "雲南篇番外 - 荒", 
                    url: "https://r2.1701701.xyz/334/%E6%9D%8E%E5%BF%97%E3%80%90%E6%88%91%E5%80%91%E7%9A%84%E5%8F%81%E5%8F%81%E8%82%86%E3%80%91%E9%9B%B2%E5%8D%97%E7%AF%87%E7%95%AA%E5%A4%96%20-%20%E8%8D%92/%E6%9D%8E%E5%BF%97%E3%80%90%E6%88%91%E5%80%91%E7%9A%84%E5%8F%81%E5%8F%81%E8%82%86%E3%80%91%E9%9B%B2%E5%8D%97%E7%AF%87%E7%95%AA%E5%A4%96%20-%20%E8%8D%92.m3u8", 
                    thumb: "https://v.1701701.xyz/img/334.jpg"
                }
            ],
                knxy: [ // 跨年音乐会 -> knxy
                     { 
                        id: 401, 
                          title: "I/O", 
                        url: "https://2014.1701701.xyz/video/roadmap.js", 
                        thumb: "./img/io.jpg"
                        
                    },
                    { 
                        id: 402, 
                       title: "看见", 
                        url: "https://2015.1701701.xyz/video/roadmap.js", 
                        thumb: "./img/kj.jpg"
                    },
                    { 
                        id: 403, 
                       title: "洗心革面", 
                        url: "https://2018.1701701.xyz/video/roadmap.js", 
                        thumb: "./img/xxgm.jpg"
                    },
                    { 
                        id: 404, 
                        title: "我爱南京", 
                        url: "https://2009.1701701.xyz/video/roadmap.js", 
                        thumb: "./img/wanj.jpg"
                        
                    },
                    { 
                        id: 405,
                        title: "电声与管弦乐",
                        isFolder: true,
                        thumb: "./img/dsygxy.jpg", // 文件夹封面
                        folderId: "dsygxl" // 文件夹ID，用于加载子文件夹内容
                    }
                ],
                
                // 添加电声与管弦乐子文件夹内容
                dsygxl: [ // 电声与管弦乐子文件夹
                    {
                        id: 4051,
                        title: "01 序曲",
                        url: "https://stucuzeducn-my.sharepoint.com/personal/224101204_stu_cuz_edu_cn/_layouts/52/download.aspx?share=Ec7ht7iHFJpIu6hJU1dBJuYBhOIyIo7qScWGMR4Gu-tf6Q&download=1.mp4",
                        thumb: "./img/dsygxy.jpg"
                    },
                    {
                        id: 4052,
                        title: "02 杭州",
                        url: "https://stucuzeducn-my.sharepoint.com/personal/224101204_stu_cuz_edu_cn/_layouts/52/download.aspx?share=EWKhR5tS5ulKvZzsLQH-8wcBGrhz11t48WR2yo4exs8Ulg&download=1.mp4",
                        thumb: "./img/dsygxy.jpg"
                    },
                    {
                        id: 4053,
                        title: "03 尽头",
                      url: "https://stucuzeducn-my.sharepoint.com/personal/224101204_stu_cuz_edu_cn/_layouts/52/download.aspx?share=EU-LNzQZe3dIhNrJ1Xl8D_kB7peN6WY9SZCnSBJWOxfdbw&download=1.mp4",
                        thumb: "./img/dsygxy.jpg"
                    },
                     {
                        id: 4054,
                        title: "04 定西",
                      url: "https://stucuzeducn-my.sharepoint.com/personal/224101204_stu_cuz_edu_cn/_layouts/52/download.aspx?share=EZgWkUGMOZ1Ol1nrCHmT3MkBaOahLDiQzMqUM1EFB5riEA&download=1.mp4",
                        thumb: "./img/dsygxy.jpg"
                    },
                     {
                        id: 4055,
                        title: " 05 春末的南方城市",
                      url: "https://stucuzeducn-my.sharepoint.com/personal/224101204_stu_cuz_edu_cn/_layouts/52/download.aspx?share=EQPRtx_A505AobP9kluGkrUBZpjhwjrLZOFRkmxfSKb05Q&download=1.mp4",
                        thumb: "./img/dsygxy.jpg"
                    },
                     {
                        id: 4056,
                        title: "06 黑色信封",
                      url: "https://stucuzeducn-my.sharepoint.com/personal/224101204_stu_cuz_edu_cn/_layouts/52/download.aspx?share=EW0maOWdzaJJgLP-QpKjVocBrMXenFBwng8IPNuCqIIaRA&download=1.mp4",
                        thumb: "./img/dsygxy.jpg"
                    },
                     {
                        id: 4057,
                        title: "07 铅笔",
                      url: "https://stucuzeducn-my.sharepoint.com/personal/224101204_stu_cuz_edu_cn/_layouts/52/download.aspx?share=EYG6W3DEPcxMvOxViCOW7GoBu0g5GypurNYlOj2eyiGWIw&download=1.mp4",
                        thumb: "./img/dsygxy.jpg"
                    },
                     {
                        id: 4058,
                        title: "08 和你在一起",
                      url: "https://stucuzeducn-my.sharepoint.com/personal/224101204_stu_cuz_edu_cn/_layouts/52/download.aspx?share=EQ3_wK5aKVZIj0NcvcooRkcBwdFjhEC_DIbJBMVcfqUlqg&download=1.mp4",
                        thumb: "./img/dsygxy.jpg"
                    },
                     {
                        id: 4059,
                        title: "09 墙上的向日葵",
                      url: "https://stucuzeducn-my.sharepoint.com/personal/224101204_stu_cuz_edu_cn/_layouts/52/download.aspx?share=EWFJ6JlLFxBFifyTK0Ei9jUBHJVMycGx7ez0_tVryJIWLw&download=1.mp4",
                        thumb: "./img/dsygxy.jpg"
                    },
                     {
                        id: 4060,
                        title: "10 大象",
                      url: "https://stucuzeducn-my.sharepoint.com/personal/224101204_stu_cuz_edu_cn/_layouts/52/download.aspx?share=EeG9ZKjul5BIu3tprqBFDoYBa17XJd6A1VAbnlasgPzumA&download=1.mp4",
                        thumb: "./img/dsygxy.jpg"
                    },
                     {
                        id: 4061,
                        title: "11 门",
                      url: "https://stucuzeducn-my.sharepoint.com/personal/224101204_stu_cuz_edu_cn/_layouts/52/download.aspx?share=EXHCldFO65hJpivB8GW_a9kBIsJvUp6Efz32DN6d2L72aQ&download=1.mp4",
                        thumb: "./img/dsygxy.jpg"
                    },
                     {
                        id: 4062,
                        title: "12 回答",
                      url: "https://stucuzeducn-my.sharepoint.com/personal/224101204_stu_cuz_edu_cn/_layouts/52/download.aspx?share=EbHODu90XCFPuCOeJN8N5pYBX8BRD_iGyG1XLdwioVMYnA&download=1.mp4",
                        thumb: "./img/dsygxy.jpg"
                    }
                ],
                jlp: [ // 紀錄片 -> jlp
                   { 
                        id: 501, 
                        title: "专访李志 凤凰非常道 20150508", 
                        url: "https://stucuzeducn-my.sharepoint.com/personal/224101204_stu_cuz_edu_cn/_layouts/52/download.aspx?share=EWnFJY5oiz5On8JVy9Q1Iq4B8n8FEWiOVl-3tx6wKiSK7g&download=1.mp4", 
                        thumb: "https://v.1701701.xyz/img/huida.JPG"
                    }
                ],
                yjj: [ // 音乐节 -> yjj
                   { 
                        id: 601, 
                        title: "李志 台北早上好 【和你在一起】(feat 李庭匡) ", 
                        url: "https://stucuzeducn-my.sharepoint.com/personal/224101204_stu_cuz_edu_cn/_layouts/52/download.aspx?share=Ed5IreZUtZ9NvItoolJbJTQB7bA1iHVD6cAFRHwS5E6vnA&download=1.mp4", 
                        thumb: "https://v.1701701.xyz/img/huida.JPG"
                    },
                    { 
                        id: 602, 
                        title: "【挺】李志不插电巡演石家庄站红糖俱乐部 ", 
                        url:"https://stucuzeducn-my.sharepoint.com/personal/224101204_stu_cuz_edu_cn/_layouts/52/download.aspx?share=Eb-fcJzL6HBNjWmcu47mRE0BW2rh4DXMMYoQEZpgSwWv6w&download=1.mp4",
                        thumb: "https://v.1701701.xyz/img/huida.JPG"
                    }
                    
                ],
                qt: [ // 其他 -> qt
                   { 
                        id: 701, 
                        title: "[Official PV]  李志 (リージー-Li Zhi) Best Selection Songs [Vol.3]「倒影 (Reflection)」", 
                        url: "https://stucuzeducn-my.sharepoint.com/personal/224101204_stu_cuz_edu_cn/_layouts/52/download.aspx?share=ER6R5JequA9AhbP9d22omCAB7Ds04A4aj5F2vo8oewE97Q&download=1.mp4", 
                        thumb: "https://v.1701701.xyz/img/huida.JPG"
                    },
                    {
                        id: 702,
                        title: "测试文件夹",
                        isFolder: true,
                        thumb: "https://v.1701701.xyz/img/back.jpg", // 文件夹封面
                        folderId: "qtfolder" // 文件夹ID，用于加载子文件夹内容
                    }
                ],
                
                // 添加qt分类下的示例文件夹内容
                qtfolder: [ // qt分类下的示例文件夹
                    {
                        id: 7021,
                        title: "李志《这个世界会好吗2015版》MV",
                        url: "https://stucuzeducn-my.sharepoint.com/personal/224101204_stu_cuz_edu_cn/_layouts/52/download.aspx?share=EUYLcNON_KhNhFZMOEIl9TsBjTWvq_8HA-vfLgR1fz87Xw&download=1.mp4",
                        thumb: "https://v.1701701.xyz/img/back.jpg"
                    },
                    {
                        id: 7022,
                        title: "恋曲1980",
                        url: "https://stucuzeducn-my.sharepoint.com/personal/224101204_stu_cuz_edu_cn/_layouts/52/download.aspx?share=EYY5LvegFrxDhy6H6xpU8GIBRBZWKEBfCg--1pvsYLLmqg&download=1.mp4",
                        thumb: "https://v.1701701.xyz/img/back.jpg"
                    }
                ]
            };

            // 分类列表
            const categories = [
                 { id: 'knxy', name: '跨年音乐会', icon: 'fas fa-film' },
                 { id: 'bgyh', name: '逼哥夜話', icon: 'fas fa-microphone-alt' },
                { id: 'bgyh2', name: '逼哥夜話第二季', icon: 'fas fa-microphone-alt' },
                { id: 'wmsss', name: '我們的叁叁肆', icon: 'fa-solid fa-clapperboard' },
                { id: 'jlp', name: '紀錄片', icon: 'fas fa-video' },
                { id: 'yjj', name: '音乐节', icon: 'fas fa-music' },
                { id: 'qt', name: '其他', icon: 'fa-solid fa-file-video' }
            ];

            // 全局 DPlayer 实例
            let dp = null;
            let currentVideoUrl = '';

            // 初始化 DPlayer 播放器
            function initDPlayer() {
                if (dp) return dp;
                
                dp = new DPlayer({
                    container: document.getElementById('dplayer-container'),
                    live: false,
                    autoplay: false,
                    theme: '#d4af37', // 金色主题
                    loop: false,
                    lang: 'zh-cn',
                    hotkey: true,
                    volume: 0.7,
                    playbackSpeed: [0.5, 0.75, 1, 1.25, 1.5, 2],
                    mutex: true,
                    video: {
                        url: '',
                        pic: 'https://v.1701701.xyz/img/bg.jpg' // 默认封面
                    },
                    errorHandler: function(error) {
                        console.error('DPlayer error:', error);
                        showCompatibilityAlert('视频播放失败: ' + error.message);
                    },
                    // 添加移动端优化配置
                    mobileControls: true,
                    hideControlsAfter: 1000, // 1秒后自动隐藏控制按钮
                    autoHide: true // 默认自动隐藏控制栏
                });
                
                // 初始化后立即隐藏控制栏
                setTimeout(() => {
                    if (dp && dp.controller) {
                        dp.controller.hide();
                    }
                }, 1000);
                
                return dp;
            }

            // 初始化分类导航
            function initCategories() {
                const container = document.getElementById('categories-container');
                container.innerHTML = '';
                
                categories.forEach(category => {
                    const btn = document.createElement('button');
                    btn.className = 'category-btn';
                    btn.dataset.category = category.id;
                    
                    const icon = document.createElement('i');
                    icon.className = category.icon;
                    btn.appendChild(icon);
                    
                    const text = document.createTextNode(` ${category.name}`);
                    btn.appendChild(text);
                    
                    if (category.id === 'knxy') {
                        btn.classList.add('active');
                    }
                    
                    container.appendChild(btn);
                });
            }

            // 当前分类和路径追踪
            let currentCategory = 'knxy';
            let folderHistory = [];
            
            // 加载分类下的视频
            function loadCategoryVideos(categoryId, isSubFolder = false) {
                const listContainer = document.getElementById('videos-list');
                listContainer.innerHTML = '';
                
                // 更新当前分类
                if (!isSubFolder) {
                    currentCategory = categoryId;
                    folderHistory = [];
                }
                
                if (!videoData[categoryId] || videoData[categoryId].length === 0) {
                    listContainer.innerHTML = `
                        <div class="no-videos">
                            <i class="fas fa-video-slash"></i>
                            <div>此分类下暂无视频内容</div>
                        </div>
                    `;
                    return;
                }
                
                // 如果有文件夹历史，添加返回按钮
                if (folderHistory.length > 0) {
                    const backItem = document.createElement('div');
                    backItem.className = 'video-item folder-item back-folder';
                    backItem.innerHTML = `
                        <div class="thumbnail">
                            <img src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='220' height='124' viewBox='0 0 220 124'%3E%3Crect width='220' height='124' fill='%231a1a2e'/%3E%3C/svg%3E" 
                                 data-src="./img/back.jpg" 
                                 alt="返回上一级" 
                                 class="lazyload">
                            <div class="folder-icon"><i class="fas fa-arrow-left"></i></div>
                            <div class="progress-bar" style="height:2px"><div class="progress" style="width:100%"></div></div>
                        </div>
                        <div class="video-title">返回上一级</div>
                    `;
                    listContainer.appendChild(backItem);
                }
                
                // 添加新内容
                videoData[categoryId].forEach(video => {
                    const item = document.createElement('div');
                    
                    // 判断是否为文件夹
                    if (video.isFolder) {
                        item.className = 'video-item folder-item';
                        item.dataset.id = video.id;
                        item.dataset.folderId = video.folderId;
                        item.dataset.thumb = video.thumb;
                        
                        item.innerHTML = `
                            <div class="thumbnail">
                                <img src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='220' height='124' viewBox='0 0 220 124'%3E%3Crect width='220' height='124' fill='%231a1a2e'/%3E%3C/svg%3E" 
                                     data-src="${video.thumb}" 
                                     alt="${video.title}" 
                                     class="lazyload">
                                <div class="folder-icon"><i class="fas fa-folder-open"></i></div>
                                <div class="progress-bar" style="height:2px"><div class="progress" style="width:100%"></div></div>
                            </div>
                            <div class="video-title">${video.title}</div>
                        `;
                    } else {
                        item.className = 'video-item';
                        item.dataset.id = video.id;
                        item.dataset.url = video.url;
                        item.dataset.thumb = video.thumb;
                        
                        item.innerHTML = `
                            <div class="thumbnail">
                                <img src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='220' height='124' viewBox='0 0 220 124'%3E%3Crect width='220' height='124' fill='%231a1a2e'/%3E%3C/svg%3E" 
                                     data-src="${video.thumb}" 
                                     alt="${video.title}" 
                                     class="lazyload">
                                <div class="play-icon"><i class="fas fa-play"></i></div>
                                <div class="progress-bar" style="height:2px"><div class="progress" style="width:100%"></div></div>
                            </div>
                            <div class="video-title">${video.title}</div>
                        `;
                    }
                    
                    listContainer.appendChild(item);
                });
                
                // 初始化懒加载
                initLazyLoad();
            }
            
            // 添加懒加载函数
            function initLazyLoad() {
                const lazyImages = document.querySelectorAll('img.lazyload');
                const observer = new IntersectionObserver((entries) => {
                    entries.forEach(entry => {
                        if (entry.isIntersecting) {
                            const img = entry.target;
                            img.src = img.dataset.src;
                            img.classList.remove('lazyload');
                            observer.unobserve(img);
                        }
                    });
                }, { rootMargin: '200px 0px' });
                
                lazyImages.forEach(img => observer.observe(img));
            }

            // 播放视频
            function playVideo(url, thumb = '', title = '精彩视频') {
                if (!url) {
                    showCompatibilityAlert('此视频源不可用，请选择其他视频');
                    return;
                }
                
                // 避免重复加载相同视频
                if (currentVideoUrl === url) {
                    dp.play();
                    return;
                }
                
                currentVideoUrl = url;
                
                // 设置超时处理
                const loadTimeout = setTimeout(() => {
                    showCompatibilityAlert('视频加载时间较长，请耐心等待');
                }, 15000);
                
                try {
                    // 确保播放器已初始化
                    const player = initDPlayer();
                    
                    // 销毁旧播放器实例
                    if (player && player.video) {
                        player.destroy();
                        dp = null;
                    }
                    
                    // 检测是否为 iOS 设备
                    const isIOSMain = /iPad|iPhone|iPod/.test(navigator.userAgent) || 
                                 (navigator.platform === 'MacIntel' && navigator.maxTouchPoints > 1);
                    
                    // 检查是否为MP4文件
                    const isMP4 = url.toLowerCase().endsWith('.mp4');
                    
                    // 对于iOS设备的处理
                    if (isIOSMain) {
                        if (!isMP4 && Hls.isSupported()) {
                            // 对于HLS流使用hls.js
                            const hls = new Hls({
                                enableWorker: false, // iOS 禁用 Worker
                                maxBufferLength: 30,
                                lowLatencyMode: false
                            });
                            
                            hls.loadSource(url);
                            hls.attachMedia(document.createElement('video'));
                            
                            hls.on(Hls.Events.MANIFEST_PARSED, () => {
                                clearTimeout(loadTimeout);
                                
                                // 检测是否为iOS设备
                                const isIOSPlayer = /iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream;
                                
                                dp = new DPlayer({
                                    container: document.getElementById('dplayer-container'),
                                    video: {
                                        url: url,
                                        pic: thumb,
                                        type: 'customHls',
                                        customType: {
                                            'customHls': function (video, player) {
                                                hls.attachMedia(video);
                                            }
                                        }
                                    },
                                    autoplay: true,
                                    autoHide: true,
                                    hideControlsAfter: 3000 // 3秒后自动隐藏控制按钮
                                });
                                dp.on('play', function(){
                                    setTimeout(function(){
                                        document.getElementById('dplayer-container').classList.add('dplayer-hide-controller');
                                        
                                        // 检测是否为iOS设备
                                        const isIOSPlayback = /iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream;
                                        if (isIOSPlayback) {
                                            // 为iOS设备添加额外的控制器自动隐藏功能
                                            const dplayerVideo = document.querySelector('.dplayer-video-current');
                                            if (dplayerVideo) {
                                                // 确保视频元素已加载
                                                setupIOSAutoHide(dplayerVideo);
                                            }
                                        }
                                    }, 1000)
                                });
                            });
                            
                            hls.on(Hls.Events.ERROR, (event, data) => {
                                console.error('HLS 错误:', data);
                                clearTimeout(loadTimeout);
                            });
                            
                            return;
                        } else {
                            // 对于MP4文件使用原生播放
                            clearTimeout(loadTimeout);
                            
                            // 检测是否为iOS设备
                            const isIOSNative = /iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream;
                            
                            dp = new DPlayer({
                                container: document.getElementById('dplayer-container'),
                                video: {
                                    url: url,
                                    pic: thumb,
                                    type: 'auto'
                                },
                                autoplay: true,
                                autoHide: true,
                                hideControlsAfter: 3000 // 3秒后自动隐藏控制按钮
                            });
                            dp.on('play', function(){
                                setTimeout(function(){
                                    document.getElementById('dplayer-container').classList.add('dplayer-hide-controller');
                                    
                                    // 检测是否为iOS设备
                                    const isIOSControl = /iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream;
                                    if (isIOSControl) {
                                        // 为iOS设备添加额外的控制器自动隐藏功能
                                        const dplayerVideo = document.querySelector('.dplayer-video-current');
                                        if (dplayerVideo) {
                                            // 确保视频元素已加载
                                            setupIOSAutoHide(dplayerVideo);
                                        }
                                    }
                                }, 1000)
                            });
                            return;
                        }
                    }
                    
                    // 非 iOS 或其他情况使用默认逻辑
                    // 检测是否为iOS设备
                    const isIOSDevice = /iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream;
                    
                    dp = new DPlayer({
                        container: document.getElementById('dplayer-container'),
                        contextmenu: [], // 禁用右键菜单
                        video: {
                            url: url,
                            pic: thumb,
                            type: (url.toLowerCase().endsWith('.m3u8') || url.toLowerCase().endsWith('.js')) ? 'hls' : 'auto'
                        },
                        
                        // 添加HLS配置优化
                        hls: {
                            liveSyncDurationCount: 3,
                            maxMaxBufferLength: 30,
                            enableWorker: true
                        },
                        autoHide: true, // 默认自动隐藏控制栏
                        hideControlsAfter: isIOSDevice ? 3000 : 3000, // 3秒后自动隐藏控制按钮
                        errorHandler: function(error) {
                            console.error('播放错误:', error);
                            showCompatibilityAlert('视频播放失败，请重试');
                            clearTimeout(loadTimeout);
                        }
                    });
                    
                    // 添加时长稳定处理
                    let durationStabilized = false;
                    let lastDuration = 0;
                    
                    // 播放成功回调
                    dp.on('canplay', function() {
                        clearTimeout(loadTimeout);
                        document.getElementById('compatibility-alert').style.display = 'none';
                        
                        // 立即隐藏控制栏
                        setTimeout(() => {
                            dp.controller.hide();
                           
                            
                            // 检测是否为iOS设备
                            const isIOSCanPlay = /iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream;
                            if (isIOSCanPlay) {
                                // 为iOS设备添加额外的控制器自动隐藏功能
                                const dplayerVideo = document.querySelector('.dplayer-video-current');
                                if (dplayerVideo) {
                                    // 确保视频元素已加载
                                    setupIOSAutoHide(dplayerVideo);
                                }
                            }
                        }, 100);
                        
                        // 添加时长稳定处理
                        if (!durationStabilized) {
                            // 获取初始时长
                            const initialDuration = dp.video.duration;
                            lastDuration = initialDuration;
                            
                            // 设置定时器检查时长变化
                            const durationCheck = setInterval(() => {
                                if (dp.video.duration !== lastDuration) {
                                    lastDuration = dp.video.duration;
                                } else {
                                    // 时长稳定后更新UI
                                    updateDurationDisplay(lastDuration);
                                    durationStabilized = true;
                                    clearInterval(durationCheck);
                                }
                            }, 500);
                        }
                    });
                    
                 
                    
                    // 播放失败回调
                    dp.on('error', function() {
                        clearTimeout(loadTimeout);
                    });
                    
                    // 开始播放
                    dp.play();
                    
                    // 设置移动端控制器自动隐藏
                    setupMobileControlsAutoHide();
                    
                } catch (error) {
                    console.error('播放错误:', error);
                    showCompatibilityAlert('视频播放失败: ' + error.message);
                    clearTimeout(loadTimeout);
                }
            }

          

            // 设置移动端控制器自动隐藏安卓端
        
            function setupMobileControlsAutoHide() {
                if (!dp || window.innerWidth > 768) return;
                
                const dplayerContainer = document.getElementById('dplayer-container');
                let controlsHideTimer;
                
                // 检测是否为iOS设备
                const isIOSMobile = /iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream;
                
                // 监听触摸事件
                dplayerContainer.addEventListener('touchstart', function() {
                    // 清除之前的定时器
                    clearTimeout(controlsHideTimer);
                    
                    // 设置新的定时器，3秒后自动隐藏控制器
                    controlsHideTimer = setTimeout(() => {
                        if (dp && !dp.video.paused) {
                            dp.controller.hide();
                        }
                    }, 3000);
                });
                
                // 针对iOS设备的特殊处理
                if (isIOSMobile) {
                    // 监听视频播放器的点击事件
                    const dplayerVideo = document.querySelector('.dplayer-video-current');
                    if (dplayerVideo) {
                        dplayerVideo.addEventListener('click', function() {
                            // 清除之前的定时器
                            clearTimeout(controlsHideTimer);
                            
                            // 设置新的定时器，3秒后自动隐藏控制器
                            controlsHideTimer = setTimeout(() => {
                                if (dp && !dp.video.paused) {
                                    dp.controller.hide();
                                }
                            }, 3000);
                        });
                    }
                    
                    // 添加额外的事件监听器，确保控制器会自动隐藏
                    document.addEventListener('touchend', function() {
                        if (dp && !dp.video.paused) {
                            clearTimeout(controlsHideTimer);
                            controlsHideTimer = setTimeout(() => {
                                dp.controller.hide();
                            }, 3000);
                        }
                    });
                }
            }
            
            // 显示兼容性提示
            function showCompatibilityAlert(message) {
                const alert = document.getElementById('compatibility-alert');
                const messageElement = document.getElementById('compatibility-message');
                
                messageElement.textContent = message;
                alert.style.display = 'flex';
                
                // 3秒后自动隐藏
                setTimeout(() => {
                    alert.style.display = 'none';
                }, 3000);
            }

            // 为iOS设备设置自动隐藏控制器无操作自动隐藏
            function setupIOSAutoHide(videoElement) {
                if (!dp || !videoElement) return;
                
                let iosControlsHideTimer;
                
                // 监听视频元素的点击事件
                videoElement.addEventListener('click', function() {
                    // 清除之前的定时器
                    clearTimeout(iosControlsHideTimer);
                    
                    // 设置新的定时器，3秒后自动隐藏控制器
                    iosControlsHideTimer = setTimeout(() => {
                        if (dp && !dp.video.paused) {
                            dp.controller.hide();
                        }
                    }, 3000);
                });
           
                
                // 创建observer实例观察播放器元素的class变化
                const observer = new MutationObserver(function(mutations) {
                    mutations.forEach(function(mutation) {
                        if (mutation.attributeName === 'class') {
                            // 清除之前的定时器
                            clearTimeout(iosControlsHideTimer);
                            
                            // 设置新的定时器，3秒后自动隐藏控制器
                            iosControlsHideTimer = setTimeout(() => {
                                if (dp && !dp.video.paused) {
                                    dp.controller.hide();
                                }
                            }, 3000);
                        }
                    });
                });
                
                // 观察播放器元素的class变化
                observer.observe(document.querySelector('.dplayer'), { attributes: true });
            }
            
            // 检测设备兼容性
            function detectCompatibility() {
                // 仅在确实需要时显示提示
                const video = document.createElement('video');
                if (!video.canPlayType('application/vnd.apple.mpegurl') && 
                    !Hls.isSupported()) {
                    showCompatibilityAlert('您的设备可能需要JavaScript兼容模式播放视频');
                }
            }


            


            // 应用初始化
            function initAppUI() {
                // 初始化播放器
                initDPlayer();
                initCategories();
                loadCategoryVideos('knxy');
                detectCompatibility();
                
                // 移动端菜单功能 - 优化设计
                const mobileMenuBtn = document.getElementById('mobile-menu-btn');
                const mobileMenu = document.getElementById('mobile-menu');
                const closeAlertBtn = document.getElementById('close-alert');
                const menuLinks = document.querySelectorAll('.mobile-menu .nav-link');
                
                // 为菜单项添加索引
                menuLinks.forEach((link, index) => {
                    link.style.setProperty('--index', index);
                });
                
                function toggleMobileMenu() {
                    mobileMenu.classList.toggle('active');
                    mobileMenuBtn.classList.toggle('active');
                    // 为菜单项添加索引
                    menuLinks.forEach((link, index) => {
                        link.style.setProperty('--index', index);
                    });
                }
                
                mobileMenuBtn.addEventListener('click', (e) => {
                    e.stopPropagation();
                    toggleMobileMenu();
                });
                
                closeAlertBtn.addEventListener('click', () => {
                    document.getElementById('compatibility-alert').style.display = 'none';
                });
                
                // 点击菜单外区域关闭菜单
                document.addEventListener('click', (event) => {
                    if (!mobileMenu.contains(event.target) && !mobileMenuBtn.contains(event.target)) {
                        if (mobileMenu.classList.contains('active')) {
                            toggleMobileMenu();
                        }
                    }
                });
                
                // 使用事件委托处理分类点击
                document.getElementById('categories-container').addEventListener('click', (e) => {
                    const btn = e.target.closest('.category-btn');
                    if (btn) {
                        document.querySelectorAll('.category-btn.active').forEach(e => e.classList.remove('active'));
                        btn.classList.add('active');
                        loadCategoryVideos(btn.dataset.category);
                    }
                });
                
                // 使用事件委托处理视频和文件夹点击
                document.getElementById('videos-list').addEventListener('click', (e) => {
                    const item = e.target.closest('.video-item');
                    if (!item) return;
                    
                    // 处理返回上一级
                    if (item.classList.contains('back-folder')) {
                        if (folderHistory.length > 0) {
                            const prevFolder = folderHistory.pop();
                            loadCategoryVideos(prevFolder, true);
                        } else {
                            loadCategoryVideos(currentCategory);
                        }
                        return;
                    }
                    
                    // 处理文件夹点击
                    if (item.classList.contains('folder-item')) {
                        const folderId = item.dataset.folderId;
                        if (folderId && videoData[folderId]) {
                            folderHistory.push(currentCategory);
                            loadCategoryVideos(folderId, true);
                        }
                        return;
                    }
                    
                    // 处理视频点击
                    const url = item.dataset.url;
                    const thumb = item.querySelector('img').dataset.src;
                    playVideo(url, thumb, item.querySelector('.video-title').textContent);
                });
                
                // 使用事件委托处理菜单点击
                document.querySelectorAll('.nav-link').forEach(link => {
                    link.addEventListener('click', (e) => {
                        // 如果是外部链接，直接跳转
                        if (link.href !== '#' && link.href !== window.location.href) {
                            // 如果是移动端，关闭菜单
                            if (mobileMenu.classList.contains('active')) {
                                mobileMenu.classList.remove('active');
                                mobileMenuBtn.classList.remove('active');
                            }
                            return; // 允许默认行为（打开链接）
                        }
                        
                        // 获取菜单类型
                        const menuType = link.dataset.menu;
                        
                        e.preventDefault();
                        
                        // 移除所有菜单项的active类
                        document.querySelectorAll('.nav-link.active').forEach(e => e.classList.remove('active'));
                        
                        // 给当前点击的菜单项添加active类
                        link.classList.add('active');
                        
                        // 如果是移动端，关闭菜单
                        if (mobileMenu.classList.contains('active')) {
                            mobileMenu.classList.remove('active');
                            mobileMenuBtn.classList.remove('active');
                        }
                    });
                });
                
            
            }

            // 执行初始化
            initAppUI();
        }

        // 实现 updateDurationDisplay 函数，解决未定义错误
        function updateDurationDisplay(duration) {
            // 这个函数目前不需要做具体操作，因为 DPlayer 播放器会自动显示时长
            // 如果需要自定义显示，可以在这里添加代码
            // console.log('视频时长稳定:', formatTime(duration));
        }

        // 格式化时间的辅助函数
        function formatTime(seconds) {
            if (isNaN(seconds)) return '00:00';
            const minutes = Math.floor(seconds / 60);
            const remainingSeconds = Math.floor(seconds % 60);
            return `${minutes.toString().padStart(2, '0')}:${remainingSeconds.toString().padStart(2, '0')}`;
        }
