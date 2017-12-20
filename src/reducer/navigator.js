import { addNavigationHelpers } from 'react-navigation'
import MainNavigator from '../Navigation/Route'

const initialState = MainNavigator.router.getStateForAction(MainNavigator.router.getActionForPathAndParams('LoginScreen'))
// const intialState2 = {
//     "index": 1,
//     "routes": [
//       {
//         "key": "Init-id-1513652993108-0",
//         "routeName": "LoginScreen",
//         "type": undefined,
//       },
//       {
//         "index": 0,
//         "key": "id-1513652993108-2",
//         "params": undefined,
//         "routeName": "HomeScreen",
//         "routes": [
//           {
//             "index": 2,
//             "key": "DrawerClose",
//             "routeName": "DrawerClose",
//             "routes": [
//               {
//                 "key": "screen1",
//                 "routeName": "screen1",
//               },
//               {
//                 "key": "screen2",
//                 "routeName": "screen2",
//               },
//               {
//                 "key": "screen3",
//                 "routeName": "screen3",
//               },
//             ],
//           },
//           {
//             "key": "DrawerOpen",
//             "routeName": "DrawerOpen",
//           },
//           {
//             "key": "DrawerToggle",
//             "routeName": "DrawerToggle",
//           },
//         ],
//       },
//     ],
//   }
const navReducer = (state = initialState, action) => {
    const nextState = MainNavigator.router.getStateForAction(action, state)
    return nextState || state
}

export default navReducer

