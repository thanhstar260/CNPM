package com.kwan.bookrentalmanagement;

import androidx.appcompat.app.AppCompatActivity;

import android.os.Bundle;
import android.widget.ImageView;
import android.widget.TextView;

import com.bumptech.glide.Glide;

public class StaffDetail extends AppCompatActivity {
    TextView detailName, detailEmail, detailPhone, detailGender;
    ImageView detailImage;
    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_staff_detail);

        detailName = findViewById(R.id.staffName);
        detailEmail = findViewById(R.id.staffEmail);
        detailPhone = findViewById(R.id.staffPhone);
        detailGender = findViewById(R.id.staffGender);
        detailImage = findViewById(R.id.staffAvatar);

        Bundle bundle = getIntent().getExtras();
        if (bundle != null){
            detailName.setText(bundle.getString("Name"));
            detailEmail.setText("Email: " + bundle.getString("Email"));
            detailPhone.setText("Phone: " + bundle.getString("Phone"));
            detailGender.setText("Gender: " + bundle.getString("Gender"));
            Glide.with(this).load(bundle.getString("Image")).placeholder(R.drawable.no_image).into(detailImage);
        }
    }
}