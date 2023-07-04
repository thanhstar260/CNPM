package com.kwan.bookrentalmanagement;

import android.os.Bundle;

import androidx.appcompat.app.AppCompatActivity;
import androidx.viewpager.widget.ViewPager;
import androidx.viewpager2.widget.ViewPager2;

import com.google.android.material.tabs.TabLayout;
import com.google.android.material.tabs.TabLayoutMediator;

public class Order_screen extends AppCompatActivity {

    private TabLayout mTabLayout;
    private ViewPager2 mViewPager;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.order_screen);

        mTabLayout = findViewById(R.id.tab);
        mViewPager = findViewById(R.id.pager);

        Order_Frag_Adapter order_frag_adapter = new Order_Frag_Adapter(getSupportFragmentManager(), getLifecycle());

        mViewPager.setAdapter(order_frag_adapter);

        new TabLayoutMediator(mTabLayout, mViewPager,
                (tab, position) -> {
                    switch (position) {
                        case 0:
                            tab.setText("Waiting");
                            break;
                        case 1:
                            tab.setText("Renting");
                            break;
                        case 2:
                            tab.setText("Complete");
                            break;
                    }
                }).attach();

    }
}
