package com.kwan.bookrentalmanagement;

import androidx.activity.result.ActivityResult;
import androidx.activity.result.ActivityResultCallback;
import androidx.activity.result.ActivityResultLauncher;
import androidx.activity.result.contract.ActivityResultContracts;
import androidx.appcompat.app.AppCompatActivity;

import android.app.Activity;
import android.content.Intent;
import android.os.Bundle;
import android.view.View;
import android.widget.Button;
import android.widget.EditText;
import android.widget.RadioButton;
import android.widget.RadioGroup;
import android.widget.Toast;

import com.google.firebase.database.DatabaseReference;
import com.google.firebase.database.FirebaseDatabase;

import java.util.HashMap;
import java.util.Map;

public class Add_Staff extends AppCompatActivity {
    Button button;
    EditText uploadName, uploadEmail, uploadPhone;
    String Gender;
    private DatabaseReference databaseReference;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_add_staff);

        uploadName = findViewById(R.id.addName);
        uploadEmail = findViewById(R.id.addEmail);
        uploadPhone = findViewById(R.id.addPhone);
        button = findViewById(R.id.add_button);
        databaseReference = FirebaseDatabase.getInstance().getReference("staff");
        ActivityResultLauncher<Intent> activityResultLauncher = registerForActivityResult(
                new ActivityResultContracts.StartActivityForResult(),
                new ActivityResultCallback<ActivityResult>() {
                    @Override
                    public void onActivityResult(ActivityResult result) {
                        if (result.getResultCode() == Activity.RESULT_OK ){
                            Intent data = result.getData();
                        }
                    }
                }
        );
        button.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {
                RadioGroup radioGroup = findViewById(R.id.addGender);
                RadioButton radioButton;
                int radioId = radioGroup.getCheckedRadioButtonId();
                radioButton = findViewById(radioId);
                Gender = radioButton.getText().toString();
                uploadData();
            }
        });

    }
    private void uploadData(){
        String name = uploadName.getText().toString();
        String email = uploadEmail.getText().toString();
        String phone = uploadPhone.getText().toString();
        Map<String, Object> addStaff = new HashMap<>();
        addStaff.put("Name",name);
        addStaff.put("Email",email);
        addStaff.put("Phone",phone);
        addStaff.put("Gender",Gender);
        String staffID = databaseReference.push().getKey();
        databaseReference.child(staffID).setValue(addStaff).addOnSuccessListener(aVoid -> {
                    // Book data uploaded successfully
                    Toast.makeText(Add_Staff.this, "Staff added successfully", Toast.LENGTH_SHORT).show();
                    finish();
                })
                .addOnFailureListener(e -> {
                    // Error occurred while uploading book data
                    Toast.makeText(Add_Staff.this, "Failed to add staff: " + e.getMessage(), Toast.LENGTH_SHORT).show();
                });

    }
}