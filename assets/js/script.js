import dropdownMenu from './modules/dropDown';
import menuMobile from './modules/menu-mobile';

const menuMob = menuMobile('[data-btnmobile]','[data-navigationmobile]');
menuMob.init()
const dropMenu = dropdownMenu("[data-dropmenu]");
dropMenu.init()


