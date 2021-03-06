import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import Button from "../../Components/Button";

import { AuthenticateContext } from "../../Contexts/AuthenticateContext";
import { Container, Input, Label, Modal, Title, Wrap } from "./style";

export default function SignOut() {
    const { SignOut } = useContext(AuthenticateContext);
    const [name, setName] = useState(null);
    const [email, setEmail] = useState(null);
    const [password, setPassword] = useState(null);

    async function handleClick() {
        try{
            const rows = await SignOut({ name, email, password });
        }catch(e){
            alert(e)
        }
    }

    async function handleTouch() {
        try{
            const rows = await SignOut({ name, email, password });
        }catch(e){
            alert(e)
        }
    }

    return (
        <section id="sign-out">
            <Container>
                <Modal>
                    <Title>Cadastro</Title>
                    <Wrap>
                        <div>
                            <Label>Nome</Label>
                            <Input
                                type="text"
                                onChange={(e) => setName(e.target.value)}
                            />
                        </div>
                    </Wrap>
                    <Wrap>
                        <div>
                            <Label>Email</Label>
                            <Input
                                type="email"
                                onChange={(e) => setEmail(e.target.value)}
                            />
                        </div>
                    </Wrap>
                    <Wrap>
                        <div>
                            <Label>Senha</Label>
                            <Input
                                type="password"
                                onChange={(e) => setPassword(e.target.value)}
                            />
                        </div>
                    </Wrap>
                    <Button onClick={handleClick} onTouchStart={handleTouch}>Enviar</Button>
                    <Link to="/">Login</Link>
                </Modal>
            </Container>
        </section>
    );
}
