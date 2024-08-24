import { addDoc, collection, getDoc, getDocs, query, where } from "firebase/firestore";
import { firestore } from "./firebase";
import bcrypt from 'bcrypt';

export async function register(data: {
    username: string;
    email: string;
    password: string;
    phone: number;
    role?: string;
}) {
    try {
        const q = query(
            collection(firestore, 'users'),
            where('email', '==', data.email)
        );
        const snapshot = await getDocs(q);
        const users = snapshot.docs.map((doc) => ({
            id: doc.id,
            ...doc.data(),
        }));

        if (users.length > 0) {
            return { status: false, statusCode: 400, message: "Email already exists" };
        } else {
            data.role = data.role || 'admin';

            data.password = await bcrypt.hash(data.password, 10);

            await addDoc(collection(firestore, 'users'), data);

            return { status: true, statusCode: 200, message: 'Register Success' };
        }
    } catch (error) {
        console.error("Error saat mendaftarkan pengguna:", error);
        return { status: false, statusCode: 500, message: 'Internal Server Error' };
    }
}

export async function login(data: { username: string}) {
    const q = query(
        collection(firestore, 'users'),
        where('username', '==', data.username),
    );

    const snapshot = await getDocs(q);
    const user = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),

    }));

    if (user) {
        return user[0];
    } else {
        return null;
    }
}   

