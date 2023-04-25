import { StyleSheet, View, Text } from 'react-native';
import MapView, { Marker } from 'react-native-maps';

const initialLocation = { latitude: 37.4220936, longitude: -122.083922 };

const MapScreen = () => {
  return (
    <View style={styles.container}>
      <MapView
        style={styles.map}
        initialRegion={{
          longitude: -122.083922,
          latitude: 37.4220936,
          latitudeDelta: 0.1,
          longitudeDelta: 0.1,
        }}
      >
        <Marker
          coordinate={{
            longitude: -122.083922,
            latitude: 37.4220936,
          }}
          title="travel photo"
        />
      </MapView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  map: {
    width: '100%',
    height: '100%',
  },
});

export default MapScreen;
