import { Bar } from "react-chartjs-2";
import { Data } from "../App";

interface IProps {
  chartData: Data
}

export const BarChart = ({ chartData }: IProps) => {

    return (
      <div className="chart-container">
        <Bar
          data={chartData}
          options={{
            responsive: true,
            plugins: {
              title: {
                display: true,
                text: "Bar Chart Prémio Nacional"
              },
              legend: {
                //position: 'top' as const,
                display: false
              }}
          }}
        />
      </div>
    );
}