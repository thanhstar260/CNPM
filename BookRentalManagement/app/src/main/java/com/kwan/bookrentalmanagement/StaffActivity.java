package com.kwan.bookrentalmanagement;

import androidx.annotation.NonNull;
import androidx.appcompat.app.AlertDialog;
import androidx.appcompat.app.AppCompatActivity;
import androidx.recyclerview.widget.GridLayoutManager;
import androidx.recyclerview.widget.RecyclerView;
import androidx.appcompat.widget.SearchView;

import android.content.Intent;
import android.os.Bundle;
import android.view.View;
import com.google.android.material.floatingactionbutton.FloatingActionButton;
import com.google.firebase.database.DataSnapshot;
import com.google.firebase.database.DatabaseError;
import com.google.firebase.database.DatabaseReference;
import com.google.firebase.database.FirebaseDatabase;
import com.google.firebase.database.ValueEventListener;

import java.util.ArrayList;
import java.util.List;
import java.util.Locale;

public class StaffActivity extends AppCompatActivity {
    FloatingActionButton fab;
    List<StaffData> staffDataList;
    RecyclerView recyclerView;
    DatabaseReference databaseReference;
    ValueEventListener eventListener;
    SearchView  searchView;
    StaffAdapter adapter;
    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_staff);
        fab = findViewById(R.id.add_button);
        recyclerView = findViewById(R.id.recyclerView);
        searchView = findViewById(R.id.staff_searchView);
        searchView.clearFocus();

        GridLayoutManager gridLayoutManager = new GridLayoutManager(StaffActivity.this, 1);
        recyclerView.setLayoutManager(gridLayoutManager);


        AlertDialog.Builder builder = new AlertDialog.Builder(StaffActivity.this);
        builder.setCancelable(false);
        builder.setView(R.layout.progress_layout);
        AlertDialog dialog = builder.create();
        dialog.show();

        staffDataList = new ArrayList<>();
        adapter = new StaffAdapter(StaffActivity.this,staffDataList);
        recyclerView.setAdapter(adapter);

        databaseReference = FirebaseDatabase.getInstance().getReference("staff");
        dialog.show();

        eventListener = databaseReference.addValueEventListener(new ValueEventListener() {
            @Override
            public void onDataChange(@NonNull DataSnapshot snapshot) {
                staffDataList.clear();
                for (DataSnapshot itemSnapshot: snapshot.getChildren()){
                    StaffData staffData = itemSnapshot.getValue(StaffData.class);
                    staffData.setKey(itemSnapshot.getKey());
                    staffDataList.add(staffData);
                }
                adapter.notifyDataSetChanged();
                dialog.dismiss();
            }

            @Override
            public void onCancelled(@NonNull DatabaseError error) {
                dialog.dismiss();
            }
        });

        searchView.setOnQueryTextListener(new SearchView.OnQueryTextListener() {
            @Override
            public boolean onQueryTextSubmit(String query) {
                return false;
            }

            @Override
            public boolean onQueryTextChange(String newText) {
                //pending
                searchList(newText);
                return true;
            }
        });
        fab.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {
                Intent intent = new Intent(StaffActivity.this, Add_Staff.class);
                startActivity(intent);
            }
        });
    }
    public void searchList(String text){
        ArrayList<StaffData> searchList = new ArrayList<>();
        for (StaffData staff: staffDataList){
            if (staff.getName().toLowerCase().contains(text.toLowerCase()))
                searchList.add(staff);
        }
        adapter.searchStaffList(searchList);
    }
}