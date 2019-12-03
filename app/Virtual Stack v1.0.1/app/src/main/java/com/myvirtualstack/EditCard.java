package com.myvirtualstack;

import androidx.appcompat.app.AppCompatActivity;

import android.app.Activity;
import android.content.Intent;
import android.os.Bundle;
import android.view.View;
import android.widget.Button;
import android.widget.EditText;
import android.widget.TextView;

public class EditCard extends AppCompatActivity {
    private Button editBtn;

    private String myName;
    private String myCompany;
    private String myAddress;
    private String myPhone;
    private String myEmail;
    private String user;
    private String pass;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_edit_card);

        Bundle cardInfo = getIntent().getExtras();

        TextView t = findViewById(R.id.editMyName);
        t.setText(cardInfo.getString("NAME"));
        t = findViewById(R.id.editMyCompany);
        t.setText(cardInfo.getString("OCCUPATION"));
        t = findViewById(R.id.editMyAddress);
        t.setText(cardInfo.getString("ADDRESS"));
        t = findViewById(R.id.editMyPhone);
        t.setText(cardInfo.getString("NUMBER"));
        t = findViewById(R.id.editMyEmail);
        t.setText(cardInfo.getString("EMAIL"));

        user = cardInfo.getString("USER");
        pass = cardInfo.getString("PASS");

        editBtn = findViewById(R.id.submitBtn);
        editBtn.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {
                Intent returnIntent = new Intent();
                Bundle extra = new Bundle();

                // Connecting EditText
                EditText a = findViewById(R.id.editMyName);
                myName = a.getText().toString();

                a = findViewById(R.id.editMyCompany);
                myCompany = a.getText().toString();

                a = findViewById(R.id.editMyAddress);
                myAddress = a.getText().toString();

                a = findViewById(R.id.editMyPhone);
                myPhone = a.getText().toString();

                a = findViewById(R.id.editMyEmail);
                myEmail = a.getText().toString();

                // API MAGIC GOES HERE
                new Thread(new Runnable(){
                    @Override
                    public void run() {
                        try {
                            API api = new API();
                            String json = api.formBody(myName, myAddress, myPhone, myEmail, myCompany);
                            String response = api.updateCard(user, pass, json);
                            System.out.println(response);
                        }
                        catch (Exception ex) {
                            ex.printStackTrace();
                        }
                    }
                }).start();

                // SETTING UP RETURN INTENT
                extra.putString("NAME", myName);
                returnIntent.putExtras(extra);
                extra.putString("OCCUPATION", myCompany);
                returnIntent.putExtras(extra);
                extra.putString("ADDRESS", myAddress);
                returnIntent.putExtras(extra);
                extra.putString("PHONE", myPhone);
                returnIntent.putExtras(extra);
                extra.putString("EMAIL", myEmail);
                returnIntent.putExtras(extra);

                setResult(Activity.RESULT_OK, returnIntent);
                finish();
            }
        });
    }
}