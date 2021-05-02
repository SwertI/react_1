let initialState = {
    friends: [
        {
            id: 1,
            name: 'Deni',
            avatar:
                'https://cdn4.iconfinder.com/data/icons/avatars-xmas-giveaway/128/batman_hero_avatar_comics-512.png',
        },
        {
            id: 2,
            name: 'Jane',
            avatar:
                'https://icons8.com/wp-content/uploads/2020/03/bab-yoda-1024x1024.jpeg',
        },
        {
            id: 3,
            name: 'Moino',
            avatar:
                'https://www.meme-arsenal.com/memes/6381871fb8afa41cab763e7309b86bfb.jpg',
        },
    ],
}

const sideBarReducer = (state = initialState, action) => {

    return state
}

export default sideBarReducer