import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  StyleSheet,
  TouchableOpacity,
  Image,
} from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { NavigationProp } from '@react-navigation/native';
import { Text, View, useThemeColor } from '../components/Themed';
import { getDashBoardInfo } from '../actions/giftAppAction';
import { IRootState } from '../reducers';

const styles = StyleSheet.create({
  scrollContainer: {
    flex: 1,
    backgroundColor: '#7B61FF',
  },
  container: {
    backgroundColor: '#7B61FF',
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    padding: 0,
    width: '100%',
    flexDirection: 'column',
  },
  textContainer: {
    width: '85%',
    textAlign: 'left',
  },
  headerWrapper: {
    display: 'flex',
    justifyContent: 'space-between',
    flexDirection: 'row',
    width: '100%',
    paddingLeft: 30,
    paddingRight: 30,
    paddingTop: 50,
  },
  movementListContainer: {
    width: '100%',
    paddingTop: 20,
  },
  headerContainer: {
    height: '100%',
    width: '100%',
    overflow: 'hidden',
    position: 'relative',
  },
  headerContent: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    right: 0,
    left: 0,
    backgroundColor: 'transparent',
    paddingTop: 100,
    paddingLeft: 32,
    paddingRight: 32
  },
  headerTitleInfo: {
    fontSize: 28,
    color: '#FFF',
    fontWeight: '600'
  },
  subTitleInfo: {
    fontSize: 20,
    color: '#FFF',
    fontWeight: '600',
    marginTop: 20
  },
  contentInfo: {
    fontSize: 13,
    color: '#FFF',
    fontWeight: '400',
    marginTop: 10
  },
  headerPriceInfo: {
    fontSize: 60,
    color: '#FFF',
    marginLeft: 20,
    marginTop: 24,
  },
  btnContainer: {
    height: 1450,
    width: '100%',
    overflow: 'hidden',
    backgroundColor: '#7B61FF'
  },
  eventsContainer: {
    width: '100%',
    overflow: 'hidden',
  },
  movementsContainer: {
    width: '100%',
    overflow: 'hidden',
  },
  image: {
    width: '100%',
    height: '100%',
  },
  iconImage: {
    width: 24,
    height: 24,
  },
  titleWrapper: {
    display: 'flex',
    justifyContent: 'flex-start',
    width: '100%',
    paddingBottom: 20,
    marginTop: 30,
  },
  title: {
    fontSize: 18,
    paddingLeft: 20,
    paddingRight: 20,
    paddingTop: 20,
    fontWeight: '600',
    justifyContent: 'flex-start',
  },
  dateInfo: {
    fontSize: 14,
    color: '#111111',
    paddingLeft: 20,
    paddingRight: 20,
  },
  helpText: {
    fontSize: 16,
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '100%',
  },
  socialButtonText: {
    textTransform: 'uppercase',
    paddingHorizontal: 20,
  },
  signinButtonText: {
    textTransform: 'uppercase',
    paddingHorizontal: 20,
    color: '#FFF',
  },
  fieldWrapper: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
    marginTop: 10,
  },
  fieldCheckboxWrapper: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
    marginTop: 10,
  },
  fieldLabel: {
    fontSize: 12,
    textTransform: 'uppercase',
    fontWeight: '800',
    paddingBottom: 5,
  },
  fieldDescription: {
    fontSize: 14,
    fontWeight: 'normal',
    paddingBottom: 5,
    marginLeft: 10,
    paddingRight: 30,
  },
  iconStyle: {
    padding: 10,
    position: 'absolute',
    zIndex: 99,
    left: 0,
  },
  fieldInput: {
    backgroundColor: '#fff',
    borderRadius: 8,
    borderWidth: 0.5,
    borderColor: '#2F80ED',
    fontSize: 16,
    padding: 10,
    color: '#2CAF4D',
    flex: 1,
    paddingTop: 10,
    paddingRight: 10,
    paddingBottom: 10,
    paddingLeft: 40,
  },
  errorMessageAlert: {
    fontSize: 10,
    color: '#cc3300',
    fontStyle: 'italic',
    paddingTop: 4,
    paddingBottom: 4,
    textAlign: 'center',
  },
  fieldInputCheckbox: {
    backgroundColor: '#fff',
    borderRadius: 8,
    borderWidth: 0.5,
    borderColor: '#2F80ED',
    fontSize: 16,
    padding: 10,
    color: '#2CAF4D',
    flex: 1,
    paddingTop: 10,
    paddingRight: 10,
    paddingBottom: 10,
    paddingLeft: 10,
    marginLeft: 50,
  },
  signupButton: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#7B61FF',
    padding: 16,
    fontSize: 15,
    fontWeight: '700',
    height: 50,
    borderRadius: 14,
    width: '100%',
    marginTop: 25,
    shadowRadius: 10,
    shadowOpacity: 0.5,
    shadowColor: 'rgb(42, 25, 129)',
    borderTopEndRadius: 14,
    borderBottomEndRadius: 14
  },
  greenButton: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#2CAF4D',
    fontSize: 15,
    fontWeight: '700',
    height: 50,
    borderWidth: 0,
    borderColor: '#fff',
    borderRadius: 50,
    width: '100%',
    marginTop: 20,
    marginBottom: 10,
  },
  textLinkWrapper: {
    justifyContent: 'center',
    paddingVertical: 5,
  },
  textLink: {
    textDecorationStyle: 'solid',
    color: '#7B61FF',
    fontWeight: '600',
    fontSize: 14,
    textAlign: 'right',
  },
  slideContainer: {
    position: 'absolute',
    top: 0,
    right: 0,
    left: 0,
    bottom: 0,
    alignItems: 'center',
    justifyContent: 'flex-end',
    backgroundColor: 'transparent',
    padding: 0,
  },
  slideImage: {
    width: '80%',
    height: '90%',
  },
  eventImageContainer: {
    height: 280,
    overflow: 'hidden',
  },
  eventInfoContainer: {
    height: 70,
    width: '100%',
    padding: 20,
    flexDirection: 'row',
    borderBottomWidth: 0.5,
    borderBottomColor: '#D8D8D8',
  },  
  nameInfoContainer: {
    width: 32,
    height: 32,
    borderRadius: 16,
    backgroundColor: 'rgba(123, 97, 255, 0.3)',
    textAlign: 'center',
    alignItems: 'center',
    justifyContent: 'center',
  },
  fullNameInfoContainer: {
    width: '60%',
    paddingLeft: 12,
  },
  fullNameInfo: {
    fontSize: 14,
    color: '#111',
  },
  nameInfo: {
    fontSize: 12,
    color: '#7B61FF',
    textAlign: 'center',
    alignItems: 'center',
    display: 'flex',
  },
  emailInfo: {
    fontSize: 12,
    color: '#111',
    opacity: 0.5,
  },
  priceInfoContainer: {
    marginLeft: 'auto',
  },
  priceInfo: {
    fontSize: 18,
    color: '#111',
  },
  notificationInfo: {
    fontSize: 14,
    color: 'rgba(17, 17, 17, 0.4)',
    textAlign: 'center',
    fontWeight: '500',
    alignItems: 'center',
    justifyContent: 'center',
  },
  blankInfoContainer: {
    height: 191,
    width: '100%',
    paddingLeft: 36,
    paddingRight: 36,
    display: 'flex',
    paddingTop: 10,
    textAlign: 'center',
    alignItems: 'center',
    justifyContent: 'center'
  },
  buttonContainer: {
    marginTop: 5,
    width: 188,
    height: 36,
    backgroundColor: '#FFF',
    borderRadius: 40,
    borderWidth: 1,
    borderColor: '#7B61FF',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonTitleInfo: {
    fontSize: 14,
    color: '#7B61FF',
    fontWeight: '600'
  },
  iconView: {
    width: 50,
    height: 50,
    borderRadius: 20,
    backgroundColor: 'rgba(255, 255, 255, 0.3)',
    marginTop: 30,
    textAlign: 'center',
    alignItems: 'center',
    justifyContent: 'center'
  }
});

interface IAppReadMeScreenProps {
  navigation: NavigationProp<any>;
}

const AppReadMeScreen: React.FC<IAppReadMeScreenProps> = (props) => {
  const dispatch = useDispatch();
  const { navigation } = props;

  const bgColor = useThemeColor({}, 'background');

  useEffect(() => {
    dispatch(getDashBoardInfo());
  }, []);

  const gotoHomeScreen = () => {
    navigation.navigate('WelcomeScreen');
  };

  return (
    <ScrollView style={styles.scrollContainer}>
      <View style={styles.headerContainer}>
        <Image
          source={require('../assets/images/bg.png')}
          style={styles.image}
          resizeMode="cover"
        />
        <View style={styles.headerContent}>
          <Text style={styles.headerTitleInfo}>
            Here are some tips
          </Text>
          <Text style={styles.headerTitleInfo}>
            on how to use Giftd
          </Text>
          <View style={styles.iconView}>
            <Image
              source={require('../assets/images/calendar-white.png')}
              style={styles.iconImage}
              resizeMode="cover"
            />
          </View>
          <Text style={styles.subTitleInfo}>
            Create your own event
          </Text>
          <Text style={styles.contentInfo}>
            Create an event and invite your guests so they can send your presents with one click.
          </Text>
          <View style={styles.iconView}>
            <Image
              source={require('../assets/images/flash.png')}
              style={styles.iconImage}
              resizeMode="cover"
            />
          </View>
          <Text style={styles.subTitleInfo}>
            Fast and efficient
          </Text>
          <Text style={styles.contentInfo}>
            All the money gifted goes straight to the receivers account. No need to set any extra steps.
          </Text>
          <View style={styles.iconView}>
            <Image
              source={require('../assets/images/heart.png')}
              style={styles.iconImage}
              resizeMode="cover"
            />
          </View>
          <Text style={styles.subTitleInfo}>
            Get back
          </Text>
          <Text style={styles.contentInfo}>
            Your friends can also send gifts your way. All your contacts automatically get saved for future events.
          </Text>
          <TouchableOpacity
            style={styles.signupButton}
            onPress={gotoHomeScreen}  
          >
            <Text style={styles.signinButtonText}>GO TO THE MAIN PAGE</Text>
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.btnContainer}>
      </View>
    </ScrollView>
  );
};

export default AppReadMeScreen;
