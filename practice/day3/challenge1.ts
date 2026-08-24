
interface User {
    id: number;
    name: string;
    email: string;
}

async function fetchUsers(): Promise<User[]> {
    const url = "https://jsonplaceholder.typicode.com/users";
    const response = await fetch(url);
    const users: User[] = await response.json();
    
    return users;
}

fetchUsers().then((users) => {
  users.forEach((u) => console.log(u.name));
});

