export interface Country {
    name: string;
    code: string;
}

export interface Representative {
    name: string;
    image: string;
}

export interface Customer {
    id: number;
    name: string;
    country: Country;
    company: string;
    date: string | Date;
    status: string;
    activity: number;
    representative: Representative;
    verified: boolean;
    balance: number;
}

export interface Product {
    id: string;
    code: string;
    name: string;
    description: string;
    image: string;
    price: number;
    category: string;
    quantity: number;
    inventoryStatus: string;
    rating: number;
}

export const CUSTOMERS: Customer[] = [
    {
        id: 1000,
        name: 'James Butt',
        country: { name: 'Algeria', code: 'dz' },
        company: 'Benton, John B Jr',
        date: '2015-09-13',
        status: 'unqualified',
        verified: true,
        activity: 17,
        representative: { name: 'Ioni Bowcher', image: 'ionibowcher.png' },
        balance: 70663
    },
    {
        id: 1001,
        name: 'Josephine Darakjy',
        country: { name: 'Egypt', code: 'eg' },
        company: 'Chanay, Jeffrey A Esq',
        date: '2019-02-09',
        status: 'proposal',
        verified: true,
        activity: 0,
        representative: { name: 'Amy Elsner', image: 'amyelsner.png' },
        balance: 82714
    },
    {
        id: 1002,
        name: 'Art Venere',
        country: { name: 'Panama', code: 'pa' },
        company: 'Chemel, James L Esq',
        date: '2017-05-13',
        status: 'qualified',
        verified: false,
        activity: 63,
        representative: { name: 'Asiya Javayant', image: 'asiyajavayant.png' },
        balance: 28312
    },
    {
        id: 1003,
        name: 'Lenna Paprocki',
        country: { name: 'Slovenia', code: 'si' },
        company: 'Feltz Printing Service',
        date: '2020-09-15',
        status: 'new',
        verified: false,
        activity: 37,
        representative: { name: 'Xuxue Feng', image: 'xuxuefeng.png' },
        balance: 88521
    },
    {
        id: 1004,
        name: 'Donette Foller',
        country: { name: 'South Africa', code: 'za' },
        company: 'Printing Dimensions',
        date: '2016-05-20',
        status: 'negotiation',
        verified: true,
        activity: 33,
        representative: { name: 'Ivan Magalhaes', image: 'ivanmagalhaes.png' },
        balance: 93905
    }
];

export const PRODUCTS: Product[] = [
    {
        id: '1000',
        code: 'f230fh0g3',
        name: 'Bamboo Watch',
        description: 'Product Description',
        image: 'bamboo-watch.jpg',
        price: 65,
        category: 'Accessories',
        quantity: 24,
        inventoryStatus: 'INSTOCK',
        rating: 5
    },
    {
        id: '1001',
        code: 'nvklE435',
        name: 'Black Watch',
        description: 'Product Description',
        image: 'black-watch.jpg',
        price: 72,
        category: 'Accessories',
        quantity: 61,
        inventoryStatus: 'OUTOFSTOCK',
        rating: 4
    },
    {
        id: '1002',
        code: 'zz21ff3c4',
        name: 'Blue Band',
        description: 'Product Description',
        image: 'blue-band.jpg',
        price: 79,
        category: 'Fitness',
        quantity: 2,
        inventoryStatus: 'LOWSTOCK',
        rating: 3
    },
    {
        id: '1003',
        code: '244wzx715',
        name: 'Blue T-Shirt',
        description: 'Product Description',
        image: 'blue-t-shirt.jpg',
        price: 29,
        category: 'Clothing',
        quantity: 25,
        inventoryStatus: 'INSTOCK',
        rating: 5
    }
];
