import { Text, FlatList } from "react-native";

function renderExpenseItem(itemData) {
  return <Text>{itemData.item.desciption}</Text>;
}

function ExpensesList({ expenses }) {
  return (
    <FlatList
      data={expenses}
      renderItem={renderExpenseItem}
      keyExtractor={(item) => item.id}
    />
  );
}

export default ExpensesList;
