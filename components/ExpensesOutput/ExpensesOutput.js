import { FlatList, View } from "react-native";

function ExpensesOutput({ expenses }) {
  return (
    <View>
      <View>
        <Text>Last 7 days</Text>
        <Text>$177</Text>
      </View>
      <FlatList />
    </View>
  );
}

export default ExpensesOutput;
