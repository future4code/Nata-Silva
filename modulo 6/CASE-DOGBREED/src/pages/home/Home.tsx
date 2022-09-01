import React, { useState, useEffect } from "react";
import api from '../../Services/api'
import { UseAuth } from "../../hooks/useAuth";
import { UseProtectPage } from "../../hooks/useProtectPage";
import { ImageList, ImageListItem, Tabs, Tab, Box, Divider } from "@mui/material";
import { DOG } from "../../models/dog";
import { H1, H2, Images, LOGO, Main, Menu } from "./style";



export default function Home() {
    const Authorization = UseAuth()
    const [dog, setDog] = useState<DOG>({ breed: '', list: [] })
    const [breed, setBreed] = React.useState('chihuahua');


    UseProtectPage()


    const handleChange = (event: React.SyntheticEvent, newValue: string) => {
        setBreed(newValue);
    };


    const getDog = () => {

        api
            .get(`list?breed=${breed}`, Authorization)
            .then((res) => {
                console.log('entrou', res.data)
                setDog(res.data)
            })
            .catch((err) => { console.log(err.response) })
    }


    useEffect(() => {
        getDog()
    }, [breed])
    return (
        <Main>
            <LOGO>
                <H1>D o g   B r e e d</H1>
            </LOGO>
            <Menu>
                <Box sx={{ width: '100%', display: "flex", justifyContent: "space-around" }}>
                    <Tabs
                        sx={{
                            "& .Mui-selected": {
                                background: "#c4d3ff",
                                color: "black !important"
                            },
                            "& .MuiTabs-indicator": { display: "none" }
                        }}
                        value={breed}
                        onChange={handleChange}
                        textColor="secondary"
                        indicatorColor="secondary"
                        aria-label="secondary tabs example"
                    >
                        <Tab value="chihuahua" label="Chihuahua" />
                        <Tab value="husky" label="Husky" />
                        <Tab value="labrador " label="Labrador" />
                        <Tab value="pug" label="Pug" />
                    </Tabs>
                </Box>
            </Menu>
            <H2>{dog.breed}</H2>
            <br/>
            <Images>
                    <ImageList sx={{ width: "100%" }}variant="masonry" cols={3} gap={8}>
                        {dog.list && dog.list.map((item: any) => (
                            <ImageListItem key={item.img} sx={{}}>
                                <img
                                    src={`${item}?w=164&h=164&fit=crop&auto=format`}
                                    srcSet={`${item}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
                                    alt={item.title}
                                    loading="lazy"
                                />
                            </ImageListItem>
                        ))}
                    </ImageList>

            </Images>


        </Main >
    )
}