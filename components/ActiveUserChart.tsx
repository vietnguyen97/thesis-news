"use client";
/* eslint-disable react/no-unused-prop-types */
// eslint-disable-next-line object-curly-newline
import { useEffect, useMemo, useRef, useState } from "react";
import moment from "moment";

// import LineChart from "./common/LineChart";
import { datasets, rangeDateByDays } from "@/constant";
import { UserChartProps } from "@/types/newpost";
import { TableHandle } from "./TableProvider";
import HeaderChart, { showDataLabels } from "./HeaderChart";

const options: any = {
  scales: {
    y: {
      beginAtZero: true,
      ticks: { stepSize: 1 },
    },
  },
};

const formatDate = "MM/DD/YYYY";
const formatDateRequest = "YYYY-MM-DD";
const tracking_type = "SIGN_IN" as any;
const group_by = "DAY" as any;
const defaultDays = 30;
const toDate = moment().format(formatDate);
const fromDate = moment(toDate).add(-defaultDays, "days").format(formatDate);
const dataLabels = showDataLabels(fromDate, toDate);

const ActiveUserChart = ({ className = "", title }: UserChartProps) => {
  const tableRef = useRef<TableHandle>(null);
  const [rangeDate, setDateRange] = useState<[string, string]>([
    fromDate,
    toDate,
  ]);
  const [dataChart, setDataChart] = useState<any>({
    labels: dataLabels,
    datasets: [],
  });
  const [openModal, setOpenModal] = useState(false);
  // eslint-disable-next-line object-curly-newline
  const queries = {
    limit: -1,
    page: 1,
    tracking_type,
    from_date: "",
    to_date: "",
    group_by,
  };

  const handleChangeDateRange = async (rangeValues: [string, string]) => {
    dataChart.datasets = datasets;
    const newFromDate = moment(rangeValues[0]).format(formatDateRequest);
    const newToDate = moment(rangeValues[1]).format(formatDateRequest);
    const newDataLabels = showDataLabels(rangeValues[0], rangeValues[1]);
    const mapDataLabels = rangeDateByDays(
      rangeValues[0],
      rangeValues[1],
      formatDateRequest
    );

    // fetch data
    // const [dataTracking] = await helperGetCalculatorTrackingConsumer({
    //   from_date: moment(newFromDate).startOf("date").format(),
    //   to_date: moment(newToDate).endOf("date").format(),
    //   tracking_type,
    //   group_by,
    // });

    // if (dataTracking) {
    //   const dataset = mapDataLabels.map((label) => {
    //     const isExisted = dataTracking.list_calculator_tracking.find(
    //       (tracking: any) =>
    //         tracking.key === moment(label).format(formatDateRequest)
    //     );
    //     return isExisted?.total || 0;
    //   });

    //   dataChart.labels = newDataLabels;
    //   dataChart.datasets[0].data = dataset;

    //   setDataChart({ ...dataChart });
    // }

    setDateRange([rangeValues[0], newToDate]);
  };

  const handleModal = (open: boolean) => {
    if (open) {
      queries.from_date = moment(rangeDate[0]).startOf("date").format();
      queries.to_date = moment(rangeDate[1]).endOf("date").format();
      //   helperGetListConsumerTracking(queries, tableRef, setOpenModal);
    } else {
      setOpenModal(open);
    }
  };

  useEffect(() => {
    handleChangeDateRange(rangeDate);
  }, []);

  const total = useMemo(
    () =>
      dataChart?.datasets[0]?.data?.reduce((a: number, b: number) => a + b) ||
      0,
    [dataChart]
  );
  // const showChart = useMemo(
  //   () => <LineChart data={dataChart} options={options} />,
  //   [dataChart]
  // );

  return (
    <div className={className}>
      <HeaderChart
        defaultDays={defaultDays}
        onChangeView={() => handleModal(!openModal)}
        onChangeDateRange={(value: [string, string]) =>
          handleChangeDateRange(value)
        }
      />
      {/* {showChart} */}
    </div>
  );
};

export default ActiveUserChart;
