import type { NativeStackScreenProps } from "@react-navigation/native-stack";

export type HomeStackNavigatorParmList = {
  Home: undefined;
  Login: undefined;
  Register: undefined;
  ForgetPassword: undefined;
  HeartRate: undefined;
  Temperature: undefined;
  Oxygen: undefined;
  MedicineAlarm: undefined;
  EditProfile: undefined;
  Emergency: undefined;
};

export type HomeScreenNavigateProps = NativeStackScreenProps<
  HomeStackNavigatorParmList,
  Home,
  Login,
  Register,
  ForgetPassword,
  HeartRate,
  Temperature,
  Oxygen,
  MedicineAlarm,
  EditProfile,
  Emergency
>;
