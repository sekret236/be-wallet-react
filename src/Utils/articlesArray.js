const articlesArray = [
    {
        id: 1,
        imagejpg: 'images/home_wallet_blog.jpg',
        date: 'May 8, 2022',
        artname: 'Vestibulum commodo volutpat laoreet',
        context:
            'Lorem Vestibulum commodo volutpat, commodo volutpat laoreet. Lorem Vestibulum volutpat laoreet..',
        question: 'Do you like it?',
        topic: 'Main',
        category: 'Business',
    },
    {
        id: 2,
        imagejpg: 'images/Business1.jpg',
        date: 'May 8, 2022',
        artname: 'Vestibulum commodo volutpat laoreet',
        context:
            'Lorem Vestibulum commodo volutpat, commodo volutpat laoreet. Lorem Vestibulum volutpat laoreet..',
        question: 'Do you like it?',
        topic: 'Business',
        category: 'Business',
    },
    {
        id: 3,
        imagejpg: 'images/Business2.jpg',
        date: 'May 8, 2022',
        artname: 'Vestibulum commodo volutpat laoreet',
        context:
            'Lorem Vestibulum commodo volutpat, commodo volutpat laoreet. Lorem Vestibulum volutpat laoreet..',
        question: 'Do you like it?',
        topic: 'Business',
        category: 'Business',
    },
    {
        id: 4,
        imagejpg: 'images/Business3.jpg',
        date: 'May 8, 2022',
        artname: 'Vestibulum commodo volutpat laoreet',
        context:
            'Lorem Vestibulum commodo volutpat, commodo volutpat laoreet. Lorem Vestibulum volutpat laoreet..',
        question: 'Do you like it?',
        topic: 'Business',
        category: 'Business',
    },

    {
        id: 5,
        imagejpg: 'images/home_wallet_blog2.jpg',
        date: 'May 8, 2022',
        artname: 'Vestibulum commodo volutpat laoreet',
        context:
            'Lorem Vestibulum commodo volutpat, commodo volutpat laoreet. Lorem Vestibulum volutpat laoreet..',
        question: 'Do you like it?',
        topic: 'Main',
        category: 'Finances',
    },
    {
        id: 6,
        imagejpg: 'images/Finances1.jpg',
        date: 'May 8, 2022',
        artname: 'Vestibulum commodo volutpat laoreet',
        context:
            'Lorem Vestibulum commodo volutpat, commodo volutpat laoreet. Lorem Vestibulum volutpat laoreet..',
        question: 'Do you like it?',
        topic: 'Finances',
        category: 'Finances',
    },
    {
        id: 7,
        imagejpg: 'images/Finances2.jpg',
        date: 'May 8, 2022',
        artname: 'Vestibulum commodo volutpat laoreet',
        context:
            'Lorem Vestibulum commodo volutpat, commodo volutpat laoreet. Lorem Vestibulum volutpat laoreet..',
        question: 'Do you like it?',
        topic: 'Finances',
        category: 'Finances',
    },
    {
        id: 8,
        imagejpg: 'images/Finances3.jpg',
        date: 'May 8, 2022',
        artname: 'Vestibulum commodo volutpat laoreet',
        context:
            'Lorem Vestibulum commodo volutpat, commodo volutpat laoreet. Lorem Vestibulum volutpat laoreet..',
        question: 'Do you like it?',
        topic: 'Finances',
        category: 'Finances',
    },
    {
        id: 9,
        imagejpg: 'images/home_wallet_blog3.jpg',
        date: 'May 8, 2022',
        artname: 'Vestibulum commodo volutpat laoreet',
        context:
            'Lorem Vestibulum commodo volutpat, commodo volutpat laoreet. Lorem Vestibulum volutpat laoreet..',
        question: 'Do you like it?',
        topic: 'Main',
        category: 'Personal',
    },
    {
        id: 10,
        imagejpg: 'images/Personal1.jpg',
        date: 'May 8, 2022',
        artname: 'Vestibulum commodo volutpat laoreet',
        context:
            'Lorem Vestibulum commodo volutpat, commodo volutpat laoreet. Lorem Vestibulum volutpat laoreet..',
        question: 'Do you like it?',
        topic: 'Personal',
        category: 'Personal',
    },
    {
        id: 11,
        imagejpg: 'images/Personal2.jpg',
        date: 'May 8, 2022',
        artname: 'Vestibulum commodo volutpat laoreet',
        context:
            'Lorem Vestibulum commodo volutpat, commodo volutpat laoreet. Lorem Vestibulum volutpat laoreet..',
        question: 'Do you like it?',
        topic: 'Personal',
        category: 'Personal',
    },
    {
        id: 12,
        imagejpg: 'images/Personal3.jpg',
        date: 'May 8, 2022',
        artname: 'Vestibulum commodo volutpat laoreet',
        context:
            'Lorem Vestibulum commodo volutpat, commodo volutpat laoreet. Lorem Vestibulum volutpat laoreet..',
        question: 'Do you like it?',
        topic: 'Personal',
        category: 'Personal',
    },
    {
        id: 13,
        imagejpg: 'images/home_wallet_blog4.jpg',
        date: 'May 8, 2022',
        artname: 'Vestibulum commodo volutpat laoreet',
        context:
            'Lorem Vestibulum commodo volutpat, commodo volutpat laoreet. Lorem Vestibulum volutpat laoreet..',
        question: 'Do you like it?',
        topic: 'Main',
        category: 'Tax',
    },
    {
        id: 14,
        imagejpg: 'images/Tax1.jpg',
        date: 'May 8, 2022',
        artname: 'Vestibulum commodo volutpat laoreet',
        context:
            'Lorem Vestibulum commodo volutpat, commodo volutpat laoreet. Lorem Vestibulum volutpat laoreet..',
        question: 'Do you like it?',
        topic: 'Tax',
        category: 'Tax',
    },
    {
        id: 15,
        imagejpg: 'images/Tax2.jpg',
        date: 'May 8, 2022',
        artname: 'Vestibulum commodo volutpat laoreet',
        context:
            'Lorem Vestibulum commodo volutpat, commodo volutpat laoreet. Lorem Vestibulum volutpat laoreet..',
        question: 'Do you like it?',
        topic: 'Tax',
        category: 'Tax',
    },
    {
        id: 16,
        imagejpg: 'images/Tax3.jpg',
        date: 'May 8, 2022',
        artname: 'Vestibulum commodo volutpat laoreet',
        context:
            'Lorem Vestibulum commodo volutpat, commodo volutpat laoreet. Lorem Vestibulum volutpat laoreet..',
        question: 'Do you like it?',
        topic: 'Tax',
        category: 'Tax',
    },
]

export default articlesArray
