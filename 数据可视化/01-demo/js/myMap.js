(function() {
  // 1. 实例化对象
  var myChart = echarts.init(document.querySelector(".map .chart"));
  // 2. 指定配置和数据
  // 2. 指定配置和数据
  var data = [
    {
        name: '北京',
        selected: true,
        value: 1627000,
    },
    {
        name: '天津',
        selected: false,
        value: 1423800,
    },
    {
        name: '上海',
        selected: true,
        value: 1216100,
    },
    {
        name: '重庆',
        selected: false,
        value: 1325600,
    },
    {
        name: '河北',
        selected: false,
        value: 1571400,
    },
    {
        name: '河南',
        selected: false,
        value: 2214800,
    },
    {
        name: '云南',
        selected: false,
        value: 401600,
    },
    {
        name: '辽宁',
        selected: true,
        value: 2567300,
    },
    {
        name: '黑龙江',
        selected: true,
        value: 2016200,
    },
    {
        name: '湖南',
        selected: true,
        value: 2025300,
    },
    {
        name: '安徽',
        selected: false,
        value: 2706500,
    },
    {
        name: '山东',
        selected: true,
        value: 2014100,
    },
    {
        name: '新疆',
        selected: true,
        value: 155600,
    },
    {
        name: '江苏',
        selected: true,
        value: 1948000,
    },
    {
        name: '浙江',
        selected: false,
        value: 2483800,
    },
    {
        name: '江西',
        selected: false,
        value: 1542800,
    },
    {
        name: '湖北',
        selected: false,
        value: 1422200,
    },
    {
        name: '广西',
        selected: false,
        value: 561000,
    },
    {
        name: '甘肃',
        selected: false,
        value: 401700,
    },
    {
        name: '山西',
        selected: false,
        value: 482200,
    },
    {
        name: '内蒙古',
        selected: true,
        value: 308200,
    },
    {
        name: '陕西',
        selected: true,
        value: 1269500,
    },
    {
        name: '吉林',
        selected: false,
        value: 1973900,
    },
    {
        name: '福建',
        selected: true,
        value: 2019700,
    },
    {
        name: '贵州',
        selected: false,
        value: 162200,
    },
    {
        name: '广东',
        selected: false,
        value: 1858600,
    },
    {
        name: '青海',
        selected: true,
        value: 59300,
    },
    {
        name: '西藏',
        selected: false,
        value: 413200,
    },
    {
        name: '四川',
        selected: true,
        value: 1654900,
    },
    {
        name: '宁夏',
        selected: false,
        value: 35700,
    },
    {
        name: '海南',
        selected: true,
        value: 105900,
    },
    // {
    //     name: '台湾',
    //     selected: false,
    //     value: 4448450,
    // },
    // {
    //     name: '香港',
    //     selected: false,
    //     value: 4154870,
    // },
    // {
    //     name: '澳门',
    //     selected: false,
    //     value: 4454580,
    // },
]; //各省地图颜色数据依赖value

option = {
    // backgroundColor: '#142452',
    tooltip: {
        trigger: 'item',
    },
    // 游标
    visualMap: {
        // orient: 'horizontal', //横置
        type: 'continuous',
        itemWidth: 16,
        itemHeight: 120,
        text: ['高', '低'],
        showLabel: true,
        seriesIndex: [0],
        min: 10000,
        max: 3000000,
        calculable: true, //开启游标
        left: 50,
        bottom: 30,
        inRange: {
            color: ['#066eab', '#0682ab', '#0696ab', '#06a0ab', '#06b4ab', '#06c8ab', '#06dcab', '#06f0ab'],
        },
        textStyle: {
            color: '#ffffff',
            fontSize: 12,
        },
    },

    legend: {
        orient: 'vertical',
        top: 'right',
        left: 'bottom',
        data: ['已完成', '进行中', '未完成'],
        textStyle: {
            //图例文字的样式
            color: '#00FFFF',
            fontSize: 12,
        },
    },

    geo: {
        map: 'china',
        roam: false, //开关可移动可放大
    },

    series: [
        {
            name: '论文数量',
            type: 'map',
            mapType: 'china',
            showLegendSymbol: false, //去掉指示点
            itemStyle: {
                normal: {
                    borderWidth: 1, //区域边框宽度
                    borderColor: '#00a6dc', //区域边框颜色
                    areaColor: '#0b1c2d', //区域颜色
                    label: {
                        show: false, //是否显示各省名称
                        textStyle: {
                            color: '#ff5500', //显示各省名称颜色
                        },
                    },
                },
                emphasis: {
                    areaColor: '#065aab', //区域颜色，鼠标悬停颜色
                    label: {
                        show: true, //鼠标悬浮时是否显示各省名称
                        textStyle: {
                            color: '#fdf1f6', //鼠标悬浮时显示各省名称的颜色
                        },
                    },
                },
            },
            data: data,
        },
    ],
};

  myChart.setOption(option);
  window.addEventListener("resize", function() {
    myChart.resize();
  });
})();
