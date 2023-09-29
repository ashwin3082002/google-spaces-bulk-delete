function getEmailsFromSheet(sheetId) {
  var spreadsheetId = sheetId; // Replace with the ID of your Google Sheet
  var sheetName = 'Sheet1'; // Replace with the name of the sheet you want to read

  var sheet = SpreadsheetApp.openById(spreadsheetId).getSheetByName(sheetName);
  var data = sheet.getDataRange().getValues();
  
  
  var emails = [];
  
  // Assuming emails are in the first column (column A)
  for (var i = 0; i < data.length; i++) {
    var email = data[i][0]; // Adjust the column index if needed
    emails.push(email);
  }
  
  return emails
}

function extractMemberId(responseString) {
  // Split the responseString by '/'
  var parts = responseString.split('/');
  
  // The member ID is the last part of the split string
  var memberId = parts[parts.length - 1];
  
  return memberId;
}

function getMemberID(email,spacesId){
  var url = "https://chat.googleapis.com/v1/spaces/"+spacesId+"/members/"+email;
  var options = {
    'method': 'GET',
    'muteHttpExceptions': true,
    'headers': {
      'Authorization': 'Bearer ' + ScriptApp.getOAuthToken()
    }
  };

  var response = UrlFetchApp.fetch(url,options);
  var content = response.getContentText();
  var jsonResponse = JSON.parse(content);
  return jsonResponse
}

function deleteMember(memberId,spacesId){
  var url = "https://chat.googleapis.com/v1/spaces/"+spacesId+"/members/"+memberId;
  var options = {
    'method': 'DELETE',
    'muteHttpExceptions': true,
    'headers': {
      'Authorization': 'Bearer ' + ScriptApp.getOAuthToken()
    }
  };
  var response = UrlFetchApp.fetch(url,options);
  var responseCode = response.getResponseCode();
  var content = response.getContentText();
  var jsonResponse = JSON.parse(content);

  if(responseCode == 200 ){
    return true
  }
  else{
    return false
  }
}

function main(){
  var emails = getEmailsFromSheet("SHEET_ID");
  var spacesId = "GOOGLE_SPACES_ID";

  for(i in emails){
    var resp = getMemberID(emails[i],spacesId);

    if(resp['state']=="NOT_A_MEMBER"){
      Logger.log("Email Not Found: "+emails[i])
    }
    else{
      var memberId = extractMemberId(resp['name']);
      var status = deleteMember(memberId,spacesId);
      if(status){
        Logger.log("Removed Email: "+emails[i])
      }
      else{
        Logger.log("Something Went Wrong while removing.")
      }
    }
    
  }
}
