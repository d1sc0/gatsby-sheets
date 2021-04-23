<!-- AUTO-GENERATED-CONTENT:START (STARTER) -->

<h1>
Disco's Google Sheets
</h1>

This is an experiemnt made with Gatsby to explore building a simple static website that pulls content/or data from a google sheet and presents it to a user.

In testing this template I addtionally setup a script in the google sheet which would trigger build/deploy of the site when content was updated (using netlify webhook)

'''
function onOpen() {
  var ui = SpreadsheetApp.getUi();
  // Or DocumentApp or FormApp.
  ui.createMenu('Netlify')
      .addItem('Build', 'postToWebhook')
      .addToUi();
}

function postToWebhook() {

var options = {
  'method' : 'post',
  //'contentType': 'application/json',
  // Convert the JavaScript object to a JSON string.
  //'payload' : JSON.stringify(data)
};
  
UrlFetchApp.fetch('https://api.netlify.com/build_hooks/xxxxxxxxxxxxxx', options);
}
'''
