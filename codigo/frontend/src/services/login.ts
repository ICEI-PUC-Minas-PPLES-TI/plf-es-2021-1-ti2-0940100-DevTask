import axios, { AxiosResponse } from "axios";
import API from "./api";

export default async function login(props: { email: string | null | undefined; password: string | null | undefined; }): Promise<any> {
    const data = {
        email: props.email,
        password: props.password,
    };

    console.log("user data: ", data);

    try {
        const response = await axios.post(`${API}/auth/login`, data)
        console.log('login -> response', response);

    } catch (e) {
        console.log('login -> error', e);
        throw e;
    }
}
