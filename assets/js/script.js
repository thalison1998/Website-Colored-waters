import dropdownMenu from './modules/dropDown';
import menuMobile from './modules/menu-mobile';
import slide from './modules/slide';

const dropMenuInit = dropdownMenu('[data-dropmenu]');
dropMenuInit.init();

const menuMobInit = menuMobile('[data-btnmobile]', '[data-navigationmobile]');
menuMobInit.init();

const change = slide();
change.init(2000);
change.changeSlide(0);
