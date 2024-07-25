const onBoards = [
    {
        content: 'It is a long established fact that a reader will be distracted by the readable content.',
        id: 0,
        image: require('~/assets/images/home.png'),
        imageDark: require('~/assets/images/home_dark.png'),
        title: 'Easy way to confirm your attendance',
    },
    {
        content: 'It is a long established fact that a reader will be distracted by the readable content.',
        id: 1,
        image: require('~/assets/images/home_02.png'),
        imageDark: require('~/assets/images/home_02_dark.png'),
        title: 'Disciplinary in your hand',
    },
    {
        content: 'It is a long established fact that a reader will be distracted by the readable content.',
        id: 2,
        image: require('~/assets/images/home_03.png'),
        imageDark: require('~/assets/images/home_03_dark.png'),
        title: 'Reduce the workload of HR management',
    },
];

const dataUpcoming = [
    {
        approvedBy: 'Martin Deo',
        dateEnd: new Date(2023, 4, 18),
        dateStart: new Date(2023, 4, 15),
        id: 0,
        leaveBalance: 16,
        status: 'Approved',
    },
    {
        approvedBy: 'Martin Deo',
        dateEnd: new Date(2023, 3, 12),
        dateStart: new Date(2023, 3, 10),
        id: 1,
        leaveBalance: 19,
        status: 'Approved',
    },
];

const dataPast = [
    {
        approvedBy: 'Martin Deo',
        dateEnd: new Date(2023, 4, 18),
        dateStart: new Date(2023, 4, 15),
        id: 0,
        leaveBalance: 16,
        status: 'Rejected',
    },
    {
        approvedBy: 'Martin Deo',
        dateEnd: new Date(2023, 3, 12),
        dateStart: new Date(2023, 3, 10),
        id: 1,
        leaveBalance: 19,
        status: 'Approved',
    },
];

const dataLeave = [
    {
        createBy: 'Jane Cooper',
        id: 0,
        dateEnd: new Date(2023, 3, 18),
        dateStart: new Date(2023, 3, 15),
    },
    {
        createBy: 'Leslie Alexander',
        id: 1,
        dateEnd: new Date(2023, 3, 12),
        dateStart: new Date(2023, 3, 10),
    },
    {
        createBy: 'Jenny Wilson',
        id: 2,
        dateEnd: new Date(2023, 3, 12),
        dateStart: new Date(2023, 3, 8),
    },
];

const teamMember = [
    {
        email: 'janehawkins@demo.com',
        id: 0,
        name: 'Jane Hawkins',
    },
    {
        email: 'brooklynsimmons@demo.com',
        id: 1,
        name: 'Brooklyn Simmons',
    },
    {
        email: 'lesliealexander@demo.com',
        id: 2,
        name: 'Leslie Alexander',
    },
    {
        email: 'ronaldrichards@demo.com',
        id: 3,
        name: 'Ronald Richards',
    },
    {
        email: 'jennywilson@demo.com',
        id: 4,
        name: 'Jenny Wilson',
    },
];

const teamMemberDetail = [
    { active: true, date: new Date(2023, 3, 10), from: '10:12 am', id: 0, to: '07:00 pm' },
    { active: true, date: new Date(2023, 3, 11), from: '10:00 am', id: 1, to: '07:10 pm' },
    { active: true, date: new Date(2023, 3, 12), from: '09:30 am', id: 2, to: '07:00 pm' },
    { active: true, date: new Date(2023, 3, 13), from: '09:12 am', id: 3, to: '06:45 pm' },
    { active: true, date: new Date(2023, 3, 14), from: '10:00 am', id: 4, to: '07:00 pm' },
    { active: false, date: new Date(2023, 3, 15), from: '00:00 am', id: 5, to: '00:00 pm' },
];

const holiday = [
    { active: false, date: new Date(2023, 0, 26), id: 0, title: 'Republic Day' },
    { active: false, date: new Date(2023, 2, 8), id: 1, title: 'Holi' },
    { active: true, date: new Date(2023, 7, 15), id: 2, title: 'Independence Day' },
    { active: true, date: new Date(2023, 7, 30), id: 3, title: 'Raksha Bhandan' },
    { active: true, date: new Date(2023, 8, 7), id: 4, title: 'Janmashtami' },
    { active: true, date: new Date(2023, 10, 12), id: 5, title: 'Diwali' },
];

const notification = [
    {
        content: 'You just update your profile picture.',
        id: 0,
        time: 'Just Now',
        title: 'You update your profile picture',
        type: 'user',
    },
    {
        content: "You've completed change the password.",
        id: 1,
        time: 'April 12, 2023 at 22:22 Pm',
        title: 'Password Changed',
        type: 'password',
    },
    {
        content: 'Please accept my leave request.',
        id: 2,
        time: 'February 23, 2022 at 21:22 Pm',
        title: 'Mark Alen Applied for Leave',
        type: 'personal',
    },
    {
        content: 'Please update to newest app, for get amazing experience.',
        id: 3,
        time: 'April 15, 2023 at 21:22 Pm',
        title: 'System Update',
        type: 'system',
    },
    {
        content: "You've completed change the password.",
        id: 4,
        time: 'April 12, 2023 at 22:22 Pm',
        title: 'Password Changed',
        type: 'password',
    },
];

export default { dataLeave, dataPast, dataUpcoming, holiday, notification, onBoards, teamMember, teamMemberDetail };
