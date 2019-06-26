function solve(input) {
    switch (input) {
        case 'upvote':
            this.upvotes++;
            break;

        case 'downvote':
            this.downvotes++;
            break;

        case 'score':
            return score(this);
    }

    function score(post) {
        let modifier = 0;

        if (post.upvotes + post.downvotes > 50) {
            modifier = Math.ceil(Math.max(post.upvotes, post.downvotes) * 0.25);
        }

        let score = post.upvotes - post.downvotes;
        let rating = '';

        if (post.upvotes + post.downvotes < 10) {
            rating = 'new';

        } else if (score < 0) {
            rating = 'unpopular';

        } else if (post.upvotes / (post.upvotes + post.downvotes) > 0.66) {
            rating = 'hot';

        } else if (post.upvotes > 100 || post.downvotes > 100) {
            rating = 'controversial';

        } else {
            rating = 'new';
        }

        return [post.upvotes + modifier,
            post.downvotes + modifier,
            score,
            rating];
    }
}

let post = {
    id: '3',
    author: 'emil',
    content: 'wazaaaaa',
    upvotes: 100,
    downvotes: 100
};

solve.call(post, 'upvote');
solve.call(post, 'downvote');
console.log(solve.call(post, 'score'));