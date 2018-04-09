package com.github.liaoheng.reactnativetest;

import android.app.Activity;
import android.os.Bundle;
import android.support.v4.app.FragmentActivity;

import com.facebook.react.ReactActivityDelegate;
import com.facebook.react.ReactNativeHost;

import javax.annotation.Nullable;

/**
 * @author liaoheng
 * @version 2017-08-18 16:32
 */
public class AppCompatReactActivityDelegate extends ReactActivityDelegate {
    public AppCompatReactActivityDelegate(Activity activity,
            @Nullable String mainComponentName) {
        super(activity, mainComponentName);
    }

    public AppCompatReactActivityDelegate(FragmentActivity fragmentActivity,
            @Nullable String mainComponentName) {
        super(fragmentActivity, mainComponentName);
    }

    @Override
    public void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
    }

    @Override
    public void onPause() {
        super.onPause();
    }

    @Override
    public void onResume() {
        super.onResume();
    }

    @Override
    public void onDestroy() {
        super.onDestroy();
    }

    @Override
    public ReactNativeHost getReactNativeHost() {
        return super.getReactNativeHost();
    }

    @Override
    public void loadApp(String appKey) {
        super.loadApp(appKey);
    }
}
