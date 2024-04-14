const user1 = {
    username: "codedose",
    followers: 0
}

const user2 = user1
user2.followers = user1.followers++ // postfix increment operator increments the value by one, but the returned value will be the original value itself

console.log(user1.followers)
console.log(user2.followers)

// user1 ---> {username: "codedose",followers: 0}  <--- user2