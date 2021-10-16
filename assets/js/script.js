import dropdownMenu from './modules/dropDown';
import menuMobile from './modules/menu-mobile';
import slide from './modules/slide';
import showAndHiddenText from './modules/hideAndShowText'

const dropMenuInit = dropdownMenu('[data-dropmenu]');
dropMenuInit.init();

const menuMobInit = menuMobile('[data-btnmobile]', '[data-navigationmobile]');
menuMobInit.init();

const change = slide();

const diferente = showAndHiddenText('.diferente');

