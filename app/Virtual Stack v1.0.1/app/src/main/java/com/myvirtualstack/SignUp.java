package com.myvirtualstack;

import androidx.appcompat.app.AppCompatActivity;
import android.os.Bundle;
import android.widget.Button;
import android.view.View;
import android.content.Intent;
import android.widget.EditText;

public class SignUp extends AppCompatActivity {
    private Button signupBtn;
    private Button returnBtn;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_sign_up);

        // Collecting button references
        signupBtn = findViewById(R.id.signBtn2);
        returnBtn = findViewById(R.id.signupRtrnBtn);

        // Action Listeners
        signupBtn.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {
                // Collecting EditText references
                Intent intentTrain = new Intent(SignUp.this, CardCreation.class);
                Bundle bundleTrain = new Bundle();

                EditText a = findViewById(R.id.newUser);
                bundleTrain.putString("USER", a.getText().toString());
                a = findViewById(R.id.newPass);
                bundleTrain.putString("PASS", a.getText().toString());

                intentTrain.putExtras(bundleTrain);
                startActivity(intentTrain);
                finish();
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
