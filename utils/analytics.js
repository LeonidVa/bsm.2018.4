import ReactGA from 'react-ga';
import ym from 'react-yandex-metrika';

import getConfig from 'next/config';
import ReactPixel from 'react-facebook-pixel';

const {publicRuntimeConfig = {}} = getConfig();
//facebook pixel 196710264445109
// vk VK-RTRG-228914-6kyV2
class StatInstance {
    ReactPixel = ReactPixel;
    ReactGA = ReactGA;
    triggerTarget = {
        pageView: (url) => {
            if (!this.isClient()) {
                return null;
            }
            this.ReactGA.pageview(url); //обычно window.location.pathname + window.location.search
            this.ReactPixel.pageView();
            this.ym('hit', url);
        },
        phoneClicked: () => {
            if (!this.isClient()) {
                return null;
            }
            const value = 10000;
            this.ReactGAEvent({category: "contacts", action: "phone_click", value});
            this.ym('reachGoal', 'phone_click', {value});
            this.ReactPixelEventCustom('phone_click', {value})
        },
        emailClicked: () => {
            if (!this.isClient()) {
                return null;
            }
            const value = 10000;
            this.ym('reachGoal', 'email_click', {value});
            this.ReactGAEvent({category: "contacts", action: "email_click", value});
            this.ReactPixelEventCustom('email_click', {value})
        },
        messengerClicked: (targetID) => {
            if (!this.isClient()) {
                return null;
            }
            const value = 10000;
            this.ym('reachGoal', 'messenger_click', {category: "chat", label: targetID, value});
            this.ReactGAEvent({category: "chat", action: "messenger_click", label: targetID, value});
            this.ReactPixelEventCustom('messenger_click', {messenger: targetID, value})
        },
        formSubmit: (targetID) => {
            if (!this.isClient()) {
                return null;
            }
            const value = 20000;
            this.ym('reachGoal', targetID, {category: "form", value});
            this.ReactGAEvent({category: "form", action: targetID, value});
            this.ReactPixelEventCustom(targetID, {category: "form", value})
        },
    };

    ReactPixelEventCustom(event, params) {
        try {
            this.ReactPixel.trackCustom(event, params);
        } catch (e) {
            console.log('ReactPixelEventCustom call failed', e);
        }
    };

    ym(method, target, params) {
        try {
            ym(method, target, params);
        } catch (e) {
            console.log('ym call failed', e);
        }
    };

    ReactGAEvent(params) {
        try {
            this.ReactGA.event(params);
        } catch (e) {
            console.log('GAEvent call failed', e);
        }
    };

    isClient() {
        if (typeof window !== 'undefined' && window !== null && window !== false) {
            return true;
        }
        return false;
    };

    init() {
        if (!this.isClient()) {
            return null;
        }
        /* yandex is initialized in <head> */

        /* google */
        let gaID = 'UA-000000-00';
        if (publicRuntimeConfig.runtime.production) {
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
        if (publicRuntimeConfig.runtime.production) {
            fbpID = publicRuntimeConfig.analytics.fbpID;
        }
        this.ReactPixel.init(fbpID);
    }
}


const stat = new StatInstance();
stat.init();
export default stat;



