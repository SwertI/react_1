let state = {
    profilePage: {
        posts: [
            { id: 1, message: 'Hi, how are you?', likesCount: 12 },
            { id: 2, message: "It's my first post", likesCount: 11 },
        ],
    },
    dialogsPage: {
        messages: [
            { id: 1, message: 'HI' },
            { id: 2, message: 'Message 222' },
            { id: 3, message: 'Message 333' },
        ],
        dialogs: [
            { id: 1, name: 'Alex' },
            { id: 2, name: 'Aleksaaaa' },
            { id: 3, name: 'Alexey' },
        ],
    },
    sideBar: {
        friends: [
            {name: 'Deni', avatar: 'https://cdn4.iconfinder.com/data/icons/avatars-xmas-giveaway/128/batman_hero_avatar_comics-512.png'},
            {name: 'Jane', avatar: 'https://icons8.com/wp-content/uploads/2020/03/bab-yoda-1024x1024.jpeg'},
            {name: 'Moino', avatar: 'https://www.meme-arsenal.com/memes/6381871fb8afa41cab763e7309b86bfb.jpg'},
        ],
    },
}

export default state
