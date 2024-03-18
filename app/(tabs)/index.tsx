import { StyleSheet, View, Pressable} from 'react-native';
import { Text } from 'react-native-paper';
import {router} from 'expo-router';


export default function TabOneScreen() {
  return (
    <View style={styles.container}>
      <Pressable onPress={() => router.push("/Tata")}>
        <Text>Press Me</Text>
      </Pressable>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
});
