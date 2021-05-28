// Goal: Provide a function to "like" a post in Firebase
// Requirement: "Likes" are user-specific – a user can "like" a post, but only once.
// Currently, the "number of likes" on a post isn't user-specific, nor does it prevent an
// unlimited number of likes. How would we expand/refactor our domain model to support this?

// allows us to use firebase
let firebase = require(`./firebase`)

exports.handler = async function(event) {

  // write the recipe and the implementation
  let db = firebase.firestore()

  let postId = event.queryStringParameters.postId
  let userId = event.queryStringParameters.userId
  // query for existing likes
  let likesQuery = await db.collection(`likes`).where(`postId`, `==`, postId).where(`userId`, `==`, userId).get()

  let likes = likesQuery.docs

  if (likes.length == 0) {
  db.collection(`likes`).add({
    postId: postId,
    userId: userId

  })
    } else {}


  return {
    statusCode: 200
  }
}