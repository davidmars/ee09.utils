import extension from "./extension.js";

/**
 * A partir d'un fichier ou d'un type mime tente de renvoyer une icône mdi appropriée
 * @return {string}
 * @param {File|String} fileOrFileName
 * @param {string|null} mime
 */
export default function mimeToMdiIcon(fileOrFileName,mime=""){
    let ext=extension(fileOrFileName);
    if(fileOrFileName && fileOrFileName instanceof File){
        mime=fileOrFileName.type;
    }
    let mimeIcon="mdi-file-document-outline";
    if(!mime && !ext){
        console.warn("appel à mimeToMdiIcon vide !");
        return "mdi-file-question-outline";
    }

    switch (true) {

        case ["js","json","css","php"].indexOf(ext)>-1:
            mimeIcon="mdi-code-braces";
            break;

        case ["xml","html"].indexOf(ext)>-1:
            mimeIcon="mdi-code-tags";
            break;

        case mime.match(/pdf/)!==null:
        case ["pdf"].indexOf(ext)>-1:
            mimeIcon="mdi-file-pdf-box";
            break;

        case mime.match("image")!==null:
            mimeIcon="mdi-image";
            break;

        case mime.match("excel")!==null:
        case mime.match("spreadsheet")!==null:
        case ["csv","xls"].indexOf(ext)>-1:
            mimeIcon="mdi-file-excel-outline";
            break;

        case ["doc","docx","rtf","docx"].indexOf(ext)>-1:
        case mime.match("word")!==null:
        case mime.match("document")!==null:
        case mime.match("rtf")!==null:
            mimeIcon="mdi-file-word-outline";
            break;

        case ["avi","mov","mp4","h264","mkv"].indexOf(ext)>-1:
        case mime.match("video")!==null:
            mimeIcon="mdi-movie";
            break;

        case ["wav","mp3","ogg"].indexOf(ext)>-1:
        case mime.match("audio")!==null:
            mimeIcon="mdi-music";
            break;

        case ["rar","zip","7z","gzip","tar"].indexOf(ext)>-1:
        case mime.match("zip")!==null:
        case mime.match("x-tar")!==null:
            mimeIcon="mdi-folder-zip-outline";
            break;

        case ["srt","vtt","sub"].indexOf(ext)>-1:
        case mime.match("text:vtt")!==null:
            mimeIcon="mdi-comment-text-outline";
            break;
    }
    return mimeIcon;
}