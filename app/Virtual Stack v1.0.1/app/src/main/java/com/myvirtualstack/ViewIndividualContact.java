package com.myvirtualstack;

import androidx.appcompat.app.AppCompatActivity;

import android.content.Intent;
import android.os.Bundle;
import android.view.View;
import android.widget.Button;
import android.widget.TextView;

public class ViewIndividualContact extends AppCompatActivity {
    private String cardName;
    private String cardCompany;
    private String cardAddress;
    private String cardPhone;
    private String cardEmail;
    private Button returnBtn;
    private String user;
    private String pass;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_view_individual_contact);

        returnBtn = findViewById(R.id.indiContactReturn);

        Intent i = getIntent();
        Bundle b = i.getExtras();

        user = b.getString("USER");
        pass = b.getString("PASS");

        cardName = b.getString("NAME");
        cardCompany = b.getString("OCCUPATION");
        cardAddress = b.getString("ADDRESS");
        cardPhone = b.getString("NUMBER");
        cardEmail = b.getString("EMAIL");

        TextView tv = findViewById(R.id.viewName);
        tv.setText(cardName);
        tv = findViewById(R.id.viewCompany);
        tv.setText(cardCompany);
        tv = findViewById(R.id.viewAddress);
        tv.setText(cardAddress);
        tv = findViewById(R.id.viewNumber);
        tv.setText(cardPhone);
        tv = findViewById(R.id.viewEmail);
        tv.setText(cardEmail);

        returnBtn.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {
                finish();
            }
        });
    }
}
