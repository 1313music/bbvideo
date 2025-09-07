
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
           
            disableVideoContextMenu();
            
            // 更完整的视频数据（民谣主题）
            const videoData = {
                     bgyh: [ // 逼哥夜話 -> bgyh
                { 
                    id: 1, 
                    title: "逼哥夜話 - 上海", 
                    url: "https://b2.1701701.xyz/api/yh/《B哥夜話──上海》.mp4", 
                    thumb: "https://v.1701701.xyz/img/bgyhfm.png"
                },
                { 
                    id: 2, 
                    title: "逼哥夜話 - 寧波 上", 
                    url: "https://b2.1701701.xyz/api/yh/《B哥夜話──寧波》上.mp4", 
                    thumb: "https://v.1701701.xyz/img/bgyhfm.png"
                },
                { 
                    id: 3, 
                    title: "逼哥夜話 - 寧波 下", 
                    url: "https://b2.1701701.xyz/api/yh/《B哥夜話──寧波》下.mp4", 
                    thumb: "https://v.1701701.xyz/img/bgyhfm.png"
                },
                { 
                    id: 4, 
                    title: "逼哥夜話 - 廈門 上", 
                    url: "https://b2.1701701.xyz/api/yh/《B哥夜話──廈門》上.mp4", 
                    thumb: "https://v.1701701.xyz/img/bgyhfm.png"
                },
                { 
                    id: 5, 
                    title: "逼哥夜話 - 廈門 下", 
                    url: "https://b2.1701701.xyz/api/yh/《B哥夜話──廈門》下.mp4", 
                    thumb: "https://v.1701701.xyz/img/bgyhfm.png"
                },
                { 
                    id: 6, 
                    title: "逼哥夜話 - 昆明 上", 
                    url: "https://b2.1701701.xyz/api/yh/《B哥夜話──昆明》上.mp4", 
                    thumb: "https://v.1701701.xyz/img/bgyhfm.png"
                },
                { 
                    id: 7, 
                    title: "逼哥夜話 - 昆明 下", 
                    url: "https://b2.1701701.xyz/api/yh/《B哥夜話──昆明》下.mp4", 
                    thumb: "https://v.1701701.xyz/img/bgyhfm.png"
                },
                { 
                    id: 8, 
                    title: "逼哥夜話 - 贵阳", 
                    url: "https://b2.1701701.xyz/api/yh/《B哥夜話──贵阳》.mp4", 
                    thumb: "https://v.1701701.xyz/img/bgyhfm.png"
                },
                { 
                    id: 9, 
                    title: "逼哥夜話 - 重慶 上", 
                    url: "https://b2.1701701.xyz/api/yh/《B哥夜話──重慶》上.mp4", 
                    thumb: "https://v.1701701.xyz/img/bgyhfm.png"
                },
                { 
                    id: 10, 
                    title: "逼哥夜話 - 重慶 下", 
                    url: "https://b2.1701701.xyz/api/yh/《B哥夜話──重慶》下.mp4", 
                    thumb: "https://v.1701701.xyz/img/bgyhfm.png"
                },
                { 
                    id: 11, 
                    title: "逼哥夜話 - 香港", 
                    url: "https://b2.1701701.xyz/api/yh/《B哥夜話──香港》.mp4", 
                    thumb: "https://v.1701701.xyz/img/bgyhfm.png"
                }
            ],
            bgyh2: [ // 逼哥夜話第二季 -> bgyh2
                { 
                    id: 201, 
                    title: "逼哥夜話 第二季 01 - 深圳", 
                    url: "https://b2.1701701.xyz/api/yh2/01 - 深圳.mp4", 
                    thumb: "https://v.1701701.xyz/img/bgyh2fm.png"
                },
                { 
                    id: 202, 
                    title: "逼哥夜話 第二季 02 - 西安", 
                    url: "https://b2.1701701.xyz/api/yh2/02 - 西安.mp4", 
                    thumb: "https://v.1701701.xyz/img/bgyh2fm.png"
                },
                { 
                    id: 203, 
                    title: "逼哥夜話 第二季 03 - 上海", 
                    url: "https://b2.1701701.xyz/api/yh2/03 - 上海.mp4", 
                    thumb: "https://v.1701701.xyz/img/bgyh2fm.png"
                },
                { 
                    id: 204, 
                    title: "逼哥夜話 第二季 04 - 武漢", 
                    url: "https://b2.1701701.xyz/api/yh2/04 - 武漢.mp4", 
                    thumb: "https://v.1701701.xyz/img/bgyh2fm.png"
                },
                { 
                    id: 205, 
                    title: "逼哥夜話 第二季 05 - 重慶", 
                    url: "https://b2.1701701.xyz/api/yh2/05 - 重慶.mp4", 
                    thumb: "https://v.1701701.xyz/img/bgyh2fm.png"
                },
                { 
                    id: 206, 
                    title: "逼哥夜話 第二季 06 - 北京", 
                    url: "https://b2.1701701.xyz/api/yh2/06 - 北京.mp4", 
                    thumb: "https://v.1701701.xyz/img/bgyh2fm.png"
                }
            ],
          wmsss: [ // 我們的叁叁肆 -> wmsss
                { 
                    id: 301, 
                    title: "安徽篇 - 预告", 
                    url: "https://r2.1701701.xyz/334/李志【我們的叁叁肆】安徽篇 - 预告/playlist.m3u8", 
                    thumb: "https://v.1701701.xyz/img/334.jpg"
                },
                { 
                    id: 302, 
                    title: "安徽篇01 - 出發吧！還剩333", 
                    url: "https://r2.1701701.xyz/334/李志【我們的叁叁肆】安徽篇01 - 出發吧！還剩333/playlist.m3u8", 
                    thumb: "https://v.1701701.xyz/img/334.jpg"
                },
                { 
                    id: 303, 
                    title: "安徽篇02 - 我是巡演經理，也是道歉專業戶", 
                    url: "https://r2.1701701.xyz/334/李志【我們的叁叁肆】安徽篇02 - 我是巡演經理，也是道歉專業戶/playlist.m3u8", 
                    thumb: "https://v.1701701.xyz/img/334.jpg"
                },
                { 
                    id: 304, 
                    title: "安徽篇03 - 淮南事變", 
                       url: "https://r2.1701701.xyz/334/李志【我們的叁叁肆】安徽篇03 - 淮南事變/playlist.m3u8", 
                    thumb: "https://v.1701701.xyz/img/334.jpg"
                },
                { 
    id: 305, 
    title: "安徽篇04 - 留給音響師的時間不多了", 
    url: "https://r2.1701701.xyz/334/李志【我們的叁叁肆】安徽篇04 - 留給音響師的時間不多了/playlist.m3u8", 
    thumb: "https://v.1701701.xyz/img/334.jpg"
},
{ 
    id: 306, 
    title: "安徽篇05 - 日落前抵達", 
    url: "https://r2.1701701.xyz/334/李志【我們的叁叁肆】安徽篇05 - 日落前抵達/playlist.m3u8", 
    thumb: "https://v.1701701.xyz/img/334.jpg"
},
{ 
    id: 307, 
    title: "山東篇01 - 明日復明日", 
    url: "https://r2.1701701.xyz/334/李志【我們的叁叁肆】山東篇01 - 明日復明日/playlist.m3u8", 
    thumb: "https://v.1701701.xyz/img/334.jpg"
},
{ 
    id: 308, 
    title: "山東篇02 - 明日何其多", 
    url: "https://r2.1701701.xyz/334/李志【我們的叁叁肆】山東篇02 - 明日何其多/playlist.m3u8", 
    thumb: "https://v.1701701.xyz/img/334.jpg"
},
{ 
    id: 309, 
    title: "山東篇03 - 自來水公司的口琴手", 
    url: "https://r2.1701701.xyz/334/李志【我們的叁叁肆】山東篇03 - 自來水公司的口琴手/playlist.m3u8", 
    thumb: "https://v.1701701.xyz/img/334.jpg"
},
{ 
    id: 310, 
    title: "山東篇04 - 是誰還在唱歌", 
    url: "https://r2.1701701.xyz/334/李志【我們的叁叁肆】山東篇04 - 是誰還在唱歌/playlist.m3u8", 
    thumb: "https://v.1701701.xyz/img/334.jpg"
},
{ 
    id: 311, 
    title: "山東篇05 - 兩個好吉友", 
    url: "https://r2.1701701.xyz/334/李志【我們的叁叁肆】山東篇05 - 兩個好吉友/playlist.m3u8", 
    thumb: "https://v.1701701.xyz/img/334.jpg"
},
{ 
    id: 312, 
    title: "山東篇06 - 這個世界會好的", 
    url: "https://r2.1701701.xyz/334/李志【我們的叁叁肆】山東篇06 - 這個世界會好的/playlist.m3u8", 
    thumb: "https://v.1701701.xyz/img/334.jpg"
},
{ 
    id: 313, 
    title: "陜寧篇01 - 票！", 
    url: "https://r2.1701701.xyz/334/李志【我們的叁叁肆】陜寧篇01 - 票！/playlist.m3u8", 
    thumb: "https://v.1701701.xyz/img/334.jpg"
},
{ 
    id: 314, 
    title: "陜寧篇02 - 圍城", 
    url: "https://r2.1701701.xyz/334/李志【我們的叁叁肆】陜寧篇02 - 圍城/playlist.m3u8", 
    thumb: "https://v.1701701.xyz/img/334.jpg"
},
{ 
    id: 315, 
    title: "陜寧篇03 - 王洪宇", 
    url: "https://r2.1701701.xyz/334/李志【我們的叁叁肆】陜寧篇03 - 王洪宇/playlist.m3u8", 
    thumb: "https://v.1701701.xyz/img/334.jpg"
},
{ 
    id: 316, 
    title: "陜寧篇04 - 這個不好說", 
    url: "https://r2.1701701.xyz/334/李志【我們的叁叁肆】陜寧篇04 - 這個不好說/playlist.m3u8", 
    thumb: "https://v.1701701.xyz/img/334.jpg"
},
{ 
    id: 317, 
    title: "陜寧篇05 - 鍵盤俠", 
    url: "https://r2.1701701.xyz/334/李志【我們的叁叁肆】陜寧篇05 - 鍵盤俠/playlist.m3u8", 
    thumb: "https://v.1701701.xyz/img/334.jpg"
},
{ 
    id: 318, 
    title: "陜寧篇06 - 再見小村", 
    url: "https://r2.1701701.xyz/334/李志【我們的叁叁肆】陜寧篇06 - 再見小村/playlist.m3u8", 
    thumb: "https://v.1701701.xyz/img/334.jpg"
},
{ 
    id: 319, 
    title: "陜寧篇07 - 西夏王陵", 
    url: "https://r2.1701701.xyz/334/李志【我們的叁叁肆】陜寧篇07 - 西夏王陵/playlist.m3u8", 
    thumb: "https://v.1701701.xyz/img/334.jpg"
},
{ 
    id: 320, 
    title: "雲南篇01 - 整裝再發", 
    url: "https://r2.1701701.xyz/334/李志【我們的叁叁肆】雲南篇01 - 整裝再發/playlist.m3u8", 
    thumb: "https://v.1701701.xyz/img/334.jpg"
},
{ 
    id: 321, 
    title: "雲南篇02 - 我是新來的燈光師，請多關照", 
    url: "https://r2.1701701.xyz/334/李志【我們的叁叁肆】雲南篇02 - 我是新來的燈光師，請多關照/playlist.m3u8", 
    thumb: "https://v.1701701.xyz/img/334.jpg"
},
{ 
    id: 322, 
    title: "雲南篇03 - 一个異類和他的同路人", 
    url: "https://r2.1701701.xyz/334/李志【我們的叁叁肆】雲南篇03 - 一个異類和他的同路人/playlist.m3u8", 
    thumb: "https://v.1701701.xyz/img/334.jpg"
},
{ 
    id: 323, 
    title: "雲南篇04 - 大理想國", 
    url: "https://r2.1701701.xyz/334/李志【我們的叁叁肆】雲南篇04 - 大理想國/playlist.m3u8", 
    thumb: "https://v.1701701.xyz/img/334.jpg"
},
{ 
    id: 324, 
    title: "雲南篇05 - 飛", 
    url: "https://r2.1701701.xyz/334/李志【我們的叁叁肆】雲南篇05 - 飛/playlist.m3u8", 
    thumb: "https://v.1701701.xyz/img/334.jpg"
},
{ 
    id: 325, 
    title: "雲南篇番外 - 荒", 
    url: "https://r2.1701701.xyz/334/李志【我們的叁叁肆】雲南篇番外 - 荒/playlist.m3u8", 
    thumb: "https://v.1701701.xyz/img/334.jpg"
}
            ],
                knxy: [ // 跨年音乐会 -> knxy
                      { 
                        id: 401, 
                          title: "I/O", 
                        url: "https://2014.1701701.xyz/video/2014.m3u8", 
                        thumb: "./img/io.jpg"
                        
                    },
                    { 
                        id: 402, 
                       title: "看见", 
                        url: "https://2015.1701701.xyz/video/2015.m3u8", 
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
                        url: "https://2009.1701701.xyz/video/2009.m3u8", 
                        thumb: "./img/wanj.jpg"
                        
                    },
                    { 
                        id: 405,
                        title: "电声与管弦乐",
                        isFolder: true,
                        thumb: "./img/dsygxy.jpg", // 文件夹封面
                        folderId: "dsygxl" // 文件夹ID，用于加载子文件夹内容
                    }
                    ,
                    { 
                        id: 406, 
                        title: "IMAGINE", 
                        url: "https://r2.1701701.xyz/2011/playlist.m3u8", 
                        thumb: "./img/2011.jpg"
                        
                    }
                    ,
                    { 
                        id: 407, 
                        title: "108个关键词", 
                        url: "https://r2.1701701.xyz/2012/playlist.m3u8", 
                        thumb: "./img/2012.jpg"
                        
                    }
                    ,
                    { 
                        id: 408, 
                        title: "北京降噪Ⅳ", 
                        url: "https://r2.1701701.xyz/2016/playlist.m3u8", 
                        thumb: "./img/2016.jpg"
                        
                    }
                    ,
                    { 
                        id: 409, 
                        title: "电声与管弦乐Ⅱ", 
                        isFolder: true,
                        thumb: "./img/dian2.jpg", // 文件夹封面
                        folderId: "dsygxl2" 
                        
                    },
                    { 
                        id: 410, 
                        title: "爵士乐与不插电新编12首", 
                        isFolder: true,
                        thumb: "./img/js.jpg", // 文件夹封面
                        folderId: "jsy" 
                        
                    }
                ],
                
                // 添加电声与管弦乐子文件夹内容
                dsygxl: [ // 电声与管弦乐子文件夹
                    {
                        id: 4051,
                        title: "01 序曲",
                        url: "https://b2.1701701.xyz/api/dian1/01. 序曲.mp4",
                        thumb: "./img/dsygxy.jpg"
                    },
                    {
                        id: 4052,
                        title: "02 杭州",
                        url: "https://b2.1701701.xyz/api/dian1/02 杭州 “家”跨年現場.mp4",
                        thumb: "./img/dsygxy.jpg"
                    },
                    {
                        id: 4053,
                        title: "03 尽头",
                      url: "https://b2.1701701.xyz/api/dian1/03.尽头.mp4",
                        thumb: "./img/dsygxy.jpg"
                    },
                     {
                        id: 4054,
                        title: "04 定西",
                      url: "https://b2.1701701.xyz/api/dian1/04. 定西.mp4",
                        thumb: "./img/dsygxy.jpg"
                    },
                     {
                        id: 4055,
                        title: "05 春末的南方城市",
                      url: "https://b2.1701701.xyz/api/dian1/05. 春末的南方城市.mp4",
                        thumb: "./img/dsygxy.jpg"
                    },
                     {
                        id: 4056,
                        title: "06 黑色信封",
                      url: "https://b2.1701701.xyz/api/dian1/06. 黑色信封.mp4",
                        thumb: "./img/dsygxy.jpg"
                    },
                     {
                        id: 4057,
                        title: "07 铅笔",
                      url: "https://b2.1701701.xyz/api/dian1/07.铅笔.mp4",
                        thumb: "./img/dsygxy.jpg"
                    },
                     {
                        id: 4058,
                        title: "08 和你在一起",
                      url: "https://b2.1701701.xyz/api/dian1/08. 和你在一起.mp4",
                        thumb: "./img/dsygxy.jpg"
                    },
                     {
                        id: 4059,
                        title: "09 墙上的向日葵",
                      url: "https://b2.1701701.xyz/api/dian1/09. 墙上的向日葵.mp4",
                        thumb: "./img/dsygxy.jpg"
                    },
                     {
                        id: 4060,
                        title: "10 大象",
                      url: "https://b2.1701701.xyz/api/dian1/10. 大象.mp4",
                        thumb: "./img/dsygxy.jpg"
                    },
                     {
                        id: 4061,
                        title: "11 门",
                      url: "https://b2.1701701.xyz/api/dian1/11.门.mp4",
                        thumb: "./img/dsygxy.jpg"
                    },
                     {
                        id: 4062,
                        title: "12 回答",
                      url: "https://b2.1701701.xyz/api/dian1/12.回答.mp4",
                        thumb: "./img/dsygxy.jpg"
                    }
                ],
                dsygxl2: [ // 电声与管弦乐子文件夹
                    {
                        id: 4091,
                        title: "01.相信未来序曲 Intro",
                        url: "https://b2.1701701.xyz/api/dian2/01.相信未来序曲 Intro.mp4",
                        thumb: "./img/dian2.jpg"
                    },
                  {
                        id: 4092,
                        title: "02.一头偶像 A Piece of Idol",
                        url: "https://b2.1701701.xyz/api/dian2/02.一头偶像 A Piece of Idol.mp4",
                        thumb: "./img/dian2.jpg"
                    },  
                    {
                        id: 4093,
                        title: "03.你好明天 Ciao Tomorrow",
                        url: "https://b2.1701701.xyz/api/dian2/03.你好明天 Ciao Tomorrow.mp4",
                        thumb: "./img/dian2.jpg"
                    },
                  {
                        id: 4094,
                        title: "04.寻找 Seek",
                        url: "https://b2.1701701.xyz/api/dian2/04.寻找 Seek.mp4",
                        thumb: "./img/dian2.jpg"
                    },
                  {
                        id: 4095,
                        title: "05.山阴路的夏天 Nanjing Summer Day",
                        url: "https://b2.1701701.xyz/api/dian2/05.山阴路的夏天 Nanjing Summer Day.mp4",
                        thumb: "./img/dian2.jpg"
                    },
                      {
                        id: 4096,
                        title: "06.哦吼 Oho",
                        url: "https://b2.1701701.xyz/api/dian2/06.哦吼 Oho.mp4",
                        thumb: "./img/dian2.jpg"
                    },
                      {
                        id: 4097,
                        title: "07.天空之城 Sky City",
                        url: "https://b2.1701701.xyz/api/dian2/07.天空之城 Sky City.mp4",
                        thumb: "./img/dian2.jpg"
                    },
                      {
                        id: 4098,
                        title: "08.家乡 About Hometown",
                        url: "https://b2.1701701.xyz/api/dian2/08.家乡 About Hometown.mp4",
                        thumb: "./img/dian2.jpg"
                    },
                      {
                        id: 4090,
                        title: "09.这个世界会好吗 Has Man a Future",
                        url: "https://b2.1701701.xyz/api/dian2/09.这个世界会好吗 Has Man a Future.mp4",
                        thumb: "./img/dian2.jpg"
                    }
                ],
                jsy: [ // 爵士乐与不插电
                    {
                        id: 4101,
                        title: "01 看见 2018 相信未来 不插电版",
                        url: "https://b2.1701701.xyz/api/js/01看见 2018相信未来 不插电版.mp4",
                        thumb: "./img/js.jpg"
                    },
                    {
                        id: 4102,
                        title: "02离婚 2018 相信未来 不插电版",
                        url: "https://b2.1701701.xyz/api/js/02离婚 2018 相信未来 不插电版.mp4",
                        thumb: "./img/js.jpg"
                    },  
                   
                    {
                        id: 4103,
                        title: "03关于郑州的回忆 2018相信未来 不插电版",
                        url: "https://b2.1701701.xyz/api/js/03关于郑州的回忆 2018相信未来 不插电版.mp4",
                        thumb: "./img/js.jpg"
                    },
                    {
                        id: 4104,                       
                        title: "04鸵鸟 李志 2018相信未来 不插电版",
                        url: "https://b2.1701701.xyz/api/js/04鸵鸟 李志 2018相信未来 不插电版.mp4",
                        thumb: "./img/js.jpg"
                    },
                    {
                        id: 4105,
                        title: "05卡夫卡 2018相信未来 不插电版",
                        url: "https://b2.1701701.xyz/api/js/05卡夫卡 2018相信未来 不插电版.mp4",
                        thumb: "./img/js.jpg"
                    },
                    {
                        id: 4106,
                        title: "06热河2018 相信未来 不插电版",
                        url: "https://b2.1701701.xyz/api/js/06热河2018 相信未来 不插电版.mp4",
                        thumb: "./img/js.jpg"
                    },
                    {
                        id: 4107,
                        title: "07翁庆年的六英镑 2018 相信未来 爵士版",
                        url: "https://b2.1701701.xyz/api/js/07翁庆年的六英镑 2018 相信未来 爵士版.mp4",
                        thumb: "./img/js.jpg"
                    },
                    {
                        id: 4108,
                        title: "08死人 2018相信未来 爵士版",
                        url: "https://b2.1701701.xyz/api/js/08死人 2018相信未来 爵士版.mp4",
                        thumb: "./img/js.jpg"
                    },
                    {
                        id: 4109,
                        title: "09爱 2018相信未来 爵士版",
                        url: "https://b2.1701701.xyz/api/js/09爱 2018相信未来 爵士版.mp4",
                        thumb: "./img/js.jpg"
                    },
                    {
                        id: 4110,
                        title: "10董卓瑶 2018相信未来 爵士版",
                        url: "https://b2.1701701.xyz/api/js/10董卓瑶 2018相信未来 爵士版.mp4",
                        thumb: "./img/js.jpg"
                    },
                    {
                        id: 4111,
                        title: "11一个夜晚 2018相信未来 爵士版",
                        url: "https://b2.1701701.xyz/api/js/11一个夜晚 2018相信未来 爵士版.mp4",
                        thumb: "./img/js.jpg"
                    },
                    {
                        id: 4112,
                        title: "12鼠说 2018 相信未来 爵士版",
                        url: "https://b2.1701701.xyz/api/js/12鼠说 2018 相信未来 爵士版.mp4",
                        thumb: "./img/js.jpg"
                    },
                ],
                jlp: [ // 紀錄片 -> jlp
                   { 
                        id: 501, 
                        title: "专访李志 凤凰非常道 20150508", 
                        url: "https://stucuzeducn-my.sharepoint.com/personal/224101204_stu_cuz_edu_cn/_layouts/52/download.aspx?share=EWnFJY5oiz5On8JVy9Q1Iq4B8n8FEWiOVl-3tx6wKiSK7g&download=1.mp4", 
                        thumb: "https://v.1701701.xyz/img/huida.JPG"
                    },
                     { 
                        id: 502, 
                        title: "【欧拉三周年】 ON｜第二季 Vol.12 [跨年特刊]", 
                        url: "https://stucuzeducn-my.sharepoint.com/personal/224101204_stu_cuz_edu_cn/_layouts/52/download.aspx?share=EcXY1R-l0TJJnhZgYg5X2a8BehpT_TfGer9ty0SviJ30oA&download=1.mp4", 
                        thumb: "https://v.1701701.xyz/img/huida.JPG"
                    },
                    { 
                        id: 503, 
                        title: "纪录片《摇滚南京》第一集私人之旅", 
                        url: "https://stucuzeducn-my.sharepoint.com/personal/224101204_stu_cuz_edu_cn/_layouts/52/download.aspx?share=EW4tDlzp9zFAlvWTm1aCgCcBkIEjL4_Dq2KlSizZMhOTqQ&download=1.mp4", 
                        thumb: "https://v.1701701.xyz/img/huida.JPG"
                    },
                    { 
                        id: 504, 
                        title: "纪录片《摇滚南京》第二集生存实验 李志", 
                        url: "https://stucuzeducn-my.sharepoint.com/personal/224101204_stu_cuz_edu_cn/_layouts/52/download.aspx?share=ETG6asaiueZOggfQ-aXTDO4Bc1sDg54uEsR8eSh8kW2MOg&download=1.mp4", 
                        thumb: "https://v.1701701.xyz/img/huida.JPG"
                    },
                    { 
                        id: 505, 
                        title: "李志 2014-2015 IO跨年音乐会 制作特辑 4K",
                         url: "https://stucuzeducn-my.sharepoint.com/personal/224101204_stu_cuz_edu_cn/_layouts/52/download.aspx?share=EWg8uie1F4xNq5e-X9W2KK8BqV0Zw2daL3D-QPJuXDygtA&download=1.mp4",
                         thumb: "https://v.1701701.xyz/img/huida.JPG"
                    },
                    { 
                        id: 506, 
                        title: "【相信未来】2017-2018李志跨年音乐会筹备实录",
                         url: "https://stucuzeducn-my.sharepoint.com/personal/224101204_stu_cuz_edu_cn/_layouts/52/download.aspx?share=EU9F7Y5rgvxArYZLCg41mIEBNIRem9QNRon92g5LfwfUAA&download=1.mp4",
                         thumb: "https://v.1701701.xyz/img/huida.JPG"
                    },
                    { 
                        id: 507, 
                        title: "李志十年发布会 叁叁肆",
                         url: "https://stucuzeducn-my.sharepoint.com/personal/224101204_stu_cuz_edu_cn/_layouts/52/download.aspx?share=ETjJ7WTCR-lBgi5-cUXCvi8BdzpiXJFF8UME2bEnnNExkg&download=1.mp4",
                         thumb: "https://v.1701701.xyz/img/huida.JPG"
                    }
                    


                ],
                yjj: [ // 音乐节 -> yjj
                   { 
                        id: 601, 
                        title: "李志 Another BrickIn The Wall 深圳巡演", 
                        url: "https://stucuzeducn-my.sharepoint.com/personal/224101204_stu_cuz_edu_cn/_layouts/52/download.aspx?share=ETFevLsKV-dIq05vP1LwbtsBlcQwl9XjkgZlnKeF_o_TjQ&download=1.mp4", 
                        thumb: "https://v.1701701.xyz/img/huida.JPG"
                    },
                    { 
                        id: 602, 
                        title: "【挺】李志不插电巡演石家庄站红糖俱乐部 ", 
                        url:"https://stucuzeducn-my.sharepoint.com/personal/224101204_stu_cuz_edu_cn/_layouts/52/download.aspx?share=Eb-fcJzL6HBNjWmcu47mRE0BW2rh4DXMMYoQEZpgSwWv6w&download=1.mp4",
                        thumb: "https://v.1701701.xyz/img/huida.JPG"
                    },
                    { 
                        id: 603,   
                         title:"李志 2015简单生活节",
                         url:"https://r2.1701701.xyz/李志 2015简单生活节/playlist.m3u8",
                         thumb:"./img/jd2015.jpg"
                    },
                    { 
                        id: 604,   
                         title:"李志 2016简单生活节",
                         url:"https://r2.1701701.xyz/李志 2016简单生活节/playlist.m3u8",
                         thumb:"./img/jd2016.jpg"
                    },
                    { 
                        id: 605,   
                         title:"李志 2017简单生活节",
                         url:"https://r2.1701701.xyz/李志 2017简单生活节/playlist.m3u8",
                         thumb:"./img/jd2017.jpg"
                    },
                    { 
                        id: 606,   
                         title:"叁缺壹-李志复出-2020.8.9合集",
                         url:"https://stucuzeducn-my.sharepoint.com/personal/224101204_stu_cuz_edu_cn/_layouts/52/download.aspx?share=Ecx45P7Uk2RJhHFSBQEfYFwB63oqqDuOPDLnWth9dWFxiA&download=1.mp4",
                         thumb: "https://v.1701701.xyz/img/huida.JPG"
                    },
                    { 
                        id: 607, 
                        title: "叁缺贰-现场合集",
                         url: "https://stucuzeducn-my.sharepoint.com/personal/224101204_stu_cuz_edu_cn/_layouts/52/download.aspx?share=EabH4rkC-ipMmi6CrSU_pjkB8cyPJRoZPVH97pRe3guyfA&download=1.mp4",
                        thumb: "https://v.1701701.xyz/img/huida.JPG"
                    },
                    { 
                        id: 608, 
                        title: "李志全场—2018年成都仙人掌音乐节2018 09 23",
                         url: "https://stucuzeducn-my.sharepoint.com/personal/224101204_stu_cuz_edu_cn/_layouts/52/download.aspx?share=EYacdkYUgvxIjtprvcEu1-YBIPEGIr60EMhEu5omUzAbgg&download=1.mp4",
                         thumb: "https://v.1701701.xyz/img/huida.JPG"
                    },
                    
                ],
                qt: [ // 其他 -> qt
                   { 
                        id: 701, 
                        title: "[Official PV]  李志 (リージー-Li Zhi) Best Selection Songs [Vol.3]「倒影 (Reflection)」", 
                        url: "https://stucuzeducn-my.sharepoint.com/personal/224101204_stu_cuz_edu_cn/_layouts/52/download.aspx?share=ER6R5JequA9AhbP9d22omCAB7Ds04A4aj5F2vo8oewE97Q&download=1.mp4", 
                        thumb: "https://v.1701701.xyz/img/huida.JPG"
                    },  
                    {  id: 702, 
                        title: "关于郑州", 
                        url: "https://b2.1701701.xyz/api/gyzz.mp4", 
                        thumb: "https://v.1701701.xyz/img/back.jpg" },
                        {
                        id: 703,
                        title: "李志《这个世界会好吗2015版》MV",
                        url: "https://stucuzeducn-my.sharepoint.com/personal/224101204_stu_cuz_edu_cn/_layouts/52/download.aspx?share=EUYLcNON_KhNhFZMOEIl9TsBjTWvq_8HA-vfLgR1fz87Xw&download=1.mp4",
                        thumb: "https://v.1701701.xyz/img/back.jpg"
                    },
                    {
                        id: 704,
                        title: "恋曲1980",
                        url: "https://stucuzeducn-my.sharepoint.com/personal/224101204_stu_cuz_edu_cn/_layouts/52/download.aspx?share=EYY5LvegFrxDhy6H6xpU8GIBRBZWKEBfCg--1pvsYLLmqg&download=0.mp4",
                        thumb: "https://v.1701701.xyz/img/back.jpg"
                    },
                    {
                        id: 705,
                        title: "李志 台北早上好 20190113 at Legacy",
                        isFolder: true,
                        thumb: "https://v.1701701.xyz/img/back.jpg", // 文件夹封面
                        folderId: "qtfolder" // 文件夹ID，用于加载子文件夹内容
                    }
                ],
                
                // 添加qt分类下的示例文件夹内容
                qtfolder: [ // qt分类下的示例文件夹
                    {
                        id: 7051,
                        title: "【和你在一起】(feat 李庭匡) ", 
                        url: "https://stucuzeducn-my.sharepoint.com/personal/224101204_stu_cuz_edu_cn/_layouts/52/download.aspx?share=Ed5IreZUtZ9NvItoolJbJTQB7bA1iHVD6cAFRHwS5E6vnA&download=1.mp4", 
                        thumb: "https://v.1701701.xyz/img/huida.JPG"},
                    {
                        id: 7052,
                        title: "【天空之城】   ", 
                        url: "https://stucuzeducn-my.sharepoint.com/personal/224101204_stu_cuz_edu_cn/_layouts/52/download.aspx?share=EZZUGgWkSV1EiAhipnjvAIgBT1PtWq9XgOM92G3Mu_ajWA&download=1.mp4", 
                        thumb: "https://v.1701701.xyz/img/huida.JPG"},
                    {
                        id: 7053,
                        title: "【尋找】+【忽然】+【熱河】 ", 
                        url: "https://stucuzeducn-my.sharepoint.com/personal/224101204_stu_cuz_edu_cn/_layouts/52/download.aspx?share=ETKXJZ21d5RNszAmrOpPxfgBcnHGb8YN3i85bjNV6YssxQ&download=1.mp4", 
                        thumb: "https://v.1701701.xyz/img/huida.JPG"}
       
                ]
            };

            // 分类列表
            const categories = [
                 { id: 'knxy', name: '跨年音乐会', icon: 'fas fa-film' },
                 { id: 'bgyh', name: '逼哥夜話', icon: 'fas fa-microphone-alt' },
                { id: 'bgyh2', name: '逼哥夜話第二季', icon: 'fas fa-microphone-alt' },
                { id: 'wmsss', name: '我們的叁叁肆', icon: 'fa-solid fa-clapperboard' },
                { id: 'jlp', name: '紀錄片', icon: 'fas fa-video' },
                { id: 'yjj', name: '音乐节/巡演', icon: 'fas fa-music' },
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
                    contextmenu: [], 
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
                
                
                disableVideoContextMenu();
                
                // 初始化后立即隐藏控制栏
                setTimeout(() => {
                    if (dp && dp.controller) {
                        dp.controller.hide();
                    }
                }, 1000);
                
                return dp;
            }
            
         
            function disableVideoContextMenu() {
                // 等待DOM加载完成
                setTimeout(() => {
                  
                    const dplayerContainer = document.getElementById('dplayer-container');
                    if (dplayerContainer) {
                        dplayerContainer.addEventListener('contextmenu', function(e) {
                            e.preventDefault();
                            return false;
                        });
                    }
                    
                 
                    const videoElements = document.querySelectorAll('video');
                    videoElements.forEach(video => {
                        video.addEventListener('contextmenu', function(e) {
                            e.preventDefault();
                            return false;
                        });
                        
                       
                        video.addEventListener('dragstart', function(e) {
                            e.preventDefault();
                            return false;
                        });
                    });
                    
               
                    document.addEventListener('contextmenu', function(e) {
                        if (e.target.tagName === 'VIDEO') {
                            e.preventDefault();
                            return false;
                        }
                    });
                    
               
                    document.addEventListener('dragstart', function(e) {
                        if (e.target.tagName === 'VIDEO') {
                            e.preventDefault();
                            return false;
                        }
                    });
                }, 500);
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
                                    contextmenu: [], 
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
                                
                               
                                disableVideoContextMenu();
                                
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
                                contextmenu: [],
                                video: {
                                    url: url,
                                    pic: thumb,
                                    type: 'auto'
                                },
                                autoplay: true,
                                autoHide: true,
                                hideControlsAfter: 3000 // 3秒后自动隐藏控制按钮
                            });
                            
                           
                            disableVideoContextMenu();
                            
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
                        contextmenu: [], 
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
                    
                   
                    disableVideoContextMenu();
                    
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
        
        // 留言板展开收起功能
        document.addEventListener('DOMContentLoaded', function() {
            const commentsToggleBtn = document.getElementById('comments-toggle-btn');
            const walineContainer = document.getElementById('waline');
            
            if (commentsToggleBtn && walineContainer) {
                commentsToggleBtn.addEventListener('click', function() {
                    const isHidden = !walineContainer.classList.contains('show');
                    
                    if (isHidden) {
                        // 展开留言板
                        walineContainer.classList.add('show');
                        commentsToggleBtn.innerHTML = '<i class="fas fa-comments"></i> 收起留言板';
                        commentsToggleBtn.classList.add('active');
                        
                        // 如果留言板尚未初始化，可以在这里触发初始化
                        if (!window.walineInitialized) {
                            // Waline会在其自己的脚本中初始化
                            window.walineInitialized = true;
                        }
                    } else {
                        // 收起留言板
                        walineContainer.classList.remove('show');
                        commentsToggleBtn.innerHTML = '<i class="fas fa-comments"></i> 展开留言板';
                        commentsToggleBtn.classList.remove('active');
                    }
                });
            }
        });
