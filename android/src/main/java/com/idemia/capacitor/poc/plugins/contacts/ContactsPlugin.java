package com.idemia.capacitor.poc.plugins.contacts;

import android.util.Log;

public class ContactsPlugin {

    public String echo(String value) {
        Log.i("Echo", value);
        return value;
    }
}
