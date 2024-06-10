import React, { useState } from 'react';
import { View, Text, Button, FlatList, StyleSheet, Switch } from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';
import * as Notifications from 'expo-notifications';

interface Alarm {
  id: string;
  time: Date;
  enabled: boolean;
}

const AlarmFeature: React.FC = () => {
  const [alarms, setAlarms] = useState<Alarm[]>([]);
  const [date, setDate] = useState(new Date());
  const [showPicker, setShowPicker] = useState(false);

  const addAlarm = () => {
    const newAlarm: Alarm = {
      id: Math.random().toString(),
      time: date,
      enabled: true
    };
    setAlarms([...alarms, newAlarm]);
    scheduleAlarm(newAlarm);
  };

  const deleteAlarm = (id: string) => {
    setAlarms(alarms.filter(alarm => alarm.id !== id));
  };

  const toggleAlarm = (id: string) => {
    setAlarms(alarms.map(alarm => alarm.id === id ? { ...alarm, enabled: !alarm.enabled } : alarm));
    const alarm = alarms.find(alarm => alarm.id === id);
    if (alarm) {
      alarm.enabled ? cancelAlarm(alarm.id) : scheduleAlarm(alarm);
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
    }
  };

  return (
    <View style={styles.container}>
      <Button title="Add Alarm" onPress={() => setShowPicker(true)} />
      {showPicker && (
        <DateTimePicker
          value={date}
          mode="time"
          display="default"
          onChange={onChange}
        />
      )}
      <FlatList
        data={alarms}
        keyExtractor={item => item.id}
        renderItem={({ item }) => (
          <View style={styles.alarmItem}>
            <Text>{item.time.toLocaleTimeString()}</Text>
            <Switch value={item.enabled} onValueChange={() => toggleAlarm(item.id)} />
            <Button title="Delete" onPress={() => deleteAlarm(item.id)} />
          </View>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  alarmItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
    padding: 10,
    borderBottomWidth: 1,
    borderColor: '#ccc',
  },
});

export default AlarmFeature;
