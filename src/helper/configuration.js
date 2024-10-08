const config = (envirovment) => {
    const PORT = envirovment.PORT || 3001;
    let BASE_URL;
    let DATABASE_URL;
    if(envirovment.ENVIROVMENT === "dev"){
        BASE_URL = envirovment.BASE_LOCAL + PORT;
        DATABASE_URL = envirovment.MONGO_LOCAL;
    }else if(envirovment.ENVIROVMENT === "prod"){
        BASE_URL = "https://infrainsight.vercel.app/";
        DATABASE_URL = envirovment.MONGODB_URI;
    }
    console.log(DATABASE_URL);
    return {PORT, BASE_URL, DATABASE_URL};
}

module.exports = {config}