package com.kwan.bookrentalmanagement;

import androidx.appcompat.app.AppCompatActivity;

import android.content.Intent;
import android.os.Bundle;
import android.view.View;
import android.widget.ImageView;
import android.widget.TextView;
import android.widget.Toast;

import com.bumptech.glide.Glide;
import com.github.clans.fab.FloatingActionButton;
import com.google.android.gms.tasks.OnSuccessListener;
import com.google.firebase.database.DatabaseReference;
import com.google.firebase.database.FirebaseDatabase;
import com.google.firebase.storage.FirebaseStorage;
import com.google.firebase.storage.StorageReference;

public class StaffDetail extends AppCompatActivity {
    TextView detailName, detailEmail, detailPhone, detailGender;
    ImageView detailImage;
    FloatingActionButton deleteButton;
    String key = "";
    String imageURL = "";

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_staff_detail);

        detailName = findViewById(R.id.staffName);
        detailEmail = findViewById(R.id.staffEmail);
        detailPhone = findViewById(R.id.staffPhone);
        detailGender = findViewById(R.id.staffGender);
        detailImage = findViewById(R.id.staffAvatar);
        deleteButton = findViewById(R.id.deleteButton);

        Bundle bundle = getIntent().getExtras();
        if (bundle != null){
            detailName.setText(bundle.getString("Name"));
            detailEmail.setText("Email: " + bundle.getString("Email"));
            detailPhone.setText("Phone: " + bundle.getString("Phone"));
            detailGender.setText("Gender: " + bundle.getString("Gender"));
            key = bundle.getString("Key");
            imageURL = bundle.getString("Avatar");
            Glide.with(this).load(bundle.getString("Image")).placeholder(R.drawable.no_image).into(detailImage);
        }
        deleteButton.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {
                final DatabaseReference reference = FirebaseDatabase.getInstance().getReference("staff");
                reference.child(key).removeValue().addOnSuccessListener(new OnSuccessListener<Void>() {
                        @Override
                    public void onSuccess(Void unused) {
                        Toast.makeText(StaffDetail.this, "Deleted", Toast.LENGTH_SHORT).show();
                        startActivity(new Intent(getApplicationContext(), StaffActivity.class));
                        finish();
                    }
                });
            }
        });
    }
}