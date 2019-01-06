Issues with your device being unauthorized?
1. Go to developer options and "revoke USB debugging authorizations"
2. run "adb kill-server"
3. run "adb start-server"
4. accept the prompt on your device
5. run "adb devices" to confirm that your device is now authorized