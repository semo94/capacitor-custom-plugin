import { WebPlugin } from '@capacitor/core';
import type { ContactsPlugin } from './definitions';

export class ContactsPluginWeb extends WebPlugin implements ContactsPlugin {
  constructor() {
    super({
      name: 'ContactsPlugin',
      platforms: ['web']
    });
  }

  async echo(options: { value: string }): Promise<{ value: string }> {
    console.log('ECHO', options);
    return options;
  }

  async getContacts(filter: string): Promise<{ results: any[] }> {
    console.log('filter: ', filter);
    return {
      results: [{
        firstName: 'Dummy',
        lastName: 'Entry',
        telephone: '123456'
      }]
    };
  }
}

const ContactsPlugin = new ContactsPluginWeb();

export { ContactsPlugin };


