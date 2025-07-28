const data = [
    {
        id: 1,
        name: 'README.md',
    },
    {
        id: 2,
        name: 'Documents',
        children: [
            {
                id: 3,
                name: 'Word.doc',
            },
            {
                id: 4,
                name: 'Powerpoint.ppt',
            },
        ],
    },
    {
        id: 5,
        name: 'Downloads',
        children: [
            {
                id: 6,
                name: 'unnamed.txt',
            },
            {
                id: 7,
                name: 'Misc',
                children: [
                    {
                        id: 8,
                        name: 'foo.txt',
                    },
                    {
                        id: 9,
                        name: 'bar.txt',
                    },
                ],
            },
        ],
    },
];
let arr = []
const flattenArrayfunc = (data) => {
    for (let i = 0; i < data.length; i++) {
        if (data[i].children) {
            let obj = { ...data[i], parent: data[i].id };
            arr.push(obj);
            flattenArrayfunc(data[i].children);
        } else {
            arr.push(data[i]);
        }
    }
    console.log(arr);
};
flattenArrayfunc(data);