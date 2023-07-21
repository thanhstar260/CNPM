package com.kwan.bookrentalmanagement;

import android.content.Intent;
import android.os.Bundle;
import android.view.Menu;
import android.view.MenuInflater;
import android.view.MenuItem;

import androidx.annotation.NonNull;
import androidx.appcompat.app.AppCompatActivity;
import androidx.appcompat.widget.SearchView;
import androidx.appcompat.widget.Toolbar;
import androidx.viewpager.widget.ViewPager;
import androidx.viewpager2.widget.ViewPager2;

import com.google.android.material.bottomnavigation.BottomNavigationView;
import com.google.android.material.tabs.TabLayout;
import com.google.android.material.tabs.TabLayoutMediator;

public class Order_screen extends AppCompatActivity {

    SearchView searchView;

    private TabLayout mTabLayout;
    private ViewPager2 mViewPager;
    BottomNavigationView bottomNavigationView;
    Toolbar toolbar;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.order_screen);

        bottomNavigationView = findViewById(R.id.bottom_nav);

        bottomNavigationView.setSelectedItemId(R.id.bottom_nav_order);

        bottomNavigationView.setOnItemSelectedListener(item -> {
            switch (item.getItemId()) {
                case R.id.bottom_nav_book_list:
                    startActivity(new Intent(this, Book_List.class));
                    overridePendingTransition(0,0);
                    finish();
                    return true;
                case R.id.bottom_nav_order:
                    return true;

            }
            return false;
        });

        toolbar = (Toolbar) findViewById(R.id.order_toolsbar);
        toolbar.setTitle(""); //Dummy title
        setSupportActionBar(toolbar);
        toolbar.setTitle("Order");

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
                        case 3:
                            tab.setText("Expired");
                    }
                }).attach();

    }

    @Override
    public boolean onCreateOptionsMenu(Menu menu){
        MenuInflater inflater = getMenuInflater();
        inflater.inflate(R.menu.order_menu,menu);

        MenuItem.OnActionExpandListener onActionExpandListener = new MenuItem.OnActionExpandListener() {
            @Override
            public boolean onMenuItemActionExpand(@NonNull MenuItem item) {
                return true;
            }

            @Override
            public boolean onMenuItemActionCollapse(@NonNull MenuItem item) {
                return true;
            }
        };

        menu.findItem(R.id.search).setOnActionExpandListener(onActionExpandListener);
        searchView = (SearchView) menu.findItem(R.id.search).getActionView();

        searchView.setQueryHint("Search...");

        return super.onCreateOptionsMenu(menu);
    }


}
