import React, { useCallback, useContext, useEffect, useMemo, useRef, useState } from "react";
import { Container, Image, Modal, Subtitle, Title, Wrap } from "./style";

import svg from "../../assets/Ace.svg";
import Button from "../../Components/Button";
import { UserContext } from "../../Contexts/UserContext";
import firebase from "../../services/firebase";
import LoadingCircle from "../../Components/Loading";

export default function Home() {
    const { ChangeImageProfile, LogOut } = useContext(UserContext);
    const [loading, setLoading] = useState(true);
    const [data, setData] = useState(null);

    const userId = useMemo(() => {
        const id = localStorage.getItem("id");
        if(id){
            return id;
        }
    }, []);

    useEffect(() => {
        (async() => {
            const [rows] = await (await fetch(`http://localhost:3001/user/${userId}`)).json();
            setData(rows);
            setLoading(false);
        })();
    }, []);

    const handleChange = useCallback((e) => {
        (async() => {
            setLoading(true);
            const image_data = e.target.files[0];
            const path =  await (await firebase.storage().ref(`/user/${userId}`).put(image_data)).ref.getDownloadURL();
             try{
                 const rows = await ChangeImageProfile(userId, path);
                 console.log(rows);
                 setLoading(false);
             }catch(e){
                 alert(e);
             }
        })();
    }, []);

    if (loading) {
        return <LoadingCircle />;
    }

    return (
        <section>
            {!loading && (
                <Container>
                    <Modal>
                        <Wrap>
                            <label htmlFor="file">
                                <Image src={data.image_path} onDragStart={e => e.preventDefault()}/>
                            </label>
                            <input
                                type="file"
                                id="file"
                                style={{ display: "none" }}
                                onChange={handleChange}
                            />
                            <div style={{ width: 225 }}>
                                <Subtitle>Name</Subtitle>
                                <Title>{data.name}</Title>
                            </div>
                            <div style={{ marginTop: "20px" }}>
                                <Subtitle>Email</Subtitle>
                                <Title
                                    style={{
                                        color: "#c2c2c2",
                                        fontWeight: "300",
                                    }}
                                >
                                    {data.email}
                                </Title>
                            </div>
                            <Button onClick={LogOut}>SAIR</Button>
                        </Wrap>
                    </Modal>
                </Container>
            )}
        </section>
    );
}
