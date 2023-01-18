const fireAdmin = require('firebase-admin');
require('dotenv').config();

var serviceAccount = {
    type : process.env.type,
    project_id :process.env.project_id,
    private_key_id : process.env.private_key_id,
    private_key: process.env.private_key.replace(/\\n/g, '\n'),
    client_email: process.env.client_email,
    client_id : process.env.client_id,
    auth_uri: process.env.auth_uri,
    auth_provider_x509_cert_url: process.env.auth_provider_x509_cert_url,
    client_x509_cert_url: process.env.client_x509_cert_url
};


fireAdmin.initializeApp({
  credential: fireAdmin.credential.cert(serviceAccount)
});


const db = fireAdmin.firestore();


exports.saveData = async (req, res, next) => {
    
    const eth = req.body['eth'];
    const dai = req.body['dai'];

    db.collection('data').doc()
                    .set({
                        "eth": eth,
                        "dai" : dai,
                    });

            res.status(201).json({
                message: `data saved successfully`,
            });

}




  