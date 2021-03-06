import Component from 'vue-class-component';

import mdTabs from '../../components/tabs';
import mdTab from '../../components/tab';

@Component({
    props: {
        basePath: {
            type: String,
            required: true
        }
    },
    components: {   
        mdTabs,
        mdTab
    },
    template: require('./doc-tabs.html')
})
export default class DocTab {
    private _slotContents: any;

    data() {
        return {
            active: 'showcase'
        }
    }
    hasSlot(name = 'default') {
        return name in this._slotContents;
    }
}