import { View } from "react-native";

import ExpensesSummary from "./ExpensesSummary";
import ExpensesList from "./ExpensesList";

const MY_EXPENSES = [
  {
    id: "e1",
    description: "A pair of smth",
    amount: 19.99,
    date: new Date("2023-02-15"),
  },
  {
    id: "e2",
    description: "A pair of smth else",
    amount: 41.99,
    date: new Date("2023-01-15"),
  },
  {
    id: "e3",
    description: "A pair of smth else else",
    amount: 121.99,
    date: new Date("2022-06-15"),
  },
];

function ExpensesOutput({ expenses, expensesPeriod }) {
  return (
    <View>
      <ExpensesSummary expenses={MY_EXPENSES} periodName={expensesPeriod} />
      <ExpensesList expenses={MY_EXPENSES} />
    </View>
  );
}

export default ExpensesOutput;
