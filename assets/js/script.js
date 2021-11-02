import dropdownMenu from './modules/dropDown';
import menuMobile from './modules/menu-mobile';
import slide from './modules/slide';
import selectWhatAppears from './modules/selectWhatAppears';

const dropMenuInit = dropdownMenu('[data-dropmenu]');
dropMenuInit.init();

const menuMobInit = menuMobile('[data-btnmobile]', '[data-navigationmobile]');
menuMobInit.init();

const change = slide(3000);
change.changeSlide(0);
change.init();

const selectStars = selectWhatAppears('.item-stars');
selectStars.init();
