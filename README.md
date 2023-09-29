# Bulk Remove People from Google Spaces

This Script Helps you to remove multiple people at once from the google spaces using the Google Spaces API. We will be accessing these APIs from the Google App Script.

### Steps to Follow to Remove People in Bulk
1. Go To [script.google.com](https://script.google.com/ "script.google.com")
2. Click on New Project
3. Copy past the code from this repository to Code.gs
4. Click on project settings, and in the General settings Section Click on Show "appsscript.json" manifest file in editor
5. Go back to editor and copy paste the appscript.json file from the repo to the editor.
6. Now in Line 69, Replace the "SHEET_ID" with the ID of the Google Sheets, where you have all the email id's to remove from the Google Spaces. 

   Eg: If the Google Sheets Public Link is https://docs.google.com/spreadsheets/d/1R-SuhWasdfhgc-OT1W-_xkRXZNLIasdf7JixBykbXJiU/edit. 

   Here the Sheet ID is **1R-SuhWasdfhgc-OT1W-xkRXZNLIasdf7JixBykbXJiU**
 
7.  Now in Line 70, Replace the "GOOGLE_SPACES_ID" with the Google Spaces ID. To Find the ID Follow the below steps
   - Open [chat.google.com](https://chat.google.com/ "chat.google.com") in a new tab.
   - Open the Google Spaces where you want to remove People
   - After Opening the Spaces, Copy the URL in the URL Bar.
   - If Google Spaces URL is https://mail.google.com/chat/u/0/#chat/space/AhjATUfoBga
 Then you Google Spaces ID is **AhjATUfoBga**
 
8. After Completing all the above steps, Click on Run Button and make sure the main function is choosen as the entry point. 

The IDs will be removed one after another sequently, If something goes wrong and the script stops, Remove the Email ID from the Google Sheets which was successfully removed and rerun the script.
