package com.myvirtualstack;

import androidx.appcompat.app.AppCompatActivity;

import android.content.Intent;
import android.os.Bundle;
import android.graphics.Bitmap;
import android.view.View;
import android.view.inputmethod.InputMethodManager;
import android.widget.Button;
import android.widget.EditText;
import android.widget.ImageView;
import android.widget.TextView;

import com.google.zxing.BarcodeFormat;
import com.google.zxing.MultiFormatWriter;
import com.google.zxing.common.BitMatrix;
import com.journeyapps.barcodescanner.BarcodeEncoder;


public class CreateQR extends AppCompatActivity
{

    EditText text;
    Button gen_btn;
    ImageView image;
    String text2QR;
    String name;
    String occupation;
    String address;
    String number;
    String email;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_create_qr);
        Intent i = getIntent();
        Bundle b = i.getExtras();

        name = b.getString("NAME");
        occupation = b.getString("OCCUPATION");
        address = b.getString("ADDRESS");
        number = b.getString("NUMBER");
        email = b.getString("EMAIL");

       //text = findViewById(R.id.text);
       //gen_btn = findViewById(R.id.gen_btn);
        image = findViewById(R.id.image);

       //gen_btn.setOnClickListener(new View.OnClickListener() {
           //@Override
           // public void onClick(View v) {
               API api = new API();
                text2QR = api.formBody(name, address, number, email, occupation);
                MultiFormatWriter multiFormatWriter = new MultiFormatWriter();

                try {
                    InputMethodManager imm = (InputMethodManager)getSystemService(INPUT_METHOD_SERVICE);
                    BitMatrix bitMatrix = multiFormatWriter.encode(text2QR, BarcodeFormat.QR_CODE, 400,400);
                    BarcodeEncoder barcodeEncoder = new BarcodeEncoder();
                    Bitmap bitmap = barcodeEncoder.createBitmap(bitMatrix);
                    image.setImageBitmap(bitmap);
                } catch (Exception e){
                    e.printStackTrace();
                }
           }
       //});
   // }
}