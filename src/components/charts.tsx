import { ApexOptions } from "apexcharts";
import ReactApexChart from "react-apexcharts";

export const ChartComponent = () => {
    let state = {
        series: [{
            name: 'TEAM B',
            type: 'area',
            data: [44, 55, 41, 67, 22, 43, 21, 41, 56, 27, 43]
        }, {
            name: 'TEAM C',
            type: 'line',
            data: [30, 25, 36, 30, 45, 35, 64, 52, 59, 36, 39]
        }],

    }
    let options: ApexOptions = {
        chart: {
            type: "line",
            stacked: false,

            toolbar: {
                show: false,
            },
            zoom: {
                enabled: false,
            },
            animations: {
                enabled: true,
            },
        },
        stroke: {
            width: [3, 1.5],
            curve: 'smooth'
        },

        plotOptions: {
            bar: {
                columnWidth: '50%'
            }
        },
        grid: {
            show: false,
            position:'back',
            xaxis:{
                lines:{
                    show:true
                }
            },
            row: {
                opacity: 0,
            },
            column: {
                opacity: 1,
            },
            padding:{
                left:20,
                bottom:20
            }
        },
        fill: {
            colors:['#5493F7','green'],
            opacity: [0.2,1],
            gradient: {
                type: 'vertical',
                shade: 'dark',
                stops: [0, 50, 90],
            },
        },
        labels: ['01/01/2003', '02/01/2003', '03/01/2003', '04/01/2003', '05/01/2003', '06/01/2003', '07/01/2003',
            '08/01/2003', '09/01/2003', '10/01/2003', '11/01/2003'
        ],
        markers: {
            size: 0
        },
        xaxis: {
            type: 'datetime',
            labels:{
                style:{
                    colors:'#A8A8B2'
                }
            },  
            axisBorder: {
                show: false,
            },
            
        },
        yaxis: {
            show: true,
            labels: {
                style:{
                    colors:'#A8A8B2'
                }
            }
        },
        legend: {
            show: false
        },
        tooltip: {
            enabled:true,
            theme:'dark',
            custom:({series, seriesIndex, dataPointIndex, w}) => {
                const s = series
                const data = w.globals.initialSeries[seriesIndex].data[dataPointIndex];
                return `<div class='tooltip-style'>${data}</div>`
            },
        }
    }
    return (
        <>
            <ReactApexChart options={options} series={state.series} type="line" height={274} width={934} />
        </>
    );
}

