/* 南丁格尔图 */
(function () {
    // 基于准备好的dom，初始化echarts实例
    // var myChart = echarts.init(document.querySelector('.box'));
    var myChart = echarts.init(document.querySelector('.pie'));

    option = {
        // legend: {
        //     top: 'bottom'
        // },
        toolbox: {
            show: false,
            feature: {
                mark: { show: true },
                dataView: { show: true, readOnly: false },
                restore: { show: true },
                saveAsImage: { show: true }
            }
        },
        series: [
            {
                name: '老陈学员分布',
                type: 'pie',
                radius: ['10%', '80%'],
                center: ['50%', '65%'],
                roseType: 'area',
                itemStyle: {
                    borderRadius: 8
                },
                label: {
                    fontSize: 10
                },
                labelLine: {
                    length: 8,
                    length2: 15
                },
                data: [
                    { value: 20, name: '云南' },
                    { value: 26, name: '北京' },
                    { value: 24, name: '山东' },
                    { value: 25, name: '河北' },
                    { value: 20, name: '江苏' },
                    { value: 25, name: '浙江' },
                    { value: 30, name: '四川' },
                    { value: 42, name: '河南' }
                ]
            }
        ]
    };
    // 使用刚指定的配置项和数据显示图表。
    myChart.setOption(option);

    window.addEventListener('load', function () {
        myChart.resize();
    });

    // 当屏幕重置大小的时候 继续调用echarts的重置大小方法
    // 自动适应当前屏幕
    window.addEventListener('resize', function () {
        myChart.resize();
    })

})();

/* 全球用户总量统计 */
(function () {
    //自定义的柱状条
    var item = {
        name: '',
        value: '1200',
        itemStyle: {
            color: "#254065"
        },
        emphasis: {
            itemStyle: {
                color: '#254065'
            }
        },
        tooltip: {
            extraCssText: 'opacity:0'
        }
    }
    // 基于准备好的dom，初始化echarts实例
    var myChart = echarts.init(document.querySelector('.bar'));
    option = {
        // title: {
        //     text: '全球用户总量统计',
        //     textStyle: {
        //         color: '#4c9bfd'
        //     }
        // },
        tooltip: {
            trigger: 'item',
            axisPointer: {
                type: 'none'
            }
        },
        color: {
            type: 'linear',
            x: 0,
            y: 0,
            x2: 0,
            y2: 1,
            colorStops: [
                { offset: 0, color: '#00fffb' }, // 0 起始颜色
                { offset: 1, color: '#0061ce' }  // 1 结束颜色
            ],
            global: false // 缺省为 false
        },
        grid: {
            left: '0%',
            right: '3%',
            bottom: '3%',
            top: '10%',
            containLabel: true,
            // 是否显示网格
            show: true,
            borderColor: 'rgba(0, 240, 255, 0.3)'
        },
        xAxis: [
            {
                type: 'category',
                data: ['郑州', '广州', '北京', '深圳', '合肥', '', '......', '', '杭州', '厦门', '济南', '成都', '重庆'],
                axisTick: {
                    alignWithLabel: false,
                    show: false
                },

                axisLabel: {
                    color: "#71f2fb"
                },
                axisLine: {
                    lineStyle: {
                        color: 'rgba(0, 240, 255, 0.3)'
                    }
                }
            }
        ],
        yAxis: [
            {
                type: 'value',
                axisLabel: {
                    color: "#71f2fb"
                },
                axisTick: {
                    show: false
                },
                axisLine: {
                    lineStyle: {
                        color: 'rgba(0, 240, 255, 0.3)'
                    }
                },
                splitLine: {
                    lineStyle: {
                        // 使用深浅的间隔色
                        color: 'rgba(0, 240, 255, 0.3)'
                    }
                }
            }
        ],
        series: [
            {
                name: 'Direct',
                type: 'bar',
                barWidth: '55%',
                data: [2100, 1900, 1700, 1560, 1400, item, item, item, 900, 750, 600, 480, 240]
            }
        ]
    };
    // 使用刚指定的配置项和数据显示图表。
    myChart.setOption(option);

    window.addEventListener("resize", function () {
        // 让我们的图表调用 resize这个方法
        myChart.resize();
    });
    //页面加载完成 就让图标自动重置大小
    window.addEventListener("load", function () {
        // 让我们的图表调用 resize这个方法
        myChart.resize();
    });
})();