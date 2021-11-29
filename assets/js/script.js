import dropdownMenu from './modules/dropDown';
import menuMobile from './modules/menu-mobile';
import slide from './modules/slide';
import selectWhatAppears from './modules/selectWhatAppears';
import signaling from './modules/signaling';
import apiMap from './modules/apiMap';
import scrollDownUntilAppears from './modules/scrollDownUntilAppears';

const dropMenuInit = dropdownMenu('[data-dropmenu]');
dropMenuInit.init();

const menuMobInit = menuMobile('[data-btnmobile]', '[data-navigationmobile]');
menuMobInit.init();

const change = slide(3000);
change.init();
change.changeSlide(0);

const selectStars = selectWhatAppears('.menu-item img');
selectStars.init();

const arrowDirection = signaling();
arrowDirection.init();

const initAppears = scrollDownUntilAppears('[data-appear]');
initAppears.init();

apiMap();
