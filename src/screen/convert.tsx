import React, {useState, useEffect} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  Text,
  useColorScheme,
  View,
  TextInput,
  Alert,
  TouchableOpacity,
} from 'react-native';
import {SwapFrom} from '../assets/svgs';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {
  parseNumber,
  validNumber,
  retrieveLastCurrency,
  saveAppScreenState,
} from '../others/helpers';
import {getCurrencyIcon} from '../others/svgHelper';
import {getRates, getRatesApi} from '../others/api';
import {CurrencyData, ScreenState} from '../others/model';
import {styles} from '../assets/styles';
import {ModalView} from './modal';

function ConvertScreen(): React.JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';

  const [fromModalVisible, setFromModalVisible] = useState<boolean>(false);
  const [toModalVisible, setToModalVisible] = useState<boolean>(false);
  const [currencies, setCurrencies] = useState<CurrencyData[]>([]);
  const [fromCurrency, setFromCurrency] = useState<string>('GBP');
  const [toCurrency, setToCurrency] = useState<string>('USD');
  const [fromCurrencySymbol, setFromCurrencySymbol] = useState<string>('£');
  const [toCurrencySymbol, setToCurrencySymbol] = useState<string>('$');
  const [fromAmount, setFromAmount] = useState<string>('');
  const [toAmount, setToAmount] = useState<string>('');
  const [conversionRate, setConversionRate] = useState<number>(0);
  const [fromInputError, setFromInputError] = useState<string>('');
  const [toInputError, setToInputError] = useState<string>('');

  useEffect(() => {
    getCurrencies(fromCurrency);
  }, [fromCurrency]);

  useEffect(() => {
    getStateValues();
  }, []);

  const getStateValues = async () => {
    const stateValues: ScreenState = await retrieveLastCurrency();

    setFromCurrency(stateValues.lastFromCurrency);
    setFromCurrencySymbol(stateValues.lastFromSymbol);
    setToCurrency(stateValues.lastToCurrency);
    setToCurrencySymbol(stateValues.lastToSymbol);
    return stateValues;
  };

  useEffect(() => {
    const itemsToSave = {
      lastToCurrency: toCurrency,
      lastToSymbol: toCurrencySymbol,
      lastFromCurrency: fromCurrency,
      lastFromSymbol: fromCurrencySymbol,
    };
    saveAppScreenState(itemsToSave);
  }, [fromCurrency, fromCurrencySymbol, toCurrency, toCurrencySymbol]);

  const getCurrencies = async (currency: string) => {
    const currencyRates = await getRates(currency);

    setCurrencies(currencyRates);
    return currencyRates;
  };

  useEffect(() => {
    let filterRate = currencies.filter(item => {
      return item.currency === toCurrency || item.currency === fromCurrency;
    });
    if (filterRate.length > 0) {
      let myRate = filterRate[0].data?.rate.toFixed(4);
      setConversionRate(Number(myRate));
    }
  }, [currencies, fromCurrency, toCurrency]);

  const onFromCurrencyChangeText = (value: string): void => {
    setFromAmount(value);
    if (!validNumber(value)) {
      setFromInputError('Invalid number');
      setToAmount('');
    } else {
      setFromInputError('');
      let converted = Number(value) * conversionRate;
      let toAmt = 0;

      if (toCurrency === 'JPY') {
        toAmt = Math.ceil(converted);
      } else {
        toAmt = converted.toFixed(2);
      }
      setToAmount(toAmt.toString());
    }
  };

  const onToCurrencyChangeText = (value: string): void => {
    setToAmount(value);
    if (!validNumber(value)) {
      setToInputError('Invalid number');
      setFromAmount('');
    } else {
      setToInputError('');
      let converted = Number(value) / conversionRate;
      let fromAmt = 0;

      if (fromCurrency === 'JPY') {
        fromAmt = Math.ceil(converted);
      } else {
        fromAmt = converted.toFixed(2);
      }
      setFromAmount(fromAmt.toString());
    }
  };

  const onFromCurrencySelectEvent = (item: CurrencyData): void => {
    getCurrencies(fromCurrency);

    if (item.currency === toCurrency) {
      Alert.alert(item.currency + ' is already selected as the "to" currency');
    } else {
      setFromAmount('');
      setToAmount('');
      setFromCurrency(item.currency);
      setFromCurrencySymbol(item.data.symbol);
      setFromModalVisible(false);
    }
  };

  const onToCurrencySelectEvent = (item: CurrencyData): void => {
    getCurrencies(fromCurrency);

    if (item.currency === fromCurrency) {
      Alert.alert(
        item.currency + ' is already selected as the "from" currency',
      );
    } else {
      setFromAmount('');
      setToAmount('');
      setToCurrency(item.currency);
      setToCurrencySymbol(item.data.symbol);
      setToModalVisible(false);
    }
  };

  return (
    <SafeAreaView testID={'convertScreen'} style={styles.safeArea}>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
      <ScrollView
        testID={'scrollView'}
        accessible={true}
        contentInsetAdjustmentBehavior="automatic">
        <View style={styles.container}>
          <SwapFrom />
          <View testID={'topView'} style={styles.topView}>
            <Text style={styles.titleText}>Swap from</Text>
            <TouchableOpacity
              testID={'from-currency-dropdown'}
              onPress={() => setFromModalVisible(true)}
              style={styles.dropdown}>
              {getCurrencyIcon(fromCurrency)}
              <View style={styles.dropdownInner}>
                <Text style={styles.inputText}>{fromCurrency}</Text>
                <Icon name="arrow-drop-down" size={25} color="#000" />
              </View>
            </TouchableOpacity>
            <View style={styles.inputView}>
              <Text style={styles.symbol}>{fromCurrencySymbol}</Text>
              <TextInput
                placeholder=""
                testID="fromAmountInput"
                value={fromAmount}
                onChangeText={value => onFromCurrencyChangeText(value)}
                style={styles.input}
                keyboardType="numeric"
              />
            </View>
            <Text style={styles.errorText}>{fromInputError}</Text>
          </View>
          <View testID="bottomView" style={styles.bottomView}>
            <View testID="unitConversionView">
              <Text style={styles.titleText}>to</Text>
              <Text
                style={
                  styles.subText
                }>{`${fromCurrency} ${fromCurrencySymbol}${parseNumber(
                1,
              )} = ${toCurrency} ${toCurrencySymbol}${conversionRate}`}</Text>
            </View>

            <TouchableOpacity
              testID="to-currency-dropdown"
              onPress={() => setToModalVisible(true)}
              style={styles.dropdown}>
              {getCurrencyIcon(toCurrency)}
              <View style={styles.dropdownInner}>
                <Text style={styles.inputText}>{toCurrency}</Text>
                <Icon name="arrow-drop-down" size={25} color="#000" />
              </View>
            </TouchableOpacity>
            <View style={styles.inputView}>
              <Text style={styles.symbol}>{toCurrencySymbol}</Text>
              <TextInput
                placeholder=""
                testID="toAmountInput"
                value={toAmount}
                onChangeText={value => onToCurrencyChangeText(value)}
                style={styles.input}
                keyboardType="numeric"
              />
            </View>
            <Text style={styles.errorText}>{toInputError}</Text>
          </View>
        </View>
      </ScrollView>

      <ModalView
        testID="toCurrencyDropdown"
        listItemTestID="toCurrencyListItem"
        visible={toModalVisible}
        setModalVisible={(value: boolean) => setToModalVisible(value)}
        currencies={currencies}
        handleOnPress={onToCurrencySelectEvent}
      />

      <ModalView
        testID="fromCurrencyDropdown"
        listItemTestID="fromCurrencyListItem"
        visible={fromModalVisible}
        setModalVisible={(value: boolean) => setFromModalVisible(value)}
        currencies={currencies}
        handleOnPress={onFromCurrencySelectEvent}
      />
    </SafeAreaView>
  );
}

export default ConvertScreen;
