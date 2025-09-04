import { useEffect, useState } from "react";
import { Accelerometer, Gyroscope, Magnetometer, MagnetometerMeasurement } from "expo-sensors";

export const useSensors = () => {
  const [accelerometerData, setAccelerometerData] = useState(null);
  const [gyroscopeData, setGyroscopeData] = useState(null);
  const [magnetometerData, setMagnetometerData] = useState(null);

  useEffect(() => {
    const subscription = Accelerometer.addListener((data) => setAccelerometerData(data));

    return () => {
      subscription.remove();
    };
  }, []);

  useEffect(() => {
    const subscription = Gyroscope.addListener((data) => {
      setGyroscopeData(data);
    });

    return () => {
      subscription.remove();
    };
  }, []);

  useEffect(() => {
    const subscription = Magnetometer.addListener((data) => {
      setMagnetometerData(data);
    });

    return () => {
      subscription.remove();
    };
  }, []);

  return { accelerometerData, gyroscopeData, magnetometerData };
};
