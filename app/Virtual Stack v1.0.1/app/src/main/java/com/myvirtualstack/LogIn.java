package com.myvirtualstack;

import androidx.appcompat.app.AppCompatActivity;
import android.content.Intent;
import android.os.Bundle;
import android.view.View;
import android.widget.Button;
import android.widget.EditText;

public class LogIn extends AppCompatActivity {
    private Button landingpageBtn;
    private Button returnBtn;

    private String user;
    private String pass;
    private String name;
    private String address;
    private String phoneNumber;
    private String email;
    private String occupation;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_log_in);

        // Collecting button references
        landingpageBtn = findViewById(R.id.logBtn2);
        returnBtn = findViewById(R.id.loginRtrnBtn);

        // Action listeners
        landingpageBtn.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {
                // COLLECTING EDITTEXT
                EditText a = findViewById(R.id.user);
                user = a.getText().toString();

                a = findViewById(R.id.pass);
                pass = a.getText().toString();

                // API MAGIC GOES HERE
                new Thread(new Runnable(){
                    @Override
                    public void run() {
                        try {
                            API api = new API();
                            String response = api.signin(user, pass);
                            System.out.println(response);
                            String json = api.getCard(user, pass);
                            System.out.println(json);
                            String json1 = api.createJSON(json);
                            occupation = (api.parseJSON(json1, "occupation"));
                            name = (api.parseJSON(json1, "name"));
                            address = (api.parseJSON(json1, "address"));
                            email = (api.parseJSON(json1, "email"));
                            phoneNumber = (api.parseJSON(json1, "phoneNumber"));

                            // SETTING UP INTENTS
                            Intent intentTrain = new Intent(LogIn.this,LandingPage.class);
                            Bundle bundleTrain = new Bundle();

                            bundleTrain.putString("USER", user);
                            bundleTrain.putString("PASS", pass);
                            bundleTrain.putString("NAME", name);
                            bundleTrain.putString("OCCUPATION", occupation);
                            bundleTrain.putString("ADDRESS", address);
                            bundleTrain.putString("NUMBER", phoneNumber);
                            bundleTrain.putString("EMAIL", email);

                            intentTrain.putExtras(bundleTrain);
                            startActivity(intentTrain);
                            finish();
                        }
                        catch (Exception ex) {
                            ex.printStackTrace();
                        }
                    }
                }).start();
            }
        });
        returnBtn.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {
                finish();
            }
        });
    }
}
