package com.myvirtualstack;

import androidx.appcompat.app.AppCompatActivity;

import android.app.Activity;
import android.content.Intent;
import android.os.Bundle;
import android.view.View;
import android.widget.Button;
import android.widget.TextView;

public class LandingPage extends AppCompatActivity {
    private Button editBtn;
    private Button presentBtn;
    private Button scanBtn;
    private Button allContactsBtn;

    private String user;
    private String pass;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_landing_page);

        editBtn = findViewById(R.id.editBtn);
        presentBtn = findViewById(R.id.presentBtn);
        scanBtn = findViewById(R.id.scanBtn);
        allContactsBtn = findViewById(R.id.contactsBtn);

        // FILL IN CARD INFO
        Bundle cardInfo = getIntent().getExtras();

        TextView temp = findViewById(R.id.myCardName);
        temp.setText(cardInfo.getString("NAME"));
        temp = findViewById(R.id.myCardCompany);
        temp.setText(cardInfo.getString("OCCUPATION"));
        temp = findViewById(R.id.myCardAddress);
        temp.setText(cardInfo.getString("ADDRESS"));
        temp = findViewById(R.id.myCardNumber);
        temp.setText(cardInfo.getString("NUMBER"));
        temp = findViewById(R.id.myCardEmail);
        temp.setText(cardInfo.getString("EMAIL"));

        user = cardInfo.getString("USER");
        pass = cardInfo.getString("PASS");

        // BUTTONS
        editBtn.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {
                Intent i = new Intent(LandingPage.this, EditCard.class);
                Bundle b = new Bundle();

                // COLLECTING PERSONAL INFO
                b.putString("USER", user);
                b.putString("PASS", pass);

                TextView t = findViewById(R.id.myCardName);
                b.putString("NAME", t.getText().toString());
                t = findViewById(R.id.myCardCompany);
                b.putString("OCCUPATION", t.getText().toString());
                t = findViewById(R.id.myCardAddress);
                b.putString("ADDRESS", t.getText().toString());
                t = findViewById(R.id.myCardNumber);
                b.putString("NUMBER", t.getText().toString());
                t = findViewById(R.id.myCardEmail);
                b.putString("EMAIL", t.getText().toString());

                i.putExtras(b);
                startActivityForResult(i,1);
            }
        });
        presentBtn.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {
                Intent i = new Intent(LandingPage.this, CreateQR.class);
                Bundle b = new Bundle();

                // COLLECTING PERSONAL INFO
                TextView t = findViewById(R.id.myCardName);
                b.putString("NAME", t.getText().toString());
                t = findViewById(R.id.myCardCompany);
                b.putString("OCCUPATION", t.getText().toString());
                t = findViewById(R.id.myCardAddress);
                b.putString("ADDRESS", t.getText().toString());
                t = findViewById(R.id.myCardNumber);
                b.putString("NUMBER", t.getText().toString());
                t = findViewById(R.id.myCardEmail);
                b.putString("EMAIL", t.getText().toString());

                i.putExtras(b);
                startActivity(i);
            }
        });
        scanBtn.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {
                Intent i = new Intent(LandingPage.this, ScanQR.class);
                Bundle b = new Bundle();

                b.putString("USER", user);
                b.putString("PASS", pass);

                i.putExtras(b);
                startActivity(i);
            }
        });
        allContactsBtn.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {
                // API
                new Thread(new Runnable(){
                    @Override
                    public void run() {
                        try {
                            API api = new API();
                            Intent i = new Intent(LandingPage.this, ViewAllContacts.class);
                            Bundle b = new Bundle();

                            b.putString("USER", user);
                            b.putString("PASS", pass);
                            String response = api.listnames(user, pass);
                            System.out.println(response);
                            b.putString("STRING_LIST", response);
                            i.putExtras(b);
                            startActivity(i);
                        }
                        catch (Exception ex) {
                            ex.printStackTrace();
                        }
                    }
                }).start();
            }
        });
    }
    @Override
    public void onActivityResult(int requestCode, int resultCode, Intent data) {
        super.onActivityResult(requestCode, resultCode, data);
        switch(requestCode) {
            case (1) : {
                if (resultCode == Activity.RESULT_OK) {
                    TextView t = findViewById(R.id.myCardName);
                    t.setText(data.getStringExtra("NAME"));
                    t = findViewById(R.id.myCardCompany);
                    t.setText(data.getStringExtra("OCCUPATION"));
                    t = findViewById(R.id.myCardAddress);
                    t.setText(data.getStringExtra("ADDRESS"));
                    t = findViewById(R.id.myCardNumber);
                    t.setText(data.getStringExtra("PHONE"));
                    t = findViewById(R.id.myCardEmail);
                    t.setText(data.getStringExtra("EMAIL"));
                    break;
                }
            }
        }
    }
}