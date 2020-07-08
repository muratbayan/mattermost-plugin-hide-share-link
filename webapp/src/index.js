import manifest from './manifest';
import {addStyle, removeStyle} from './css';

export default class Plugin {
    // eslint-disable-next-line no-unused-vars
    initialize(registry, store) {
        // @see https://developers.mattermost.com/extend/plugins/webapp/reference/

        addStyle('customized-css', `

          .share-link {
            display: none;
          }

          // .search-and-add {
          //   display: none;
          // }

          .invitation-modal-or { 
            display: none !important; 
          } 

        `);
    }

    uninitialize() {
        removeStyle('customized-css');
    }
}

window.registerPlugin(manifest.id, new Plugin());
