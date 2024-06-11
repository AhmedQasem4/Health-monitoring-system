import {
  Button,
  FlatList,
  StyleSheet,
  Switch,
  Text,
  TouchableWithoutFeedback,
  View,
} from "react-native";
import React, { useState } from "react";
import Screen from "./Screen";
import colors from "../config/colors";
import Alarm from "../components/Alarm";
import CommonHeader from "../components/CommonHeader";
import * as Notifications from "expo-notifications";
import DateTimePicker from "@react-native-community/datetimepicker";

interface Alarm {
  id: string;
  time: Date;
  enabled: boolean;
}

const MedicineAlarmScreen = () => {
  const [alarms, setAlarms] = useState<Alarm[]>([]);
  const [date, setDate] = useState(new Date());
  const [showPicker, setShowPicker] = useState(false);

  const addAlarm = () => {
    const newAlarm: Alarm = {
      id: Math.random().toString(),
      time: date,
      enabled: true,
    };
    setAlarms((prevAlarms) => [...prevAlarms, newAlarm]);
    scheduleAlarm(newAlarm);
  };

  const deleteAlarm = (id: string) => {
    setAlarms((prevAlarms) => prevAlarms.filter((alarm) => alarm.id !== id));
  };

  const toggleAlarm = async (id: string) => {
    setAlarms((prevAlarms) =>
      prevAlarms.map((alarm) =>
        alarm.id === id ? { ...alarm, enabled: !alarm.enabled } : alarm
      )
    );

    const alarm = alarms.find((alarm) => alarm.id === id);
    if (alarm) {
      if (alarm.enabled) {
        await cancelAlarm(alarm.id);
      } else {
        await scheduleAlarm(alarm);
      }
    }
  };

  const scheduleAlarm = async (alarm: Alarm) => {
    await Notifications.scheduleNotificationAsync({
      content: {
        title: "Medicine Reminder",
        body: "It's time to take your medicine.",
      },
      trigger: {
        hour: alarm.time.getHours(),
        minute: alarm.time.getMinutes(),
        repeats: true,
      },
    });
  };

  const cancelAlarm = async (id: string) => {
    await Notifications.cancelScheduledNotificationAsync(id);
  };

  const onChange = (event: any, selectedDate: Date | undefined) => {
    setShowPicker(false);
    if (selectedDate) {
      setDate(selectedDate);
      addAlarm(); // Add the alarm when a new time is selected
    }
  };

  return (
    <Screen style={{ padding: 10, marginVertical: 20 }}>
      <CommonHeader logo={false} />
      <View style={styles.headerContainer}>
        <Text style={styles.heading}>Medicine Alarm</Text>
        <TouchableWithoutFeedback onPress={() => setShowPicker(true)}>
          <Text style={styles.addAlarmButton}>Add New</Text>
        </TouchableWithoutFeedback>
        {showPicker && (
          <DateTimePicker
            value={date}
            mode="time"
            display="default"
            onChange={onChange}
          />
        )}
      </View>
      <FlatList
        data={alarms}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          // <View style={styles.alarmItem}>
          //   <Text>{item.time.toLocaleTimeString()}</Text>
          //   <Switch
          //     value={item.enabled}
          //     onValueChange={() => toggleAlarm(item.id)}
          //   />
          //   <Button title="Delete" onPress={() => deleteAlarm(item.id)} />
          // </View>
          <Alarm date={item.time} onPress={()=> deleteAlarm(item.id)}/>
        )}
      />
    </Screen>
  );
};

export default MedicineAlarmScreen;

const styles = StyleSheet.create({
  headerContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 20,
  },
  heading: {
    fontSize: 25,
    fontWeight: "bold",
  },
  addAlarmButton: {
    backgroundColor: colors.textBlue,
    color: colors.white,
    fontSize: 15,
    padding: 10,
    borderRadius: 15,
  },
  alarmItem: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: "100%",
    padding: 10,
    borderBottomWidth: 1,
    borderColor: "#ccc",
  },
});
