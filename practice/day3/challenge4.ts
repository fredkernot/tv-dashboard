import z from "zod";
// zod is used to validate data coming from an external source - so you check the external data matches the schema you defined.

const UserSchema = z.object({
    id: z.number(),
    name: z.string(),
    email: z.string(),
    website: z.string(),
});

type User = z.infer<typeof UserSchema>;

async function fetchUsers2(): Promise<User[]> {
    const url = "https://jsonplaceholder.typicode.com/users";
    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error(" there is an error");
        }
        const user = await response.json();
        return z.array(UserSchema).parse(user);
    } catch (error) {
        if (error instanceof Error) {
        console.error(`an error occured: ${error.message}`);
    } else {
        console.error("an unknown error occurred");
    } throw error
}
    
}

fetchUsers2().then((users) => {
  users.forEach((u) => console.log(u.website));
});

