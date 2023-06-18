package com.kwan.bookrentalmanagement;

import android.os.Bundle;

import androidx.annotation.NonNull;
import androidx.annotation.Nullable;
import androidx.fragment.app.Fragment;
import androidx.fragment.app.FragmentManager;
import androidx.lifecycle.Lifecycle;
import androidx.viewpager2.adapter.FragmentStateAdapter;

public class Order_Frag_Adapter extends FragmentStateAdapter {


    public Order_Frag_Adapter(@NonNull FragmentManager fragmentManager, @NonNull Lifecycle lifecycle) {
        super(fragmentManager, lifecycle);
    }

    @NonNull
    @Override
    public Fragment createFragment(int position) {
        switch (position)
        {
            case 0:
                return new Order_WaitingList();

            case 1:
                return new Order_PickingList();

            case 2:
                return new Order_CompleteList();

            case 3:
                return new Order_CancelList();

            default:
                return new Order_WaitingList();
        }
    }

    @Override
    public int getItemCount() {
        return 4;
    }

    @Nullable
    public CharSequence getPageTitle(int position)
    {
        String title = "";
        switch (position)
        {
            case 0:
                title = "Waiting";
                break;
            case 1:
                title = "Picking";
                break;
            case 2:
                title = "Complete";
                break;
            case 3:
                title = "Cancel";
                break;
        }
        return title;
    }


}
