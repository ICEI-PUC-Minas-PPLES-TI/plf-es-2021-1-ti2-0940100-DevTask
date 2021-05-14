import axios, { AxiosResponse } from "axios";
import API from "./api";

export default async function login(props: { email: string | null | undefined; password: string | null | undefined; }): Promise<any> {
    async (event: { preventDefault: () => void; }) => {
        event.preventDefault();

        const data = {
            email: props.email,
            password: props.password,
        };

        console.log("user data: ", data);

        try {
            await axios.post(`${API}/auth/login`, data).then((res) => {
                console.log(res);
                console.log(res.data);
                return res;
            });
        } catch (e) {
            console.log(e);
            throw e;
        }
    };
}
