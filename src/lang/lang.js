import Vue from 'vue'

import fr from "./assets/fr.json";
import jp from "./assets/jp.json";
import sr from "./assets/sr.json";
import en from "./assets/en.json";

import VueI18n from 'vue-i18n';

Vue.use(VueI18n)

const locale = 'fr'

const messages = {
    fr: fr,
    jp: jp,
    sr: sr,
    en: en,
}

const i18n = new VueI18n({
    /** 默认值 */
    locale,
    messages
})

export default i18n