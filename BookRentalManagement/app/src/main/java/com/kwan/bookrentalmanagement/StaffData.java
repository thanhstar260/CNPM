package com.kwan.bookrentalmanagement;

public class StaffData {
    private String Name;
    private String Email;
    private String Phone;
    private String Gender;
    private String Avatar;
    private String key;

    public String getKey() {
        return key;
    }

    public void setKey(String key) {
        this.key = key;
    }

    public StaffData(String name, String email, String phone, String gender, String avatar) {
        Name = name;
        Email = email;
        Phone = phone;
        Gender = gender;
        Avatar = avatar;
    }

    public String getName() {
        return Name;
    }

    public String getEmail() {
        return Email;
    }

    public String getPhone() {
        return Phone;
    }

    public String getGender() {
        return Gender;
    }

    public String getAvatar() { return Avatar; }

    public StaffData(){

    }


}
