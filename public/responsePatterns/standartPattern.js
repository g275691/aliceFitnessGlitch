const standartPattern = ( 
  text,
  user_first_name="",
  user_last_name="",
  tts=text,
  buttons=[],
  end_session=false
   ) => {

  /USER_FIRST_NAME/i.test(text) 
  && (text = text.replace(/USER_FIRST_NAME/, user_first_name))

  /USER_LAST_NAME/i.test(text) 
  && (text = text.replace(/USER_LAST_NAME/, user_last_name))
  return {
    "response": {
      text,
      tts,
    //   "card": {
    //     "type": "..."
    //   },     
      buttons,
      end_session,
      "directives": {}
    },
    "session_state": {
        "step": 0
    },
    "version": "1.0"
  }
}

module.exports.standartPattern = standartPattern;