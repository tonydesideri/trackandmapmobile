import BleManager from 'react-native-ble-manager';
import { Alert } from 'react-native';

export default function BleSetup() {
  return BleManager.enableBluetooth()
    .then(() => {
      console.log('Bluetooth ligado');
      this.setState({ active: true });

      return BleManager.startNotification(
        '70b59b9f-c4a0-4d6b-a392-95bfe25153d3',
        'f8a01dc6-aaec-4e7b-ac40-848ed78164cb',
        'd6f632e6-7935-4150-89d5-f5d5e9e02402'
      )
    })
    .catch((error) => {
      Alert.alert('', 'Não foi possível configurar o dispositivo. Tente novamente.', [
        {
          text: 'Ok',
          style: 'cancel',
        },
      ]);
    });
}
