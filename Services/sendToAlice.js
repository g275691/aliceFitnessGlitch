/** HEROKU*
 *  
git add . ; git commit -m 'git init' ; git push
heroku login
heroku open
heroku logs --tail

*/
const { getReplic } = require('../public/replics/getReplic');

const { standartPattern } = require("../public/responsePatterns/standartPattern");

const sendToAlice = async (req, res) => {
    
    const { message_id, user_id } = req.body.session;
    const { command, original_utterance } = req.body.request;
    const { tokens, entities } = req.body.request.nlu;
    // const { state } = req.body.state;

    // console.log(message_id);
    // console.log(command);
    // console.log(tokens);
    // console.log(entities[0]);
    console.log(req.body)

    let first_name = entities[0] && entities[0].value && entities[0].value.first_name;
    let last_name = entities[0] && entities[0].value && entities[0].value.last_name;

    if(message_id == 0) {
        res.send(standartPattern(getReplic()[0].text))
    } else {
        res.send(standartPattern(getReplic(first_name)[1].text))
    }
    
}

module.exports.sendToAlice = sendToAlice;
