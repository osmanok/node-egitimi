const user = {id: 10, name: "osman"};
const friends = [{id: 11, name: "kaan"}, {id: 12, name: "ali"} ];

const getUser = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(user);
        }, 1000);
    });
};

const getFrineds = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(friends);
        }, 1000);
    });
};

/*
//callback hell
let userId;
getUser()
    .then(function (user) {
        userId = user.id;
        getFrineds()
            .then(function (friends) {
                console.log(user);
                console.log(friends);
            })
    });

//promise chain
getUser()
    .then((user) => {
        return getFrineds(user.id);
    })
    .then((friends) => {
        console.log(friends);
    });

*/

async function asenkronAkis() {
    console.log("1");
    const user = await getUser();
    console.log("2");
    const friends = await getFrineds(user.id);
    console.log('3');
    console.log(friends);
};

asenkronAkis();