import React, {
    useCallback,
    useContext,
    useEffect,
    useMemo,
    useRef,
    useState,
} from "react";
import {
    Container,
    ContainerLoading,
    Image,
    Input,
    Modal,
    Subtitle,
    Title,
    Wrap,
} from "./style";

import Button from "../../Components/Button";
import { AuthenticateContext } from "../../Contexts/AuthenticateContext";

import firebase from "../../services/firebase";
import axios from "../../services/axios";

import LoadingCircle from "../../Components/Loading";
import useUser from "../../hooks/useUser";

import { AddAPhoto } from "@material-ui/icons";

export default function Home() {
    const { LogOut, id } = useContext(AuthenticateContext);
    const { dataUser: data, setDataUser, loading, setLoading } = useUser(id);

    function handleChange(e) {
        (async () => {
            setLoading(true);
            const image_data = e.target.files[0];
            const path = await (
                await firebase
                    .storage()
                    .ref(`/user/${data._id}`)
                    .put(image_data)
            ).ref.getDownloadURL();
            if (path) {
                try {
                    const rows = await (
                        await axios.put(`/user/${data._id}`, {
                            image_path: path,
                        })
                    ).data;
                    setDataUser(rows);
                    setLoading(false);
                } catch (e) {
                    return e;
                }
            }
        })();
    }

    if (loading) {
        return <Loading />;
    }

    return (
        <section>
            <Container>
                <Modal>
                    <Wrap>
                        <label htmlFor="file" style={{ cursor: "pointer" }}>
                        {data.image_path ? (
                                <Image
                                    src={data.image_path}
                                    onDragStart={(e) => e.preventDefault()}
                                    loading="lazy"
                                />
                            ) : (
                                <div
                                    style={{
                                        display: "flex",
                                        alignItems: "center",
                                    }}
                                >
                                    {" "}
                                    <span
                                        style={{
                                            marginRight: "5px",
                                            padding: "20px 0",
                                        }}
                                    >
                                        Adicionar Foto
                                    </span>{" "}
                                    <AddAPhoto htmlColor="#F24405" />{" "}
                                </div>
                            )}
                        </label>
                        <input
                            type="file"
                            id="file"
                            style={{ display: "none" }}
                            onChange={handleChange}
                        />
                        <div style={{ width: "60%" }}>
                            <Subtitle>Name</Subtitle>
                            <Input
                                type="text"
                                placeholder={data.name}
                                onChange={(e) =>
                                    setDataUser({
                                        ...data,
                                        name: e.target.value,
                                    })
                                }
                            />
                        </div>
                        <div style={{ marginTop: "20px", width: "60%" }}>
                            <Subtitle>Email</Subtitle>
                            <Input
                                type="text"
                                placeholder={data.email}
                                onChange={(e) =>
                                    setDataUser({
                                        ...data,
                                        email: e.target.value,
                                    })
                                }
                            />
                        </div>
                        <span onClick={handleChange}>Editar</span>
                        <Button onClick={LogOut}>SAIR</Button>
                    </Wrap>
                </Modal>
            </Container>
        </section>
    );
}

function Loading(data) {
    return (
        <ContainerLoading>
            <Modal>
                <Wrap>
                    <span>Loading...</span>
                    <div style={{ width: 225 }}>
                        <Subtitle>Name</Subtitle>
                        <Title>Loading...</Title>
                    </div>
                    <div style={{ marginTop: "20px" }}>
                        <Subtitle>Email</Subtitle>
                        <Title
                            style={{
                                color: "#c2c2c2",
                                fontWeight: "300",
                            }}
                        >
                            Loading...
                        </Title>
                    </div>
                    <Button>Loading...</Button>
                </Wrap>
            </Modal>
        </ContainerLoading>
    );
}
