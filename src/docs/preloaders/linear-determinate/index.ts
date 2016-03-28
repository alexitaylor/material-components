import Component from 'vue-class-component';

import mdLinearPreloader from '../../../components/linear-preloader';

@Component({
    components: {
        mdLinearPreloader
    },
    template: require('./linear-determinate.html')
})
export default class LinearDeterminatePreloader {
    data() {
        return {
            value: 70
        }
    }
}

