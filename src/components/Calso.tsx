import { useEffect, useState } from "react";
import { AgGauge } from "ag-charts-react";
import { AgRadialGaugeOptions } from "ag-charts-enterprise";
import "ag-charts-enterprise";

const Calso = () => {
  const [charts, setCharts] = useState<any[]>([]);

  useEffect(() => {
    fetch("https://trello.vimlc.uz/knowlodge")
      .then((response) => response.json())
      .then((data) => {
        setCharts(data.semicharts);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const renderCharts = () => {
    if (!charts || charts.length === 0) {
      return <p>Chart ma'lumotlari mavjud emas.</p>;
    }

    return charts.map((chart, index) => {
      const options: AgRadialGaugeOptions = {
        type: "radial-gauge",
        value: chart.percentage,
        scale: {
          min: 0,
          max: 140,
          label: {
            enabled: false,
          },
        },
        bar: {
          fill: chart.color,
        },
        label: {
          formatter({ value }) {
            return `${value.toFixed(0)}%`;
          },
          fontSize: 45,
        },
        secondaryLabel: {
          text: chart.label,
          fontSize: 10,
          
        },
      };

      return (
        <div key={index}  className="" >
          <AgGauge options={options as any} className="w-[200px] " />
        </div>
      );
    });
  };

  return <div className=" w-[600px]  flex flex-wrap ">{renderCharts()}</div>;
};

export default Calso;
