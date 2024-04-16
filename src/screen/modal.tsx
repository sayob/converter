import React, {useState} from 'react';
import {Text, View, Pressable, Modal, FlatList} from 'react-native';
import {getCurrencyIcon} from '../others/svgHelper';
import {CurrencyData} from '../others/model';
import {styles} from '../assets/styles';

interface Props {
  visible?: boolean;
  currencies: CurrencyData[];
  handleOnPress: (item: CurrencyData) => void;
  setModalVisible: (value: boolean) => void;
  testID: string;
  listItemTestID: string;
}

export const ModalView: React.FC<Props> = ({
  currencies,
  handleOnPress,
  visible,
  setModalVisible,
  testID,
  listItemTestID,
}) => {
  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={visible}
      onRequestClose={() => {
        setModalVisible(false);
      }}>
      <Pressable
        testID={testID}
        onPress={() => setModalVisible(false)}
        style={styles.outerModal}>
        <View style={styles.headerStyle}>
          <View style={styles.closeView}>
            <Text
              onPress={() => setModalVisible(false)}
              style={styles.closeText}>
              Close
            </Text>
          </View>
          <FlatList
            style={styles.scrollView}
            data={currencies}
            keyExtractor={(item, index) => `${index}`}
            keyboardShouldPersistTaps="handled"
            renderItem={({item, index}) => (
              <Pressable
                key={index + ''}
                testID={listItemTestID}
                onPress={() => handleOnPress(item)}
                style={styles.row}>
                {getCurrencyIcon(item.currency)}
                <Text style={styles.listText}>{item.currency}</Text>
              </Pressable>
            )}
          />
        </View>
      </Pressable>
    </Modal>
  );
};
