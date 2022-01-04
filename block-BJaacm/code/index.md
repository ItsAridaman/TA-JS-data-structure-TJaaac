```js
let user = {
  name: 'Arya',
  sibling: ['Robb', 'Ryan', 'John'],
};
let allBrothers = ['Robb', 'Ryan', 'John'];
let brothersCopy = user.sibling;
let usename = user.name;
let newUser = user;
```

1. Memory representation

- Create the memory representation of the above snippet on notebook.
- Take a photo/screenshot and add it to the folder `code`

<!-- To add this image here use ![name](./hello.jpg) -->


2. Answer the following with reason:

- `user == newUser;` // true,As both variables contain the same address.
- `user === newUser;`//true,As both variables contain the same address.
- `user.name === newUser.name;`//true, both will point to the value 'Arya', which is inside the address 1001.
- `user.name == newUser.name;`////true, both will point to the value 'Arya', which is inside the address 1001.
- `user.sibling == newUser.sibling;`//true, both will point to the value contained inside the sibling, which is at address 1001.
- `user.sibling === newUser.sibling;`////true, both will point to the value contained inside the sibling, which is at address 1001.
- `user.sibling == allBrothers;`//False, beacause 'allBrothers contain address inside whereas, the 'user.sibling' contains the string values rob,ryan and john.
- `user.sibling === allBrothers;`//False, beacause 'allBrothers contain address inside whereas, the 'user.sibling' contains the string values rob,ryan and john.
- `brothersCopy === allBrothers;`//False, the first one contains the string values, while the later one contains address 1002.
- `brothersCopy == allBrothers;`//False, the first one contains the string values, while the later one contains address 1002.
- `brothersCopy == user.sibling;`True, as both contains the string values representing values inside the sibling.
- `brothersCopy === user.sibling;`True, as both contains the string values representing values inside the sibling.
- `brothersCopy[0] === user.sibling[0];`True, both points to 'Rob'.
- `brothersCopy[1] === user.sibling[1];`True, both points to  'Ryan'.
- `user.sibling[1] === newUser.sibling[1];`True, both points to 'Ryan'.
