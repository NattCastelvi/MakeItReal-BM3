/*function getVoteCount(obj) {
    return
} */

function getVoteCount(obj) {
    return obj.upvotes - obj.downvotes;
}

console.log(getVoteCount({ upvotes: 13, downvotes: 0 }));
console.log(getVoteCount({ upvotes: 2, downvotes: 33 }));
console.log(getVoteCount({ upvotes: 132, downvotes: 132 }));