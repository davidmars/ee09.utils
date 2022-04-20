/**
 * Renvoie l'extension
 * @param {String|File} file Un objet file ou un nom de fichier ou une url de fichier
 * @param {boolean} dot si true renvoie l'extension avec un point devant
 * @return {String}
 */
export default function extension(file,dot=false){
    if(!file){
        return "";
    }
    let fileName=file;
    if(file && file instanceof File){
        fileName=file.name;
    }
    let ext=fileName.split('.').pop().toLowerCase();
    if(dot){
        return "."+ext;
    }
    return ext;
}