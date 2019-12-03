package com.myvirtualstack;

import androidx.appcompat.app.AppCompatActivity;

import android.content.Intent;
import android.os.Bundle;
import android.view.View;
import android.widget.Button;
import android.widget.EditText;

public class CardCreation extends AppCompatActivity {
    private Button createButton;

    private String user;
    private String pass;
    private String myName;
    private String myOccupation;
    private String myAddress;
    private String myPhone;
    private String myEmail;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_card_creation);

        // Connecting Buttons
        createButton = findViewById(R.id.createBtn);

        // Action Listeners
        createButton.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {
                // COLLECTING INFO FROM LAST PAGE
                Bundle bundleTrain = getIntent().getExtras();

                user = bundleTrain.getString("USER");
                pass = bundleTrain.getString("PASS");

                // Connecting EditText
                EditText a = findViewById(R.id.myName);
                myName = a.getText().toString();
                a = findViewById(R.id.myCompany);
                myOccupation = a.getText().toString();
                a = findViewById(R.id.myAddress);
                myAddress = a.getText().toString();
                a = findViewById(R.id.myPersPhone);
                myPhone = a.getText().toString();
                a = findViewById(R.id.myEmail);
                myEmail = a.getText().toString();

                // API MAGIC GOES HERE
                new Thread(new Runnable(){
                    @Override
                    public void run() {
                        try {
                            API example = new API();
                            // makes the body of the http request but it's in string
                            String json = example.formBody(myName, myAddress, myPhone, myEmail, myOccupation);
                            String response = example.signup(user, pass, json);
                            System.out.println(response);
                        }
                        catch (Exception ex) {
                            ex.printStackTrace();
                        }
                    }
                }).start();

                // SETTING UP INTENT
                Intent intentTrain = new Intent(CardCreation.this, LandingPage.class);
                Bundle extra = new Bundle();

                extra.putString("NAME", myName);
                extra.putString("OCCUPATION", myOccupation);
                extra.putString("ADDRESS", myAddress);
                extra.putString("NUMBER", myPhone);
                extra.putString("EMAIL", myEmail);

                intentTrain.putExtras(extra);

                startActivity(intentTrain);
                finish();
            }
        });
    }
}