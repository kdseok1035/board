package com.example.vuebackboard.util;

// import jakarta.servlet.http.HttpServletRequest;

import javax.servlet.http.HttpServletRequest;

public class Utils {

    public static String getIp(HttpServletRequest req){
        String clientIp = req.getHeader("X-Forwarded-For");

        if (clientIp == null || clientIp.length() == 0 ||
                "unknown".equalsIgnoreCase(clientIp)) {
            clientIp = req.getHeader("Proxy-Client-IP");
        }
        if (clientIp == null || clientIp.length() == 0 ||
                "unknown".equalsIgnoreCase(clientIp)) {
            clientIp = req.getHeader("WL-Proxy-Client-IP");
        }
        if (clientIp == null || clientIp.length() == 0 ||
                "unknown".equalsIgnoreCase(clientIp)) {
            clientIp = req.getHeader("HTTP_CLIENT_IP");
        }
        if (clientIp == null || clientIp.length() == 0 ||
                "unknown".equalsIgnoreCase(clientIp)) {
            clientIp = req.getHeader("HTTP_X_FORWARDED_FOR");
        }
        if (clientIp == null || clientIp.length() == 0 ||
                "unknown".equalsIgnoreCase(clientIp)) {
            clientIp = req.getRemoteAddr();
        }

        return clientIp;
    }
}
