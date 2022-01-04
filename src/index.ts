import { registerPlugin } from '@capacitor/core';

import { ContactsPlugin } from './definitions';

const ContactsPlugin = registerPlugin<ContactsPlugin>('ContactsPlugin', {
  web: () => import('./web').then(m => new m.ContactsPluginWeb()),
});

export * from './definitions';
export { ContactsPlugin };
