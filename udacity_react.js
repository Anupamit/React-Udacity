function getProfileLink(username){
  return 'https://github.com/' + username
}


function getProfilePic (username) {
  return 'https://github.com/' + username + '.png?size=200'
}


function getProfileData (username) {
  return {
    pic: getProfilePic(username),
    link: getProfileLink(username)
  }
}

function getProfileData (username) {
  return {
    pic: 'https://github.com/' + username + '.png?size=200',
    link: 'https://github.com/' + username
  }
}
