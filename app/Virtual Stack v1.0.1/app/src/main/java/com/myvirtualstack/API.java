package com.myvirtualstack;


import org.json.JSONException;
import org.json.JSONObject;

import java.io.IOException;
import java.time.format.DateTimeFormatter;
import java.time.LocalDateTime;
import java.util.Base64;

import okhttp3.MediaType;
import okhttp3.OkHttpClient;
import okhttp3.Request;
import okhttp3.RequestBody;
import okhttp3.Response;

public class API
{
    // these two are important! don't forget these variables
    private final OkHttpClient client = new OkHttpClient();
    public static final MediaType JSON = MediaType.get("application/json; charset=utf-8");

    // this will encode the user's username and password in base64
    public String base64encode(String username, String password)
    {
        String credentials = username + ":" + password;
        String encodedString = Base64.getEncoder().encodeToString(credentials.getBytes());
        return encodedString;
    }

    public String parseJSON (String json, String item) throws JSONException
    {
        JSONObject obj = new JSONObject(json);
        String pageName = obj.getJSONObject("businessCard").getString(item);
        return pageName;
    }


    // The http request body but in string format
    public String formBody(String name, String addr, String phone, String email, String occupation){
        return
                "{\"name\": \"" + name + "\", " + " \"address\": " +
                        "\"" + addr + "\", " +
                        "\"phoneNumber\": \"" + phone
                        + "\", \"email\": \"" + email +"\", " + "\"occupation\": \"" + occupation+ "\"}";
    }

    public String createJSON(String name, String addr, String phone, String email, String occupation)
    {
        return
                "{ \"businessCard\": { \"name\": \"" + name + "\", " + " \"address\": " +
                        "\"" + addr + "\", " +
                        "\"phoneNumber\": \"" + phone
                        + "\", \"email\": \"" + email +"\", " + "\"occupation\": \"" + occupation+ "\"}}";
    }

    public String createJSON(String json)
    {
        return "{ \"businessCard\": " + json + "}";
    }


    // signin post request
    public String signin(String username, String password) throws IOException
    {
        String route = "https://virtual-stack.herokuapp.com/api/signin";
        RequestBody reqBody = RequestBody.create(null, new byte[0]);
        // building the http request
        Request request = new Request.Builder()
                .url(route)
                .addHeader("Content-Type", "Application/JSON")
                .addHeader("Authorization", "Basic " + base64encode(username, password))
                .post(reqBody)
                .build();

        // if error occurs
        try (Response response = client.newCall(request).execute()){
            return response.body().string();
        }
    }

    // signup post request
    public String signup(String username, String password, String json) throws IOException
    {
        String route = "https://virtual-stack.herokuapp.com/api/signup";
        // converts the string to json
        RequestBody body = RequestBody.create(json, JSON);
        // building the http request
        Request request = new Request.Builder()
                .url(route)
                .addHeader("Authorization", "Basic " + base64encode(username, password))
                .post(body)
                .build();

        try (Response response = client.newCall(request).execute()){
            return response.body().string();
        }
    }

    // get list of people's information
    public String list(String username, String password) throws IOException
    {
        String route = "https://virtual-stack.herokuapp.com/api/user/list";
        // building the http request
        Request request = new Request.Builder()
                .url(route)
                .addHeader("Authorization", "Basic " + base64encode(username, password))
                .build();

        try (Response response = client.newCall(request).execute()){
            return response.body().string();
        }
    }

    // get list of names
    public String listnames(String username, String password) throws IOException
    {
        String route = "https://virtual-stack.herokuapp.com/api/user/names";
        // building the http request
        Request request = new Request.Builder()
                .url(route)
                .addHeader("Authorization", "Basic " + base64encode(username, password))
                .build();

        try (Response response = client.newCall(request).execute()){
            return response.body().string();
        }
    }

    // update get user's card
    public String getCard(String username, String password) throws IOException
    {
        String route = "https://virtual-stack.herokuapp.com/api/user/card";
        // building the http request
        Request request = new Request.Builder()
                .url(route)
                .addHeader("Authorization", "Basic " + base64encode(username, password))
                .build();

        try (Response response = client.newCall(request).execute()){
            return response.body().string();
        }
    }

    // update card put request
    public String updateCard(String username, String password, String json) throws IOException
    {
        String route = "https://virtual-stack.herokuapp.com/api/user/card";
        // converting string to json
        RequestBody body = RequestBody.create(json, JSON);
        // building the http request
        Request request = new Request.Builder()
                .url(route)
                .addHeader("Authorization", "Basic " + base64encode(username, password))
                .put(body)
                .build();

        try (Response response = client.newCall(request).execute()){
            return response.body().string();
        }
    }

    // delete a business card request
    public String deleteCard(String username, String password, String name) throws IOException
    {
        String route = "https://virtual-stack.herokuapp.com/api/user/list";
        // converts string to json
        RequestBody body = RequestBody.create(name, JSON);
        // building th http request
        Request request = new Request.Builder()
                .url(route)
                .addHeader("Authorization", "Basic " + base64encode(username, password))
                .delete(body)
                .build();

        try (Response response = client.newCall(request).execute()){
            return response.body().string();
        }
    }

    // add a business card post request
    public String addCard(String username, String password, String json) throws IOException
    {
        String route = "https://virtual-stack.herokuapp.com/api/user/list";
        // converts string to json
        RequestBody body = RequestBody.create(json, JSON);
        // building the http request
        Request request = new Request.Builder()
                .header("Authorization", "Basic " + base64encode(username, password))
                .url(route)
                .post(body)
                .build();

        try (Response response = client.newCall(request).execute()){
            return response.body().string();
        }
    }
}
