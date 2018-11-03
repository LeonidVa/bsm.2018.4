import ReactGA from 'react-ga';

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

        },
        phoneClicked: () => {
            if (!this.isClient()) {
                return null;
            }
            const value = 10000;
            this.ReactGAEvent({category: "contacts", action: "phone_click", value});
            this.yaReachGoal('phone_click', {value});
            this.ReactPixelEventCustom('phone_click', {value})
        },
        emailClicked: () => {
            if (!this.isClient()) {
                return null;
            }
            const value = 10000;
            this.yaReachGoal('email_click', {value});
            this.ReactGAEvent({category: "contacts", action: "email_click", value});
            this.ReactPixelEventCustom('email_click', {value})
        },
        messengerClicked: (targetID) => {
            if (!this.isClient()) {
                return null;
            }
            const value = 10000;
            this.yaReachGoal('messenger_click', {category: "chat", label: targetID, value});
            this.ReactGAEvent({category: "chat", action: "messenger_click", label: targetID, value});
            this.ReactPixelEventCustom('messenger_click', {messenger: targetID, value})
        },
        formSubmit: (targetID) => {
            if (!this.isClient()) {
                return null;
            }
            const value = 20000;
            this.yaReachGoal(targetID, {category: "form", value});
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

    ReactGAEvent(params) {
        try {
            this.ReactGA.event(params);
        } catch (e) {
            console.log('GAEvent call failed', e);
        }
    };

    isClient() {
        return process.browser;
    };

    yaReachGoal(target, params) {
        try {
            const counterId = publicRuntimeConfig.analytics.yaID;
            const paramName = `yaCounter${counterId}`;
            window[paramName].reachGoal(target, params);
        } catch (e) {
            console.log('yaReachGoal call failed', e);
        }
    };

    getMetricsScript() {
        const counterId = publicRuntimeConfig.analytics.yaID;
        return `(function (d, w, c) {
        (w[c] = w[c] || []).push(function() {
            try {
                w.yaCounter${counterId} = new Ya.Metrika2({
                    id:${counterId},
                    clickmap:true,
                    trackLinks:true,
                    accurateTrackBounce:true,
                    webvisor:true,
                    trackHash:true
                });
            } catch(e) { }
        });

        var n = d.getElementsByTagName("script")[0],
            s = d.createElement("script"),
            f = function () { n.parentNode.insertBefore(s, n); };
        s.type = "text/javascript";
        s.async = true;
        s.src = "https://mc.yandex.ru/metrika/tag.js";

        if (w.opera == "[object Opera]") {
            d.addEventListener("DOMContentLoaded", f, false);
        } else { f(); }
    })(document, window, "yandex_metrika_callbacks2");`;
    }

    getMetricsNoscript() {
        return `<div><img src="https://mc.yandex.ru/watch/132186" style="position:absolute; left:-9999px;" alt="" /></div>`;
    }

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



