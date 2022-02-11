const standartPattern = ( 
  text,
  tts=text,
  buttons=[],
  end_session=false
   ) => {
  
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