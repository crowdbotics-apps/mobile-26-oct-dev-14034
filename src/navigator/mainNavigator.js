import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import BlankScreen313178Navigator from '../features/BlankScreen313178/navigator';
import BlankScreen013177Navigator from '../features/BlankScreen013177/navigator';
import CopyOfBlankScreen013176Navigator from '../features/CopyOfBlankScreen013176/navigator';
import CopyOfBlankScreen013175Navigator from '../features/CopyOfBlankScreen013175/navigator';
import CopyOfBlankScreen013174Navigator from '../features/CopyOfBlankScreen013174/navigator';
import CopyOfBlankScreen013173Navigator from '../features/CopyOfBlankScreen013173/navigator';
import BlankScreen013165Navigator from '../features/BlankScreen013165/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {

    //@BlueprintNavigationInsertion
BlankScreen313178: { screen: BlankScreen313178Navigator },
BlankScreen013177: { screen: BlankScreen013177Navigator },
CopyOfBlankScreen013176: { screen: CopyOfBlankScreen013176Navigator },
CopyOfBlankScreen013175: { screen: CopyOfBlankScreen013175Navigator },
CopyOfBlankScreen013174: { screen: CopyOfBlankScreen013174Navigator },
CopyOfBlankScreen013173: { screen: CopyOfBlankScreen013173Navigator },
BlankScreen013165: { screen: BlankScreen013165Navigator },

    /** new navigators can be added here */
    SplashScreen: {
      screen: SplashScreen
    }
};

const DrawerAppNavigator = createDrawerNavigator(
  {
    ...AppNavigator,
  },
  {
    contentComponent: SideMenu
  },
);

const AppContainer = createAppContainer(DrawerAppNavigator);

export default AppContainer;
