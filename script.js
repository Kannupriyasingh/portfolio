var TO_ADDRESS = "imkannupriya5@gmail.com";
function doPost(e){
    try{
        Logger.log(e);
        MailApp.sendEmail(TO_ADDRESS, "contact form submitted", JSON.stringify(e.parameters));
        return ContentService
         .createTextOutput(
             JSON.stringify({"result":"success", "data": JSON.stringify(e.parameters)}))
         .setMimeType(ContentService.MimeType.JSON);
         
    }
    catch(error){
        Logger.log(error);
        return ContentService
        .createTextOutput(
            JSON.stringify({"result":"error", "error": e}))
        .setMimeType(ContentService.MimeType.JSON);
    }
}