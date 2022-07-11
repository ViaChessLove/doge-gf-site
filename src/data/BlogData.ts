export interface BlogProps {
    id: number;
    image: string;
    date: string;
    title: string;
}

export const blogData: BlogProps[] = [
    { 
        id:1,
        image: './assets/blog/blog1.png',
        date: 'Nov 22',
        title: 'Wallets Holding Locked DogeGF - Tokens Update'
    },
    { 
        id:2,
        image: './assets/blog/blog2.png',
        date: 'May 25',
        title: 'Meet DogeGF, the peer-to-peer coin of the new reciprocal society'
    },
    { 
        id:3,
        image: './assets/blog/blog3.png',
        date: 'Jun 20',
        title: 'Recipriority, the new experiment in crypto - part 1.'
    },
    { 
        id:4,
        image: './assets/blog/blog4.png',
        date: 'Aug 20',
        title: 'DogeGF is rewarding internet creators with kind gestures'
    },
    { 
        id:5,
        image: './assets/blog/blog5.png',
        date: 'Sep 26',
        title: 'DogeGF, the start of a new, true & kind crypto community'
    },
    { 
        id:6,
        image: './assets/blog/blog6.png',
        date: 'Oct 13',
        title: 'Burn announcement'
    }
]