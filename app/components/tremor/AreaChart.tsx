import { AreaChart } from "@tremor/react";

const chartdata = [
  {
    date: "Sep 21",
    Incomes: 2890,
    Expenses: 2338,
  },
  {
    date: "Oct 21",
    Incomes: 2890,
    Expenses: 2338,
  },
  {
    date: "Nov 21",
    Incomes: 2890,
    Expenses: 2338,
  },
  {
    date: "Dec 21",
    Incomes: 2890,
    Expenses: 2338,
  },
  {
    date: "Jan 22",
    Incomes: 2890,
    Expenses: 2338,
  },
  {
    date: "Feb 22",
    Incomes: 2756,
    Expenses: 2103,
  },
  {
    date: "Mar 22",
    Incomes: 3322,
    Expenses: 2194,
  },
  {
    date: "Apr 22",
    Incomes: 3470,
    Expenses: 2108,
  },
  {
    date: "May 22",
    Incomes: 3475,
    Expenses: 1812,
  },
  {
    date: "Jun 22",
    Incomes: 3129,
    Expenses: 1726,
  },
  {
    date: "Jul 22",
    Incomes: 3490,
    Expenses: 1982,
  },
  {
    date: "Aug 22",
    Incomes: 2903,
    Expenses: 2012,
  },
  {
    date: "Sep 22",
    Incomes: 2643,
    Expenses: 2342,
  },
  {
    date: "Oct 22",
    Incomes: 12350,
    Expenses: 2473,
  },
  {
    date: "Nov 22",
    Incomes: 2954,
    Expenses: 3848,
  },
  {
    date: "Dec 22",
    Incomes: 3239,
    Expenses: 3736,
  },
];

const dataFormatter = (number: number) =>
  `$${Intl.NumberFormat("us").format(number).toString()}`;

export function AreaChartHero() {
  return (
    <AreaChart
      className="h-full w-[100%] m-auto text-xs "
      data={chartdata}
      index="date"
      categories={["Incomes", "Expenses"]}
      colors={["emerald", "rose"]}
      valueFormatter={dataFormatter}
      onValueChange={(v) => console.log(v)}
    />
  );
}
