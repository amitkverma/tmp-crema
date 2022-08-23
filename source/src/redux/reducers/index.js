import {combineReducers} from 'redux';
import {connectRouter} from 'connected-react-router';
import Settings from './Setting';
import MailApp from './MailApp';
import Common from './Common';
import ToDoApp from './ToDoApp';
import ContactApp from './ContactApp';
import Ecommerce from './Ecommerce';
import ScrumboardApp from './ScrumboardApp';
import ChatApp from './ChatApp';
import Wall from './Wall';
import Gallery from './Gallery';
import Dashboard from './Dashboard';
import Editors from './Editors';
import UserList from './UserList';

const reducers = (history) =>
  combineReducers({
    router: connectRouter(history),
    settings: Settings,
    mailApp: MailApp,
    common: Common,
    todoApp: ToDoApp,
    contactApp: ContactApp,
    gallery: Gallery,
    editors: Editors,
    ecommerce: Ecommerce,
    dashboard: Dashboard,
    scrumboardApp: ScrumboardApp,
    chatApp: ChatApp,
    wall: Wall,
    userList: UserList,
  });
export default reducers;
