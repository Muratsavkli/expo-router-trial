import { View, StyleSheet, Text } from 'react-native';
import { Link, Stack, useLocalSearchParams } from 'expo-router';

export default function NotFoundScreen() {
  const { id } = useLocalSearchParams<{ id: string }>();

  return (
    <>
      <Stack.Screen options={{ title: 'Oops! Not Found' }} />
      <View style={styles.container}>
        <Text style={styles.text}>Received ID: {id}</Text>
        <Link href="/" style={styles.button}>
          Go back to Home screen!
        </Link>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#25292e',
    justifyContent: 'center',
    alignItems: 'center',
  },

  button: {
    fontSize: 20,
    textDecorationLine: 'underline',
    color: '#fff',
  },

  text: {
    fontSize: 16,
    color: '#fff',
    marginBottom: 20,
  },
});
