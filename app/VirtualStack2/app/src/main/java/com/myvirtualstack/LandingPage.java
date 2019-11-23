package com.myvirtualstack;

import androidx.appcompat.app.AppCompatActivity;

import android.content.Intent;
import android.os.Bundle;
import android.view.View;
import android.widget.Button;

public class LandingPage extends AppCompatActivity {
    private Button editBtn;
    private Button presentBtn;
    private Button scanBtn;
    private Button contactBtn1;
    private Button contactBtn2;
    private Button allContactsBtn;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_landing_page);

        editBtn = findViewById(R.id.editBtn);
        presentBtn = findViewById(R.id.presentBtn);
        scanBtn = findViewById(R.id.scanBtn);
        contactBtn1 = findViewById(R.id.contact1Btn);
        contactBtn2 = findViewById(R.id.contact2Btn);
        allContactsBtn = findViewById(R.id.contactsBtn);

        editBtn.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {
            }
        });
        presentBtn.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {
                startActivity(new Intent(LandingPage.this, CreateQR.class));
            }
        });
        scanBtn.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {
                startActivity(new Intent(LandingPage.this, ScanQR.class));
            }
        });
        contactBtn1.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {
            }
        });
        contactBtn2.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {
            }
        });
        allContactsBtn.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {
            }
        });
    }
}