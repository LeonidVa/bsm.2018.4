import ReactGA from 'react-ga';
import ym from 'react-yandex-metrika';

import getConfig from 'next/config';
import ReactPixel from 'react-facebook-pixel';

const {publicRuntimeConfig = {}} = getConfig();
//facebook pixel 196710264445109
// vk VK-RTRG-228914-6kyV2
function StatInstance() {
  const self = this;
  self.ReactGA = ReactGA;
  self.ReactGAEvent = (params) => {
    try {
      self.ReactGA.event(params);
    } catch (e) {
      console.log('GAEvent call failed', e);
    }
  };
  self.ReactPixel = ReactPixel;
  self.ReactPixelEventCustom = (event, params) => {
    try {
      self.ReactPixel.trackCustom(event, params);
    } catch (e) {
      console.log('ReactPixelEventCustom call failed', e);
    }
  };
  self.ym = (method, target, params) => {
    try {
      ym(method, target, params);
    } catch (e) {
      console.log('ym call failed', e);
    }
  };

  self.init = () => {
    if (!self.isClient()) {
      return null;
    }
    /* yandex is initialized in <head> */

    /* google */
    let gaID = 'UA-000000-00';
    if (publicRuntimeConfig.production) {
      gaID = publicRuntimeConfig.analytics.gaID;
    }
    this.ReactGA.initialize(gaID, {
      gaOptions: {
        currency: 'RUB',
        country: 'RU',
      }
    });

    /* fb */
    let fbpID = '000000000';
    if (publicRuntimeConfig.production) {
      fbpID = publicRuntimeConfig.analytics.fbpID;
    }
    self.ReactPixel.init(fbpID);

  };

  self.isClient = () => {
    if (typeof window !== 'undefined') {
      return true;
    }
    return false;
  };

  self.triggerTarget = {};

  self.triggerTarget.pageView = (url) => {
    if (!self.isClient()) {
      return null;
    }
    self.ReactGA.pageview(url); //обычно window.location.pathname + window.location.search
    self.ReactPixel.pageView();
    self.ym('hit', url);
  };
  self.triggerTarget.phoneClicked = () => {
    if (!self.isClient()) {
      return null;
    }
    const value = 10000;
    self.ReactGAEvent({category: "contacts", action: "phone_click", value});
    self.ym('reachGoal', 'phone_click', {value});
    self.ReactPixelEventCustom('phone_click', {value})
  };
  self.triggerTarget.emailClicked = () => {
    if (!self.isClient()) {
      return null;
    }
    const value = 10000;
    self.ym('reachGoal', 'email_click', {value});
    self.ReactGAEvent({category: "contacts", action: "email_click", value});
    self.ReactPixelEventCustom('email_click', {value})
  };
  self.triggerTarget.messengerClicked = (targetID) => {
    if (!self.isClient()) {
      return null;
    }
    const value = 10000;
    self.ym('reachGoal', 'messenger_click', {category: "chat", label: targetID, value});
    self.ReactGAEvent({category: "chat", action: "messenger_click", label: targetID, value});
    self.ReactPixelEventCustom('messenger_click', {messenger: targetID, value})
  };
  self.triggerTarget.formSubmit = (targetID) => {
    if (!self.isClient()) {
      return null;
    }
    const value = 20000;
    self.ym('reachGoal', targetID, {category: "form", value});
    self.ReactGAEvent({category: "form", action: targetID, value});
    self.ReactPixelEventCustom(targetID, {category: "form", value})
  };


  self.init();
}

const stat = new StatInstance();
export default stat;


/* Функция может принимать любое количество параметров */
/*
export default function triggerTarget(targetID) {
    console.log('triggered target "' + targetID + '"');
    try {
        // код отправки аналитики
        // ReactGA.ga(...arguments);
        // или просто ga('create', 'UA-XXXXX-Y', 'auto'); или ga(...arguments);
    }
    catch (e) {
        // инструкции для работы с ошибками
    }
}
*/