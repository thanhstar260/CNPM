package com.kwan.bookrentalmanagement;

import android.content.Intent;
import android.os.Bundle;
import android.view.View;
import android.widget.Button;
import androidx.appcompat.app.AppCompatActivity;

public class Main_Screen extends AppCompatActivity implements View.OnClickListener {

    private Button btnBook;
    private Button btnCustomer;
    private Button btnReports;
    private Button btnStaff;
    private Button btnOrders;
    private Button btnSupport;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.main_screen);

        btnBook = findViewById(R.id.btn_book);
        btnCustomer = findViewById(R.id.btn_customer);
        btnReports = findViewById(R.id.btn_reports);
        btnStaff = findViewById(R.id.btn_staff);
        btnOrders = findViewById(R.id.btn_orders);
        btnSupport = findViewById(R.id.btn_support);

        btnBook.setOnClickListener(this);
        btnCustomer.setOnClickListener(this);
        btnReports.setOnClickListener(this);
        btnStaff.setOnClickListener(this);
        btnOrders.setOnClickListener(this);
        btnSupport.setOnClickListener(this);
    }

    @Override
    public void onClick(View v) {
        Intent intent;
        switch (v.getId()) {
            case R.id.btn_book:
                intent = new Intent(Main_Screen.this, Book_List.class);
                startActivity(intent);
                break;
            /*case R.id.btn_customer:
                intent = new Intent(MainActivity.this, KhachActivity.class);
                startActivity(intent);
                break;
            case R.id.btn_reports:
                intent = new Intent(MainActivity.this, ReportActivity.class);
                startActivity(intent);
                break;
            case R.id.btn_staff:
                intent = new Intent(MainActivity.this, NVActivity.class);
                startActivity(intent);
                break;*/
            case R.id.btn_orders:
                intent = new Intent(Main_Screen.this, Order_screen.class);
                startActivity(intent);
                break;
            /*case R.id.btn_support:
                intent = new Intent(MainActivity.this, HTActivity.class);
                startActivity(intent);
                break;*/
        }
    }
}
