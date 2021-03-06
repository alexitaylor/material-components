import Component from 'vue-class-component';

import mdCard from '../../../components/card';
import mdIcon from '../../../components/icon';

import waveEffect from '../../../directives/wave-effect';

@Component({
    directives: {
        waveEffect
    },
    components: {
        mdCard,
        mdIcon
    },
    template: require('./reveal.html')
})
export default class RevealCard {
}

