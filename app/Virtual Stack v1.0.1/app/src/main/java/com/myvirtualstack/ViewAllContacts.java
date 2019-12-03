package com.myvirtualstack;

import androidx.appcompat.app.AppCompatActivity;

import android.os.Bundle;

public class ViewAllContacts extends AppCompatActivity {
    private String [] contactNames;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_view_all_contacts);
    }
}